import SheltersSinglePageLeftSide from '@/components/SheltersSinglePage/LeftSide';
import SheltersSinglePageRightSide from '@/components/SheltersSinglePage/RightSide';
import { useSheltersItems } from '@/stores/Shelters/useSheltersItems';
import { useSinglePageShelters } from '@/stores/Shelters/useSinglePageShelters';
import { clinicAndSheltersData } from '@/types';
import axios from 'axios';
import React, { useEffect } from 'react'


const ShelterPage = async({ params }: { params: { shelterpage: string } }) => {
    const req = await axios.get(`http://localhost:5000/api/shelters/${params.shelterpage}`,)
    if (!req.data) {
        throw new Error("somthin went wrong")
    }
    return (
        <div className='w-full min-h-screen flex justify-center items-center'>
            <div className='w-[90%] flex flex-col md:flex-row md:justify-between items-center space-y-6 md:space-y-0 mt-6 py-8 bg-white rounded-[3rem]'>
                <div className='md:w-[40%] w-full flex flex-col items-center justify-center space-y-4'>
                    <SheltersSinglePageLeftSide />
                </div>
                <div className='flex flex-col items-center md:w-[55%] w-full p-4'>
                    <SheltersSinglePageRightSide img={req.data.attachmentFile} />
                </div>
            </div>
        </div>
    )
}

export default ShelterPage