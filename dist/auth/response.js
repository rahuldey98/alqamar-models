"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginResponseSchema = void 0;
const zod_1 = require("zod");
const response_1 = require("../users/response");
exports.loginResponseSchema = zod_1.z.object({
    accessToken: zod_1.z.string(),
    user: response_1.userResponseSchema
});
