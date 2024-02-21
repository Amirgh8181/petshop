"use client"
import React from 'react'
import Logo from '../UI/Logo'
import NavItem from '../UI/NavBarUi/NavItem'
import AuthBtn from '../UI/NavBarUi/AuthBtn'
import HamburgurMenu from '../UI/NavBarUi/HamburgurMenu'
import { useMediaQuery } from '@mui/material'
import { useSession } from 'next-auth/react'
import Profile from '../UI/NavBarUi/Profile'

const NavBar = () => {
    const mdScreen = useMediaQuery('(min-width:768px)');
    const { data: sesion } = useSession()

    return (
        <nav className='w-full flex justify-between md:px-10 px-4  items-center fixed top-0 z-40 bg-white h-16'>
            <div>
                <Logo width={150} height={150} type='black'/>
            </div>
            <div className='hidden md:block'>
                {mdScreen &&
                    <NavItem />
                }
            </div>

            <div className='flex space-x-2'>
                {
                    sesion ? <Profile /> : <AuthBtn />
                }
                {!mdScreen &&
                    <div className='block md:hidden'>
                        <HamburgurMenu />
                    </div>
                }
            </div>
        </nav>
    )
}

export default NavBar