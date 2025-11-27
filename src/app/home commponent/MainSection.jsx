import Image from "next/image"
import Banner from '../../../public/images/section-banner.webp'

function MainSection({text}) {
    return (
        <section className=" relative">
            <Image src={Banner} alt="image" className="h-70 md:h-80 lg:h-fit"/>
            <div className=" absolute top-[50%] left-[10%]">
                <h2 className="text-5xl md:text-6xl font-bold text-white">{text}</h2>
            </div>
        </section>
    )
}

export default MainSection