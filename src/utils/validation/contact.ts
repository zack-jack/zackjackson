import * as z from "zod";

export const schema = z.object({
  name: z
    .string()
    .min(1, { message: "Name is required" })
    .min(2, { message: "Must be 2 or more characters long" })
    .max(64, { message: "Must be 64 or fewer characters long" }),
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Invalid email address" }),
  message: z
    .string()
    .min(1, { message: "Message is required" })
    .min(2, { message: "Must be 2 or more characters long" })
    .max(255, { message: "Must be 255 or fewer characters long" }),
});
