import Logo from '@/components/UI/Logo'
import { Button } from '@nextui-org/react'
import Image from 'next/image'
import React from 'react'

interface AuthHoc {
    children: React.ReactNode
    mainImage: string,
    leftImage: string,
    rightImage: string,
    authType: string
}


const AuthHoc = ({
    children, mainImage, leftImage, rightImage, authType
}: AuthHoc
) => {
    return (
        <div className='flex md:flex-row flex-col items-center md:justify-center w-full min-h-screen space-y-6 md:space-y-0 p-6'>
            {/* left side of auth page */}
            <div className='h-full w-full md:w-1/2 flex flex-col justify-center items-center'>
                <div>
                    <Logo width={300} height={300} />
                </div>
                <div className='space-y-8 w-[60%]'>
                    <div className='flex space-x-4 justify-center items-center bg-white rounded-full w-full'>
                        <Image src={'/images/AuthPic/google.svg'} alt='google' width={50} height={50} className='self-start' />
                        <div className='text-xl'>{`${authType}`} with google</div>
                    </div>

                    <div className="flex items-center justify-center space-x-2">
                        <div className="flex-grow h-px bg-gray-300" />
                        <span className="text-sm font-medium text-gray-600">Or {`${authType}`} with Email</span>
                        <div className="flex-grow h-px bg-gray-300" />
                    </div>

                    <div>
                        {children}
                    </div>
                </div>
            </div>


            {/* right side of auth page */}
            <div className='h-full w-full md:w-1/2 flex justify-center items-center'>
                <div className='relative h-[80vh] md:w-[60%] w-[80%] bg-petBlue rounded-3xl p-4'>

                    <div className='flex flex-col justify-center md:px-6 px-3 text-white h-1/2 space-y-3'>
                        <h1 className='text-3xl md:text-5xl'>Pet Club</h1>
                        <p className='w-3/4 text-sm md:text-lg ml-4 text-pretty leading-3'>All the Lorem Ipsum generators on the Internet tend to repeat</p>
                    </div>

                    <div className='h-[110%] w-[115%] absolute top-0 bottom-0 -right-10 mx-auto'>
                        <div className='absolute left-0 bottom-[20vh] animate-bounce'>
                            <Image src={leftImage} alt='main-login' width={75} height={75} />
                        </div>
                        <div className='absolute bottom-0 right-0'>
                            <Image src={mainImage} alt='main-login' width={400} height={400}
                            />
                        </div>
                        <div className='absolute right-[3vw] top-[15vh] animate-bounce'>
                            <Image src={rightImage} alt='main-login' width={75} height={75} />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default AuthHoc