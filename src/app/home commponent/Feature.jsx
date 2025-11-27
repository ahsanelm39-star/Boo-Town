//images
import Image from "next/image"
import Feature1 from '../../../public/images/Feature-image-1.webp'
// import Feature2 from '../../../public/images/Feature-image-2.webp'
import Icon1 from '../../../public/images/location-icon.png'
import Icon2 from '../../../public/images/phone-icon.png'
import Icon3 from '../../../public/images/plane-icon.jpg'

///commponent
import Plane from '../../../public/images/plane.svg'

function Feature() {

    const data = [
        {
            icon:Icon1,
            title:"Choose Destination",
        },
        {
            icon:Icon2,
            title:"Make Payment",
        },
        {
            icon:Icon3,
            title:"Reach Airport On Data",
        },
    ]

    const dataList = data.map((box,idx)=>{
        return (
            <div key={idx} className=" border-2 border-[#dbdbdbb9] p-4 w-65 rounded-md bg-white max-sm:w-1/1 shadow-lg transition-all hover:shadow-2xl">
                <Image src={box.icon} alt="icon" width={2000} height={2000} className="w-20 mb-4"/>
                <h4 className="mb-4 font-bold text-xl title_color">{box.title}</h4>
                <p className="text-sm text-[#232323cb]">Loportis luctus neque duis locinia volutp suspedisse pulvinar pen atibus malesu ada placerat...</p>
            </div>
        )
    })

    return (
        <section className="pb-30 mt-20 feature_section relative">
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
                <div className="absolute right-0 w-120 z-10 bottom-0 lg:top-0 ">
                    <Image src={Feature1} alt="feature image " className=""/>
                </div>
            </div>
        </section>
    )
}

export default Feature