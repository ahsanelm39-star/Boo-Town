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

//phoneMenu
    const menuItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Tour", href: "/tour" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
];
    function remove() {
        const menuo = document.querySelector(".menuo")
        menuo.classList.remove("menuo-back")
    }
    function Menuo() {
        return (
        <div className={`md:hidden fixed bg-[#0000005d] w-full h-screen top-0 
        right-0 flex justify-end z-55 menuo transition-all duration-300 `}>
            <div className=' bg-black h-screen w-[250px] flex flex-col justify-evenly px-8'>
                <span onClick={remove} className='text-2xl text-white font-medium cursor-pointer absolute top-6 right-6 transition-all hover:text-red-500'>X</span>
                <div className="ml-6">
                    <Link href={'/'} onClick={remove}>
                        <Image src={Logo} alt='logo' />
                    </Link>
                </div>
                <ul className='flex flex-col gap-6 text-white items-center list-ul'>
                    {menuItems.map((item, idx) => (
                    <li  key={idx}>
                        <Link href={item.href} onClick={remove} className={`cursor-pointer transition-all`}>
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
    )
    }
////finsh phoneMenu

///search
    function searchPage () {
        const search = document.querySelector(".search")
        search.classList.add("search-back")
    }
    function removeSearch () {
        const search = document.querySelector(".search")
        search.classList.remove("search-back")
    }
    function Search() {
        return (
        <div className="w-1/1 h-screen bg-[#ffffffcf] fixed z-100 search hidden">
            <div className="flex items-center mx-4 sm:mx-auto sm:w-fit mt-30">
                <span onClick={removeSearch} className="text-2xl font-medium cursor-pointer absolute top-6 right-6 transition-all hover:text-red-500">X</span>
                <input type="text" className=" outline-0 border-1 border-[#ccc] bg-[#eee] w-1/1 sm:w-100 pl-4 rounded-l-md h-14" placeholder="Search..." />
                <button className="bg-blue-500 text-white rounded-r-md cursor-pointer font-bold inline-block h-14 px-2">Search</button>
            </div>
        </div>
    )
    }
///finsh search

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


    useEffect(()=>{
        const header = document.querySelector("#header")
        const links = document.querySelectorAll("#header a")
        const icon = document.querySelector(".search_icon")
        const listIcon = document.querySelector(".list_icon_menuo")
        console.log(links)
        window.addEventListener("scroll",()=>{
            if(window,scrollY > 230 ){
                header.style.backgroundColor="white" 
                links.forEach((l)=>{
                    l.classList.add("title_color")
                })
                icon.classList.add("title_color")
                listIcon.classList.add("black1")
            }else{
                header.style.backgroundColor="transparent" 
                links.forEach((l)=>{
                    l.classList.remove("title_color")
                })
                icon.classList.remove("title_color")
                listIcon.classList.remove("black1")
            }
        })

    },[])


    return (
        <>
        <Menuo />
        <Search />
        <header id="header" className="border-1 rounded-full border-[#fff] fixed  w-1/1 -top-18 left-0 pt-18 max-md:pb-2  z-50 max-md:-top-17 max-md:rounded-4xl
        border-r-0 border-l-0 shadow-sm">
            <nav className="collect flex justify-between items-center py-1">
                <div>
                <Link href={"/"}><Image src={Logo} alt="logo"/></Link>
                </div>
                <div className="flex justify-center items-center gap-3 max-md:gap-4">
                        <IoSearch onClick={searchPage}  className=" text-2xl text-white md:ml-1 cursor-pointer search_icon"/>
                    
                    <ul className="flex max-md:hidden linkes relative ">
                        {menuItems.map((item, idx) => (
                        <li key={idx} >
                            <Link href={item.href}  className={`inline-block p-4 font-bold text-white transition-all`}>
                            {item.label}
                            </Link>
                        </li>
                        ))}
                    </ul>
                    <div onClick={showMenuo} className="md:hidden text-white list_icon_menuo text-3xl cursor-pointer">
                        <VscListSelection />
                    </div>
                </div>
            </nav>
        </header>
        </>
    )
}

export default Header