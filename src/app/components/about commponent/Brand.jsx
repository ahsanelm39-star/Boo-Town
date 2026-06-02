import Image from "next/image"

const Brand = () => {
    return (
        <>
            <div id="prand" className='py-14 bg-[rgba(215,210,109,0.18)]'>
                <h2 className='px-3 text-3xl md:text-4xl font-bold text-center title_color'>Trusted By Local Businesses</h2>
                <div className='px-4 flex justify-center items-center gap-14 mt-10 flex-wrap'>
                    <Image src={'/images/brand-image1.webp'} width={160} height={160}  alt={'brand'} className="w-40 "/>
                    <Image src={'/images/logo.webp'} width={160} height={160}  alt={'brand'} className="w-40 "/>
                    <Image src={'/images/brand-image3.webp'} width={160} height={160}  alt={'brand'} className="w-40 "/>
                    <Image src={'/images/brand-image4.webp'} width={160} height={160} alt={'brand'} className="w-40 "/>
                </div>
            </div>
        </>
    )
}

export default Brand