"use client"

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
// react hook form
import { SubmitHandler, useForm } from 'react-hook-form'
//next auth
import { signIn } from 'next-auth/react';
// zod
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginSchema } from '@/schema/zodSchema/LoginSchema';
import { LoginDataType } from '@/types/AuthInput';
//component and styles
import styles from '../authstyle.module.css'
import InputErr from '../../UI/Inputs/InputErr';
import InputLabel from '../../UI/Inputs/InputLabel';
//next-ui
import { Button, Input, Spinner } from '@nextui-org/react';
//icons
import { MdLockOutline, MdOutlineEmail } from "react-icons/md";
//sweet alert
import swal from 'sweetalert';



import { LoginInput } from '@/types';



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
        setLoading(true)
        //next auth
        const req = await signIn('credentials', {
            email: e.email,
            password: e.password,
            redirect: false,
        })

        if (req?.ok) {
            swal({
                icon: "success",
                title: 'successfull login',
                timer: 2000,
                buttons: [false],
                className: styles.swal
            });
            setTimeout(() => {
                router.push('/')
            }, 3000);
        } else {
            swal({
                icon: "warning",
                title: 'unsuccessfull login',
                timer: 2000,
                buttons: [false],
                className: styles.swal
            });
            setTimeout(() => {
                window.location.reload()
            }, 3000);
        }
        setLoading(false)
        reset()
    }

    const inputCreateData: LoginInput[] = [
        { key: "Email", type: "email", icon: <MdOutlineEmail />, registerVal: "email", err: errors.email?.message },
        { key: "Password", type: "password", icon: <MdLockOutline />, registerVal: "password", err: errors.password?.message }
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
                <Link href={'/Auth/SignUp'} className={styles.authLink}>SignUp</Link>
            </div>


        </div>
    )
}

export default LoginForm;

