import { ClinicsAndSheltersHero } from '@/components/UI/ClinicsAndSheltersHero'
import ClinicAndShelterCard from '@/components/UI/clinicAndShelterCard'
import getShelters from '@/lib/getShelters'
import React from 'react'

const Shelters = async () => {
    const req = await getShelters()

    return (
        <div>
            <div>
                <ClinicsAndSheltersHero img={'/images/Shelters/hero-pic.png'} />
            </div>
            <div className='w-full min-h-screen mt-6'>
                <ClinicAndShelterCard href='/Shelters/' data={req} />
            </div>
        </div>
    )
}

export default Shelters