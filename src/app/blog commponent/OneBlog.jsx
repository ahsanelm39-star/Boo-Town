import Image from "next/image"
import Person from '../../../public/images/blog-author.jpeg'
//icons
import { FaArrowTrendUp } from "react-icons/fa6";

function OneBlog({img, title}) {
    return (
        <div className="shadow-lg w-180 rounded-b-md transition duration-400 hover:translate-y-[-14px] hover:shadow-2xl cursor-pointer ">
            <div>
                <Image src={img} alt="image"/>
            </div>
            <div className="p-4 mt-6">
                <Image src={Person} alt="person" className="rounded-full w-12"/>
                <h3 className="text-2xl title_color font-bold my-4">{title}</h3>
                <p className="p"> adipisicing elit. In inventore repellendus illum obcaecati, laborum impedit sit voluptate nisi corporis nihil adipisci laboriosam deserunt aliquid quam. Facere, incidunt accusantium! Tempore, pariatur.</p>
                <div className="flex gap-4 items-center mt-4">
                    <span className="font-medium">EXPLORE MORE</span>
                    <FaArrowTrendUp className="text-white bg-[#4400e7] p-2 rounded-full text-4xl cursor-pointer"/>
                </div>
            </div>

        </div>
    )
}

export default OneBlog