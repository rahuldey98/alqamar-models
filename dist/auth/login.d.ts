import { z } from "zod";
import { UserResponseDto } from "../users/user-response";
export declare const loginRequestSchema: z.ZodObject<{
    body: z.ZodObject<{
        phone: z.ZodString;
        password: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>;
export type LoginRequest = z.infer<typeof loginRequestSchema>["body"];
export interface LoginResponse {
    accessToken: string;
    user: UserResponseDto;
}
//# sourceMappingURL=login.d.ts.map