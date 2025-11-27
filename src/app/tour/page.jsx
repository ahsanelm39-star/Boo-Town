///component
import MainFooter from "../home commponent/MainFooter"
import TourFilter from "../tour commponent/TourFilter"
////iamges
import Image from "next/image"
import Banner from '../../../public/images/section-banner.webp'
import MainSection from "../home commponent/MainSection"

function page() {
    return (
        <>
            <MainSection text={"Trip Search Result"}/>
            <TourFilter/>
            <MainFooter/>
        </>
        
    )
}

export default page