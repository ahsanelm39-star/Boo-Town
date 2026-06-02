///commponent
import Blog from "../components/blog commponent/Blog"
import MainFooter from "../components/MainFooter"
import MainSection from "../components/MainSection"

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