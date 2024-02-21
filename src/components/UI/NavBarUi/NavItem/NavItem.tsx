import { usePathname } from "next/navigation"
import Link from "next/link"
import { useEffect, useState } from "react"

const NavItem = ({ display }: { display: string }) => {

    const pathname = usePathname()
    const [navBarClass, setNavBarClass] = useState<string>("")
    const [deactiveNavItem, setDeactiveNavItem] = useState<string>("")
    useEffect(() => {
        setDeactiveNavItem(display === 'desktop' ?
            "pb-1 hover:text-blue-500 hover:border-b-4 hover:border-b-petBlue transition-colors duration-300 cursor-pointer"
            :
            "text-white hover:text-blue-500 hover:border-b-2 hover:border-b-petBlue transition-colors duration-300 cursor-pointer"
        )
        setNavBarClass(display === 'desktop' ?
            "md:flex space-x-6"
            :
            "flex flex-col justify-center items-center space-y-3"
        )
    }, [display])


    // navItem for render
    const navItem = [
        { name: "Home", href: "/" },
        { name: "Shop", href: "/Shop" },
        { name: "Clinics", href: "/Clinics" },
        { name: "Question", href: "/Question" },
        { name: "Shelters", href: "/Shelters" },
    ]



    return (


        <div>
            <ul className={navBarClass}>
                {navItem.map(item =>
                    <li  key={item.href} className="md:text-xl">
                        <Link href={item.href}
                            className=
                            {
                                `link ${pathname === item.href ?
                                    ' text-petBlue border-b-4 border-b-petBlue cursor-pointer pb-1' :
                                    deactiveNavItem}`
                            }
                        >
                            {item.name}
                        </Link>
                    </li>

                )}
            </ul>

        </div >
    )
}
export default NavItem



//'flex flex-col justify-center items-center space-y-3'