import { z } from 'zod'
import getSignUpUsers from '../../lib/getSuccessSignUpUsers/GetSignUpUsers';

const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

interface dataProps {
    name: string;
    email: string,
    password: string
}

export const SignUpSchema = z.object({
    name: z
        .string()
        .min(1, { message: 'Name Required' })
        .refine(async (e) => {

            const req: dataProps[] = await getSignUpUsers()            
            let isExistName: boolean = true;
            req?.map(item => {
                if (item.name === e) {
                    isExistName = false;
                    return
                }
            })
            return isExistName;
        }, { message: "UserName has been register please login" }),

    email: z
        .string()
        .regex(emailRegex,"invalid email format")
        .min(1, { message: "Email Required" })
        .refine(async (e) => {
            const req: dataProps[] = await getSignUpUsers()            
            let isExistEmail: boolean = true;
            req?.map(item => {
                if (item.email === e) {
                    isExistEmail = false;
                    return
                }
            })
            return isExistEmail;
        }, { message: "email has been register please login" }),

    password: z
        .string()
        .min(8, { message: "password should 8 character" })
})

