///component
import MainFooter from "../components/MainFooter"
import TourFilter from "../components/tour commponent/TourFilter"
import MainSection from "../components/MainSection"

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