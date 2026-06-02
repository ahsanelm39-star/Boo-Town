import Image from "next/image"

const Loding = () => {
    return (
        <div className="bg-white w-1/1 h-1/1 flex justify-center items-center">
            <Image src={'/images/LoadingPen-ezgif.com-crop.width-800.gif'} width={600} height={200} alt="loding image"/>
        </div>
    )
}

export default Loding