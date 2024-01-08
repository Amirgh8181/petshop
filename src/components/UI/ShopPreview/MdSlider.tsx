"use client"
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from "react";
import ProduceCard from './ProduceCard';

const MdSlider = () => {

    const carousel = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: carousel
    })

    const x = useTransform(scrollYProgress, [0, 1], ['0%', '-145%'])

    return (
        <>

            <motion.div ref={carousel} className="relative md:h-[600vh] z-30">
                <div className="sticky inset-0  h-[110vh] flex items-center overflow-hidden">
                    <motion.div style={{ x }} className='flex md:gap-4'>
                        <ProduceCard />
                    </motion.div>
                </div>
            </motion.div>
        </>
    )
}

export default MdSlider



