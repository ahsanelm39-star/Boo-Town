import Image from "next/image"
import { CgTime } from "react-icons/cg";

function TourBox({image,title}) {
    return (
        <div className="w-90 h-fit shadow-lg transition duration-300  hover:shadow-2xl overflow-hidden tour_box">
            <div>
                <div  className="w-1/1 h-[240px] relative">
                    <span className="tour_box_span absolute bg-[#4500e766] w-1/1 h-1/1  top-0 -left-1/1 rounded-t-md transition duration-300"></span>
                    <Image src={image} alt="iamge" className="w-1/1 h-1/1 rounded-t-md"/>
                </div>
                <div className="bg-[#eee] p-4 rounded-b-md">
                    <h3 className=" text-xl mt-4 pb-4 border-b border-[#ccc]">{title}</h3>
                    <div className="flex items-center pt-2 justify-between">
                        <div className="flex gap-2 items-center text-[#676767]">
                            <CgTime/>
                            <span className="font-bold text-sm">7 Days</span>
                        </div>
                        <span className="bg-gradient-to-r from-[#1e1cac] text-sm to-[#8e00e7] py-2 px-6 rounded-full text-white cursor-pointer">View Details</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TourBox