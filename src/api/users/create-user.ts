import { UserRole, Status, UserGender } from '../../common/enums';
import { UserResponse } from './user-response';

export interface CreateUserRequest {
    name: string;
    phone: string;
    role: UserRole;
    password?: string;
    email?: string;
    status?: Status;
    gender?: UserGender;
    age?: number;
    teacherId?: number; // Only for students
}

export type CreateUserResponse = UserResponse;
