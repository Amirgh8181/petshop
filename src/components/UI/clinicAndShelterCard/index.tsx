"use client"
import { useClinicsItems } from '@/stores/Clinics/useClinicsItems'
import { useSheltersItems } from '@/stores/Shelters/useSheltersItems'
import { clinicAndSheltersData } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'




const ClinicAndShelterCard = ({ section }: { section: string }) => {
  const [renderData, setRenderDate] = useState<clinicAndSheltersData[]>([])
  const { ClinicsData } = useClinicsItems()
  const { SheltersData } = useSheltersItems()

  useEffect(() => {
    if (section === 'clinics') {
      setRenderDate(ClinicsData)
    } else {
      setRenderDate(SheltersData)
    }
  }, [section, ClinicsData, SheltersData])

  return (
    <div className='w-full min-h-screen flex flex-col items-center gap-4'>
      {renderData.map(item =>
        <div key={item.id}
          className='w-[90%] md:h-[40vh] bg-white rounded-[2.5rem] shadow-xl flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 py-8'>
          <div className='md:w-[30%] w-[90%] md:h-full flex items-center justify-center'>
            <Image src={item.image} alt='clinic item img' width={300} height={300}
              className='max-w-[80%] rounded-[2.5rem]' />
          </div>
          <div className='flex flex-col items-center md:items-start md:text-left text-center space-y-2 text-black/70 text-sm md:w-1/3 w-[90%]'>
            <div className='text-black md:text-lg text-base font-bold'>{item.title}</div>
            {
              item.centerDetails.map(item =>
                <div className='md:w-2/3 flex items-start space-x-2' key={item.text}>
                  <span className='text-lg'>
                    {item.icon}
                  </span>
                  <span>
                    {item.text}
                  </span>
                </div>
              )
            }

          </div>
          <div className='flex flex-col items-center md:text-lg text-base font-bold md:w-1/3 w-[90%] space-y-8'>

            <div className='text-center'>
              <div>8:00 AM - 7:00 PM</div>
              <div>Sat <span className='text-petBlue'>Sun Mon Tu</span> Wed Thu <span className='text-petBlue'>Fri</span> </div>
            </div>
            <div>
              <Link href={`${item.linkHref}${item.id}`} className='p-4 rounded-full bg-petBlue/70 hover:bg-petBlue text-white transition-all duration-400'>
                Book an Appointment
              </Link>
            </div>
          </div>

        </div>
      )}
    </div >
  )
}

export default ClinicAndShelterCard