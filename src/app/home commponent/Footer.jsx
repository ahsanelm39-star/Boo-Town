import Image from "next/image"
import footerImage from '../../../public/images/footer.webp'
import Bootun from '../../../public/images/btn-arrow.svg'
import Logo from '../../../public/images/brand-image5.webp'
import Google from '../../../public/images/google.png'
import Face from '../../../public/images/face.png'
import Insta from '../../../public/images/insta.png'
import Wats from '../../../public/images/wats.png'
import Link from "next/link"
import Btn from "./Btn"

function Footer() {
    return (
        <div className=" mt-14">
                <div className="flex">
                    <div>
                        <div className="flex bg-[#4400E7] py-8 px-3 md:px-12 gap-6 md:gap-10 max-md:flex-col">
                            <h2 className="text-3xl font-bold text-white ">Subscribe For Latest Update About Travelling</h2>
                            <form className="md:mr-6">
                                <input type="email" className="bg-white p p-4 rounded-full w-1/1 md:w-90 " placeholder="Enter Your Email" required/>
                                <button><Btn text={"Send"}/></button>
                            </form>
                        </div>
                        <div>
                            <div className="py-8 px-3 md:px-12 flex items-center md:justify-between gap-4 md:gap-10 max-md:flex-col">
                                <div className="md:max-w-110 max-md:mr-auto max-md:pr-">
                                    <Image src={Logo} alt="logo"/>
                                    <p className="p mt-4">Lorem ipsum dolo sint quam expedita, illum veniam quo ea unde eos totam voluptatum asperiores quos velit pariatur ipsam ipsa rerum!</p>
                                    <div className="flex mt-2 items-center">
                                        <Link href={"https://www.google.com/"} target="blank" className="w-9 mr-2"><Image src={Google} alt="google"/></Link>
                                        <Link href={"https://www.facebook.com/"} target="blank" className="w-8 rounded-md mr-4"><Image src={Face} alt="google" className="rounded-md"/></Link>
                                        <Link href={"https://www.instagram.com/"} target="blank" className="w-8"><Image src={Insta} alt="google"/></Link>
                                        <Link href={"https://www.whatsapp.com/?lang=en"} target="blank" className="w-16"><Image src={Wats} alt="google"/></Link>
                                    </div>
                                </div>
                                <div className="flex md:justify-between flex-1 max-md:w-1/1 gap-5">
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
                    <div className="w-fit max-xl:hidden">
                        <Image src={footerImage} alt="footer image" className="w-150 h-1/1"/>
                    </div>
                </div>
                <p className="p-2 bg-[#171717e1] font-bold text-[#eee] text-center">
                    &copy;	2025 Ahmed Hassan - <span className="text-[#bababa]">All Rights Rerserved</span>
                </p>
        </div>
    )
}

export default Footer