import SheltersSinglePageLeftSide from '@/components/SheltersSinglePage/LeftSide';
import SheltersSinglePageRightSide from '@/components/SheltersSinglePage/RightSide';
import getShelterItemPage from '@/lib/getShelterItemPage';


const ShelterPage = async({ params }: { params: { shelterpage: string } }) => {
    const req=await getShelterItemPage(params.shelterpage)
    return (
        <div className='w-full min-h-screen flex justify-center items-center'>
            <div className='w-[90%] flex flex-col md:flex-row md:justify-between items-center space-y-6 md:space-y-0 mt-6 py-8 bg-white rounded-[3rem]'>
                <div className='md:w-[40%] w-full flex flex-col items-center justify-center space-y-4'>
                    <SheltersSinglePageLeftSide />
                </div>
                <div className='flex flex-col items-center md:w-[55%] w-full p-4'>
                    <SheltersSinglePageRightSide img={req.attachmentFile} />
                </div>
            </div>
        </div>
    )
}

export default ShelterPage