//images
import Image from "next/image"
import Destination1 from '../../../public/images/Destination-image-1.webp'
import Destination2 from '../../../public/images/Destination-image-2.webp'
import Destination3 from '../../../public/images/Destination-image-3.webp'
import Destination4 from '../../../public/images/Destination-image-4.webp'
import Destination5 from '../../../public/images/Destination-image-5.webp'
//icons
import { FaLocationArrow } from "react-icons/fa6";
import SpecialHead from "./SpecialHead"

function TopDestination() {


    const data = [
        {
            img:Destination1,
            price:"$23.000",
            title:"Canada, Qananoque Islands",
        },
        {
            img:Destination2,
            price:"$19.000",
            title:"France, Eiffel Tower",
        },
        {
            img:Destination3,
            price:"$30.000",
            title:"London, Big Ben",
        },
        {
            img:Destination4,
            price:"$28.000",
            title:"United Arab Emirates Desert",
        },
        {
            img:Destination5,
            price:"$17.000",
            title:"Paradise, Places",
        },
    ]

    const destinationData = data.map((item,idx)=>{
        return(
            <div key={idx} className=" w-90 md:w-120 h-60 md:h-80 relative">
                <Image src={item.img} alt="estination photo" className="w-1/1 h-1/1 md:rounded-lg max-md:rounded-t-lg"/>
                <span className=" absolute top-3 right-4 p-2 font-bold text-white bg-[#4400e7] rounded-xl">{item.price}</span>
                <div className="bg-white shadow-md md:rounded-xl max-md:rounded-b-lg p-4 absolute  -bottom-45 md:-bottom-14 md:-left-4 w-1/1 md:w-90">
                    <h3 className="text-xl font-bold mb-4 text-[#3a3a3a]">{item.title}</h3>
                    <p className=" border-b border-[#ccc] text-sm pb-6">For Free Away. Behind The World Mountan Far From The Countries.</p>
                    <div className="flex mt-4 gap-2">
                        <FaLocationArrow className="text-2xl text-[#4400e7]"/>
                        <span className="font-bold text-sm text-[#2a2a2a]">7 Days</span>
                    </div>
                </div>
            </div>
        )
    })


    return (
        <section className="pt-16 pb-60 md:pb-32">
            <SpecialHead title={"Top Destination"} description={"Explore Our Top Destination Voted By More Than 100.000+ Customers Around The Warld"} imageContent={"Travel Destination"}/>
            <div className=" overflow-hidden">
                <div className=" main_box flex gap-8 w-fit">
                    {destinationData}
                    {destinationData}
                    {destinationData}
                    {destinationData}
                </div>
            </div>
        </section>
    )
}
export default TopDestination