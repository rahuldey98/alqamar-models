import { z } from "zod";
declare const attendanceBodySchema: z.ZodObject<{
    classId: z.ZodNumber;
    date: z.ZodString;
}, z.core.$strip>;
export declare const markAttendanceSchema: z.ZodObject<{
    body: z.ZodObject<{
        classId: z.ZodNumber;
        date: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>;
export type MarkAttendanceRequest = z.infer<typeof attendanceBodySchema>;
export {};
//# sourceMappingURL=mark-attendance.d.ts.map