"use client"
import { z } from 'zod'
import { SignUpSchema } from '@/schema/zodSchema/SignUpSchema'
import { LoginSchema } from '@/schema/zodSchema/LoginSchema'

export type SignUpDataType = z.infer<typeof SignUpSchema>
export type LoginDataType = z.infer<typeof LoginSchema>