
import { signOut, useSession } from "next-auth/react"
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button, Avatar } from "@nextui-org/react";
import { FaHeart } from "react-icons/fa6";
import { MdOutlineShoppingCart } from "react-icons/md";
import { BiLogIn } from "react-icons/bi";
import { RiArrowDropDownLine } from "react-icons/ri";
import React from 'react'

const Profile = () => {
  const { data: session } = useSession()
  console.log(session);

  return (
    <Dropdown backdrop="blur">
      <div className="flex items-center space-x-2">
        <Avatar size="sm">{session?.user.name}</Avatar>
        <DropdownTrigger>
          <div className="flex items-center cursor-pointer">
            <span>{session?.user.name}</span>
            <span className="text-2xl"><RiArrowDropDownLine /></span>
          </div>
        </DropdownTrigger>
      </div>
      <DropdownMenu variant="faded" aria-label="Static Actions">
        <DropdownItem key="Favorite List">
          <div className="flex items-center space-x-2">
            <span className="text-2xl"> <FaHeart /> </span>
            <span> Favorite List</span>
          </div>
        </DropdownItem>
        <DropdownItem key="Shopping Cart">
          <div className="flex items-center space-x-2">
            <span className="text-2xl"> <MdOutlineShoppingCart /> </span>
            <span> Shopping Cart</span>
          </div>
        </DropdownItem>
        <DropdownItem key="Log Out" color="danger" className="text-danger">
          <div className="flex items-center space-x-2"  onClick={()=>signOut()}>
            <span className="text-2xl"><BiLogIn /></span>
            <span className="font-bold"> Log Out</span>
          </div>
        </DropdownItem>

      </DropdownMenu>
    </Dropdown>
  )
}

export default Profile