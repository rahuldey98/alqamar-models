import { z } from "zod";
export declare const getAttendanceSchema: z.ZodObject<{
    query: z.ZodObject<{
        classId: z.ZodCoercedNumber<unknown>;
        date: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>;
//# sourceMappingURL=get-attendance.d.ts.map