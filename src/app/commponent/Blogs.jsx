import Image from "next/image"
import blog1 from '../../../public/images/blog-1.webp'
import blog2 from '../../../public/images/blog-2.webp'
import blog3 from '../../../public/images/blog-3.webp'

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
            <div key={idx} className="w-[350px] relative shadow-xl cursor-pointer blog_box
                overflow-hidden rounded-md">
                <Image src={blog.img} alt="image" className="w-1/1 rounded-md img transition duration-400"/>
                <div className="bg-white p-4 rounded-md absolute left-[50%] bottom-0 w-[90%]
                translate-x-[-50%] transition duration-400">
                    <h3 className="title_color font-bold">{blog.title}</h3>
                    <span className="p text-sm">Emma Mark. April 25.2025</span>
                </div>
            </div>
        )
    })


    return (
        <section className='py-14'>
            <div className="collect">
                <div className='flex justify-around items-center mb-14'>
                    <div className='w-[300px]'>
                        <span className='text-blue-400 font-bold serf text-xl inline-block 
                        mb-2'>BLOG & NEWS</span>
                        <h2 className='text-4xl font-bold title_color'>Get More Update News & Blog</h2>
                    </div>
                    <div className='w-[600px]'>
                        <p className='p'>Stay informed ispired by subscribing to our newsletter for the latest news and insightful blog posts - your gateway to a world of update</p>
                    </div>
                </div>
                <div className="flex justify-center items-center gap-8">
                    {dataList}
                </div>
            </div>
        </section>
    )
}

export default Blogs