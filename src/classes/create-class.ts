import {dayOfWeekSchema} from "../common/enums";
import {z} from "zod"

export const timeSchema = z.string().regex(
    /^([01]\d|2[0-3]):([0-5]\d)$/,
    "Invalid time format. Use HH:MM"
);

export const classScheduleSchema = z.object({
    dayOfWeek: dayOfWeekSchema,
    startTime: timeSchema,
    endTime: timeSchema
});

export const createClassSchema = z.object({
    body: z.object({
        courseId: z.number(),
        teacherId: z.number(),
        studentIds: z.array(z.number()).min(1),
        meetingLink: z.string().nullable().optional(),
        schedules: z.array(classScheduleSchema).min(1)
    })
});

export type CreateClassRequest = z.infer<typeof createClassSchema>["body"];

export interface CreateClassResponse extends CreateClassRequest {
    id: number
}