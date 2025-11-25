"use client"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
//images
import Image from 'next/image';
import HeroImage3 from '../../../public/images/Destination-image-3.webp'
import HeroImage from '../../../public/images/Hero-slider-2.webp'
import HeroImage2 from '../../../public/images/Destination-6.webp'
import Btn from './Btn';
import Link from 'next/link';

function Hero() {
    return (
        <section className="hero_section h-screen relative" id='hero'>
        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            }}
            pagination={{
            clickable: true,
            }}
            // navigation={true}
            modules={[Autoplay, Navigation]}
            className="mySwiper"
            loop={true}
        >
            <SwiperSlide>
                <Image src={HeroImage2} alt={"hero image"} width={90000} height={90000} />
            </SwiperSlide>
            <SwiperSlide>
                <Image src={HeroImage} alt={"hero image"} width={90000} height={90000} />
            </SwiperSlide>
            <SwiperSlide>
                <Image src={HeroImage3} alt={"hero image"} width={90000} height={90000}/>
            </SwiperSlide>
        </Swiper>
            <div className=' absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] z-2 w-1/1 text-center px-2'>
                <p className='text-white text-3xl font-medium text-center mb-4 max-lg:text-2xl max-md:mb-3 max-md:text-xl'>THE KINGDOM OF ICE</p>
                <h1 className='font-bold text-8xl text-white max-lg:text-7xl max-md:text-6xl'>Green Land</h1>
                <Link href={"/about"}><Btn position={'medel'} text={"Learn More"}/></Link>
            </div>
        </section>
    )
}

export default Hero