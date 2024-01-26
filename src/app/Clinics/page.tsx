import { ClinicsAndSheltersHero } from '@/components/UI/ClinicsAndSheltersHero'
import ClinicAndShelterCard from '@/components/UI/clinicAndShelterCard'
import React from 'react'

const Clinics = () => {
    return (
        <div>
            <div>
                <ClinicsAndSheltersHero img={'/images/Clinics/clinicHero.png'} />
            </div>
            <div className='w-full min-h-screen mt-6'>
                <ClinicAndShelterCard section='clinics' />
            </div>
        </div>
    )
}

export default Clinics