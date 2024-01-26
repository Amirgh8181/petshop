import Image from 'next/image';
import React from 'react'
import { FaUserDoctor } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import ClinicSinglePageRightSide from '@/components/ClinicSinglePage/RightSide';
import DoctorSection from '@/components/ClinicSinglePage/Leftsid/DoctorSection';
import RelationWay from '@/components/ClinicSinglePage/Leftsid/RelationWay';

const ClinicPage = ({ params }: { params: { clinicpage: string } }) => {



    return (
        <div className='w-full flex justify-center items-center'>
            <div className='w-[90%] flex flex-col md:flex-row md:justify-between items-center md:items-start space-y-6 md:space-y-0 mt-6 '>
                <div className='md:w-[40%] w-full flex flex-col items-center space-y-4'>
                    <DoctorSection />
                    <RelationWay />
                </div>
                <div className='flex flex-col items-center md:w-[55%] w-full bg-white rounded-[3rem] p-4'>
                    <ClinicSinglePageRightSide clinicId={params.clinicpage} />
                </div>
            </div>
        </div>
    )
}

export default ClinicPage