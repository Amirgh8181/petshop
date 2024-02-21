"use client"
import React, { } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import './Slider.css'
// import required modules
import { Autoplay, Pagination, FreeMode,A11y,Navigation } from 'swiper/modules';
import { ShopItem } from '@/types';
import ProduceCart from '../CartProduce/ProduceCart';

export default function Slider({ data }: { data: ShopItem[] }) {
    
    return (
        <>
            <Swiper
                breakpoints={{
                    320: {
                        slidesPerView: 2,
                        spaceBetween: 20
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 30
                    },
                    1280: {
                        slidesPerView: 4,
                        spaceBetween: 40
                    }
                }}
                navigation
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                freeMode={{
                    enabled: true,

                }}
                effect='fade'
                fadeEffect={{
                    crossFade:true
                }}
                modules={[Autoplay, Pagination, FreeMode,A11y,Navigation]}
            >
                {data.map(item =>
                    <SwiperSlide
                        className=''
                        key={item._id}>
                        <ProduceCart showProduct={[item]} type='Slider' />
                    </SwiperSlide>
                )}
            </Swiper>

        </>
    );
}
