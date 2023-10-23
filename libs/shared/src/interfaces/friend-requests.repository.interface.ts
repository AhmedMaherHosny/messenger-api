import { FriendRequestEntity } from '@app/shared/entities/friend-request.entity';
import { BaseInterfaceRepository } from '../repositories/base/base.interface.repository';

export interface FriendRequestsRepositoryInterface
  extends BaseInterfaceRepository<FriendRequestEntity> {}
