"use client"
import Image from 'next/image'
import React from 'react'
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import { RiArrowDropDownLine } from "react-icons/ri";
import Link from 'next/link';

const CategoyPageHeader = ({type}:{type:string}) => {

    

    const categ = ["All", "Beds", "Furnitures", "Treats", "Food", "Health", "Toys"]

    return (
        <div>
            <div className='w-[90%] md:h-[70vh] flex flex-col md:flex-row md:justify-around md:items-center mx-auto'>
                <div className='md:w-1/2 w-full max-h-full'>
                    <Image src={'/images/Shop/category/categoy-hero.png'} alt='category hero pic' width={700} height={700}
                        className='w-full' />
                </div>

                <div className='md:w-1/2 w-full h-[60%] px-8 space-y-4 flex flex-col justify-center'>

                    <div className="flex items-center justify-center space-x-2">
                        <span className="text-sm font-medium text-gray-600">lorem ipsum</span>
                        <div className="flex-grow h-px bg-gray-300" />
                    </div>
                    <div className='flex flex-col justify-center space-y-4 h-full md:w-[60%] w-[80%]'>
                        <div className='md:text-4xl text-2xl font-bold'>Duis aute irure dolor in </div>
                        <div className='text-sm'>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut </div>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                        <div className="flex-grow h-px bg-gray-300" />
                        <span className="text-sm font-medium text-gray-600">lorem ipsum</span>
                    </div>
                </div>
            </div>
            <div className='flex md:flex-row flex-col md:justify-between items-center space-y-6 md:space-y-0 w-full md:h-12 md:px-8'>
                <ul className='flex items-center justify-around md:w-[60%] w-full  h-full  md:font-bold'>
                    {categ.map(item =>
                        <Link href={`/Shop/category/${item}`} key={item}
                            className={type === item ? "text-petBlue underline md:underline-offset-4 underline-offset-2 text-sm md:text-lg cursor-pointer" : 'text-petBlue/70 hover:text-petBlue cursor-pointer hover:underline transition-all duration-400 underline-offset-4 text-sm md:text-lg'}>
                            {item}
                        </Link>
                    )}
                </ul>
                <div className='flex  h-full items-center space-x-4'>
                    <Dropdown >
                        <DropdownTrigger className='border-petBlue rounded-full text-petBlue'>
                            <Button
                                variant="bordered"
                                className='font-bold'

                            >
                                SortBy
                                <span className='text-2xl'>
                                    <RiArrowDropDownLine />
                                </span>
                            </Button>
                        </DropdownTrigger>
                        <DropdownMenu aria-label="Static Actions">
                            <DropdownItem key="new">lorem</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                    <Dropdown>
                        <DropdownTrigger className='border-petBlue rounded-full text-petBlue'>
                            <Button
                                variant="bordered"
                                className='font-bold'
                            >
                                Shop For
                                <span className='text-2xl'>
                                    <RiArrowDropDownLine />
                                </span>
                            </Button>
                        </DropdownTrigger>
                        <DropdownMenu aria-label="Static Actions">
                            <DropdownItem key="new">lorem</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </div>

            </div>
        </div>

    )
}

export default CategoyPageHeader