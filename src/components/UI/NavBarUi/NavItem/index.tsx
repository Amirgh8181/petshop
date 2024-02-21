"use client"
import { useMediaQuery } from "@mui/material"
import NavItem from "./NavItem"

const NavBar = () => {


  const mdScreen = useMediaQuery('(min-width:768px)');


  return (

    <>
      {mdScreen ? <NavItem display="desktop"/> : <NavItem display="mobile" />}
    </>
  )
}
export default NavBar



