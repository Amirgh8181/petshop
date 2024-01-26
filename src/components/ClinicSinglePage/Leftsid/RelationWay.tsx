import React from 'react'
import { FaPhoneAlt } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'

const RelationWay = () => {
    return (
        <div className='w-[80%] rounded-[3rem] bg-white flex flex-col items-center space-y-4 py-8 px-6'>
            <div className='w-[80%] flex items-start space-x-2'>
                <span className='text-lg text-petBlue'><FaLocationDot /></span>
                <span>1631 McQueeney Rd, New Braunfels, TX 78130</span>
            </div>
            <div className='w-[80%] flex items-start space-x-2'>
                <span className='text-lg text-petBlue'><FaPhoneAlt /></span>
                <span>+1 2233445566</span>
            </div>
            <div className='w-[80%]'>The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets.</div>
            <div className='w-full flex flex-col items-center space-y-2'>
                <button className='w-[80%] bg-petBlue text-white border-2 border-petBlue py-4 rounded-full'>Book an Appointment</button>
                <button className='w-[80%] bg-white text-petBlue border-2 border-petBlue py-4 rounded-full'>Online counseling services</button>
            </div>
        </div>
    )
}

export default RelationWay