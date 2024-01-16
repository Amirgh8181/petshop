
"use client"
import Image from 'next/image'
import { motion } from 'framer-motion'


const QuestionImage = () => {


    const imgCol1 = [
        { img: '/images/QuestionSection/2.png' },
        { img: '/images/QuestionSection/4.png' },

    ];
    const imgCol2 = [
        { img: '/images/QuestionSection/1.png', class: "col-start-2 col-end-3 row-start-1 row-end-2 w-[80%]" },
        { img: '/images/QuestionSection/3.png', class: "col-start-2 col-end-3 row-start-3 row-end-4 w-[80%]" },
    ]
    const heroImgContainerVar = {
        initial: {
            opacity: 0,
        },
        animate: {
            opacity: 1,
            transition: {
                delay: 1,
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
        <div
            className='min-w-[70%] h-full flex gap-4'
        >
            <div className='w-1/2 h-full flex flex-col justify-center items-center gap-4 mt-10'>
            {imgCol1.map(item =>
                <Image src={item.img} width={175} height={175} alt='question'
                     key={item.img} className='w-[80%] aspect-square'/>
            )}
            </div>
            <div className='w-1/2 h-full flex flex-col justify-center items-center gap-4 mb-10'>
            {imgCol2.map(item =>
                <Image src={item.img} width={175} height={175} alt='question'
                     key={item.img} className='w-[80%] aspect-square'/>
            )}
            </div>



        </div>
    )
}

export default QuestionImage;