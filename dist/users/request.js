"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserRequestSchema = exports.createUserRequestSchema = exports.userRequestSchema = void 0;
const zod_1 = require("zod");
const enums_1 = require("../common/enums");
exports.userRequestSchema = zod_1.z.object({
    name: zod_1.z.string(),
    phone: zod_1.z.string(),
    role: enums_1.userRoleSchema,
    password: zod_1.z.string().min(6).optional(),
    email: zod_1.z.string().optional(),
    status: enums_1.userStatusSchema.optional(),
    gender: enums_1.userGenderSchema.optional(),
    age: zod_1.z.number().min(0).max(100).optional()
});
exports.createUserRequestSchema = zod_1.z.object({
    body: exports.userRequestSchema
});
exports.updateUserRequestSchema = zod_1.z.object({
    body: exports.userRequestSchema.partial(),
    params: zod_1.z.object({
        id: zod_1.z.string()
    })
});
