//icons
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

import Btn from "../Btn"
import Image from "next/image"
import Link from "next/link"

const AboutCompony = ()=> {
    return (
        <section className="py-14 max-md:-mt-44 md:-mt-12 bg-[url(/images/about-bg.webp)]">
            <div className="container flex justify-between max-lg:flex-col max-lg:items-center">
                <div>
                    <div className=" md:w-130 mb-8 max-md:px-3 xl:w-160 max-lg:text-center max-md:mb-14">
                        <div className="flex gap-2 mb-6 max-lg:justify-center">
                            <Image src={'/images/plane.svg'} width={200} height={200}  alt="Airplane" className="w-8"/>
                                <em className="text-md text-[#4400E7] font-bold">ABOUT OUR COMPONY</em>
                            <Image src={'/images/plane.svg'} width={200} height={200} alt="Airplane" className="w-8"/>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-5 text-[#2a2a2a]">Exoirence World With Our Compony </h2>
                        <p className="font-medium text-[#575757] text-md">Embark on a transformative journey with our company, where every experience is a gateway to the extraordinary.</p>
                    </div>
                    <div className="flex gap-6 items-center max-lg:justify-center max-sm:flex-col ">
                        <Image src={'/images/about-image-2.webp'}  width={1000} height={1000} alt="family" className="w-63  xl:w-90 rounded-r-4xl max-sm:w-1/1"/>
                        <ul>
                            <li className="flex items-center gap-2 text-xl mb-4"><IoMdCheckmarkCircleOutline className="text-[#4400e7] font-bold" /><span className="text-[#4f4f4f] font-bold">Perfect Detailing</span></li>
                            <li className="flex items-center gap-2 text-xl mb-4"><IoMdCheckmarkCircleOutline className="text-[#4400e7] font-bold" /><span className="text-[#4f4f4f] font-bold">Completed Certification</span></li>
                            <li className="flex items-center gap-2 text-xl mb-4"><IoMdCheckmarkCircleOutline className="text-[#4400e7] font-bold" /><span className="text-[#4f4f4f] font-bold">Save Your Budget</span></li>
                            <li className="flex items-center gap-2 text-xl "><IoMdCheckmarkCircleOutline className="text-[#4400e7] font-bold" /><span className="text-[#4f4f4f] font-bold">Free Consultations</span></li>
                        </ul>
                    </div>
                    <div className="mt-8 gap-4 flex items-center max-md:justify-center max-sm:flex-col">
                        <Link href={"/about"}><Btn position={'start'} text={"Learn More"}/></Link>
                        <div className="flex items-center gap-3">
                            <div className="flex mt-4">
                                <Image src={'/images/tst-1.webp'}  width={200} height={200} alt="comment image" className="w-12 rounded-full "/>
                                <Image src={'/images/tst-2.webp'}  width={200} height={200} alt="comment image" className="w-12 rounded-full -ml-3 "/>
                                <Image src={'/images/tst-3.webp'}  width={200} height={200} alt="comment image" className="w-12 rounded-full -ml-3"/>
                                <Image src={'/images/tst-4.webp'}  width={200} height={200} alt="comment image" className="w-12 rounded-full -ml-3"/>
                            </div>
                            <span className="text-[#464646] text-md font-bold mt-4 max-sm:text-sm">52+ satisfied clients</span>
                        </div>
                    </div>
                </div>
                <div className="relative max-lg:mt-16">
                    <Image src={'/images/about-element-1.webp'} width={200} height={200} alt="Airplane" className=" absolute w-50 max-xl:-left-6 max-xl:-top-6 max-sm:w-35 max-sm:-left-2" />
                    <Image src={'/images/about-image-1.webp'} width={600} height={600} alt="Traveling girl" className="max-xl:w-100"/>
                </div>
            </div>
        </section>
    )
}

export default AboutCompony