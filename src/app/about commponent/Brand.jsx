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
    // return (
    //     <>
    //         <div className='p-14 bg-[rgba(215,210,109,0.73)]'>
    //             <h2 className='text-4xl font-bold text-center title_color'>Trusted By Local Businesses</h2>
    //             <div className='flex justify-center items-center gap-18 mt-16'>
    //                 <Image src={Brand1} alt={'brand'}/>
    //                 <Image src={Brand2} alt={'brand'}/>
    //                 <Image src={Brand3} alt={'brand'}/>
    //                 <Image src={Brand4} alt={'brand'}/>
    //             </div>
    //         </div>
    //         <div className="py-14">
    //             <div className="collect flex justify-between gap-6 items-center">
    //                 <div className="w-130">
    //                     <KnowUs/>
    //                     <h2 className="text-5xl font-bold title_color">What People Say About Us</h2>
    //                     <p className="p mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti adipisci sit voluptatibus dignissimos alias qui nostrum autem voluptatem delectus, corporis.</p>
    //                     <Btn text={"Find Out More"}/>
    //                 </div>
    //                 <Swiper
    //                     effect={'cards'}
    //                     grabCursor={true}
    //                     modules={[EffectCards]}
    //                     className="mySwiper"
    //                 >
    //                     <SwiperSlide className="h-50 w-30">Slide 1</SwiperSlide>
    //                     <SwiperSlide className="h-50 w-30">Slide 2</SwiperSlide>
    //                     <SwiperSlide className="h-50 w-30">Slide 3</SwiperSlide>
    //                     <SwiperSlide className="h-50 w-30">Slide 4</SwiperSlide>
    //                     <SwiperSlide className="h-50 w-30">Slide 5</SwiperSlide>
    //                     <SwiperSlide className="h-50 w-30">Slide 6</SwiperSlide>
    //                     <SwiperSlide className="h-50 w-30">Slide 7</SwiperSlide>
    //                     <SwiperSlide className="h-50 w-30">Slide 8</SwiperSlide>
    //                     <SwiperSlide className="h-50 w-30">Slide 9</SwiperSlide>
    //                 </Swiper>
    //             </div>

    //         </div>
    //     </>
    // )
}

export default Brand