import Image from 'next/image'
import React from 'react'

const SheltersSinglePageRightSide = ({img}:{img:string}) => {
    return (
        <div className='w-full p-4 flex flex-col space-y-6 items-center'>
            <div className='w-full flex justify-center'>
                <Image src={img} alt='adasd' width={500} height={300}
                    className='max-w-[90%] aspect-[9/7] bg-red-300 rounded-[3rem] border-2 border-petBlue'
                />
            </div>
            <div className='w-full flex gap-2'>
                <Image src={img} alt='asdasd' width={100} height={100}
                    className='w-[50%] opacity-60 rounded-[3rem] border-2 border-petBlue' />
                <Image src={img} alt='asdasd' width={100} height={100}
                    className='w-[50%] opacity-60 rounded-[3rem] border-2 border-petBlue' />
                <Image src={img} alt='asdasd' width={100} height={100}
                    className='w-[50%] opacity-60 rounded-[3rem] border-2 border-petBlue' />
            </div>
        </div>
    )
}

export default SheltersSinglePageRightSide