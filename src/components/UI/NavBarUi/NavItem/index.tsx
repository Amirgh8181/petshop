"use client"
import { usePathname, useRouter } from "next/navigation"

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

  
  const navItem = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/Shop" },
    { name: "Clinics", href: "/Clinics" },
    { name: "Blog", href: "/Blog" },
    { name: "Shelters", href: "/Shelters" },
  ]

  return (



    <ul className='flex space-x-6'>
      {navItem.map(item =>
        <div key={item.name} >
          <li>
            <span
              className=
              {`link ${pathname === item.href ?
                'pb-1 text-petBlue border-b-2 border-b-petBlue cursor-pointer' :
                "pb-1 hover:text-blue-500 hover:border-b-2 hover:border-b-petBlue transition-colors duration-300 cursor-pointer"}`}
              onClick={() => changeRoute(item.href)}
            >
              {item.name}
            </span>
          </li>
        </div>
      )}
    </ul>
  )
}
export default NavItem



