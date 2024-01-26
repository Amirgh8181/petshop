"use client"

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
// react hook form
import { SubmitHandler, useForm } from 'react-hook-form'

// zod
import { zodResolver } from '@hookform/resolvers/zod';
import { SignUpSchema } from '@/schema/zodSchema/SignUpSchema';
import { SignUpDataType } from '@/types/AuthInput';

//next-auth
import { signIn } from 'next-auth/react';

//component and styles
import { signUpUser } from '@/lib/signUp';
import styles from '../authstyle.module.css'
import InputErr from '../../UI/Inputs/InputErr';
import InputLabel from '../../UI/Inputs/InputLabel';


//sweet alert
import swal from 'sweetalert';

//next-ui
import { Button, Input, Spinner } from '@nextui-org/react';

//icon
import { MdOutlineEmail, MdLockOutline } from 'react-icons/md';
import { FaUser } from "react-icons/fa";

//types
import { SignUpInput } from '@/types';



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
        if (req) {
            const loginReq = await signIn('credentials', {
                email: e.email,
                password: e.password,
                redirect: false,
            })
            if (loginReq?.ok) {
                swal({
                    icon: "success",
                    title: 'successfull signUp and login',
                    timer: 1000,
                    buttons: [false],
                    className: styles.swal
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

    const inputCreateData: SignUpInput[] = [
        { key: "UserName", type: "text", icon: <FaUser />, registerVal: "name", err: errors.name?.message },
        { key: "Email", type: "email", icon: <MdOutlineEmail />, registerVal: "email", err: errors.email?.message },
        { key: "Password", type: "password", icon: <MdLockOutline />, registerVal: "password", err: errors.password?.message },
    ]

    return (
        <div className="w-full flex flex-col justify-center items-center">
            {
                loading &&
                <div className='w-full h-screen fixed inset-0 z-40 bg-petBlue/50 flex flex-col items-center justify-center'>
                    <Spinner size='lg' />
                    <div className='text-white'>please wait ...</div>
                </div>
            }
            <form className="space-y-8 w-full" onSubmit={handleSubmit(onSubmit)}>
                {
                    inputCreateData.map(item =>
                        <div key={item.key}>
                            <Input
                                key={item.key}
                                type={item.type}
                                label={
                                    <InputLabel text={item.key}>
                                        {item.icon}
                                    </InputLabel>
                                }
                                labelPlacement='inside'
                                {...register(item.registerVal)}
                                className={styles.input}
                                radius='full'
                            />
                            {item.err &&
                                <InputErr err={item.err} />
                            }
                        </div>
                    )
                }
                <Button disabled={loading} type="submit" className={styles.authBtn}>Submit</Button>
            </form>

            <div className={styles.authDivider} />
            <div className='mt-4'>
                <span>you have existing account? </span>
                <Link href={'/Auth/Login'} className={styles.authLink}>login</Link>
            </div>
        </div>

    )
}

export default SignUpForm;