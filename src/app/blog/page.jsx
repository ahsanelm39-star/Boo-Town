import Image from "next/image"
import Banner from '../../../public/images/section-banner.webp'
///commponent
import Blog from "../blog commponent/Blog"
import MainFooter from "../home commponent/MainFooter"
import MainSection from "../home commponent/MainSection"

function page() {
    return (
        <>
            <MainSection text={"Blog"}/>
            <Blog/>
            <MainFooter/>
        </>
    )
}

export default page