import Image from 'next/image'
import Banner from '../../../public/images/section-banner.webp'
import ContactBg from '../../../public/images/contact-bg.webp'
//commponent
import MainFooter from '../home commponent/MainFooter'
///icons
import { IoLocation } from "react-icons/io5";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


function page() {
    return (
        <>
            <section className="mb-14 relative">
                <Image src={Banner} alt="image" className="h-130"/>
                <div className=" absolute top-[50%] left-[10%]">
                    <h2 className="text-6xl font-bold text-white">Contact</h2>
                </div>
            </section>
            <div className='mb-14'>
                <div className="collect">
                    <h2 className='font-bold w-160 text-5xl title_color mb-6 tracking-tight text-center mx-auto mb-10'>Get In Touch With Our Lavely Team</h2>
                </div>
                <div className="collect flex justify-center gap-10 items-center">
                    <div className='h-[500px] w-150 rounded-2xl'>
                        <div className=' relative'>
                            <ul className=' absolute top-[50%] translate-y-[-50%] left-6 flex flex-col gap-4 w-100'>
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
                            <Image src={ContactBg} alt='image' className='w-1/1 h-[510px]'/>
                        </div>
                    </div>
                    <form className='bg-[#eee] mt-2 w-140 rounded-2xl flex flex-col gap-4 p-6 border border-[#ddd]'>
                        <input type="text" placeholder='Full Name' className='h-14 w-1/1 rounded-full bg-[#fff] border border-[#ccc] pl-4 p' required/>
                        <input type="email" placeholder='Email Adress' className='h-14 w-1/1 rounded-full bg-[#fff] border border-[#ccc] pl-4 p' required/>
                        <input type="text" placeholder='Phone Number' className='h-14 w-1/1 rounded-full bg-[#fff] border border-[#ccc] pl-4 p' required/>
                        <input type="text" placeholder='Subject' className='h-14 w-1/1 rounded-full bg-[#fff] border border-[#ccc] pl-4 p' />
                        <textarea className='text-[#9a9a9ad0] bg-white h-28 rounded-3xl p-4 outline-0'>Message</textarea>
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