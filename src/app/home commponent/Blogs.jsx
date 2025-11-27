import Image from "next/image"
import blog1 from '../../../public/images/blog-1.webp'
import blog2 from '../../../public/images/blog-2.webp'
import blog3 from '../../../public/images/blog-3.webp'
import Link from "next/link"

function Blogs() {


    const data = [
        {
            img:blog1,
            title:"Beach Day. Long Hikes, And"
        },
        {
            img:blog2,
            title:"Island Hopping And Weather Tips"
        },
        {
            img:blog3,
            title:"Assertively Iterate Resource Maximizing"
        },
    ]
    const dataList = data.map((blog,idx)=>{
        return (
            <Link href={"/blog"} key={idx} className="max-xl:w-[280px]  xl:w-[350px] max-sm:w-1/1 relative shadow-xl cursor-pointer blog_box
                overflow-hidden rounded-md">
                <Image src={blog.img} alt="blog image" className="w-1/1 rounded-md img transition duration-400"/>
                <div className="bg-white p-4 rounded-md absolute left-[50%] bottom-0 w-[90%]
                translate-x-[-50%] transition duration-400">
                    <h3 className="title_color font-bold">{blog.title}</h3>
                    <span className="p text-sm">Emma Mark. April 25.2025</span>
                </div>
            </Link>
        )
    })


    return (
        <section className='py-14'>
            <div className="collect">
                <div className='flex justify-between items-center mb-14 gap-4 max-lg:flex-col max-lg:text-center'>
                    <div className='lg:w-[300px]'>
                        <span className='text-blue-400 font-bold serf text-xl inline-block 
                        mb-2'>BLOG & NEWS</span>
                        <h2 className='text-4xl font-bold title_color'>Get More Update News & Blog</h2>
                    </div>
                    <div className='md:w-[600px] md:px-4'>
                        <p className='p'>Stay informed ispired by subscribing to our newsletter for the latest news and insightful blog posts - your gateway to a world of update</p>
                    </div>
                </div>
                <div className="flex justify-evenly items-center gap-8 flex-wrap">
                    {dataList}
                </div>
            </div>
        </section>
    )
}

export default Blogs