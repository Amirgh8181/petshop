"use client"
import React from 'react'
import Logo from '../UI/Logo'
import NavItem from '../UI/NavBarUi/NavItem'
import AuthBtn from '../UI/NavBarUi/AuthBtn'
import HamburgurMenu from '../UI/NavBarUi/HamburgurMenu'
import { useMediaQuery } from '@mui/material'

const NavBar = () => {
    const mdScreen = useMediaQuery('(min-width:768px)');

    return (
        <div className='w-full flex justify-between md:px-10 px-4  items-center fixed top-0 z-40 bg-white h-16'>
            <div className='scale-125'>
                <Logo />
            </div>
            <div className='hidden md:block'>
                {mdScreen &&
                    <NavItem />
                }
            </div>

            <div className='flex space-x-2'>
                <AuthBtn />
                {!mdScreen &&
                    <div className='block md:hidden'>
                        <HamburgurMenu />
                    </div>
                }
            </div>
        </div>
    )
}

export default NavBar