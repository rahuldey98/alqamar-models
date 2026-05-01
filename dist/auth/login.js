"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginRequestSchema = void 0;
const zod_1 = require("zod");
exports.loginRequestSchema = zod_1.z.object({
    body: zod_1.z.object({
        phone: zod_1.z.string(),
        password: zod_1.z.string().min(6)
    })
});
