import { RedirectButtonBgPetBlue } from '@/components/UI/Buttons/Buttons'
import Link from 'next/link'
import React from 'react'

const MembershipOffer = () => {
    return (
        <div className='w-full flex flex-col items-center text-center py-4'>
            <div className='md:w-[50%] w-[80%] space-y-6'>

                <div className='md:text-base text-sm'>NEWSLETTER</div>
                <div className='md:text-3xl text-xl'>Sign up and get up to <span className='text-red-500'>20%</span> off your first purchase</div>
                <div className='w-full flex justify-center'>
                    <RedirectButtonBgPetBlue content='SignUp' size='w-[60%] aspect-[9/1]' redirectLink='/Auth/SignUp'/>
                </div>
            </div>
        </div>
    )
}

export default MembershipOffer
