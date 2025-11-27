"use client"
import SpecialHead from './SpecialHead'
///icons
import { FaStar } from "react-icons/fa6";
import { SiComma } from "react-icons/si";
///images
import Image from 'next/image';
import TestImage from '../../../public/images/tst-image-1.webp'
import TestImageBg from '../../../public/images/test-bg.webp'
import TestPerson from '../../../public/images/tst-3.webp'
import TestPerson2 from '../../../public/images/tst-1.webp'
import TestPerson3 from '../../../public/images/tst-2.webp'
////swiper
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

function Testimonials() {
    return (
        <section className='py-14 relative'>
            <Image src={TestImageBg} alt='image'  className='max-md:hidden absolute h-1/1 right-0 top-0 z-[-1]'/>
            <Image src={TestImageBg} alt='image'  className='max-md:hidden absolute h-1/1 left-0 top-0 -rotate-180 z-[-1]'/>
            <div className='mb-10 relative'>
                <SpecialHead title={'What\'s Our Clients Saying!'} description={'Our Clients Rave About Our Exceptional The Seamless Experiences That Exceeded their Expectations'} imageContent={'TESTIMONIALS'}/>
            </div>
                <Swiper
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className="mySwiper"
                >
                    <SwiperSlide className='py-20'>
                        <div className="collect flex justify-center gap-14 relative max-md:flex-col max-md:items-center">
                            <div className='bg-[#2bcebbd1] max-sm:w-70 w-80 rounded-r-xl relative h-70 test_box'>
                                <Image src={TestImage} alt='image' className='w-70 absolute -top-18 -left-10'/>
                            </div>
                            <div className='md:w-100 md-mt-6 max-md:px-4'>
                                <div className='flex mb-6'>
                                    <SiComma className='text-4xl text-[#4400E7]'/>
                                    <SiComma className='text-4xl text-[#4400E7]'/>
                                </div>
                                <p className='p'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti iure tempora amet nostrum voluptatem, ratione qui consequuntur cumque recusandae doloribus repellat, corporis laudantium laborum accusantium molestiae, error in est perferendis.</p>
                                <div className='flex gap-2 text-amber-400 mt-4'>
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                </div>
                                <div className='flex gap-4 items-center'>
                                    <div className='mt-4 p-1 border border-blue w-fit rounded-full' >
                                        <Image src={TestPerson} alt='image' className='w-14 h-14 rounded-full' />
                                    </div>
                                    <div className='flex flex-col gap-2'>
                                        <h5>TASHA STEWART</h5>
                                        <span className='text-[#242323bc] text-sm'>Web Development Of ThemeXriver</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='py-20'>
            <div className="collect flex justify-center gap-14 relative max-md:flex-col max-md:items-center">
                <div className='bg-[#2bcebbd1] max-sm:w-70 w-80 rounded-r-xl relative h-70 test_box'>
                    <Image src={TestImage} alt='image' className='w-70 absolute -top-18 -left-10'/>
                </div>
                <div className='md:w-100 md:-mt-6 max-md:px-4'>
                    <div className='flex mb-6'>
                        <SiComma className='text-4xl text-[#4400E7]'/>
                        <SiComma className='text-4xl text-[#4400E7]'/>
                    </div>
                    <p className='p'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti iure tempora amet nostrum voluptatem, ratione qui consequuntur cumque recusandae doloribus repellat, corporis laudantium laborum accusantium molestiae, error in est perferendis.</p>
                    <div className='flex gap-2 text-amber-400 mt-4'>
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </div>
                    <div className='flex gap-4 items-center'>
                        <div className='mt-4 p-1 border border-blue w-fit rounded-full' >
                            <Image src={TestPerson2} alt='image' className='w-14 h-14 rounded-full' />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <h5>TASHA STEWART</h5>
                            <span className='text-[#242323bc] text-sm'>Mopail Development Of ThemeXriver</span>
                        </div>
                    </div>
                </div>
                
            </div>
                    </SwiperSlide>
                    <SwiperSlide className='py-20'>
            <div className="collect flex justify-center gap-14 relative max-md:flex-col max-md:items-center">
                <div className='bg-[#2bcebbd1] max-sm:w-70  w-80 rounded-r-xl relative h-70 test_box '>
                    <Image src={TestImage} alt='image' className='w-70 absolute -top-18 -left-10'/>
                </div>
                <div className='md:w-100 md:-mt-6 max-md:px-4'>
                    <div className='flex mb-6'>
                        <SiComma className='text-4xl text-[#4400E7]'/>
                        <SiComma className='text-4xl text-[#4400E7]'/>
                    </div>
                    <p className='p'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti iure tempora amet nostrum voluptatem, ratione qui consequuntur cumque recusandae doloribus repellat, corporis laudantium laborum accusantium molestiae, error in est perferendis.</p>
                    <div className='flex gap-2 text-amber-400 mt-4'>
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </div>
                    <div className='flex gap-4 items-center'>
                        <div className='mt-4 p-1 border border-blue w-fit rounded-full' >
                            <Image src={TestPerson3} alt='image' className='w-14 h-14 rounded-full' />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <h5>TASHA STEWART</h5>
                            <span className='text-[#242323bc] text-sm'>Web Development Of ThemeXriver</span>
                        </div>
                    </div>
                </div>
                
            </div>
                    </SwiperSlide>
                </Swiper>
        </section>
    )
}
export default Testimonials