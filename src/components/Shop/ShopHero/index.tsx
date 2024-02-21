
import HeroImage from '@/components/UI/Hero/HeroImg'
import HeroText from '@/components/UI/Hero/HeroText'
import HeroContainer from '@/components/UI/Hero/HerosContainer/HeroContainer'
import Image from 'next/image'
import React from 'react'

const ShopHero = () => {
    return (
        <HeroContainer>
              <HeroText
                titleh2='Enjoy 15% of money'
                description='Food that is healthy for your kitty'
                />
            <HeroImage
                animateImg={false}
                mainImage='/images/Shop/hero.png'
                width='max-w-[80%]'
            />
        </HeroContainer>
    )
}

export default ShopHero


/*
                           <p className='md:text-lg text-xs md:w-[80%]'>A gift for you</p>
Enjoy 15% of money
Food that is healthy for your kitty
*/