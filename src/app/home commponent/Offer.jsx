import Image from "next/image"
import OfferBg1 from '../../../public/images/offer-bg-1.webp'
import OfferBg2 from '../../../public/images/offer-bg-2.webp'
import SpecialHead from "./SpecialHead"
import Btn from "./Btn"
import Link from "next/link"

function Offer() {
    return (
        <section className='my-14 pt-10 relative'>
            <div className=" absolute top-0 left-0  h-130">
                <Image src={OfferBg1} alt="image" className=" hidden xl:block h-1/1 w-1/1"/>
            </div>
            <div className="absolute top-0 right-0  bottom-0  xl:h-130">
                <Image src={OfferBg2} alt="image" className="w-1/1 h-1/1"/>
            </div>
            <div className="collect">
            <div className="xl:pl-45  w-fit relative">
                <SpecialHead title={'Get Spechial Offer'} description={'Embark On An Unforgettable Journy With Our Exclusive Tour Spechial Offer Seize The Moment And Create Lasting Memories'} imageContent={'40% OFFER'}/>
                <div className="w-fit mx-auto  -mt-12">
                    <Link href={"/contact"}><Btn text={"Learn More"} /></Link>
                </div>
            </div>
                <div className="relative pl-10 xl:pl-65 flex items-center gap-4 -mt-4 h-fit text-shadow-2xs max-md:w-fit max-md:mx-auto">
                <span className="text-[150px] sm:text-[200px] font-bold text-[#4400E7]">40</span>
                <div className="flex flex-col">
                    <span className="text-black font-bold text-4xl sm:text-6xl">%</span>
                    <span className="text-[#3042e6] font-bold text-4xl sm:text-6xl">OFF</span>
                </div>
            </div>
            </div>
        </section>
    )
}

export default Offer