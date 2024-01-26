import { ClinicsAndSheltersHero } from '@/components/UI/ClinicsAndSheltersHero'
import ClinicAndShelterCard from '@/components/UI/clinicAndShelterCard'
import React from 'react'

const Shelters = () => {
    return (
        <div>
            <div>
                <ClinicsAndSheltersHero img={'/images/Shelters/sheltersHero.png'} />
            </div>
            <div className='w-full min-h-screen mt-6'>
                <ClinicAndShelterCard section='shelters'/>
            </div>
        </div>
    )
}

export default Shelters