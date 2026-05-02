"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.markAttendanceSchema = void 0;
const zod_1 = require("zod");
const enums_1 = require("../common/enums");
const attendanceBodySchema = zod_1.z.object({
    classId: zod_1.z.number().int().positive(),
    date: enums_1.dateSchema,
});
exports.markAttendanceSchema = zod_1.z.object({
    body: attendanceBodySchema,
});
