"use client"
import { useState } from "react";
import OpenHamburgurMenuBtn from "./HamburgurBtn";
import HamMenuUi from "./HamMenu";
import { AnimatePresence } from "framer-motion";

const HamburgurMenu = () => {
    const [mobileMenu, setMobileMenu] = useState<boolean>(false)

    const setShowMobileMenu = (): void => {
        setMobileMenu(!mobileMenu)
    }

    return (
        <div>

            <OpenHamburgurMenuBtn setMobileMenu={setShowMobileMenu} />
            <AnimatePresence>
                {mobileMenu &&
                    <HamMenuUi setMobileMenu={setShowMobileMenu} />
                }
            </AnimatePresence>
        </div>
    )
}


export default HamburgurMenu