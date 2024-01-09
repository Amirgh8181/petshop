
"use client"
import Image from 'next/image'
import { motion } from 'framer-motion'


const QuestionImage = () => {


    const images = [
        {img:'' , class:"col-start-1 col-end-2 "},
        {img:'/images/Hero/2.jpg' , class:"col-start-2 col-end-3 "},
        {img:'/images/Hero/3.jpg' , class:"col-start-1 col-end-2 "},
        {img:'/images/Hero/4.jfif' , class:"col-start-2 col-end-3 "},

    ];


    const heroImgContainerVar = {
        initial: {
            opacity: 0,
        },
        animate: {
            opacity: 1,
            transition: {
                delay:1,
                staggerChildren: 0.3,
                when: 'beforeChildren'
            }
        },
    }

    const heroImgVar = {
        initial: {
            opacity: 0,
            scale: 0,
            y: 200
        },
        animate: {
            opacity: 1,
            scale: 1,
            y: 0,
        },
    }
    return (
        <motion.div variants={heroImgContainerVar} initial='initial' animate='animate'
            className='w-full md:h-full h-[50%] flex justify-center items-center gap-6'>
            
            
                <motion.div variants={heroImgVar} className='space-y-6 pt-12'>
                    <Image src={'/images/Hero/1.jpg'} alt='hero-dog' width={200} height={200} priority={true} quality={100}
                        className='rounded-l-full rounded-b-full aspect-square'
                    />
                    <Image src={'/images/Hero/2.jpg'} alt='hero-dog' width={200} height={200} priority={true} quality={100}
                        className='rounded-l-full rounded-b-full aspect-square'
                    />
                </motion.div>
                <motion.div variants={heroImgVar} className='space-y-6 pb-12'>
                    <Image src={'/images/Hero/3.jpg'} alt='hero-dog' width={200} height={200} priority={true} quality={100}
                        className='rounded-r-full rounded-t-full aspect-square'
                    />
                    <Image src={'/images/Hero/5.jpg'} alt='hero-dog' width={200} height={200} priority={true} quality={100}
                        className='rounded-r-full rounded-t-full aspect-square'
                    />
                </motion.div>



        </motion.div>
    )
}

export default QuestionImage;