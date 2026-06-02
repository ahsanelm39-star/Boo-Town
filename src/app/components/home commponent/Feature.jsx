import Image from "next/image"

const Feature = () => {

    const data = [
        {
            icon:'/images/location-icon.png',
            title:"Choose Destination",
        },
        {
            icon:'/images/phone-icon.png',
            title:"Make Payment",
        },
        {
            icon:'/images/plane-icon.jpg',
            title:"Reach Airport On Data",
        },
    ]

    const dataList = data.map((box,idx)=>{
        return (
            <div key={idx} className=" border-2 border-[#dbdbdbb9] p-4 w-65 rounded-md bg-white max-sm:w-1/1 shadow-lg transition-all hover:shadow-2xl">
                <Image src={box.icon} alt="icon" width={200} height={200} className="w-20 mb-4"/>
                <h4 className="mb-4 font-bold text-xl text-[#2a2a2ae9]">{box.title}</h4>
                <p className="text-sm text-[#232323cb]">Loportis luctus neque duis locinia volutp suspedisse pulvinar pen atibus malesu ada placerat...</p>
            </div>
        )
    })

    return (
        <section className="pb-30 mt-20 bg-[url(/images/Features-bg.webp)] relative">
            <div className="container flex">
                <div>
                    <div className=" md:w-130 mb-8 max-md:px-3 xl:w-160 max-lg:text-center max-lg:mx-auto max-lg:mb-14
                    relative z-30">
                        <div className="flex gap-2 mb-6 max-lg:justify-center">
                            <Image src={'/images/plane.svg'}  width={200} height={200} alt="Airplane" className="w-8"/>
                                <em className="text-md text-[#4400E7] font-bold">WORKING STEPS</em>
                            <Image src={'/images/plane.svg'}  width={200} height={200} alt="Airplane" className="w-8"/>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-5 text-[#2a2a2a]">Book Your Next Trip In 3 Steps</h2>
                    </div>
                    <div className="flex gap-6 justify-center items-center relative z-20 flex-wrap">
                        {dataList}
                    </div>
                </div>
                <div className="absolute right-0 w-120 z-10 bottom-0 lg:top-0 ">
                    <Image src={'/images/Feature-image-1.webp'}  width={1000} height={1000} alt="feature image "/>
                </div>
            </div>
        </section>
    )
}

export default Feature