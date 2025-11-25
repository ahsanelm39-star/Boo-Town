import Image from "next/image"
import Bootun from '../../../public/images/btn-arrow.svg'

function Btn({position, text}) {
    return (
        <div className={`relative flex gap-2 items-center py-2 px-4 bt bg-gradient-to-r from-[#1e1cac] to-[#8e00e7] w-fit text-white rounded-2xl ${position == "medel" ? "mx-auto":""} mt-6 cursor-pointer
            overflow-hidden`}>
            <span className='relative'>{text}</span>
            <Image src={Bootun} alt='icon'className='relative'/>
        </div>
    )
}

export default Btn