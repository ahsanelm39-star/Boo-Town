import SpecialHead from '../SpecialHead'
import Image from 'next/image'
//icons
import { FaLocationDot } from "react-icons/fa6";
import Link from 'next/link'

const TravelDestnation = () => {


    const boxs = [
    {
        img:'/images/Discover-image-1.webp',
        title:"Maldives"
    },
    {
        img:'/images/Discover-image-2.webp',
        title:"vietnam"
    },
    {
        img:'/images/Discover-image-3.webp',
        title:"Dubai"
    },
    {
        img:'/images/Discover-image-4.webp',
        title:"Nepal"
    }]

    const boxsList = boxs.map((des,idx)=>{
        return(
            <Link href={"#"} key={idx} className='rounded-full w-[300px] h-[400px] overflow-hidden box_image relative cursor-pointer'>
                <Image src={des.img} alt={'travel image'} width={400} height={400} className='w-1/1 h-1/1 rounded-full transition duration-500 rotate-4 absolute top-0 
                left-0' />
                <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-20%] bg-[#00000089]
                rounded-full w-[250px] h-[350px]  flex justify-center items-center flex-col px-10 opacity-0 transition duration-500 '>
                    <div className='flex gap-2 bg-[#4400E7] z-1 text-white rounded-2xl p-2 items-center w-fit mx-auto pr-3 text-sm'>
                        <FaLocationDot />
                        <h4>{des.title}</h4>
                    </div>
                    <p className=' text-white mt-4 text-center text-xl'>Beautiful tropical beach sea with umbrella chair around swimming pool</p>
                </div>
            </Link>
        )
    })


    return (
        <section className='py-14'>
            <SpecialHead title={'Discover The Touch Of Nature'} description={'Our Clients Rave About Our Exceptional The Seamless Experiences That Exceeded their Expectations'} imageContent={'TRAVEL DESTINATION'}/>
            <div className="collect flex flex-wrap gap-8 items-center justify-center">
                {boxsList}
            </div>
        </section>
    )
}

export default TravelDestnation