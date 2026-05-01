import {z} from "zod"
import {UserResponseDto} from "../users/user-response";

export const loginRequestSchema = z.object({
    body: z.object({
        phone: z.string(),
        password: z.string().min(6)
    })
});

export type LoginRequest = z.infer<typeof loginRequestSchema>["body"];

export interface LoginResponse {
    accessToken: string,
    user: UserResponseDto
}