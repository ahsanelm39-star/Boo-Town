import Image from "next/image"
import Banner from '../../../public/images/section-banner.webp'
///commponent
import Blog from "../blog commponent/Blog"
import MainFooter from "../home commponent/MainFooter"

function page() {
    return (
        <>
            <section className=" relative">
                <Image src={Banner} alt="image" className="h-130"/>
                <div className=" absolute top-[50%] left-[10%]">
                    <h2 className="text-6xl font-bold text-white">Blog</h2>
                </div>
            </section>
            <Blog/>
            <MainFooter/>
        </>
    )
}

export default page