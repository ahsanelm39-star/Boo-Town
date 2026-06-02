import OneBlog from "./OneBlog"
///icons
import { IoSearch } from "react-icons/io5";
import { FaStarOfLife } from "react-icons/fa";
import Link from "next/link"

function Blog() {
    const links = [
        {
            text:"Adventure",
            amount:2
        },
        {
            text:"City Tour",
            amount:4
        },
        {
            text:"Cruises Tour",
            amount:3
        },
        {
            text:"Sea Tour",
            amount:2
        },
    ]
    return (
        <section className="mt-10 ">
            <div className="collect flex gap-12 justify-center pb-10 max-lg:flex-col-reverse">
                <div className="flex flex-col gap-8">
                    <OneBlog img={'/images/blog1.webp'}  title={"Island Hopping And Weather Tips"}/>
                    <OneBlog img={'/images/blog1.webp'}  title={"Island Hopping And Weather Tips"}/>
                    <OneBlog img={'/images/blog1.webp'}  title={"Island Hopping And Weather Tips"}/>
                    <OneBlog img={'/images/blog1.webp'}  title={"Island Hopping And Weather Tips"}/>
                    <OneBlog img={'/images/blog1.webp'}  title={"Island Hopping And Weather Tips"}/>
                </div> 
                <div className="">
                    <div className="flex">
                        <input type="text" className="outline-none border border-[#ddd] w-1/1 lg:w-80 bg-[#f9f9f9] h-15 search p-2 pl-4 rounded-l-full" placeholder="Search"/>
                        <button className="bg-[#4400e7] p-2 text-white text-2xl rounded-r-full h-15 w-15 flex justify-center items-center cursor-pointer">
                            <IoSearch/>
                        </button>
                    </div>
                    <ul className="mt-6">
                        <h3 className="text-xl font-bold title_coloe mb-4">Categories</h3>
                        {links.map((link, idx)=>(
                            <li key={idx}>
                                <Link href={"/tour"} className="py-3 flex justify-between items-center border-b border-[#6767677a] cursor-pointer transition duration-300 hover:bg-[#eee]">
                                    <div className="flex items-center gap-3">
                                        <FaStarOfLife className="text-[#4400e7]"/>
                                        <span className="title_color">{link.text}</span>
                                    </div>
                                    <span className="p">{link.amount}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Blog