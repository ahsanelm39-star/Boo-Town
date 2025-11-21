"use client"

import Link from "next/link";
//images
import Image from "next/image";
import Logo from '../../../public/images/brand-image5.webp'
import Face from '../../../public/images/face.png'
import Insta from '../../../public/images/insta.png'
import Wats from '../../../public/images/wats.png'
//icons
import { IoSearch } from "react-icons/io5";
import { useEffect, useState } from "react";
import { VscListSelection } from "react-icons/vsc";
///

    const menuItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Tour", href: "#tour" },
    { label: "Blog", href: "#blog" },
    { label: "Contact", href: "#contact" },
];

///////
    function remove() {
        const menuo = document.querySelector(".menuo")
        menuo.classList.remove("menuo-back")
    }

    function Menuo() {
        const [activeIndex, setActiveIndex] = useState(0);
        return (
        <div className={`md:hidden fixed bg-[#0000005d] w-full h-[100vh] top-0 
        right-0 flex justify-end z-55 menuo transition-all duration-300 `}>
            <div className=' bg-black h-[100vh] w-[250px] flex flex-col justify-evenly px-8'>
                <span onClick={remove} className='text-2xl text-white font-medium cursor-pointer absolute top-6 right-6 transition-all hover:text-red-500'>X</span>
                <div className="ml-6">
                    <Link href={'#home'}>
                        <Image src={Logo} alt='logo' />
                    </Link>
                </div>
                <ul className='flex flex-col gap-6 text-white items-center list-ul'>
                    {menuItems.map((item, idx) => (
                    <Link href={item.href} key={item.label} onClick={() => { setActiveIndex(idx); }}>
                        <li className={`cursor-pointer transition-all hover:text-[#4400E7] ${activeIndex === idx ? "on" : ""}`}>
                        {item.label}
                        </li>
                    </Link>
                    ))}
                </ul>
                <div className="flex gap-4 justify-center items-center">
                    <Image src={Face} alt="social media" className="w-10 h-10 mr-3 rounded-sm"/>
                    <Image src={Insta} alt="social media"className="w-10 h-10"/>
                    <Image src={Wats} alt="social media" className="w-15"/>
                </div>
            </div>
        </div>
    )
    }

function Header() {
    const [activeIndex, setActiveIndex] = useState(0);
function showMenuo() {
    const menuo = document.querySelector(".menuo")
        menuo.classList.add("menuo-back")
    }
    useEffect(()=>{
        window.addEventListener("click",(e)=>{
            if(e.target.classList.contains("menuo")){
            e.target.classList.remove("menuo-back")
            }
        })
    },[])
    return (
        <>
        <Menuo />
        <header className="border-1 rounded-full border-[#fff] fixed  w-1/1 -top-18 left-0 pt-18 max-md:pb-2  z-50 max-md:-top-17 max-md:rounded-4xl
        border-r-0 border-l-0 backdrop-blur-2xl shadow-sm">
            <nav className="collect flex justify-between items-center py-1">
                <div>
                <Image src={Logo} alt="logo"/>
                </div>
                <div className="flex justify-center items-center gap-3 max-md:gap-4">
                    
                    <ul className="flex max-md:hidden linkes relative pr-2">
                        {menuItems.map((item, idx) => (
                        <Link href={item.href} key={item.label} onClick={() => { setActiveIndex(idx); }}>
                            <li className={`p-4 font-bold text-white transition-all hover:text-[#4400E7] ${activeIndex === idx ? "on" : ""}`}>
                            {item.label}
                            </li>
                        </Link>
                        ))}
                    </ul>
                    <IoSearch   className=" text-2xl text-white md:ml-1 cursor-pointer"/>
                    <div onClick={showMenuo} className="md:hidden text-white text-3xl cursor-pointer">
                        <VscListSelection />
                    </div>
                </div>
            </nav>
        </header>
        </>
    )
}

export default Header