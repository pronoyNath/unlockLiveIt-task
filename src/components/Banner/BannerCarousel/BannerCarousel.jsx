import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './style.css';

// import required modules
import { Pagination } from 'swiper/modules';
import Banner from '../Banner';

export default function BannerCarousel() {
    return (
        <>
            <Swiper pagination={true} modules={[Pagination]} className={`mySwiper w-full`}>
                <SwiperSlide>
                    <Banner />
                </SwiperSlide>
                <SwiperSlide>
                    <Banner />
                </SwiperSlide>
                <SwiperSlide>
                    <Banner />
                </SwiperSlide>
                <SwiperSlide>
                    <Banner />
                </SwiperSlide>
            </Swiper>
        </>
    );
}
