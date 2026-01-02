"use client"
import Image from "next/image"
import Brand1 from '../../../public/images/brand-image1.webp'
import Brand2 from '../../../public/images/logo.webp'
import Brand3 from '../../../public/images/brand-image3.webp'
import Brand4 from '../../../public/images/brand-image4.webp'
///commponent
import KnowUs from "./KnowUs"
import Btn from "../home commponent/Btn"
//Swiper
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
// import required modules
import { EffectCards } from 'swiper/modules';

function Brand() {
    return (
        <>
            <div id="prand" className='py-14 bg-[rgba(215,210,109,0.18)]'>
                <h2 className='px-3 text-3xl md:text-4xl font-bold text-center title_color'>Trusted By Local Businesses</h2>
                <div className='px-3 flex justify-center items-center gap-18 mt-16 flex-wrap'>
                    <Image src={Brand1} alt={'brand'}/>
                    <Image src={Brand2} alt={'brand'}/>
                    <Image src={Brand3} alt={'brand'}/>
                    <Image src={Brand4} alt={'brand'}/>
                </div>
            </div>
        </>
    )
}

export default Brand