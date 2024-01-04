import React from 'react'
import HeroText from '../UI/Hero/Text'
import HeroImage from '../UI/Hero/HeroImg'

const HeroSection = () => {
    return (
        <section id='hero' className='w-full flex justify-center items-center'>
            <div className='w-[75vw] h-[50vh] bg-petBlue rounded-3xl flex justify-center items-center'>
                <HeroText />
                <HeroImage />
            </div>
        </section>
    )
}

export default HeroSection

