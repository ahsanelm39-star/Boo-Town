import Image from "next/image"
import Image1 from '../../../public/images/Destination-image-1.webp'
import Image2 from '../../../public/images/Destination-image-2.webp'
import Image3 from '../../../public/images/Destination-image-3.webp'
import Image4 from '../../../public/images/Destination-image-4.webp'
import Image5 from '../../../public/images/Destination-image-5.webp'
///icons 
import { CgTime } from "react-icons/cg";
import Btn from "../home commponent/Btn"
import TourBox from "./TourBox"

function TourFilter() {
    return (
        <section className="py-13">
            <div className="collect flex justify-between gap-10 max-xl:flex-col">
                <div> 
                    <div className="pb-5 border-b-2 border-[#dbdbdbc8] flex justify-between">
                        <h3 className="font-bold text-2xl pt-2">Criteria</h3>
                        <span className="bg-gradient-to-r from-[#1e1cac] to-[#8e00e7] py-2 px-6 rounded-full text-white cursor-pointer">Clear All</span>
                    </div>
                    <div className="max-xl:flex sm:gap-8 box_filter max-sm:flex-wrap max-sm:justify-center">
                        <ul className="w-100 2xl:w-116 max-sm:w-1/1 p-4 rounded-md bg-[#eee] mt-8">
                            <h3 className="font-medium text-2xl mb-4">Destination</h3>
                            <li className="flex justify-between border-b  pb-3 border-[#7474748e] transition duration-300 hover:bg-[#ddd] ">
                                <div className="flex items-center gap-2">
                                    <input type="checkbox" id="one" />
                                    <label htmlFor="one" className="pt-1 title_color font-medium cursor-pointer">Canada</label>
                                </div>
                                <span className="title_color bg-[#ddd] inline-block px-2 py-1 rounded-xl text-sm">5</span>
                            </li>
                            <li className="flex justify-between border-b  transition duration-300 hover:bg-[#ddd] py-3 border-[#7474748e]">
                                <div className="flex items-center gap-2">
                                    <input type="checkbox" id="two" />
                                    <label htmlFor="two" className="pt-1 title_color font-medium cursor-pointer">Emirates</label>
                                </div>
                                <span className="title_color bg-[#ddd] inline-block px-2 py-1 rounded-xl text-sm">3</span>
                            </li>
                            <li className="flex justify-between border-b  transition duration-300 hover:bg-[#ddd]  py-3 border-[#7474748e]">
                                <div className="flex items-center gap-2">
                                    <input type="checkbox" id="three" />
                                    <label htmlFor="three" className="pt-1 title_color font-medium cursor-pointer">Europe</label>
                                </div>
                                <span className="title_color bg-[#ddd] inline-block px-2 py-1 rounded-xl text-sm">11</span>
                            </li>
                            <li className="flex justify-between pt-3 transition duration-300 hover:bg-[#ddd] ">
                                <div className="flex items-center gap-2">
                                    <input type="checkbox" id="four" />
                                    <label htmlFor="four" className="pt-1 title_color font-medium cursor-pointer">France</label>
                                </div>
                                <span className="title_color bg-[#ddd] inline-block px-2 py-1 rounded-xl text-sm">8</span>
                            </li>
                        </ul>
                        <ul className="w-100 2xl:w-116 max-sm:w-1/1 p-4 rounded-md bg-[#eee] mt-8">
                            <h3 className="font-medium text-2xl mb-4">Activities</h3>
                            <li className="flex justify-between border-b  transition duration-300 hover:bg-[#ddd] pb-3 border-[#7474748e]">
                                <div className="flex items-center gap-2">
                                    <input type="checkbox" id="five" />
                                    <label htmlFor="five" className="pt-1 title_color font-medium cursor-pointer">Boating</label>
                                </div>
                                <span className="title_color bg-[#ddd] inline-block px-2 py-1 rounded-xl text-sm">17</span>
                            </li>
                            <li className="flex justify-between border-b  transition duration-300 hover:bg-[#ddd]  py-3 border-[#7474748e]">
                                <div className="flex items-center gap-2">
                                    <input type="checkbox" id="six" />
                                    <label htmlFor="six" className="pt-1 title_color font-medium cursor-pointer">City Tour</label>
                                </div>
                                <span className="title_color bg-[#ddd] inline-block px-2 py-1 rounded-xl text-sm">10</span>
                            </li>
                            <li className="flex justify-between border-b transition duration-300 hover:bg-[#ddd] py-3 border-[#7474748e]">
                                <div className="flex items-center gap-2">
                                    <input type="checkbox" id="seven" />
                                    <label htmlFor="seven" className="pt-1 title_color font-medium cursor-pointer">Kayaking</label>
                                </div>
                                <span className="title_color bg-[#ddd] inline-block px-2 py-1 rounded-xl text-sm">11</span>
                            </li>
                            <li className="flex justify-between pt-3 transition duration-300 hover:bg-[#ddd] ">
                                <div className="flex items-center gap-2">
                                    <input type="checkbox" id="eat" />
                                    <label htmlFor="eat" className="pt-1 title_color font-medium cursor-pointer">Nayagra Fails</label>
                                </div>
                                <span className="title_color bg-[#ddd] inline-block px-2 py-1 rounded-xl text-sm">4</span>
                            </li>
                        </ul>
                        <ul className="w-100 2xl:w-116 max-sm:w-1/1 p-4 rounded-md bg-[#eee] mt-8 max-lg:hidden">
                            <h3 className="font-medium text-2xl mb-4">Trip Types</h3>
                            <li className="flex justify-between border-b  transition duration-300 hover:bg-[#ddd]  pb-3 border-[#7474748e]">
                                <div className="flex items-center gap-2">
                                    <input type="checkbox" id="nine" />
                                    <label htmlFor="nine" className="pt-1 title_color font-medium cursor-pointer">Luxury</label>
                                </div>
                                <span className="title_color bg-[#ddd] inline-block px-2 py-1 rounded-xl text-sm">13</span>
                            </li>
                            <li className="flex justify-between border-b  transition duration-300 hover:bg-[#ddd]  py-3 border-[#7474748e]">
                                <div className="flex items-center gap-2">
                                    <input type="checkbox" id="ten" />
                                    <label htmlFor="ten" className="pt-1 title_color font-medium cursor-pointer">Premium</label>
                                </div>
                                <span className="title_color bg-[#ddd] inline-block px-2 py-1 rounded-xl text-sm">8</span>
                            </li>
                            <li className="flex justify-between pt-3  transition duration-300 hover:bg-[#ddd] ">
                                <div className="flex items-center gap-2">
                                    <input type="checkbox" id="eleven" />
                                    <label htmlFor="eleven" className="pt-1 title_color font-medium cursor-pointer">Standerd</label>
                                </div>
                                <span className="title_color bg-[#ddd] inline-block px-2 py-1 rounded-xl text-sm">3</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div  className="flex justify-center items-center gap-8 mb-8 max-sm:flex-wrap">
                        <TourBox image={Image1} title={"Canada, Gananoque Island"}/>
                        <TourBox image={Image2} title={"France, Eiffel Tower"}/>
                    </div>
                    <div  className="flex justify-center items-center gap-8 mb-8 max-sm:flex-wrap">
                        <TourBox image={Image3} title={"South Africa Places"}/>
                        <TourBox image={Image4} title={"United Arab Emirates Desert"}/>
                    </div>
                        <div className="flex justify-center">
                            <TourBox image={Image5} title={"Pradadise, Places"}/>
                        </div>
                </div>
            </div>
        </section>
    )
}

export default TourFilter 