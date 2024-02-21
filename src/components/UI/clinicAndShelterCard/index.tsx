import { clinicAndSheltersData } from '@/types'
import Image from 'next/image'
import { FaUserDoctor } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import CenterItems from './CenterItems'
import { RedirectButtonBgPetBlue } from '../Buttons/Buttons';



const ClinicAndShelterCard = ({ href, data }: { href: string, data: clinicAndSheltersData[] }) => {

  return (
    <div className='w-full min-h-screen flex flex-col items-center gap-4'>
      {data.map(item =>
        <div key={item._id}
          className='min-w-[90%] md:h-[40vh] bg-white rounded-[2.5rem] shadow-xl flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:py-8 py-4 md:px-4'>
          <div className='md:w-[30%] w-[90%] md:h-full flex items-center justify-center'>
            <Image src={item.attachmentFile} alt='clinic item img' width={300} height={300}
              className='max-w-[80%] rounded-[2.5rem]' />
          </div>
          <div className='flex flex-col items-center md:items-start md:text-left text-center space-y-2 text-black/70 text-sm md:w-1/3 w-[90%]'>
            <h3 className='text-black md:text-lg text-base font-bold'>{item.name}</h3>

            <div className='md:w-2/3 flex flex-col  space-y-2'>
              <CenterItems icon={<FaLocationDot />} text={item.address} />
              <CenterItems icon={<FaPhoneAlt />} text={item.phone} />
              <CenterItems icon={<FaUserDoctor />} text={item.doctorName} />
            </div>
          </div>
          <div className='flex flex-col items-center md:text-lg text-base font-bold md:w-1/3 w-[90%] space-y-8'>

            <div className='text-center'>
              <div>8:00 AM - 7:00 PM</div>
              <div>Sat <span className='text-petBlue'>Sun Mon Tu</span> Wed Thu <span className='text-petBlue'>Fri</span> </div>
            </div>
            <div>
              <RedirectButtonBgPetBlue content='Book an Appointment' size='w-full px-4 aspect-[10/3]' redirectLink={`${href}${item._id}`} />

            </div>
          </div>

        </div>
      )}
    </div >
  )
}

export default ClinicAndShelterCard


