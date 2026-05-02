"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateSchema = exports.dayOfWeekSchema = exports.userGenderSchema = exports.statusSchema = exports.userRoleSchema = void 0;
const zod_1 = require("zod");
exports.userRoleSchema = zod_1.z.enum(["ADMIN", "TEACHER", "STUDENT"]);
exports.statusSchema = zod_1.z.enum(["ACTIVE", "INACTIVE"]);
exports.userGenderSchema = zod_1.z.enum(["MALE", "FEMALE"]);
exports.dayOfWeekSchema = zod_1.z.enum([
    "MONDAY",
    "TUESDAY",
    "WEDNESDAY",
    "THURSDAY",
    "FRIDAY",
    "SATURDAY",
    "SUNDAY"
]);
exports.dateSchema = zod_1.z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Invalid date format. Use YYYY-MM-DD");
