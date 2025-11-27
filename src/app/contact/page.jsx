import Image from 'next/image'
import Banner from '../../../public/images/section-banner.webp'
import ContactBg from '../../../public/images/contact-bg.webp'
//commponent
import MainFooter from '../home commponent/MainFooter'
///icons
import { IoLocation } from "react-icons/io5";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import MainSection from '../home commponent/MainSection';


function page() {
    return (
        <>
            <MainSection text={"Contact"}/>
            <div className='my-14'>
                <div className="collect">
                    <h2 className='font-bold md:w-160 text-4xl md:text-5xl title_color tracking-tight text-center mx-auto mb-10'>Get In Touch With Our Lavely Team</h2>
                </div>
                <div className="collect flex justify-center gap-10 items-center max-md:flex-wrap">
                    <div className=' rounded-2xl'>
                        <div className=' relative'>
                            <ul className=' absolute top-[50%] translate-y-[-50%] left-6 max-sm:left-2 flex flex-col gap-4 sm:w-100'>
                                <li className='flex gap-2 items-center'>
                                        <IoLocation className='text-white bg-[#4400e7] p-2 rounded-full text-5xl'/>
                                    <div>
                                        <h3 className='text-xl font-bold text-white mb-2'>Office Adress</h3>
                                        <span className='text-white text-sm block'>Travel Agency Network 20</span>
                                        <span className='text-white text-sm'>Eastbourne Terrace, London We 5LG</span>
                                    </div>
                                </li>
                                <li className='flex gap-2 items-center'>
                                        <FaPhone className='text-white bg-[#4400e7] p-2 rounded-full text-5xl'/>
                                    <div>
                                        <h3 className='text-xl font-bold text-white mb-2'>Phone Number</h3>
                                        <span className='text-white text-sm block'>(408) 333-444-555</span>
                                        <span className='text-white text-sm block'>(408) 333-444-555</span>
                                    </div>
                                </li>
                                <li className='flex gap-2 items-center'>
                                        <MdEmail className='text-white bg-[#4400e7] p-2 rounded-full text-5xl'/>
                                    <div>
                                        <h3 className='text-xl font-bold text-white mb-2'>Mail Adress</h3>
                                        <span className='text-white text-sm block'>info@gmail.com</span>
                                        <span className='text-white text-sm'>support@gmail.com</span>
                                    </div>
                                </li>
                            </ul>
                            <Image src={ContactBg} alt='contact image' className='w-1/1 max-lg:h-[450px] lg:h-[510px]'/>
                        </div>
                    </div>
                    <form className='bg-[#eee] w-1/1 md:w-140 rounded-2xl flex flex-col gap-4 p-6 border border-[#ddd]'>
                        <input type="text" placeholder='Full Name' className='h-12 w-1/1 rounded-full bg-[#fff] border border-[#ccc] pl-4 p' required/>
                        <input type="email" placeholder='Email Adress' className='h-12 lg:h-14 w-1/1 rounded-full bg-[#fff] border border-[#ccc] pl-4 p' required/>
                        <input type="text" placeholder='Phone Number' className='h-12 lg:h-14 w-1/1 rounded-full bg-[#fff] border border-[#ccc] pl-4 p' required/>
                        <input type="text" placeholder='Subject' className='h-12 lg:h-14 w-1/1 rounded-full bg-[#fff] border border-[#ccc] pl-4 p' />
                        <textarea className='text-[#9a9a9ad0] bg-white h-22 lg:h-28 rounded-3xl p-4 outline-0'>Message</textarea>
                        <button className='w-1/1 bg-gradient-to-r from-[#1e1cac] to-[#8e00e7] text-white font-bold
                        rounded-full p-3 cursor-pointer transition duration-300 hover:opacity-90'>Send Message Now</button>
                    </form>
                </div>
            </div>
            <MainFooter/>
        </>
    )
}

export default page