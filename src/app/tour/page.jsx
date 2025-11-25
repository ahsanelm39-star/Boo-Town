///component
import MainFooter from "../home commponent/MainFooter"
import TourFilter from "../tour commponent/TourFilter"
////iamges
import Image from "next/image"
import Banner from '../../../public/images/section-banner.webp'

function page() {
    return (
        <>
            <section className=" relative">
                <Image src={Banner} alt="image" className="h-130"/>
                <div className=" absolute top-[50%] left-[10%]">
                    <h2 className="text-6xl font-bold text-white">Trip Search Result</h2>
                </div>
            </section>
            <TourFilter/>
            <MainFooter/>
        </>
        
    )
}

export default page