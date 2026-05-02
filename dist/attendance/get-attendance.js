"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAttendanceSchema = void 0;
const zod_1 = require("zod");
const enums_1 = require("../common/enums");
const attendanceQuerySchema = zod_1.z.object({
    classId: zod_1.z.coerce.number().int().positive(),
    date: enums_1.dateSchema,
});
exports.getAttendanceSchema = zod_1.z.object({
    query: attendanceQuerySchema,
});
