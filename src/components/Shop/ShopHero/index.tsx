import Image from 'next/image'
import React from 'react'

const ShopHero = () => {
    return (
        <div className='md:w-[80%] w-[90%] h-full bg-petBlue mx-auto rounded-3xl mt-2 flex flex-col
         md:flex-row justify-center items-center md:justify-between md:px-8 px-2'>
            <div className='md:w-1/2 md:max-h-full w-full h-1/2 text-white flex flex-col justify-center md:space-y-4 space-y-2 md:text-left text-center'>
                <div className='md:text-lg text-xs'>A gift for you</div>
                <div className='md:text-6xl text-2xl md:w-[70%]'>Enjoy <span className='text-yellow-400'>15%</span> of money</div>
                <div className='md:text-lg text-xs'>Food that is healthy for your kitty</div>
            </div>
            <div className='md:w-1/2 md:h-full w-full h-1/2 flex justify-center items-center'>
                <Image src={'/images/Shop/hero.png'} alt='shop hero' width={400} height={400}
                className='md:w-full w-[80%] md:aspect-square'/>
            </div>
        </div>
    )
}

export default ShopHero


/*
            <div className='relative md:w-[50vw] md:h-full w-full h-1/2'>
                <div className='absolute inset-0 w-full h-full'>
                <Image src={'/images/Shop/desc.png'} alt='shop hero' width={150} height={150}
                className='absolute top-[6vh] left-[3vw]'/>
                </div>
            </div>

*/