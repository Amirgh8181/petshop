"use client"
import { useClinicsItems } from '@/stores/Clinics/useClinicsItems';
import { clinicAndSheltersData } from '@/types';
import Image from 'next/image';
import React from 'react'
import { Tabs, Tab } from "@nextui-org/react";
import { FaUserDoctor } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const ClinicPage = ({ params }: { params: { clinicpage: '2' } }) => {
    const { ClinicsData } = useClinicsItems()
    const findClinic = ClinicsData.find(q => q.id === params.clinicpage) as clinicAndSheltersData


    return (
        <div className='w-full flex justify-center items-center'>
            <div className='w-[90%] flex flex-col md:flex-row md:justify-between items-center md:items-start space-y-6 md:space-y-0 mt-6 '>
                <div className='md:w-[40%] w-full flex flex-col items-center space-y-4'>
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
                </div>
                <div className='flex flex-col items-center md:w-[55%] w-full bg-white rounded-[3rem] p-4'>
                    <div className='w-full p-4 flex flex-col space-y-6 items-center'>
                        <div className='w-full flex justify-center'>
                            <Image src={findClinic.image} alt='adasd' width={500} height={300}
                                className='max-w-[90%] aspect-[9/4] bg-red-300 rounded-[3rem] border-2 border-petBlue'
                            />
                        </div>
                        <div className=' md:text-xl text-base font-bold'>
                            {findClinic.title}
                        </div>
                    </div>
                    <div className='w-full'>
                        <Tabs
                            aria-label="Options"
                            color="primary"
                            variant="underlined"
                            classNames={{
                                base: "w-full",
                                tabList: "w-full gap-6 relative rounded-none p-0 border-b border-divider ",
                                cursor: "w-full bg-[#22d3ee]",
                                tab: " flex justify-center items-center  h-12 w-[30%]",
                                tabContent: "group-data-[selected=true]:text-[#06b6d4] md:text-base text-sm"
                            }}
                        >
                            <Tab
                                key="photos"
                                title={
                                    <div className="flex items-center space-x-2">
                                        <span>About</span>
                                    </div>
                                }
                            >
                                <div className='w-full text-center flex justify-center items-center'>
                                    <div className='w-[95%]'>

                                        {findClinic?.description}
                                    </div>
                                </div>

                            </Tab>
                            <Tab
                                key="music"
                                title={
                                    <div className="flex items-center space-x-2">
                                        <span>Reviews</span>
                                    </div>
                                }
                            >
                                <div className='w-full text-center flex justify-center items-center'>
                                    <div className='w-[95%]'>
                                        {findClinic?.description}
                                    </div>
                                </div>
                            </Tab>

                        </Tabs>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ClinicPage