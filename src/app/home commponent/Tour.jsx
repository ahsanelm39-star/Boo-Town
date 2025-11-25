import Image from "next/image"
import Banner from '../../../public/images/banner.webp'
import Btn from "./Btn"
import Link from "next/link"

function Tour() {
    return (
        <section className="my-14 relative h-100">
            <Image src={Banner} alt="image" className="h-1/1"/>
            <div className=" absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-170 text-center max-md:w-1/1
            px-3">
                <h2 className="text-3xl md:text-4xl font-bold text-[#2a2a2a]">BoomTown Is Aworld Leading Online Tour Booking Platform</h2>
            <div className="flex justify-center">
                <Link href={"/about"}><Btn text={"Learn More"}/></Link>
            </div>
            </div>
        </section>
    )
}

export default Tour