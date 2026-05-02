import {z} from "zod";
import {dateSchema} from "../common/enums";

const attendanceBodySchema = z.object({
    classId: z.number().int().positive(),
    date: dateSchema,
});

export const markAttendanceSchema = z.object({
    body: attendanceBodySchema,
});

export type MarkAttendanceRequest = z.infer<typeof attendanceBodySchema>;
