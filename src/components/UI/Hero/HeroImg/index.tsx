"use client"
import Image from 'next/image'
import { motion } from 'framer-motion'
const HeroImage = () => {


    const images = [
        {img:'/images/Hero/1.jpg' , class:"row-start-1 row-end-2 col-start-1 col-end-2"},
        {img:'/images/Hero/2.jpg' , class:"row-start-3 row-end-4 col-start-1 col-end-2"},
        {img:'/images/Hero/3.jpg' , class:"row-start-2 row-end-3 col-start-2 col-end-3"},
        {img:'/images/Hero/4.jfif' , class:"row-start-1 row-end-2 col-start-3 col-end-4"},
        {img:'/images/Hero/5.jpg' , class:"row-start-3 row-end-4 col-start-3 col-end-4"},
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
            className='w-full md:h-full h-[50%] grid grid-cols-3 grid-rows-3 items-center justify-items-center gap-4 mx-auto'>
            
            
            {images.map((image, index) => (
                <motion.div variants={heroImgVar} key={index} className={image.class}>
                    <Image src={image.img} alt='hero-dog' width={200} height={200} priority={true} quality={100}
                        className='w-[90%] h-[90%] md:w-auto md:h-auto rounded-full aspect-square'
                    />
                </motion.div>
            ))}



        </motion.div>
    )
}

export default HeroImage


/*

                    <Image src={'/images/Hero/smal-dog.jfif'} alt='hero-dog' width={75} height={75} priority={true} quality={100}
                        className='aspect-square rounded-full animate-bounce'
                    /> 
                    

                                        <Image src={'/images/Hero/smal-cat.jfif'} alt='hero-dog' width={75} height={75} priority={true} quality={100}
                        className='aspect-square rounded-full animate-bounce'
                    />

*/