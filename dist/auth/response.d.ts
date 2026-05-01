import { z } from "zod";
export declare const loginResponseSchema: z.ZodObject<{
    accessToken: z.ZodString;
    user: z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        email: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        phone: z.ZodString;
        role: z.ZodEnum<{
            ADMIN: "ADMIN";
            TEACHER: "TEACHER";
            STUDENT: "STUDENT";
        }>;
        status: z.ZodEnum<{
            ACTIVE: "ACTIVE";
            INACTIVE: "INACTIVE";
        }>;
        gender: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
            MALE: "MALE";
            FEMALE: "FEMALE";
        }>>>;
        age: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    }, z.core.$strip>;
}, z.core.$strip>;
export type LoginResponseDto = z.infer<typeof loginResponseSchema>;
//# sourceMappingURL=response.d.ts.map