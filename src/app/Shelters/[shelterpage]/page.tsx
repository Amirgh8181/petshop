"use client"
import { useSheltersItems } from '@/stores/Shelters/useSheltersItems';
import { clinicAndSheltersData } from '@/types';
import Image from 'next/image';
import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const ShelterPage = ({ params }: { params: { shelterpage: '2' } }) => {
    const { SheltersData } = useSheltersItems()
    const findShelter = SheltersData.find(q => q.id === params.shelterpage) as clinicAndSheltersData
    
    return (
        <div className='w-full min-h-screen flex justify-center items-center'>
            <div className='w-[90%] flex flex-col md:flex-row md:justify-between items-center space-y-6 md:space-y-0 mt-6 py-8 bg-white rounded-[3rem]'>
                <div className='md:w-[40%] w-full flex flex-col items-center justify-center space-y-4'>
                    <div className='w-[80%] md:text-3xl text-lg font-bold '>VHumane Society of Cobb County</div>
                    <div className='w-[80%] text-lg'>Our mission is to promote humane welfare and responsible animal guardianship through educational community outreach, shelter, and spay/neuter programs.</div>
                    <div className='w-[90%] h-px bg-black px-4'/>
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
                </div>
                <div className='flex flex-col items-center md:w-[55%] w-full p-4'>
                    <div className='w-full p-4 flex flex-col space-y-6 items-center'>
                        <div className='w-full flex justify-center'>
                            <Image src={findShelter.image} alt='adasd' width={500} height={300}
                                className='max-w-[90%] aspect-[9/7] bg-red-300 rounded-[3rem] border-2 border-petBlue'
                            />
                        </div>
                        <div className='w-full flex gap-2'>
                            <Image src={findShelter.image} alt='asdasd' width={100} height={100}
                            className='w-[50%] opacity-60 rounded-[3rem] border-2 border-petBlue'/>
                            <Image src={findShelter.image} alt='asdasd' width={100} height={100}
                            className='w-[50%] opacity-60 rounded-[3rem] border-2 border-petBlue'/>
                            <Image src={findShelter.image} alt='asdasd' width={100} height={100}
                            className='w-[50%] opacity-60 rounded-[3rem] border-2 border-petBlue'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShelterPage