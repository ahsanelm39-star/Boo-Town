"use client"
import Link from "next/link";
//images
import Image from "next/image";
import Logo from '../../../public/images/brand-image5.webp'
import Face from '../../../public/images/face.png'
import Insta from '../../../public/images/insta.png'
import Wats from '../../../public/images/wats.png'
import Google from '../../../public/images/google.png'
//icons
import { IoSearch } from "react-icons/io5";
import { useEffect, useState } from "react";
import { VscListSelection } from "react-icons/vsc";


function Header() {
    const [changeScroll,setChangeScroll]=useState(false)
    const [search,setSearch]=useState(false)
    const [menuo,setMenuo]=useState(false)
    const menuItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Tour", href: "/tour" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
];
useEffect(()=>{
    window.addEventListener("scroll",()=>{
        if(window.scrollY > 200){
            setChangeScroll(true)
        }else{
            setChangeScroll(false)
        }
    })
    return ()=> window.removeEventListener("scroll")
},[])

    return (
        <>
        <header id="header" className={`${changeScroll ? "bg-white":""} border rounded-full border-white fixed  w-1/1 -top-18 left-0 pt-18 max-md:pb-2  z-50 max-md:-top-17 max-md:rounded-4xl
        border-r-0 border-l-0 shadow-sm`}>
            <div className={`${search?"flex":"hidden"} fixed bg-[#ffffffe8] h-screen w-1/1 top-0 left-0 z-60 flex items-center justify-center`}>
                <span onClick={()=>setSearch(false)} className=" absolute top-6 right-6 bg-red-500 text-white py-2 px-4 rounded-full font-bold cursor-pointer">X</span>
                <div className="flex items-center w-[80%]">
                    <input type="text" className="w-1/1 h-14 pl-4 bg-[#ddd] rounded-l-xl" placeholder="search Her"/>
                    <button className="h-14 bg-blue-600 text-white w-15 flex items-center justify-center font-bold text-xl
                    rounded-r-xl cursor-pointer"><IoSearch/></button>
                </div>
            </div>
            <nav className="collect flex justify-between items-center py-1">
                <div>
                <Link href={"/"}><Image src={Logo} alt="logo"/></Link>
                </div>
                <div className="flex justify-center items-center gap-3 max-md:gap-4">
                        <IoSearch onClick={()=>setSearch(true)}  className={`${changeScroll?"text_black":""} text-2xl text-white md:ml-1 cursor-pointer search_icon`}/>
                    <ul className="flex max-md:hidden linkes relative ">
                        {menuItems.map((item, idx) => (
                        <li key={idx} >
                            <Link href={item.href}  className={`${changeScroll?"text_black":""} inline-block p-4 font-bold text-white transition-all`}>
                                {item.label}
                            </Link>
                        </li>
                        ))}
                    </ul>
                    <div onClick={()=>setMenuo(true)} className={`${changeScroll?"text_black":""} md:hidden text-white list_icon_menuo text-3xl cursor-pointer`}>
                        <VscListSelection />
                    </div>
                </div>
            </nav>
            <div className={`${menuo?"translate-x-0":"translate-x-1/1"} md:hidden fixed bg-[#0000005d] w-full h-screen top-0 
            right-0 flex justify-end z-55 transition-all duration-300 `}>
                <div className=' bg-black h-screen w-[250px] flex flex-col justify-evenly px-8'>
                    <span onClick={()=>setMenuo(false)} className='text-2xl text-white font-medium cursor-pointer absolute top-6 right-6 transition-all hover:text-red-500'>X</span>
                    <div className="ml-6">
                        <Link onClick={()=>setMenuo(false)} href={'/'} >
                            <Image src={Logo} alt='logo' />
                        </Link>
                    </div>
                    <ul className='flex flex-col gap-6 text-white items-center list-ul'>
                        {menuItems.map((item, idx) => (
                        <li  key={idx}>
                            <Link onClick={()=>setMenuo(false)} href={item.href} className={`cursor-pointer transition-all`}>
                            {item.label}
                            </Link>
                        </li>
                        ))}
                    </ul>
                    <div className="flex gap-4 justify-center items-center">
                        <Link href={"https://www.facebook.com/"} target="blank" className="w-10 rounded-md mr-4"><Image src={Face} alt="google" className="rounded-md"/></Link>
                        <Link href={"https://www.instagram.com/"} target="blank" className="w-10"><Image src={Insta} alt="google"/></Link>
                        <Link href={"https://www.whatsapp.com/?lang=en"} target="blank" className="w-18"><Image src={Wats} alt="google"/></Link>
                    </div>
                </div>
            </div>
        </header>
        </>
    )
}

export default Header