import KnowUs from "./KnowUs"
import Btn from "../home commponent/Btn"
//images
import Image from "next/image"
import Box1Image1 from '../../../public/images/price-1.webp'
import Box1Image2 from '../../../public/images/price-2.webp'
import Box2Image1 from '../../../public/images/price-3.webp'
import Box2Image2 from '../../../public/images/price-4.webp'
import Box3Image1 from '../../../public/images/price-5.webp'
import Box3Image2 from '../../../public/images/ins4.webp'
///icons
import { FaRegCircleCheck } from "react-icons/fa6";
import Link from "next/link"


function Price() {


    const data = [
        {
            price:49,
            title:"Turkey Tour",
            img1:Box1Image1,
            img2:Box1Image2
        },
        {
            price:69,
            title:"Full Travel",
            img1:Box2Image1,
            img2:Box2Image2
        },
        {
            price:99,
            title:"World Tour",
            img1:Box3Image1,
            img2:Box3Image2
        }
    ]

    const dataList = data.map((box,idx)=>{
        return (
            <div key={idx} className="max-xl:w-[380px]  p-8 bg-white rounded-md shadow-md border border-[#eee]
            transition duration-300 hover:translate-y-[-10px] hover:shadow-xl">
                <div className="flex">
                    <span className="font-bold text-xl mr-1">$</span>
                    <span className="text-5xl font-bold bg-gradient-to-r from-[#1e1cac] to-[#8e00e7] text-transparent bg-clip-text">{box.price}</span>
                    <span className="mt-6 ml-2 text-xl">/ Month</span>
                </div>
                <div className="flex gap-3 items-center justify-center mt-6">
                    <Image src={box.img1} alt="price image" className="w-60 h-25 rounded-full"/>
                    <Image src={box.img2} alt="price image" className="rounded-full h-25 w-30"/>
                </div>
                <h3 className="title_color text-4xl font-bold mt-6">
                    {box.title}
                </h3>
                <p className="p my-4">We Don`t Just Work With Concret We Are Approachable</p>
                <div className=" border-t border-[#ddd] py-4">
                    <ul className="flex flex-col gap-4 mt-4">
                        <li  className="flex gap-2 items-center">
                            <FaRegCircleCheck className="text-[#4400e7]"/>
                            <span className="font-bold text-xl text-[#181818f0]">Generation Technology</span>
                        </li>
                        <li  className="flex gap-2 items-center">
                            <FaRegCircleCheck className="text-[#4400e7]"/>
                            <span className="font-bold text-xl text-[#181818f0]">Audio Performance</span>
                        </li>
                        <li  className="flex gap-2 items-center">
                            <FaRegCircleCheck className="text-[#4400e7]"/>
                            <span className="font-bold text-xl text-[#181818f0]">Generation Technology</span>
                        </li>
                        <li  className="flex gap-2 items-center">
                            <FaRegCircleCheck className="text-[#4400e7]"/>
                            <span className="font-bold text-xl text-[#181818f0]">Generation Technology</span>
                        </li>
                    </ul>
                </div>
                <Link href={"/contact"}><Btn position={''} text={'Get Started'}/></Link>
            </div>
        )
    })


    return (
        <section className="py-14">
            <div className="collect max-xl:text-center">
                <div className="w-fit max-xl:mx-auto"><KnowUs/></div>
                <h2 className="title_color text-3xl md:text-4xl font-bold">Best Holiady Backage</h2>
            </div>
            <div className="collect flex justify-center items-center gap-6 pt-12 max-xl:flex-wrap">
                {dataList}
            </div>
        </section>
    )
}

export default Price