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
        { image: "/images/ShopPreview/pet-food.png", title: "Cat Food Reflex", price: "$55" },
        { image: "/images/ShopPreview/pet-food.png", title: "Cat Food Reflex", price: "$55" },
        { image: "/images/ShopPreview/pet-food.png", title: "Cat Food Reflex", price: "$55" },
        { image: "/images/ShopPreview/pet-food.png", title: "Cat Food Reflex", price: "$55" },
    ]

    return (
        <>
            {shopItem.map(item =>
                <div key={item.title} className="md:min-h-[30vh] md:min-w-[30vw] md:p-8 md:ml-10 md:space-y-3
                        min-w-[40vw]  ml-5 p-4 space-y-1
                        flex flex-col justify-center items-center bg-white border border-petBlue rounded-lg">
                    <Image src={item.image} alt='preview shop' width={200} height={200}
                        className="md:w-[50vw] md:h-[50vh] pointer-events-none rounded-lg"
                    />
                    <div>{item.title}</div>
                    <div>{item.price}</div>
                    <Button variant="contained" color="info" className="bg-petBlue">ShowMore</Button>
                </div>
            )}
            <div className="md:min-h-[30vh] md:min-w-[30vw] md:p-8 md:space-y-3
                    min-w-[40vw] ml-5
                    flex flex-col justify-center items-center bg-petBlue border border-white rounded-lg">
                <div className='md:text-7xl text-3xl text-white'><CiSquarePlus /></div>
                <div className='md:text-4xl text-xl text-white'>ShowMore</div>
            </div>
        </>
    )
}

export default ProduceCard



