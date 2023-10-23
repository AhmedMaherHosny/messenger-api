import { Module } from '@nestjs/common';
import { PresenceController } from './presence.controller';
import { PresenceService } from './presence.service';
import { RedisModule, SharedModule } from '@app/shared';

@Module({
  imports: [RedisModule, SharedModule],
  controllers: [PresenceController],
  providers: [PresenceService],
})
export class PresenceModule {}