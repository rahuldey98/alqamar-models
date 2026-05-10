import { UserRole, Status, UserGender } from '../common/enums';

export interface User {
    id: number;
    name: string;
    phone: string;
    role: UserRole;
    password?: string;
    email?: string;
    status?: Status;
    gender?: UserGender;
    age?: number;
    meetLink?: string;
    feesDate?: string;
    courseId?: number;
}
