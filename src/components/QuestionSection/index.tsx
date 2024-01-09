
"use client"
import React from 'react'
import HeroImage from '../UI/Hero/HeroImg'
import { motion } from 'framer-motion'
import QuestionText from '../UI/QuestionSection/QuestionText'
import QuestionImage from '../UI/QuestionSection/QuestionImage'
const QuestionContainer = () => {

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
            <motion.div variants={heroContainer} initial="initial" whileInView="animate" className='w-full h-screen bg-petBlue  p-7
            flex flex-col md:flex-row items-center justify-center space-y-3'

            >
                <motion.div variants={heroContainer} className='md:w-1/2 w-full'>
                    <QuestionText />
                </motion.div>
                <motion.div variants={heroContainer} className='md:w-1/2 w-full md:h-full flex items-center justify-center'>
                    <QuestionImage />
                </motion.div>
            </motion.div>
    )
}

export default QuestionContainer;
