"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dayOfWeekSchema = exports.userGenderSchema = exports.statusSchema = exports.userRoleSchema = void 0;
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
