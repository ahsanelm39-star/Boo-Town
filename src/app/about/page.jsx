////commponent
import TravelExperience from "../components/about commponent/TravelExperience"
import Brand from "../components/about commponent/Brand"
import Price from "../components/about commponent/Price"
import MainFooter from "../components/MainFooter"
import TravelDestnation from "../components/home commponent/TravelDestnation"
import MainSection from "../components/MainSection"

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