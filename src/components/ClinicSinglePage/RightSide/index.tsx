"use client"
import TabsContainer from '@/components/UI/Tabs'
import { useClinicsItems } from '@/stores/Clinics/useClinicsItems'
import { clinicAndSheltersData, tabsDetailstype } from '@/types'
import Image from 'next/image'
import React from 'react'

const ClinicSinglePageRightSide = ({ clinicData }: { clinicData: clinicAndSheltersData }) => {
    
    const tabData: tabsDetailstype[] = [
        { key: "About", title: "About", description: clinicData?.shortDescription },
        { key: "Reviews", title: "Reviews", description: clinicData?.shortDescription }
    ]
    return (
        <div>
            <div className='w-full p-4 flex flex-col space-y-6 items-center'>
                <div className='w-full flex justify-center'>
                    <Image src={clinicData.attachmentFile} alt='adasd' width={500} height={300}
                        className='max-w-[90%] aspect-[9/4] rounded-[3rem] border-2 border-petBlue'
                    />
                </div>
                <div className=' md:text-xl text-base font-bold'>
                    {clinicData.name}
                </div>
            </div>
            <div className='w-full'>
                <TabsContainer tabsDetails={tabData} />
            </div>
        </div>
    )
}

export default ClinicSinglePageRightSide