import Image from 'next/image'
import React from 'react'
interface LogoProps{
    width:number,
    height:number
}
const Logo = ({width,height}:LogoProps) => {
    return (
        <Image src={'/images/logo/logo-text-black.png'} alt='logo' width={width} height={height} priority={true}
            className='mt-1' />
    )
}

export const WhiteLogo = () => {

}

export default Logo