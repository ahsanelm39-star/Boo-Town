import SpecialHead from './SpecialHead'
///icons
import { FaStar } from "react-icons/fa6";
import { SiComma } from "react-icons/si";
///images
import Image from 'next/image';
import TestImage from '../../../public/images/tst-image-1.webp'
import TestImageBg from '../../../public/images/test-bg.webp'
import TestPerson from '../../../public/images/tst-3.webp'

function Testimonials() {
    return (
        <section className='py-14 relative'>
            <Image src={TestImageBg} alt='image'  className=' absolute h-1/1 right-0 top-0'/>
            <Image src={TestImageBg} alt='image'  className=' absolute h-1/1 left-0 top-0 rotate-[180deg]'/>
            <div className='mb-30'>
                <SpecialHead title={'What\'s Our Clients Saying!'} description={'Our Clients Rave About Our Exceptional The Seamless Experiences That Exceeded their Expectations'} imageContent={'TESTIMONIALS'}/>
            </div>
            <div className="collect flex justify-center gap-8">
                <div className='bg-[#2bcebbd1] w-80 rounded-r-xl relative h-70 test_box relative'>
                    <Image src={TestImage} alt='image' className='w-70 absolute -top-18 -left-10'/>
                </div>
                <div className='w-100 -mt-6'>
                    <div className='flex mb-6'>
                        <SiComma className='text-4xl text-[#4400E7]'/>
                        <SiComma className='text-4xl text-[#4400E7]'/>
                    </div>
                    <p className='p'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti iure tempora amet nostrum voluptatem, ratione qui consequuntur cumque recusandae doloribus repellat, corporis laudantium laborum accusantium molestiae, error in est perferendis.</p>
                    <div className='flex gap-2 text-amber-400 mt-4'>
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </div>
                    <div className='flex gap-4 items-center'>
                        <div className='mt-4 p-1 border border-blue w-fit rounded-full' >
                            <Image src={TestPerson} alt='image' className='w-14 h-14 rounded-full' />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <h5>TASHA STEWART</h5>
                            <span className='text-[#242323bc] text-sm'>Web Development Of ThemeXriver</span>
                        </div>
                    </div>
                </div>
                
            </div>
        </section>
    )
}

export default Testimonials