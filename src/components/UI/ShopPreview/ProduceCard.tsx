import React from 'react'
import Image from 'next/image'
import { Button } from '@mui/material'
import { CiSquarePlus } from 'react-icons/ci'


interface hardcodeshop {
    image: string,
    title: string,
    price: string
}

const ProduceCard = () => {

    const shopItem: hardcodeshop[] = [
        { image: "/images/ShopPreview/aa.jpg", title: "Cat Food Reflex", price: "$55" },
        { image: "/images/ShopPreview/aa.jpg", title: "Cat Food Reflex", price: "$55" },
        { image: "/images/ShopPreview/aa.jpg", title: "Cat Food Reflex", price: "$55" },
        { image: "/images/ShopPreview/aa.jpg", title: "Cat Food Reflex", price: "$55" },
        { image: "/images/ShopPreview/aa.jpg", title: "Cat Food Reflex", price: "$55" },
        { image: "/images/ShopPreview/aa.jpg", title: "Cat Food Reflex", price: "$55" },
        { image: "/images/ShopPreview/aa.jpg", title: "Cat Food Reflex", price: "$55" },
        { image: "/images/ShopPreview/aa.jpg", title: "Cat Food Reflex", price: "$55" },
        { image: "/images/ShopPreview/aa.jpg", title: "Cat Food Reflex", price: "$55" },
        { image: "/images/ShopPreview/aa.jpg", title: "Cat Food Reflex", price: "$55" },
        { image: "/images/ShopPreview/aa.jpg", title: "Cat Food Reflex", price: "$55" },
    ]

    return (
        <>
            {shopItem.map(item =>
                <div key={item.title} className=" md:space-y-1
                        min-w-[30vw] md:min-w-[20vw] ml-5 p-4 space-y-1
                        flex flex-col justify-center items-center bg-white border border-petBlue 
                        rounded-lg hover:scale-110 transition-all duration-400"
                        >
                    <Image src={item.image} alt='preview shop' width={200} height={200}
                        className="pointer-events-none rounded-lg aspect-square"
                    />
                    <div>{item.title}</div>
                    <div>{item.price}</div>
                    <Button variant="contained" color="info" size='small' className="bg-petBlue/80 hover:bg-petBlue">ShowMore</Button>
                </div>
            )}
        </>
    )
}

export default ProduceCard



