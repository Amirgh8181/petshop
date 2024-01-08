import React from 'react'
import { TiSocialTwitter } from "react-icons/ti";
import { FaInstagram,FaWhatsapp } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import Image from 'next/image';
const Footer = () => {
    const icons = [
        { icon: <FaPhone />, style: "text-2xl hover:text-green-500 cursor-pointer" },
        { icon: <TiSocialTwitter />, style: "text-3xl hover:text-blue-500 cursor-pointer" },
        { icon: <FaInstagram />, style: "text-3xl hover:text-red-500 cursor-pointer" },
        { icon: <FaWhatsapp />, style: "text-3xl hover:text-green-400 cursor-pointer" },
    ]
    return (
        <div className='w-full flex flex-col md:flex-row md:justify-between md:px-12 items-center bg-petBlue md:space-y-0 md:pb-0 space-y-3 pb-4'>
            <div className='flex items-center'>
                <div className=''>
                    <Image src={'/images/logo/logo-text-white.png'} alt='logo' width={125} height={125} priority={true}
                        className='mt-1' />
                </div>
                <div className='h-16 border-l border-l-white ml-3 space-y-2 pl-2'>
                    <div className='flex space-x-3 text-white text-lg'>
                        <div>Support</div>
                        <div>About</div>
                    </div>
                    <div className='text-sm text-[#FFFFFF]'>2023 Dev Ventures Project</div>
                </div>
            </div>
            <div className='md:mr-8'>
                <div className='flex items-center justify-between text-white space-x-8'>
                    {icons.map((item, index) =>
                        <div className={item.style} key={index}>{item.icon}</div>
                    )}
                </div>
                <div className='text-gray-400 mt-2'>
                    Support DevVentures@Gmail.com
                </div>
            </div>
        </div>
    )
}

export default Footer;