"use client"
import React from 'react'
import HeroText from '../UI/Hero/HeroText'
import HeroImage from '../UI/Hero/HeroImg'
import { motion } from 'framer-motion'
const HeroSection = () => {

    const heroContainer = {
        initial: {
            opacity: 0,
            y: 20
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                when: 'beforeChildren',
                staggerChildren: 0.3,

            }
        }
    }

    return (
        <section id='hero'>
            <div className='absolute top-0 w-full min-h-screen bg-petBlue'>
            </div>
            <div className="relative z-10 flex justify-center items-center w-full h-[90vh]">
                <motion.div variants={heroContainer} initial="initial" animate="animate" className='w-[90vw] h-[75vh] bg-gradient-to-tr from-petBlue/60 via-violet-500/80 to-petBlue shadow-2xl rounded-3xl md:p-7
                flex flex-col md:flex-row items-center justify-center md:space-y-0 p-2'
                >
                    <motion.div variants={heroContainer} className='md:w-1/2 w-full md:h-full flex justify-center items-center '>
                        <HeroText />
                    </motion.div>
                    <motion.div variants={heroContainer} className='md:w-1/2 w-full md:h-full'>
                        <HeroImage />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}

export default HeroSection




{/*



*/}