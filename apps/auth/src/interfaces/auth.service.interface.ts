import { FriendRequestEntity, UserEntity, UserJwt } from '@app/shared';

export interface AuthServiceInterface {
  getUsers(): Promise<UserEntity[]>;
  getUserById(id: number): Promise<UserEntity>;
  findByEmail(email: string): Promise<UserEntity>;
  findById(id: number): Promise<UserEntity>;
  hashPassword(password: string): Promise<string>;
  register(registerUserDto: Readonly<RegisterUserDto>): Promise<UserEntity>;
  doesPasswordMatch(password: string, hashedPassword: string): Promise<boolean>;
  validateUser(email: string, password: string): Promise<UserEntity>;
  login(loginUserDto: Readonly<LoginUserDto>): Promise<{
    token: string;
    user: UserEntity;
  }>;
  verifyJwt(jwt: string): Promise<{ user: UserEntity; exp: number }>;
  getUserFromHeader(jwt: string): Promise<UserJwt>;
  addFriend(userId: number, friendId: number): Promise<FriendRequestEntity>;
  getFriends(userId: number): Promise<FriendRequestEntity[]>;
}
