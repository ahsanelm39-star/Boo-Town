import KnowUs from "./KnowUs"
import Btn from "../home commponent/Btn";
///icons
import { FaStar } from "react-icons/fa6";
//images
import Image from "next/image"
import Image1 from '../../../public/images/experience-image1.webp'
import Image2 from '../../../public/images/experience-image2.webp'
import Image3 from '../../../public/images/experience-image3.webp'
import Image4 from '../../../public/images/blog-2.webp'
import Icon1 from '../../../public/images/travel-icon1.webp'
import Icon2 from '../../../public/images/travel-icon2.webp'
import AboutCommentImage1 from '../../../public/images/tst-1.webp'
import AboutCommentImage2 from '../../../public/images/tst-2.webp'
import AboutCommentImage3 from '../../../public/images/tst-3.webp'
import AboutCommentImage4 from '../../../public/images/tst-4.webp'
import Link from "next/link";

function TravelExperience() {
    return (
        <section className="py-14 experience">
            <div className="collect flex gap-6 md:justify-between items-center max-lg:flex-col">
                <div className="md:w-130">
                    <KnowUs/>
                    <h3 className="text-4xl md:text-5xl title_color font-bold mb-6">Get The Best Travel Experience</h3>
                    <div className="flex flex-col gap-6 justify-center items-center">
                        <div className="flex gap-6 items-center justify-center">
                            <Image src={Icon1} alt="icon" />
                            <div>
                                <h4 className="text-xl font-medium mb-2"> Best Of Hotel</h4>
                                <p className="p">e don`t just work with concrate and steel we are approachable. with even our highest</p>
                            </div>
                        </div>
                        <div className="flex gap-6 items-center justify-center">
                            <Image src={Icon2} alt="icon" />
                            <div>
                                <h4 className="text-xl font-medium mb-2">Friendly Price</h4>
                                <p className="p">e don`t just work with concrate and steel we are approachable. with even our highest</p>
                            </div>
                        </div>
                        <div className="lg:mt-6 flex items-center max-sm:flex-wrap w-1/1">
                        <div className={'mr-4'}><Link href={"/tour"}><Btn position={'start'} text={"Learn More"} /></Link></div>
                        <div className="flex items-center gap-3">
                            <div className="flex mt-5">
                                <Image src={AboutCommentImage1} alt="coment imageC" className="w-12 rounded-full "/>
                                <Image src={AboutCommentImage2} alt="coment imageC" className="w-12 rounded-full -ml-3 "/>
                                <Image src={AboutCommentImage3} alt="coment imageC" className="w-12 rounded-full -ml-3"/>
                                <Image src={AboutCommentImage4} alt="coment imageC" className="w-12 rounded-full -ml-3"/>
                            </div>
                            <span className="text-[#464646] text-md font-bold mt-4 text-sm">52+ satisfied</span>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="flex justify-between gap-6 max-sm:flex-co max-lg:mt-4">
                    <div>
                        <div className=" relative">
                            <Image src={Image1} alt="image" className="w-70 mb-6 rounded-md"/>
                            <span className=" absolute top-0 left-0 w-1/1 h-1/1 bg-[#00000074] rounded-md"></span>
                            <span className=" absolute bottom-0 left-0 bg-white px-4 py-2 font-bold title_color rounded-md">Europe</span>
                        </div>
                        <div className=" relative">
                            <Image src={Image2} alt="image" className="w-70 rounded-md"/>
                            <span className=" absolute top-0 left-0 w-1/1 h-1/1 bg-[#00000074] rounded-md"></span>
                            <span className=" absolute bottom-0 left-0 bg-white px-4 py-2 font-bold title_color rounded-md">America</span>
                        </div>
                    </div>
                    <div className="mt-6">
                        <div className=" relative">
                            <Image src={Image3} alt="image" className="w-70 mb-6 rounded-md"/>
                            <span className=" absolute top-0 left-0 w-1/1 h-1/1 bg-[#00000074] rounded-md"></span>
                            <span className=" absolute bottom-0 left-0 bg-white px-4 py-2 font-bold title_color rounded-md">Afrecia</span>
                        </div>
                        <div className=" relative">
                            <Image src={Image4} alt="image" className="w-70 h-70 max-sm:h-60 rounded-md"/>
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