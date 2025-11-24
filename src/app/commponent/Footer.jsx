import Image from "next/image"
import footerImage from '../../../public/images/footer.webp'
import Bootun from '../../../public/images/btn-arrow.svg'
import Logo from '../../../public/images/brand-image5.webp'
import Google from '../../../public/images/google.png'
import Face from '../../../public/images/face.png'
import Insta from '../../../public/images/insta.png'
import Wats from '../../../public/images/wats.png'
import Link from "next/link"

function Footer() {
    return (
        <footer className=" mt-14">
                <div className="flex">
                <div>
                <div className="flex bg-[#4400E7] py-8 px-12 gap-12">
                    <h2 className="text-4xl font-bold text-white ">Subscribe For Latest Update About Travelling</h2>
                    <form className="mr-6">
                        <input type="text" className="bg-white p p-4 rounded-full w-100" placeholder="Enter Your Email"/>
                        <button className={`relative flex gap-2 items-center py-2 px-8 bt bg-gradient-to-r from-[#1e1cac] to-[#8e00e7]  w-fit text-white rounded-full mt-6 cursor-pointer
                            overflow-hidden`}>
                            <span className='relative'>Send</span>
                            <Image src={Bootun} alt='icon'className='relative'/>
                        </button>
                    </form>
                </div>
                <div>
                    <div className="py-8 px-12 flex items-center justify-between gap-10">
                        <div className="w-110">
                            <Image src={Logo} alt="logo"/>
                            <p className="p mt-4">Lorem ipsum dolo sint quam expedita, illum veniam quo ea unde eos totam voluptatum asperiores quos velit pariatur ipsam ipsa rerum!</p>
                            <div className="flex mt-2 items-center">
                                <Link href={"#"} className="w-9 mr-2"><Image src={Google} alt="google"/></Link>
                                <Link href={"#"} className="w-8 rounded-md mr-4"><Image src={Face} alt="google" className="rounded-md"/></Link>
                                <Link href={"#"} className="w-8"><Image src={Insta} alt="google"/></Link>
                                <Link href={"#"} className="w-16"><Image src={Wats} alt="google"/></Link>
                            </div>
                            </div>
                            <div className="flex justify-between flex-1">
                                <ul className="p">
                                    <li className="li"><Link href={"#"}>About</Link></li>
                                    <li className="li"><Link href={"#"} >Services</Link></li>
                                    <li className="li"><Link href={"#"}>Login</Link></li>
                                    <li className="li"><Link href={"#"}>Fights</Link></li>
                                </ul>
                                <ul className="p">
                                    <li className="li"><Link href={"#"}>Boking</Link></li>
                                    <li className="li"><Link href={"#"}>FQA</Link></li>
                                    <li className="li"><Link href={"#"}>Hotels</Link></li>
                                    <li className="li"><Link href={"#"}>Teams</Link></li>
                                </ul>
                                <ul className="p">
                                    <li className="li"><Link href={"#"}>Terms & Use</Link></li>
                                    <li className="li"><Link href={"#"}>Sitemap</Link></li>
                                    <li className="li"><Link href={"#"}>Contact Us</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-fit">
                    <Image src={footerImage} alt="image" className="w-150"/>
                </div>
                </div>
                <p className="p-2 bg-[#171717e1] font-bold text-[#eee] text-center">
                    &copy;	2025 Ahmed Hassan - <span className="text-[#bababa]">All Rights Rerserved</span>
                </p>
        </footer>
    )
}

export default Footer