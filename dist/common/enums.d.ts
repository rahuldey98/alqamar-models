import { z } from "zod";
export declare const userRoleSchema: z.ZodEnum<{
    ADMIN: "ADMIN";
    TEACHER: "TEACHER";
    STUDENT: "STUDENT";
}>;
export declare const statusSchema: z.ZodEnum<{
    ACTIVE: "ACTIVE";
    INACTIVE: "INACTIVE";
}>;
export declare const userGenderSchema: z.ZodEnum<{
    MALE: "MALE";
    FEMALE: "FEMALE";
}>;
export declare const dayOfWeekSchema: z.ZodEnum<{
    MONDAY: "MONDAY";
    TUESDAY: "TUESDAY";
    WEDNESDAY: "WEDNESDAY";
    THURSDAY: "THURSDAY";
    FRIDAY: "FRIDAY";
    SATURDAY: "SATURDAY";
    SUNDAY: "SUNDAY";
}>;
export declare const dateSchema: z.ZodString;
export type UserRole = z.infer<typeof userRoleSchema>;
export type UserStatus = z.infer<typeof statusSchema>;
export type UserGender = z.infer<typeof userGenderSchema>;
export type DayOfWeek = z.infer<typeof dayOfWeekSchema>;
//# sourceMappingURL=enums.d.ts.map