export interface UserResponseDto {
    id: string;
    name: string;
    email?: string | null;
    phone: string;
    role: UserRole;
    status: UserStatus;
}
export interface UserRequestDto {
    name: string;
    email?: string | null;
    password?: string;
    phone: string;
    role: UserRole;
    status: UserStatus;
}
export type UserRole = "ADMIN" | "TEACHER" | "STUDENT";
export type UserStatus = "ACTIVE" | "INACTIVE";
//# sourceMappingURL=user.d.ts.map