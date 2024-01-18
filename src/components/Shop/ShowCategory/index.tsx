"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface categType {
    image: string,
    link: string,
    type: string,
}

const Category = () => {
    const categDetails: categType[] = [
        { image: '/images/Shop/colection1.jpg', link: "", type: "Beds" },
        { image: '/images/Shop/colection2.jpg', link: "", type: "Furnitures" },
        { image: '/images/Shop/colection3.jpg', link: "", type: "Treats" },
        { image: '/images/Shop/colection4.jpg', link: "", type: "Food" },
        { image: '/images/Shop/colection5.jpg', link: "", type: "Health and bath" },
        { image: '/images/Shop/colection6.jpg', link: "", type: "Toys" }
    ]
    return (
        <div className='flex flex-col items-center space-y-6'>
            <div>Shop by collection</div>
            <div className='w-full flex justify-center mx-auto md:space-x-4 text-center'>
                {categDetails.map(item =>
                    <Link href={`/Shop/Category?type=${item.type}`} key={item.type} className='group flex flex-col justify-center items-center space-y-2  cursor-pointer'>
                        <Image src={item.image} alt='categ img' width={100} height={100}
                            className='w-[65%] aspect-square rounded-full border shadow-xl group-hover:scale-110 transition-all duration-400' />
                        <div className='md:text-sm text-xs font-bold '>{item.type}</div>
                    </Link>
                )}
            </div>
        </div>
    )
}

export default Category