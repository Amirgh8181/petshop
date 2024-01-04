import React from 'react'
import Logo from '../UI/Logo'
import NavItem from '../UI/NavBarUi/NavItem'
import AuthBtn from '../UI/NavBarUi/AuthBtn'

const NavBar = () => {
    return (
        <div className='w-full flex justify-around items-center'>
            <div>
                <Logo />
            </div>
            <div>
                <NavItem />
            </div>
            <div>
                <AuthBtn />
            </div>
        </div>
    )
}

export default NavBar