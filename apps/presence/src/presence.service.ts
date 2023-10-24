import { RedisCacheService } from '@app/shared';
import { Injectable } from '@nestjs/common';
import { ActiveUser } from './interfaces/active-user.interface';

@Injectable()
export class PresenceService {
  constructor(private readonly cache: RedisCacheService) {}
  getFoo() {
    console.log('NOT CACHED');

    return { foo: 'ahmed' };
  }

  async getActiveUser(id: number) {
    const user = await this.cache.get(`user ${id}`);

    return user as ActiveUser | undefined;
  }
}
