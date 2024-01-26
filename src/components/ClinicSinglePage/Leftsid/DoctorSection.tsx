import Image from 'next/image'
import React from 'react'
import { FaUserDoctor } from 'react-icons/fa6'

const DoctorSection = () => {
  return (
    <div className='w-[80%] rounded-[3rem] bg-white flex py-4 px-4 space-x-2'>
    <div className='flex justify-center items-center w-1/3'>
        <Image src={'/images/Clinics/clinicDoctor.png'} alt='doctor image' width={100} height={100}
            className='w-full'
        />
    </div>
    <div className='flex-col w-2/3'>
        <div className='flex items-start space-x-2'>
            <span className='text-lg'><FaUserDoctor /></span>
            <span>Dr. Jake Grey</span>
        </div>
        <div>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in.

        </div>
    </div>
</div>
  )
}

export default DoctorSection