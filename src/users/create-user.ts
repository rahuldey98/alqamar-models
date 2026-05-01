import {z} from "zod";
import {userGenderSchema, userRoleSchema, statusSchema} from "../common/enums";

export const createUserRequestSchema = z.object({
    body: z.object({
        name: z.string(),
        phone: z.string(),
        role: userRoleSchema,
        password: z.string().min(6).optional(),
        email: z.string().optional(),
        status: statusSchema.optional(),
        gender: userGenderSchema.optional(),
        age: z.number().min(0).max(100).optional()
    })
});
export type CreateUserRequest = z.infer<typeof createUserRequestSchema>["body"];

export interface UserResponse extends CreateUserRequest {

}


