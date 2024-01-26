import React from 'react'
import { FaFacebook, FaInstagram } from 'react-icons/fa6'

const SheltersSinglePageLeftSide = () => {
    return (
        <>
            <div className='w-[80%] md:text-3xl text-lg font-bold '>VHumane Society of Cobb County</div>
            <div className='w-[80%] text-lg'>Our mission is to promote humane welfare and responsible animal guardianship through educational community outreach, shelter, and spay/neuter programs.</div>
            <div className='w-[90%] h-px bg-black px-4' />
            <div className='w-[80%] font-bold space-y-3'>
                <div>We are located at:148 S. Fairground St. SEMarietta, GA 30060</div>
                <div>
                    Email:
                    <span className='underline underline-offset-2'>
                        info@humanecobb.com
                    </span>
                </div>
                <div>Phone: 770-428-LOST (5678)</div>
                <div>Fax: 770-423-9386</div>
                <div className='flex space-x-3 text-3xl'>
                    <span><FaFacebook /></span>
                    <span><FaInstagram /></span>
                </div>
            </div>
        </>
    )
}

export default SheltersSinglePageLeftSide