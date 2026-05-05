import { User } from '../../entities/user';
import { UserResponse } from './user-response';

export type UpdateUserRequest = Partial<Omit<User, 'id'>>;

export interface UpdateUserParams {
    id: string;
}

export type UpdateUserResponse = UserResponse;
