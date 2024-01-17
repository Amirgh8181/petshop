"use client"
import React from 'react'
import UiCart from './UiCart'
import MembershipOffer from './MembershipOffer'
import { useSession } from 'next-auth/react'

const OtherSection = () => {
    const { data: session } = useSession()
    
    return (
        <div className='w-full flex flex-col items-center space-y-10'>
            <div><UiCart /></div>
            {!session?.user && <div className='w-full'><MembershipOffer /></div>}
        </div>
    )
}

export default OtherSection