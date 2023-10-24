import { Controller, UseInterceptors } from '@nestjs/common';
import { PresenceService } from './presence.service';
import {
  Ctx,
  MessagePattern,
  Payload,
  RmqContext,
} from '@nestjs/microservices';
import { RedisCacheService, SharedService } from '@app/shared';
import { CacheInterceptor } from '@nestjs/cache-manager';

@Controller()
export class PresenceController {
  constructor(
    private readonly redisCacheService: RedisCacheService,
    private readonly presenceService: PresenceService,
    private readonly sharedService: SharedService,
  ) {}

  @MessagePattern({ cmd: 'get-presence' })
  @UseInterceptors(CacheInterceptor)
  async getPresence(@Ctx() context: RmqContext) {
    this.sharedService.acknowledgeMessage(context);
    const foo = await this.redisCacheService.get('foo');
    if (foo) {
      console.log('CACHED');
      return foo;
    }
    const f = await this.presenceService.getFoo();
    this.redisCacheService.set('foo', f);
    return f;
  }

  @MessagePattern({ cmd: 'get-active-user' })
  async getActiveUser(
    @Ctx() context: RmqContext,
    @Payload() payload: { id: number },
  ) {
    this.sharedService.acknowledgeMessage(context);

    return await this.presenceService.getActiveUser(payload.id);
  }
}
