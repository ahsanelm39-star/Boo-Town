//images
import Image from "next/image"
import Feature1 from '../../../public/images/Feature-image-1.webp'
import Feature2 from '../../../public/images/Feature-image-2.webp'
import Plane from '../../../public/images/plane.svg'

function Feature() {


    const data = [
        {
            icon:"icons",
            title:"Choose Destination",
        },
        {
            icon:"icons",
            title:"Make Payment",
        },
        {
            icon:"icons",
            title:"Reach Airport On Data",
        },
    ]

    const dataList = data.map((box,idx)=>{
        return (
            <div key={idx} className=" border-2 border-[#dbdbdbb9] p-4 w-65 rounded-md bg-white max-sm:w-1/1">
                <span className="mb-4 inline-block">{box.icon}</span>
                <h4 className="mb-4 font-bold text-xl">{box.title}</h4>
                <p className="text-sm text-[#232323cb]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto libero accusantium iusto fugit! Fugiat illo.</p>
            </div>
        )
    })

    return (
        <section className="py-14 feature_section relative">
            <Image src={Feature2} alt="image" className=" absolute -top-20 w-60"/>
            <div className="collect flex">
                <div>
                    <div className=" md:w-130 mb-8 max-md:px-3 xl:w-160 max-lg:text-center max-lg:mx-auto max-lg:mb-14
                    relative z-30">
                        <div className="flex gap-2 mb-6 max-lg:justify-center">
                            <Image src={Plane} alt="plane" className="w-8"/>
                                <em className="text-md text-[#4400E7] font-bold">WORKING STEPS</em>
                            <Image src={Plane} alt="plane" className="w-8"/>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-5 text-[#2a2a2a]">Book Your Next Trip In 3 Steps</h2>
                    </div>
                    <div className="flex gap-6 justify-center items-center relative z-20 flex-wrap">
                        {dataList}
                    </div>
                </div>
                <div className="absolute right-0 w-120 z-10 -bottom-10 lg:top-0">
                    <Image src={Feature1} alt="feature image " className=""/>
                </div>
            </div>
        </section>
    )
}

export default Feature