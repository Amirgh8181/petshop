"use client"
import { useState } from "react";
import HamburgurBtn from "./HamburgurBtn";
import HamMenuDesign from "./HamMenuDesign";
const HamburgurMenu = () => {
    const [mobileMenu, setMobileMenu] = useState<boolean>(false)

    const setShowMobileMenu = (): void => {
        setMobileMenu(!mobileMenu)
    }
    

    

    return (
        <div>

            <HamburgurBtn setMobileMenu={setShowMobileMenu} />
            <HamMenuDesign mobileMenu={mobileMenu} setMobileMenu={setShowMobileMenu} />

        </div>
    )
}


export default HamburgurMenu