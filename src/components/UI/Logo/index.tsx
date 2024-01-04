import Image from 'next/image'
import React from 'react'

const Logo = () => {
    return (
        <Image src={'/images/logo/logo-text-black.png'} alt='logo' width={100} height={100}/>
    )
}

export default Logo