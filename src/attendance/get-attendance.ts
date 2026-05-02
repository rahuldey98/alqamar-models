import { z } from "zod";

export const getAttendanceSchema = z.object({
    query: z.object({
        fromDate: z.string().optional(),
        toDate: z.string().optional(),
    }),
});

export type GetAttendanceRequest = z.infer<typeof getAttendanceSchema>["query"];