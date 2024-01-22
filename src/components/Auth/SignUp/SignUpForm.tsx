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
import { MdOutlineEmail,MdLockOutline } from 'react-icons/md';
import { FaUser } from "react-icons/fa";



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
                    label={
                        <div className='flex justify-center items-center space-x-1'>
                            <div className='text-[#525252] text-xl'><FaUser /></div>
                            <div className='text-[#525252]'>Name</div>
                        </div>
                    }
                    labelPlacement='inside'
                    {...register('name')}
                    className='border border-petBlue rounded-full'
                    radius='full'                />
                {
                    errors.name?.message &&
                    <span className='text-red-600 ml-2 mt-2 text-xs'>
                        {errors.name?.message}
                    </span>
                }
                <Input
                    key={"email"}
                    type={"email"}
                    label={
                        <div className='flex justify-center items-center space-x-1'>
                            <div className='text-[#525252] text-xl'><MdOutlineEmail /></div>
                            <div className='text-[#525252]'>Email</div>
                        </div>
                    }
                    labelPlacement='inside'
                    {...register('email')}
                    className='border border-petBlue rounded-full'
                    radius='full'                />
                {
                    errors.email?.message &&
                    <span className='text-red-600 ml-2 mt-2 text-xs'>
                        {errors.email?.message}
                    </span>
                }
                <Input
                    key={"password"}
                    type={"password"}
                    label={
                        <div className='flex justify-center items-center space-x-1'>
                            <div className='text-[#525252] text-xl'><MdLockOutline /></div>
                            <div className='text-[#525252]'>Password</div>
                        </div>}
                    labelPlacement='inside'
                    {...register('password')}
                    className='border border-petBlue rounded-full'
                    radius='full'
                />
                {
                    errors.password?.message &&
                    <span className='text-red-600 ml-2 mt-2 text-xs'>
                        {errors.password?.message}
                    </span>
                }

                <Button disabled={loading} type="submit" className='md:text-xl h-12 bg-petBlue text-white w-full rounded-full'>Submit</Button>

            </form>
                <div className='w-full h-[0.5px] border border-[#525252]/70 mt-[4vh]'></div>
            <div className='w-full border'></div>
            <div className='mt-4'>
                <span>you have existing account? </span>
                <Link href={'/Auth/Login'} className='text-blue-600 underline'>login</Link>
            </div>
        </div>

    )
}

export default SignUpForm;