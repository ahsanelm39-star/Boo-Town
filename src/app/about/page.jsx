import Image from "next/image"
import Banner from '../../../public/images/section-banner.webp'

function page() {
    return (
        <section className=" relative">
            <Image src={Banner} alt="image" className="h-130"/>
            <div className=" absolute ">

            </div>
        </section>
    )
}

export default page