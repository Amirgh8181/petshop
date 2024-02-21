import React from 'react'
import HeroText from '../../UI/Hero/HeroText'
import HeroImage from '../../UI/Hero/HeroImg'
import HeroContainer from '@/components/UI/Hero/HerosContainer/HeroContainer'
const HeroSection = () => {



    return (
        <HeroContainer>
                <HeroText 
                titleh1='Pet Club'
                description='Check out our new font generator and level up your social bios.Need more
                Check out our new font generator and level up your social bios.Need more?'
                />

                <HeroImage
                    animateImg={true}
                    mainImage='/images/Hero/hero-big.png'
                    animateImg1='/images/Hero/Dog-left.png'
                    animateImg2='/images/Hero/Cat-Right.png'
                    width='max-w-[90%]'
                />
        </HeroContainer>
    )
}

export default HeroSection




{/*



*/}