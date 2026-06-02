import KnowUs from "./KnowUs"
import Btn from "../Btn";

import Image from "next/image"
import Link from "next/link";

function TravelExperience() {
    return (
        <section className="py-14 experience">
            <div className="container flex gap-6 md:justify-between items-center max-lg:flex-col">
                <div className="md:w-130">
                    <KnowUs/>
                    <h3 className="text-4xl md:text-5xl title_color font-bold mb-6">Get The Best Travel Experience</h3>
                    <div className="flex flex-col gap-6 justify-center items-center">
                        <div className="flex gap-6 items-center justify-center">
                            <Image src={'/images/travel-icon1.webp'} width={70} height={70} alt="icon" />
                            <div>
                                <h4 className="text-xl font-medium mb-2"> Best Of Hotel</h4>
                                <p className="p">e don`t just work with concrate and steel we are approachable. with even our highest</p>
                            </div>
                        </div>
                        <div className="flex gap-6 items-center justify-center">
                            <Image src={'/images/travel-icon2.webp'} width={60} height={60} alt="icon" />
                            <div>
                                <h4 className="text-xl font-medium mb-2">Friendly Price</h4>
                                <p className="p">e don`t just work with concrate and steel we are approachable. with even our highest</p>
                            </div>
                        </div>
                        <div className="lg:mt-6 flex items-center max-sm:flex-wrap w-1/1">
                        <div className={'mr-4'}><Link href={"/tour"}><Btn position={'start'} text={"Learn More"} /></Link></div>
                        <div className="flex items-center gap-3">
                            <div className="flex mt-5">
                                <Image src={'/images/tst-1.webp'} width={100} height={100} alt="comment image" className="w-12 rounded-full "/>
                                <Image src={'/images/tst-2.webp'} width={100} height={100} alt="comment image" className="w-12 rounded-full -ml-3 "/>
                                <Image src={'/images/tst-3.webp'} width={100} height={100} alt="comment image" className="w-12 rounded-full -ml-3"/>
                                <Image src={'/images/tst-4.webp'} width={100} height={100} alt="comment image" className="w-12 rounded-full -ml-3"/>
                            </div>
                            <span className="text-[#464646] text-md font-bold mt-4 text-sm">52+ satisfied</span>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="flex justify-between gap-6 max-sm:flex-co max-lg:mt-4">
                    <div>
                        <div className=" relative">
                            <Image src={'/images/experience-image1.webp'} width={600} height={600} alt="image" className="w-70 mb-6 rounded-md"/>
                            <span className=" absolute top-0 left-0 w-1/1 h-1/1 bg-[#00000074] rounded-md"></span>
                            <span className=" absolute bottom-0 left-0 bg-white px-4 py-2 font-bold title_color rounded-md">Europe</span>
                        </div>
                        <div className=" relative">
                            <Image src={'/images/experience-image2.webp'} width={600} height={600} alt="image" className="w-70 rounded-md"/>
                            <span className=" absolute top-0 left-0 w-1/1 h-1/1 bg-[#00000074] rounded-md"></span>
                            <span className=" absolute bottom-0 left-0 bg-white px-4 py-2 font-bold title_color rounded-md">America</span>
                        </div>
                    </div>
                    <div className="mt-6">
                        <div className=" relative">
                            <Image src={'/images/experience-image3.webp'} width={600} height={600} alt="image" className="w-70 mb-6 rounded-md"/>
                            <span className=" absolute top-0 left-0 w-1/1 h-1/1 bg-[#00000074] rounded-md"></span>
                            <span className=" absolute bottom-0 left-0 bg-white px-4 py-2 font-bold title_color rounded-md">Afrecia</span>
                        </div>
                        <div className=" relative">
                            <Image src={'/images/blog-2.webp'} width={600} height={600} alt="image" className="w-70 h-70 max-sm:h-60 rounded-md"/>
                            <span className=" absolute top-0 left-0 w-1/1 h-1/1 bg-[#00000074] rounded-md"></span>
                            <span className=" absolute bottom-0 left-0 bg-white px-4 py-2 font-bold title_color rounded-md">Asia</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TravelExperience