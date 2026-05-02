import { z } from "zod";
export declare const getAttendanceSchema: z.ZodObject<{
    query: z.ZodObject<{
        fromDate: z.ZodOptional<z.ZodString>;
        toDate: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>;
}, z.core.$strip>;
export type GetAttendanceRequest = z.infer<typeof getAttendanceSchema>["query"];
//# sourceMappingURL=get-attendance.d.ts.map