import OneBlog from "./OneBlog"
import Image1 from '../../../public/images/blog1.webp'
import Image2 from '../../../public/images/blog2.webp'
import Image3 from '../../../public/images/blog3.webp'
import Image4 from '../../../public/images/blog4.webp'
import Image5 from '../../../public/images/blog5.webp'
///icons
import { IoSearch } from "react-icons/io5";
import { FaStarOfLife } from "react-icons/fa";

function Blog() {
    return (
        <section className="mt-10 ">
            <div className="collect flex gap-12 justify-center pb-10">
                <div className="flex flex-col gap-8">
                    <OneBlog img={Image1} title={"Island Hopping And Weather Tips"}/>
                    <OneBlog img={Image2} title={"Island Hopping And Weather Tips"}/>
                    <OneBlog img={Image3} title={"Island Hopping And Weather Tips"}/>
                    <OneBlog img={Image4} title={"Island Hopping And Weather Tips"}/>
                    <OneBlog img={Image5} title={"Island Hopping And Weather Tips"}/>
                </div> 
                <div className="">
                    <div className="flex">
                        <input type="text" className="outline-none border border-[#ddd] w-80 bg-[#f9f9f9] h-15 search p-2 pl-4 rounded-l-full" placeholder="Search"/>
                        <button className="bg-[#4400e7] p-2 text-white text-2xl rounded-r-full h-15 w-15 flex justify-center items-center cursor-pointer">
                            <IoSearch/>
                        </button>
                    </div>
                    <ul className="mt-6">
                        <h3 className="text-xl font-bold title_coloe mb-4">Categories</h3>
                        <li className="py-3 flex justify-between items-center border-b border-[#6767677a] cursor-pointer transition duration-300 hover:bg-[#eee]">
                            <div className="flex items-center gap-3">
                                <FaStarOfLife className="text-[#4400e7]"/>
                                <span className="title_color">Adventure</span>
                            </div>
                            <span className="p">2</span>
                        </li>
                        <li className="py-3 flex justify-between items-center border-b border-[#6767677a] cursor-pointer transition duration-300 hover:bg-[#eee]">
                            <div className="flex items-center gap-2">
                                <FaStarOfLife className="text-[#4400e7]"/>
                                <span className="font-medium title_color">City Tour</span>
                            </div>
                            <span className="p">4</span>
                        </li>
                        <li className="py-3 flex justify-between items-center border-b border-[#6767677a] cursor-pointer transition duration-300 hover:bg-[#eee]">
                            <div className="flex items-center gap-2">
                                <FaStarOfLife className="text-[#4400e7]"/>
                                <span className="font-medium title_color">Cruises Tour</span>
                            </div>
                            <span className="p">3</span>
                        </li>
                        <li className="py-3 flex justify-between items-center  cursor-pointer transition duration-300 hover:bg-[#eee]">
                            <div className="flex items-center gap-2">
                                <FaStarOfLife className="text-[#4400e7]"/>
                                <span className="font-medium title_color">Sea Tour</span>
                            </div>
                            <span className="p">2</span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Blog