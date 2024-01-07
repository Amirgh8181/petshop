import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import ProduceCard from './ProduceCard'


const MobileSlider = () => {
    const carousel = useRef<HTMLDivElement>(null)
    const [width, setWidth] = useState<number>(0)

    console.log("hello");

    useEffect(() => {
        let scrollWidth: number = carousel.current?.scrollWidth as number
        let offsetWidth: number = carousel.current?.offsetWidth as number
        setWidth(scrollWidth - offsetWidth);
    }, [carousel.current?.offsetWidth])
    return (
        < motion.div ref={carousel} className="overflow-hidden cursor-grab" >
            <motion.div drag="x" dragConstraints={{ right: 0, left: -width }} className="flex">
                <ProduceCard />
            </motion.div>
        </motion.div>
    )
}

export default MobileSlider

