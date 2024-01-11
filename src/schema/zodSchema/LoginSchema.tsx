"use client"
import { z } from 'zod'

const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

export const LoginSchema = z.object({
    email: z
        .string()
        .regex(emailRegex,"invalid email format")
        .min(1, { message: "Email Required" }),

    password: z
        .string()
        .min(8, { message: "password should 8 character" })
})

