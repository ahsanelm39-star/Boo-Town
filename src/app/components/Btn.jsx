import Image from "next/image"

const Btn = ({position, text}) => {
    return (
        <div className={`relative flex gap-2 items-center py-2 px-4 btn bg-gradient-to-r from-[#1e1cac] to-[#8e00e7] 
            w-fit text-white rounded-2xl ${position == "medel" ? "mx-auto":""} mt-6 cursor-pointer
            overflow-hidden`}>
            <span className='relative max-sm:text-sm'>{text}</span>
            <Image src={'/images/btn-arrow.svg'} width={100} height={100} alt='icon'className='relative w-5'/>
        </div>
    )
}

export default Btn