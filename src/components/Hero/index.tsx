"use client"
import React from 'react'
import HeroText from '../UI/Hero/HeroText'
import HeroImage from '../UI/Hero/HeroImg'
import {motion} from 'framer-motion'
const HeroSection = () => {

    const heroContainer={
        initial:{
            opacity:0,
            y:20
        },
        animate:{
            opacity:1,
            y:0,
            transition: {
                duration:0.5,
                when: 'beforeChildren',
                staggerChildren: 0.3,

            }
        }
    }

    return (
        <section id='hero' className='w-full h-screen flex justify-center items-center bg-blue-900 md:p-8 p-2'>
            <motion.div variants={heroContainer} initial="initial" animate="animate" className='w-[90vw] h-full bg-petBlue/70 rounded-3xl p-7
            flex flex-col md:flex-row items-center justify-center space-y-3'
            
            >
                <motion.div variants={heroContainer} className='md:w-1/2 w-full'>
                    <HeroText />
                </motion.div>
                <motion.div variants={heroContainer} className='md:w-1/2 w-full md:h-full flex items-center justify-center'>
                    <HeroImage />
                </motion.div>
            </motion.div>
        </section>
    )
}

export default HeroSection

