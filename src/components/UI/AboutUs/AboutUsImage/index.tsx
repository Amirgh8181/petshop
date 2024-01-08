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

        <div className='order-2 md:order-1 flex justify-end items-center md:w-1/2 mt-8 md:mt-0'>
            <motion.div
                className=' border-[20px] border-l-petBlue border-t-petBlue border-b-petBlue rounded-full flex items-center
              justify-center'
            >
                <Image src={'/images/about-us/about-us.png'} alt='about-us' width={300} height={300}
                    className='w-[50vw] md:w-full aspect-square rounded-full origin-center self-center'
                />
            </motion.div>
        </div>
    )
}

export default AboutUsImage