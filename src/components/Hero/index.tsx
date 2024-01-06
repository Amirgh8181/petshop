import React from 'react'
import HeroText from '../UI/Hero/HeroText'
import HeroImage from '../UI/Hero/HeroImg'

const HeroSection = () => {
    return (
        <section id='hero'>
            <div className='lg:w-[70vw] md:container w-[90vw] md:h-[50vh] h-[30vh] 
            bg-petBlue rounded-3xl flex mx-auto'
            >
                <div className='w-1/2'>
                    <HeroText />
                </div>
                <div className='w-1/2'>
                    <HeroImage />
                </div>
            </div>
        </section>
    )
}

export default HeroSection

