"use client"
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from "react";
import ProduceCard from './ProduceCard';

const MdSlider = () => {

    const carousel = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: carousel
    })

    const x = useTransform(scrollYProgress, [0, 1], ['0%', '-80%'])

    return (
        <motion.div ref={carousel} className="relative md:h-[300vh] z-30">
            <div className="sticky inset-0 md:h-[110vh] h-screen flex items-center overflow-hidden">
                <motion.div style={{ x }} className='flex md:gap-6'>
                    <ProduceCard />
                </motion.div>
            </div>
        </motion.div>
    )
}

export default MdSlider



