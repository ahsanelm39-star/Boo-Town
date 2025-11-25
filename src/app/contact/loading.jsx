import Image from "next/image"
import LodingImage from '../../../public/images/LoadingPen-ezgif.com-crop.width-800.gif'

function loading() {
    return (
        <div className="bg-white w-1/1 h-1/1 flex justify-center items-center">
            <Image src={LodingImage} alt="loding image"/>
        </div>
    )
}

export default loading