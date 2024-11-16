import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCube , Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-cube';
import ram from '../../assets/images/ram.png'
import motherBoard from '../../assets/images/motherboard.png'
import SSD from '../../assets/images/nvme-ssd.png'
import cabinet from '../../assets/images/cabinet-rgb.png'
import graphicCard from '../../assets/images/graphic-card.png'

const SwiperSlider = () => {
  return (
    <div className='py-12'>
    <div className='container'>
        <div className='max-w-[500px] mx-auto'>
        <Swiper
            spaceBetween={20}
            effect={'flip'}
            slidesPerView={1}
            pagination={{ clickable: true }}
            loop={true}
            modules={[ EffectCube, Pagination]}
        >
            <SwiperSlide><img src={ram} alt="bird" className='max-w-[437px] h-[315px] w-full' /></SwiperSlide>
            <SwiperSlide><img src={motherBoard} alt="bird" className='max-w-[437px] h-[315px] w-full' /></SwiperSlide>
            <SwiperSlide><img src={SSD} alt="bird" className='max-w-[437px] w-full h-[315px]' /></SwiperSlide>
            <SwiperSlide><img src={cabinet} alt="bird" className='max-w-[437px] h-[315px] w-full' /></SwiperSlide>
            <SwiperSlide><img src={graphicCard} alt="bird" className='max-w-[437px] h-[315px] w-full' /></SwiperSlide>
        </Swiper>
    </div>
    </div>
</div>
)
}

export default SwiperSlider