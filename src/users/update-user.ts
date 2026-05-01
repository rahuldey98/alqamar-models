import {z} from "zod";
import {userGenderSchema, userRoleSchema, statusSchema} from "../common/enums";

export const updateUserRequestSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    phone: z.string().optional(),
    role: userRoleSchema.optional(),
    password: z.string().min(6).optional(),
    email: z.string().optional(),
    status: statusSchema.optional(),
    gender: userGenderSchema.optional(),
    age: z.number().min(0).max(100).optional()
  }),
  params: z.object({
    id: z.string()
  })
});

export type UpdateUserRequestDto = z.infer<typeof updateUserRequestSchema>["body"];
