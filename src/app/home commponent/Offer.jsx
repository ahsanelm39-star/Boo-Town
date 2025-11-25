import Image from "next/image"
import OfferBg1 from '../../../public/images/offer-bg-1.webp'
import OfferBg2 from '../../../public/images/offer-bg-2.webp'
import SpecialHead from "./SpecialHead"
import Btn from "./Btn"
import Link from "next/link"

function Offer() {
    return (
        <section className='py-14 relative'>
            <div className=" absolute top-0 left-0 w-120 h-130">
                <Image src={OfferBg1} alt="image" className="h-1/1 w-1/1"/>
            </div>
            <div className="absolute top-0 right-0 w-150 bottom-0 h-130">
                <Image src={OfferBg2} alt="image" className="w-1/1 h-1/1"/>
            </div>
            <div className=" relative">
                <SpecialHead title={'Get Spechial Offer'} description={'Embark On An Unforgettable Journy With Our Exclusive Tour Spechial Offer Seize The Moment And Create Lasting Memories'} imageContent={'40% OFFER'}/>
                <div className="mx-auto w-fit -mt-12">
                    <Link href={"/contact"}><Btn text={"Learn More"} /></Link>
                </div>
            </div>
            <div className="relative w-fit mx-auto flex items-center gap-4 -mt-4 h-fit z-[-1]">
                <span className="text-[200px] font-bold text-[#4400E7]">40</span>
                <div className="flex flex-col">
                    <span className="text-black font-bold text-6xl">%</span>
                    <span className="text-[#3042e6] font-bold text-6xl ">OFF</span>
                </div>
            </div>
        </section>
    )
}

export default Offer