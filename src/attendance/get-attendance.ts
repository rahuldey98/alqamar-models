import {z} from "zod";

import {dateSchema} from "../common/enums";

const attendanceQuerySchema = z.object({
    classId: z.coerce.number().int().positive(),
    date: dateSchema,
});

export const getAttendanceSchema = z.object({
    query: attendanceQuerySchema,
});