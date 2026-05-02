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
export const dateSchema = z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Invalid date format. Use YYYY-MM-DD");

export type UserRole = z.infer<typeof userRoleSchema>;
export type Status = z.infer<typeof statusSchema>;
export type UserGender = z.infer<typeof userGenderSchema>;
export type DayOfWeek = z.infer<typeof dayOfWeekSchema>;
