import {UserRole, Status, UserGender} from "./common/enums";

export interface User {
    name: string;
    phone: string;
    role: UserRole;
    password?: string;
    email?: string;
    status?: Status;
    gender?: UserGender;
    age?: number;
    meetLink?: string
}