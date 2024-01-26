import React from 'react'
import Image from 'next/image'

const AboutUs = () => {

    return (
        <div className='flex flex-col md:flex-row w-full items-center justify-center'>
            <div className='md:order-1 order-2 md:w-1/2 w-full md:h-full flex md:items-center items-start justify-center mt-4 md:mt-0'>
                <Image src={'/images/about-us/about-us.png'} alt='about-us' width={300} height={300} priority={true} quality={100}
                    className='w-[50%] aspect-square md:w-auto'
                />
            </div>
            <div className='order-1 md:order-2 md:w-1/2 w-full md:h-full h-1/2 flex flex-col justify-center items-center md:items-start'>
                <h1 className='md:text-5xl text-3xl mb-1'>About-Us</h1>
                <div className='text-[#5F5F5F] md:text-base md:mb-3 text-sm mb-2'>Duis aute irure </div>
                <div className='w-3/4 md:text-xl text-lg mb-2 text-center md:text-left'>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                <div className='text-[#4D4D4D] md:text-lg text-sm'>Duis aute irure dolor in reprehenderit</div>
            </div>
        </div>
    )
}

export default AboutUs