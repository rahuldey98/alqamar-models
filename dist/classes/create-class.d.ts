import { z } from "zod";
export declare const timeSchema: z.ZodString;
export declare const classScheduleSchema: z.ZodObject<{
    dayOfWeek: z.ZodEnum<{
        MONDAY: "MONDAY";
        TUESDAY: "TUESDAY";
        WEDNESDAY: "WEDNESDAY";
        THURSDAY: "THURSDAY";
        FRIDAY: "FRIDAY";
        SATURDAY: "SATURDAY";
        SUNDAY: "SUNDAY";
    }>;
    startTime: z.ZodString;
    endTime: z.ZodString;
}, z.core.$strip>;
export declare const createClassSchema: z.ZodObject<{
    body: z.ZodObject<{
        courseId: z.ZodNumber;
        teacherId: z.ZodNumber;
        studentIds: z.ZodArray<z.ZodNumber>;
        meetingLink: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        schedules: z.ZodArray<z.ZodObject<{
            dayOfWeek: z.ZodEnum<{
                MONDAY: "MONDAY";
                TUESDAY: "TUESDAY";
                WEDNESDAY: "WEDNESDAY";
                THURSDAY: "THURSDAY";
                FRIDAY: "FRIDAY";
                SATURDAY: "SATURDAY";
                SUNDAY: "SUNDAY";
            }>;
            startTime: z.ZodString;
            endTime: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>;
}, z.core.$strip>;
export type CreateClassRequest = z.infer<typeof createClassSchema>["body"];
export interface CreateClassResponse extends CreateClassRequest {
    id: number;
}
//# sourceMappingURL=create-class.d.ts.map