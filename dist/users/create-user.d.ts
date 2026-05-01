import { z } from "zod";
export declare const createUserRequestSchema: z.ZodObject<{
    body: z.ZodObject<{
        name: z.ZodString;
        phone: z.ZodString;
        role: z.ZodEnum<{
            ADMIN: "ADMIN";
            TEACHER: "TEACHER";
            STUDENT: "STUDENT";
        }>;
        password: z.ZodOptional<z.ZodString>;
        email: z.ZodOptional<z.ZodString>;
        status: z.ZodOptional<z.ZodEnum<{
            ACTIVE: "ACTIVE";
            INACTIVE: "INACTIVE";
        }>>;
        gender: z.ZodOptional<z.ZodEnum<{
            MALE: "MALE";
            FEMALE: "FEMALE";
        }>>;
        age: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>;
}, z.core.$strip>;
export type CreateUserRequest = z.infer<typeof createUserRequestSchema>["body"];
export interface UserResponse extends CreateUserRequest {
}
//# sourceMappingURL=create-user.d.ts.map