"use client"

import { IoMenu } from "react-icons/io5"



const HamburgurBtn = ({setMobileMenu}:{setMobileMenu:()=>void}) => {
    console.log('hello');

    return (
        <div
            className='
    aspect-square h-7 flex justify-center items-center text-2xl
  bg-petBlue text-white rounded-lg'
            onClick={() => setMobileMenu()}
        >

            <IoMenu />
        </div>)
}

export default HamburgurBtn