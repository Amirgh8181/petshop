
import { Button } from '@mui/material';
import React from 'react'

const QuestionText = () => {
    return (
        <div className='flex flex-col items-center justify-center md:text-left text-center text-white p-4 md:p-8 mt-4 space-y-8'>
            <h1 className='md:text-5xl text-2xl'>culpa qui officia deserunt </h1>
            <p className='md:text-xl text-lg'>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
             pariatur Excepteur sint.
            </p>
            <div className='space-x-4 md:self-start'>
                <button className='bg-white text-petBlue rounded-full p-4 hover:bg-petBlue hover:text-white transition-all duration-500 hover:shadow-xl'>Ask Anything</button>
                <button className='shadow-xl rounded-full p-4 hover:bg-white hover:text-petBlue transition-all duration-500'>learn more {`>`}</button>
            </div>
        </div>
    )
}

export default QuestionText;