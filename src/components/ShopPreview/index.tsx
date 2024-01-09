"use client"
import { useMediaQuery } from '@mui/material';
import MdSlider from '../UI/ShopPreview/MdSlider';
import MobileSlider from '../UI/ShopPreview/MobileSlider';
const ShopPreview = () => {


    const mdScreen = useMediaQuery('(min-width:768px)');


    return (
        <section id="ShopPreview" className='w-full'>
            {
                <div>
                    {mdScreen ? <MdSlider /> : <MobileSlider />}
                </div>
            }
        </section>
    )
}

export default ShopPreview