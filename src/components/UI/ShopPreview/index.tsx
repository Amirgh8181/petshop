"use client"
import { useMediaQuery } from '@mui/material'
import React, { useEffect } from 'react'
import MdSlider from './MdSlider';
import MobileSlider from './MobileSlider';

const SliderPreviewShop = () => {
    const mdScreen = useMediaQuery('(min-width:768px)');
    return (
        <div className=''>
            {mdScreen ? <MdSlider /> : <MobileSlider />}
        </div>
    )
}

export default SliderPreviewShop;