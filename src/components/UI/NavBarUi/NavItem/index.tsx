"use client"
import { useMediaQuery } from "@mui/material"
import { usePathname, useRouter } from "next/navigation"
import {motion} from 'framer-motion'
const NavItem = () => {
  const pathname = usePathname()
  const router = useRouter()

  // If the requested page is not the same as the site address that you click on,
  // the user will be transferred to the desired page
  const changeRoute = (route: string) => {
    if (pathname !== route) {
      router.push(route)
    }
    return;
  }

  // navItem for render
  const navItem = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/Shop" },
    { name: "Clinics", href: "/Clinics" },
    { name: "Blog", href: "/Blog" },
    { name: "Shelters", href: "/Shelters" },
  ]
  //check width
  const mdScreen = useMediaQuery('(min-width:768px)');


  const navItemVariant={
    initial:{
      opacity:0,
      y:15
    },
    animate:{
      opacity:1,
      y:0,
      transition:{
        duration: 0.5,
      }
    }
  }
  return (


    <div>
      <ul  className={mdScreen ? 'hidden md:flex space-x-6' : 'md:hidden flex flex-col justify-center items-center space-y-3'}>
        {navItem.map(item =>
          <div key={item.name} >
            <motion.li variants={navItemVariant} initial='initial' animate='animate'>
              <span
                className=
                {mdScreen ? `link ${pathname === item.href ?
                  'pb-1 text-petBlue border-b-2 border-b-petBlue cursor-pointer' :
                  "pb-1 hover:text-blue-500 hover:border-b-2 hover:border-b-petBlue transition-colors duration-300 cursor-pointer"}`
                  :
                  `link ${pathname === item.href ?
                    ' text-petBlue border-b-2 border-b-petBlue' :
                    "text-white hover:text-blue-500 hover:border-b-2 hover:border-b-petBlue transition-colors duration-300"}`
                }
                onClick={() => changeRoute(item.href)}
              >
                {item.name}
              </span>
            </motion.li>
          </div>
        )}
      </ul>

    </div >
  )
}
export default NavItem



