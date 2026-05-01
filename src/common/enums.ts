import {z} from "zod";

export const userRoleSchema = z.enum(["ADMIN", "TEACHER", "STUDENT"]);
export const statusSchema = z.enum(["ACTIVE", "INACTIVE"]);
export const userGenderSchema = z.enum(["MALE", "FEMALE"]);
export const dayOfWeekSchema = z.enum([
  "MONDAY",
  "TUESDAY",
  "WEDNESDAY",
  "THURSDAY",
  "FRIDAY",
  "SATURDAY",
  "SUNDAY"
]);

export type UserRole = z.infer<typeof userRoleSchema>;
export type UserStatus = z.infer<typeof statusSchema>;
export type UserGender = z.infer<typeof userGenderSchema>;
export type DayOfWeek = z.infer<typeof dayOfWeekSchema>;
