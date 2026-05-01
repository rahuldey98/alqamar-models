import {z} from "zod";
import {userGenderSchema, userRoleSchema, statusSchema} from "../common/enums";

export const userResponseSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string().nullable().optional(),
  phone: z.string(),
  role: userRoleSchema,
  status: statusSchema,
  gender: userGenderSchema.nullable().optional(),
  age: z.number().nullable().optional()
});

export type UserResponseDto = z.infer<typeof userResponseSchema>;
