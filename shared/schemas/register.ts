// schemas/userSchema.ts

import { z } from "zod";

export const registerSchema = z
  .object({
    userType: z
      .object({
        value: z.string(),
        label: z.string(),
        id: z.number(),
      })
      .nullable()
      .refine((val) => val?.id != 0, {
        message: "User Type is required",
        path: ["userType"], // Path of error
      }),
    firstName: z.string().min(1, "First Name is required"),
    lastName: z.string().min(1, "Last Name is required"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z
      .string()
      .min(6, "Password must be at least 6 characters"),
    termsAccepted: z.boolean().refine((val) => val === true, {
      message: "You must accept the Terms & Conditions and Privacy Policy",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"], // Path of error
  });

export type User = z.infer<typeof registerSchema>;
