import Image from "next/image"
import Banner from '../../../public/images/section-banner.webp'
////commponent
import TravelExperience from "../about commponent/TravelExperience"
import Brand from "../about commponent/Brand"
import Price from "../about commponent/Price"
import MainFooter from "../home commponent/MainFooter"
import TravelDestnation from "../home commponent/TravelDestnation"
import MainSection from "../home commponent/MainSection"

function page() {
    return (
        <>
            <MainSection text={"About"}/>
            <TravelExperience/>
            <TravelDestnation/>
            <Brand/>
            <Price/>
            <MainFooter/>
        </>
        
    )
}

export default page