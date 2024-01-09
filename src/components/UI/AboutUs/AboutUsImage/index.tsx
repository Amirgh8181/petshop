"use client"
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
const AboutUsImage = () => {
    // const ref = useRef<HTMLDivElement>(null)
    // const { scrollYProgress } = useScroll({
    //     target: ref
    // })
    // const BorderYColor = useTransform(scrollYProgress, [0, 1], ['#000', '#fff'])
    // const rotate = useTransform(scrollYProgress, [0, 1], [0,720])

    return (

        <div className='md:w-1/2 order-2 md:order-1 flex justify-center items-center mt-8 md:mt-0  md:justify-end'>
            <motion.div
                className='border-[20px] border-l-petBlue border-t-petBlue border-b-petBlue rounded-full
                md:w-[60%] w-[50vw] aspect-square overflow-hidden 
                '>
                <Image src={'/images/about-us/about-us.png'} alt='about-us' width={400} height={400}
                    className=''
                />
            </motion.div>
        </div>
    )
}

export default AboutUsImage


/*
                <Image src={'/images/about-us/about-us.png'} alt='about-us' width={300} height={300}
                    className='aspect-square rounded-full origin-top'
                />
*/