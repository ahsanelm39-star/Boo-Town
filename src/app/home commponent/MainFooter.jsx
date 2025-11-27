import Link from "next/link"
///imge
import Image from "next/image"
import Image1 from '../../../public/images/ins1.webp'
import Image2 from '../../../public/images/ins2.webp'
import Image3 from '../../../public/images/ins3.webp'
import Image4 from '../../../public/images/ins4.webp'
import Image5 from '../../../public/images/ins5.webp'
import Face from '../../../public/images/face.png'
import Insta from '../../../public/images/insta.png'
import Wats from '../../../public/images/wats.png'
///icons
import { FaCheck } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";

function MainFooter() {
    return (
        <footer className="pt-12" id="footer">
            <div className="collect">
                <div>
                    <h2 className="title_color text-4xl font-bold">Quick Links :</h2>
                </div>
                <div className="mt-8 flex justify-between max-xl:flex-wrap gap-8"> 
                    <ul className="flex flex-col">
                        <li className="flex gap-2 items-center">
                            <FaCheck className=" font-bold text-white bg-[#4400e7] rounded-full p-1 text-xl"/>
                            <Link href={""} className="font-bold title_color text-lg pb-2 pt-1 a transition duration-300">Branding</Link>
                        </li>
                        <li className="flex gap-2 items-center">
                            <FaCheck className=" font-bold text-white bg-[#4400e7] rounded-full p-1 text-xl"/>
                            <Link href={""} className="font-bold title_color text-lg pb-2 pt-1 a transition duration-300">Recent Work</Link>
                        </li>
                        <li className="flex gap-2 items-center">
                            <FaCheck className=" font-bold text-white bg-[#4400e7] rounded-full p-1 text-xl"/>
                            <Link href={""} className="font-bold title_color text-lg pt-1 a transition duration-300">Our History</Link>
                        </li>
                    </ul>
                    <ul className="flex flex-col">
                        <li className="flex gap-2 items-center">
                            <FaCheck className=" font-bold text-white bg-[#4400e7] rounded-full p-1 text-xl"/>
                            <Link href={""} className="font-bold title_color text-lg pb-2 pt-1 a transition duration-300">Product Gallary</Link>
                        </li>
                        <li className="flex gap-2 items-center">
                            <FaCheck className=" font-bold text-white bg-[#4400e7] rounded-full p-1 text-xl"/>
                            <Link href={""} className="font-bold title_color text-lg pb-2 pt-1 a transition duration-300">Web & Interactive</Link>
                        </li>
                        <li className="flex gap-2 items-center">
                            <FaCheck className=" font-bold text-white bg-[#4400e7] rounded-full p-1 text-xl"/>
                            <Link href={""} className="font-bold title_color text-lg pt-1 a transition duration-300">Help & Support</Link>
                        </li>
                    </ul>
                    <ul className="flex flex-col">
                        <li className="flex gap-2 items-center">
                            <FaCheck className=" font-bold text-white bg-[#4400e7] rounded-full p-1 text-xl"/>
                            <Link href={""} className="font-bold title_color text-lg pb-2 pt-1 a transition duration-300">About Us</Link>
                        </li>
                        <li className="flex gap-2 items-center">
                            <FaCheck className=" font-bold text-white bg-[#4400e7] rounded-full p-1 text-xl"/>
                            <Link href={""} className="font-bold title_color text-lg pb-2 pt-1 a transition duration-300">Branded Merchandise</Link>
                        </li>
                        <li className="flex gap-2 items-center">
                            <FaCheck className=" font-bold text-white bg-[#4400e7] rounded-full p-1 text-xl"/>
                            <Link href={""} className="font-bold title_color text-lg pt-1 a transition duration-300">Our Awards</Link>
                        </li>
                    </ul>
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <FaPhone className="font-bold text-[#16b36fd0] text-2xl"/>
                            <span className="font-bold text-xl max-md:text-[18px]">999 555 7777</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <MdAttachEmail className="font-bold text-[#a6b316d0] text-2xl"/>
                            <span className="font-bold text-xl max-md:text-[15px]">examble@gmail.com</span>
                        </div>
                        <div className="flex gap-4 items-center mt-2">
                            <Link href={"https://www.facebook.com/"} target="blanck"><Image src={Face} alt="social media" className="w-8 h-8 mr-3 rounded-sm"/></Link>
                            <Link href={"https://www.instagram.com/"} target="blanck"><Image src={Insta} alt="social media"className="w-8 h-8"/></Link>
                            <Link href={"https://www.whatsapp.com/?lang=en"} target="blanck"><Image src={Wats} alt="social media" className="w-16 pt-2"/></Link>
                        </div>
                    </div>
                </div>
                <div className="flex gap-6 justify-between items-center mt-12 overflow-auto">
                    <Image src={Image1} alt="" className="rounded-xl w-70"/>
                    <Image src={Image2} alt="" className="rounded-xl w-70"/>
                    <Image src={Image3} alt="" className="rounded-xl w-70"/>
                    <Image src={Image4} alt="" className="rounded-xl w-70"/>
                    <Image src={Image5} alt="" className="rounded-xl w-70"/>
                </div>
            </div>
            <p className="px-2 py-3 border-t border-[#ccc] font-bold text-[#3b3b3b] text-center mt-10">
                    &copy;	2025 Ahmed Hassan - <span className="text-[#696969]">All Rights Rerserved</span>
            </p>
        </footer>
    )
}

export default MainFooter