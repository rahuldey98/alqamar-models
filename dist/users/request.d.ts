import { z } from "zod";
export declare const userRequestSchema: z.ZodObject<{
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
export declare const updateUserRequestSchema: z.ZodObject<{
    body: z.ZodObject<{
        name: z.ZodOptional<z.ZodString>;
        phone: z.ZodOptional<z.ZodString>;
        role: z.ZodOptional<z.ZodEnum<{
            ADMIN: "ADMIN";
            TEACHER: "TEACHER";
            STUDENT: "STUDENT";
        }>>;
        password: z.ZodOptional<z.ZodOptional<z.ZodString>>;
        email: z.ZodOptional<z.ZodOptional<z.ZodString>>;
        status: z.ZodOptional<z.ZodOptional<z.ZodEnum<{
            ACTIVE: "ACTIVE";
            INACTIVE: "INACTIVE";
        }>>>;
        gender: z.ZodOptional<z.ZodOptional<z.ZodEnum<{
            MALE: "MALE";
            FEMALE: "FEMALE";
        }>>>;
        age: z.ZodOptional<z.ZodOptional<z.ZodNumber>>;
    }, z.core.$strip>;
    params: z.ZodObject<{
        id: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>;
export type UserRequestDto = z.infer<typeof userRequestSchema>;
//# sourceMappingURL=request.d.ts.map