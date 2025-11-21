import Image from "next/image"
import Plane from '../../../public/images/plane.svg'


function SpecialHead({title,description,imageContent}) {
    return (
        <div className=" md:w-120  mx-auto text-center mb-20 max-md:px-3">
                <div className="flex gap-2 mb-6 justify-center">
                    <Image src={Plane} alt="plane" className="w-8"/>
                        <em className="text-md text-[#4400E7]">{imageContent}</em>
                    <Image src={Plane} alt="plane" className="w-8"/>
                </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-5 text-[#2a2a2a]">{title}</h2>
                    <p className="font-medium text-[#575757] text-lg">{description}</p>
            </div>
    )
}

export default SpecialHead