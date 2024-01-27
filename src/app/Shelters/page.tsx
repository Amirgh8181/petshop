import { ClinicsAndSheltersHero } from '@/components/UI/ClinicsAndSheltersHero'
import ClinicAndShelterCard from '@/components/UI/clinicAndShelterCard'
import axios from 'axios'
import React from 'react'

const Shelters = async () => {
    const req = await axios.get("http://localhost:5000/api/shelters",
        {
            headers: {
                "Content-Type": "application/json"
            }
        }
    )
    if (!req.data) {
        throw new Error("somthin went wrong")
    }
    console.log('kk');
    console.log(req.data);


    return (
        <div>
            <div>
                <ClinicsAndSheltersHero img={'/images/Shelters/hero-pic.png'} />
            </div>
            <div className='w-full min-h-screen mt-6'>
                <ClinicAndShelterCard href='/Shelters/' data={req.data} />
            </div>
        </div>
    )
}

export default Shelters