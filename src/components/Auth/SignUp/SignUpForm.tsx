"use client"
import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation';


// react hook form
import { SubmitHandler, useForm } from 'react-hook-form'

// zod
import { zodResolver } from '@hookform/resolvers/zod';
import { SignUpSchema } from '@/schema/zodSchema/SignUpSchema';
import { SignUpDataType } from '../entrySchemaTypes';

//next-auth
import { signIn } from 'next-auth/react';

//component and styles
import Styles from '../login.module.css'
import { signUpUser } from '@/lib/signUp';

//sweet alert
import swal from 'sweetalert';

//next-ui
import { Button, Input } from '@nextui-org/react';




const SignUpForm = () => {
    //hook form import 
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm<SignUpDataType>({
        resolver: zodResolver(SignUpSchema)
    })
    //state
    const [loading, setLoading] = useState(false)
    const router = useRouter()
    //submit hadler
    const onSubmit: SubmitHandler<SignUpDataType> = async (e) => {
        setLoading(true)
        const req = await signUpUser(e as SignUpDataType)
        console.log(req);

        if (req) {
            const loginReq = await signIn('credentials', {
                email: e.email,
                password: e.password,
                redirect: false,
                //callbackUrl:"/"
            })

            if (loginReq?.ok) {
                swal({
                    icon: "success",
                    title: 'successfull signUp and login',
                    timer: 1000,
                    buttons: [false],
                    className: Styles.swal
                });
                setTimeout(() => {
                    router.push('/')
                }, 1000);
            } else {
                throw Error('cant login in blog please login in login page')
            }
        }
        setLoading(false)
        reset()
    }


    return (
        <div className="w-full flex flex-col justify-center items-center">

            <form className="space-y-8 w-full" onSubmit={handleSubmit(onSubmit)}>
                <Input
                    key={"UserName"}
                    type={"text"}
                    label={"UserName"}
                    labelPlacement='inside'
                    placeholder={'Enter your UserName'}
                    {...register('name')}
                    className='border border-petBlue rounded-lg'
                />
                {
                    errors.name?.message &&
                    <span className='text-red-600 ml-2 mt-2 text-xs'>
                        {errors.name?.message}
                    </span>
                }
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
                    key={"password"}
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
                <span>you have existing account? </span>
                <Link href={'/entryUser/Login'} className='text-blue-600'>login</Link>
            </div>
        </div>

    )
}

export default SignUpForm;