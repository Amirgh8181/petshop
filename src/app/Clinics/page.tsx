import { ClinicsAndSheltersHero } from '@/components/UI/ClinicsAndSheltersHero'
import ClinicAndShelterCard from '@/components/UI/clinicAndShelterCard'
import getClinics from '@/lib/getClinics';
import axios from 'axios';
import React from 'react'

const Clinics = async () => {
    const req = await getClinics()

    return (
        <div>
            <div>
                <ClinicsAndSheltersHero img={'/images/Clinics/hero-pic.png'} />
            </div>
            <div className='w-full min-h-screen mt-6'>
                <ClinicAndShelterCard href='/Clinics/' data={req} />
            </div>
        </div>
    )
}

export default Clinics