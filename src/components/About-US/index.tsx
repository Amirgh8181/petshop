import React from 'react'
import AboutUsText from '../UI/AboutUs/AboutUsText'
import AboutUsImage from '../UI/AboutUs/AboutUsImage'

const AboutUs = () => {
    return (
        <div className='flex flex-col md:flex-row w-full items-center justify-center md:space-x-8'>
            <AboutUsImage />
            <AboutUsText />
        </div>
    )
}

export default AboutUs