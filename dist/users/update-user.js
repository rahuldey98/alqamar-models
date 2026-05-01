"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserRequestSchema = void 0;
const zod_1 = require("zod");
const enums_1 = require("../common/enums");
exports.updateUserRequestSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().optional(),
        phone: zod_1.z.string().optional(),
        role: enums_1.userRoleSchema.optional(),
        password: zod_1.z.string().min(6).optional(),
        email: zod_1.z.string().optional(),
        status: enums_1.statusSchema.optional(),
        gender: enums_1.userGenderSchema.optional(),
        age: zod_1.z.number().min(0).max(100).optional()
    }),
    params: zod_1.z.object({
        id: zod_1.z.string()
    })
});
