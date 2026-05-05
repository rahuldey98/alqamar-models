import { User } from '../../entities/user';
import { UserResponse } from './user-response';

export type CreateUserRequest = Omit<User, 'id'>;

export type CreateUserResponse = UserResponse;
