"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserRequestSchema = void 0;
const zod_1 = require("zod");
const enums_1 = require("../common/enums");
exports.createUserRequestSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string(),
        phone: zod_1.z.string(),
        role: enums_1.userRoleSchema,
        password: zod_1.z.string().min(6).optional(),
        email: zod_1.z.string().optional(),
        status: enums_1.statusSchema.optional(),
        gender: enums_1.userGenderSchema.optional(),
        age: zod_1.z.number().min(0).max(100).optional()
    })
});
