import { UserRole, Status, UserGender } from '../../common/enums';
import { UserResponse } from './user-response';
export interface UpdateUserRequest {
    name?: string;
    phone?: string;
    role?: UserRole;
    password?: string;
    email?: string;
    status?: Status;
    gender?: UserGender;
    age?: number;
}
export interface UpdateUserParams {
    id: string;
}
export type UpdateUserResponse = UserResponse;
//# sourceMappingURL=update-user.d.ts.map