import {UserResponseDto} from "./user";

export interface LoginRequestDto{
    phone: string,
    password: string
}

export interface LoginResponseDto{
    accessToken: string,
    user: UserResponseDto
}