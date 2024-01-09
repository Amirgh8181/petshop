"use client"
import { motion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useRef } from "react";
import ProduceCard from './ProduceCard';
import SliderPreviewHead from './SliderPreviewHead';

const MdSlider = () => {

    const carousel = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: carousel
    })

    const x = useTransform(scrollYProgress, [0, 1], ['30%', '-30%'])

    return (
        <>

            <motion.div ref={carousel} className="relative md:h-[300vh] z-30">
                <div className="sticky inset-0 h-[110vh] flex flex-col items-center justify-center space-y-[4%] overflow-hidden">
                    <div className='w-full'>
                        <SliderPreviewHead />
                    </div>
                    <motion.div style={{ x }} className='flex md:gap-4'>
                        <ProduceCard />
                    </motion.div>
                </div>
            </motion.div>
        </>
    )
}

export default MdSlider



