import { Injectable } from '@nestjs/common';
import { FriendRequestEntity } from '../entities/friend-request.entity';
import { BaseAbstractRepository } from './base/base.abstract.repositroy';
import { FriendRequestsRepositoryInterface } from '../interfaces/friend-requests.repository.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class FriendRequestsRepository
  extends BaseAbstractRepository<FriendRequestEntity>
  implements FriendRequestsRepositoryInterface
{
  constructor(
    @InjectRepository(FriendRequestEntity)
    private readonly friendRequestEntity: Repository<FriendRequestEntity>,
  ) {
    super(friendRequestEntity);
  }
}
