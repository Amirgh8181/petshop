"use client"
import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import ProduceCard from './ProduceCard'
import { ShopItem } from '@/types'


const Slider = ({data}:{data:ShopItem[]}) => {
    const carousel = useRef<HTMLDivElement>(null)
    const [width, setWidth] = useState<number>(0)


    useEffect(() => {
        let scrollWidth: number = carousel.current?.scrollWidth as number
        let offsetWidth: number = carousel.current?.offsetWidth as number
        setWidth(scrollWidth - offsetWidth);
    }, [carousel.current?.offsetWidth, carousel.current?.scrollWidth])


    return (
        < motion.div ref={carousel} className="overflow-hidden cursor-grab" >
            <motion.div drag="x" dragConstraints={{ right: 0, left: -width }} className="flex items-center gap-4 ml-4">
                <ProduceCard data={data}/>
            </motion.div>
        </motion.div>
    )
}

export default Slider;


/*

*/