"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAttendanceSchema = void 0;
const zod_1 = require("zod");
exports.getAttendanceSchema = zod_1.z.object({
    query: zod_1.z.object({
        fromDate: zod_1.z.string().optional(),
        toDate: zod_1.z.string().optional(),
    }),
});
