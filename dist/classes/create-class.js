"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createClassSchema = exports.classScheduleSchema = exports.timeSchema = void 0;
const enums_1 = require("../common/enums");
const zod_1 = require("zod");
exports.timeSchema = zod_1.z.string().regex(/^([01]\d|2[0-3]):([0-5]\d)$/, "Invalid time format. Use HH:MM");
exports.classScheduleSchema = zod_1.z.object({
    dayOfWeek: enums_1.dayOfWeekSchema,
    startTime: exports.timeSchema,
    endTime: exports.timeSchema
});
exports.createClassSchema = zod_1.z.object({
    body: zod_1.z.object({
        courseId: zod_1.z.number(),
        teacherId: zod_1.z.number(),
        studentIds: zod_1.z.array(zod_1.z.number()).min(1),
        meetingLink: zod_1.z.string().nullable().optional(),
        schedules: zod_1.z.array(exports.classScheduleSchema).min(1)
    })
});
