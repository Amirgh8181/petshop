import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import ProduceCard from './ProduceCard'
import SliderPreviewHead from './SliderPreviewHead'


const MobileSlider = () => {
    const carousel = useRef<HTMLDivElement>(null)
    const [width, setWidth] = useState<number>(0)


    useEffect(() => {
        let scrollWidth: number = carousel.current?.scrollWidth as number
        let offsetWidth: number = carousel.current?.offsetWidth as number
        setWidth(scrollWidth - offsetWidth);
    }, [carousel.current?.offsetWidth,carousel.current?.scrollWidth])


    return (
        <div className='flex flex-col'>
            <div>
            <SliderPreviewHead />
            </div>
            < motion.div ref={carousel} className="overflow-hidden cursor-grab" >
                <motion.div drag="x" dragConstraints={{ right: 0, left: -width }} className="flex gap-4 h-[60vh] items-center">
                    <ProduceCard />
                </motion.div>
            </motion.div>
        </div>

    )
}

export default MobileSlider

