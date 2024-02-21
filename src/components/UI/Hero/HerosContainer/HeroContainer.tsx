"use client"
import { motion } from 'framer-motion'

const HeroContainer = ({ children }: { children: React.ReactNode }) => {
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
        <div className='w-full flex justify-center md:pt-8 pt-4'>
            <motion.div variants={heroContainer} initial="initial" animate="animate" 
            className='bg-gradient-to-tr from-petBlue via-violet-600 to-petBlue container 
            md:h-[70vh] h-full rounded-3xl flex flex-col md:flex-row md:justify-around items-center 
            py-4 md:py-0'
            >
                {children}
            </motion.div>
        </div>
    )
}

export default HeroContainer