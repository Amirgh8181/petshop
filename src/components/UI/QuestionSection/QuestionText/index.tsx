
import Link from 'next/link';
import React from 'react'

const QuestionText = () => {
    return (
        <div className='flex flex-col items-center justify-center md:text-left text-center text-white md:space-y-8 space-y-4 md:w-[60%] w-[90%]'>
            <h1 className='md:text-5xl text-2xl'>culpa qui officia deserunt </h1>
            <p className='md:text-xl text-sm'>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
             pariatur Excepteur sint.
            </p>
            <div className='w-full md:space-x-4 flex justify-between'>
                <Link href={'/Question'} 
                className='bg-white text-petBlue rounded-full hover:bg-petBlue hover:text-white
                 transition-all duration-500 md:w-[60%] w-[40%] aspect-[10/3] flex items-center justify-center'>Ask Anything</Link>
                <button className='shadow-xl rounded-full hover:bg-white hover:text-petBlue transition-all duration-500 md:w-[60%] w-[40%] aspect-[10/3]'>learn more {`>`}</button>
            </div>
        </div>
    )
}

export default QuestionText;