"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userResponseSchema = void 0;
const zod_1 = require("zod");
const enums_1 = require("../common/enums");
exports.userResponseSchema = zod_1.z.object({
    id: zod_1.z.string(),
    name: zod_1.z.string(),
    email: zod_1.z.string().nullable().optional(),
    phone: zod_1.z.string(),
    role: enums_1.userRoleSchema,
    status: enums_1.userStatusSchema,
    gender: enums_1.userGenderSchema.nullable().optional(),
    age: zod_1.z.number().nullable().optional()
});
