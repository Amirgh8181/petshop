import { Button } from '@nextui-org/react'
import Link from 'next/link'
import React from 'react'

interface buttons {
    content: string
    size: string
    redirectLink?: string
}

export const RedirectButtonBgPetBlue = ({ content, size, redirectLink }: buttons) => {
    return (
        <div className='w-full flex justify-center'>
            <Link href={redirectLink as string}
                className={`${size} bg-petBlue border-2 border-petBlue text-white
                font-bold rounded-full hover:bg-white hover:text-petBlue transition-all duration-400
                flex justify-center items-center
                `}

            >
                {content}
            </Link>
        </div>
    )
}

export const RedirectButtonBgwhite = ({ content, size, redirectLink }: buttons) => {
    return (
        <div className='w-full flex justify-center'>
            <Link href={redirectLink as string}
                className={`${size} bg-white border-2 border-petBlue text-petBlue
            font-bold rounded-full hover:bg-petBlue hover:text-white transition-all duration-400
            flex justify-center items-center
            `}

            >
                {content}
            </Link>
        </div>

    )
}

export const RedirectButtonBgTransParent = ({ content, size, redirectLink }: buttons) => {
    return (
        <div className='w-full flex justify-center'>
            <Link href={redirectLink as string}
                className={`${size} bg-transparent border-2 border-white text-white
            font-bold rounded-full hover:bg-white hover:text-petBlue transition-all duration-400
            flex justify-center items-center
            `}

            >
                {content}
            </Link>
        </div>

    )
}
