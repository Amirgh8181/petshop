import Link from 'next/link'
import React from 'react'

const MembershipOffer = () => {
    return (
        <div className='w-full flex flex-col items-center text-center py-4'>
            <div className='md:w-[50%] w-[80%] space-y-6'>

                <div className='md:text-base text-sm'>NEWSLETTER</div>
                <div className='md:text-3xl text-xl'>Sign up and get up to <span className='text-red-500'>20%</span> off your first purchase</div>
                <Link href={'/Auth/SignUp'} className='w-full flex justify-center'>
                    <div
                        className='bg-petBlue text-white w-[60%] py-2 rounded-full border-2 border-white
                        hover:border-petBlue hover:bg-white hover:text-petBlue transition-all duration-400 cursor-pointer'>
                        SignUp
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default MembershipOffer