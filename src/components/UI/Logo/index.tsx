import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
interface LogoProps {
    width: number,
    height: number,
    type: string
}
const Logo = ({ width, height, type }: LogoProps) => {
    return (
        <Link href='/'>
            {type === 'black' &&
                <Image
                    src={'/images/logo/logo-text-black.png'}
                    alt='logo'
                    width={width}
                    height={height}
                    priority={true}
                    className='mt-1' />
            }
            {type === 'white' &&
                <Image
                    src={'/images/logo/logo-text-white.png'}
                    alt='logo'
                    width={width}
                    height={height}
                    priority={true}
                />

            }
        </Link>

    )
}

export const WhiteLogo = () => {

}

export default Logo