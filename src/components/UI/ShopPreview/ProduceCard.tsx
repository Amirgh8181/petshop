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
        { image: "/images/ShopPreview/preview.png", title: "Cat Food Reflex", price: "$56,00" },
        { image: "/images/ShopPreview/preview.png", title: "Cat Food Reflex", price: "$56,00" },
        { image: "/images/ShopPreview/preview.png", title: "Cat Food Reflex", price: "$56,00" },
        { image: "/images/ShopPreview/preview.png", title: "Cat Food Reflex", price: "$56,00" },
        { image: "/images/ShopPreview/preview.png", title: "Cat Food Reflex", price: "$56,00" },
        { image: "/images/ShopPreview/preview.png", title: "Cat Food Reflex", price: "$56,00" },
        { image: "/images/ShopPreview/preview.png", title: "Cat Food Reflex", price: "$56,00" },
        { image: "/images/ShopPreview/preview.png", title: "Cat Food Reflex", price: "$56,00" },
        { image: "/images/ShopPreview/preview.png", title: "Cat Food Reflex", price: "$56,00" },
        { image: "/images/ShopPreview/preview.png", title: "Cat Food Reflex", price: "$56,00" },
        { image: "/images/ShopPreview/preview.png", title: "Cat Food Reflex", price: "$56,00" },
    ]

    return (
        <>
            {shopItem.map(item =>
                <div key={item.image} className='md:min-w-[25vw] min-w-[40vw] flex justify-center items-center'>
                    <div className='rounded-3xl border border-petBlue shadow-lg shadow-petBlue/50
                        flex flex-col justify-center items-center space-y-3 py-5'>
                        <Image src={item.image} alt='preview shop' width={200} height={200}
                            className="pointer-events-none rounded-lg aspect-square w-[85%] shadow-md shadow-gray-500"
                        />
                        <div className='text-sm md:text-lg'>{item.title}</div>
                        <div className='text-xs text-[#525252]'>{item.price}</div>
                        <button className="text-sm md:text-lg w-[60%] py-2 rounded-full text-white bg-petBlue hover:bg-blue-800 transition-all duration-400">ShowMore</button>

                    </div>
                </div>
            )}
        </>
    )
}

export default ProduceCard



/*

                    <Image src={item.image} alt='preview shop' width={200} height={200}
                        className="pointer-events-none rounded-lg aspect-square"
                    />
                    <div>{item.title}</div>
                    <div>{item.price}</div>
                    <Button variant="contained" color="info" size='small' className="bg-petBlue/80 hover:bg-petBlue">ShowMore</Button>

*/