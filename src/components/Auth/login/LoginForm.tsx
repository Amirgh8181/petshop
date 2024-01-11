"use client"
import { useState } from 'react'
import Link from 'next/link'

import { SubmitHandler, useForm } from 'react-hook-form'

// zod
import { zodResolver } from '@hookform/resolvers/zod';

//component and styles
import Styles from '../login.module.css'
//import { loginUserRequest } from '@/lib/login';
import { LoginSchema } from '@/schema/zodSchema/LoginSchema';
import { LoginDataType } from '../entrySchemaTypes';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import swal from 'sweetalert';
import { Button, Input } from '@nextui-org/react';

import { MdOutlineEmail } from "react-icons/md";



const LoginForm = () => {
    //hook form initialize 
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm<LoginDataType>({
        resolver: zodResolver(LoginSchema)
    })
    //state
    const [loading, setLoading] = useState(false)
    const router = useRouter()

    //submit hadler
    const onSubmit: SubmitHandler<LoginDataType> = async (e) => {
        console.log(e);

        //next auth
        const req = await signIn('credentials', {
            email: e.email,
            password: e.password,
            redirect: false,
        })
        console.log(req);

        if (req?.ok) {
            swal({
                icon: "success",
                title: 'successfull login',
                timer: 2000,
                buttons: [false],
                className: Styles.swal
            });
            setTimeout(() => {
                router.push('/')
            }, 3000);

            setLoading(false)
            reset()
        }
    }

    return (
        <div className="w-full flex flex-col justify-center items-center">

            <form className="space-y-8 w-full" onSubmit={handleSubmit(onSubmit)}>
                <Input
                    key={"email"}
                    type={"email"}
                    label={"Email"}
                    labelPlacement='inside'
                    placeholder={'Enter your email'}
                    {...register('email')}
                    className='border border-petBlue rounded-lg'
                />
                {
                    errors.email?.message &&
                    <span className='text-red-600 ml-2 mt-2 text-xs'>
                        {errors.email?.message}
                    </span>
                }
                <Input
                    key={"email"}
                    type={"password"}
                    label={"Password"}
                    labelPlacement='inside'
                    placeholder={'Enter your password'}
                    {...register('password')}
                    className='border border-petBlue rounded-lg'
                />
                {
                    errors.password?.message &&
                    <span className='text-red-600 ml-2 mt-2 text-xs'>
                        {errors.password?.message}
                    </span>
                }
                <Button disabled={loading} type="submit" className='bg-petBlue text-white w-full'>Submit</Button>

            </form>


            <div className='mt-4'>
                <span>Don’t have an account yet? </span>
                <Link href={'/entryUser/SignUp'} className='text-blue-600'>SignUp</Link>
            </div>


        </div>
    )
}

export default LoginForm;