import ClinicSinglePageRightSide from '@/components/ClinicSinglePage/RightSide';
import DoctorSection from '@/components/ClinicSinglePage/Leftsid/DoctorSection';
import RelationWay from '@/components/ClinicSinglePage/Leftsid/RelationWay';
import axios from 'axios';

const ClinicPage = async({ params }: { params: { clinicpage: string } }) => {

    const req = await axios.get(`http://localhost:5000/api/clinics/${params.clinicpage}`,)
    if (!req.data) {
        throw new Error("somthin went wrong")
    }
    return (
        <div className='w-full flex justify-center items-center'>
            <div className='w-[90%] flex flex-col md:flex-row md:justify-between items-center md:items-start space-y-6 md:space-y-0 mt-6 '>
                <div className='md:w-[40%] w-full flex flex-col items-center space-y-4'>
                    <DoctorSection clinicData={req.data}/>
                    <RelationWay  clinicData={req.data}/>
                </div>
                <div className='flex flex-col items-center md:w-[55%] w-full bg-white rounded-[3rem] p-4'>
                    <ClinicSinglePageRightSide clinicData={req.data} />
                </div>
            </div>
        </div>
    )
}

export default ClinicPage