import { GoGlobe } from "react-icons/go";
import { FiLifeBuoy } from "react-icons/fi";
import { LuFileText } from "react-icons/lu";
import { FaCar } from "react-icons/fa6";
import { FaLightbulb } from "react-icons/fa";
import { LuHeadphones } from "react-icons/lu";
export default function Card() {
    let data=[
        {icon:GoGlobe,heading:"Project Consultancy",para:"Promote your blog posts, case udie,the with nts ounments product and the branded videos." , link:"Read More.",color:"#007eff"},
        {icon:FiLifeBuoy,heading:"Creative Design",para:"Promote your blog posts, case udie,the with nts ounments product and the branded videos." , link:"Read More.",color:"#ed5f38"},
        {icon:LuFileText,heading:"Web Development",para:"Promote your blog posts, case udie,the with nts ounments product and the branded videos." , link:"Read More.",color:"#48cda0"},
        {icon:FaCar,heading:"Development Design",para:"Promote your blog posts, case udie,the with nts ounments product and the branded videos." , link:"Read More.",color:"#a348cd"},
        {icon:FaLightbulb,heading:"Awesome Idea",para:"Promote your blog posts, case udie,the with nts ounments product and the branded videos." , link:"Read More.",color:"#ed38d1"},
        {icon:LuHeadphones,heading:"Support 24/7",para:"Promote your blog posts, case udie,the with nts ounments product and the branded videos." , link:"Read More.",color:"#e6bc13"},
    ]
    return (
        <div className="h-screen max-w-screen-xl mx-auto px-10 font-rubik">
            <div className="pt-5 flex items-center justify-between">
                <div>
                    <h2 className="text-[#EE5f38] font-semibold text-xl uppercase">Creative Service</h2>
                    <h1 className="text-[35px] leading-tight mt-2 font-semibold">What can i do for service <br /> clients you</h1>
                </div>
                <div>
                    <p className=" text-zinc-500 tracking-wide">Promote your blog posts, case udie, and product <br /> coming videoscustomers branded the the with ouncems <br /> effort best Makes services for back.</p>
                </div>
            </div>
            <div className="mt-5 flex flex-wrap gap-6 justify-around">
                    {data.map((elem,idx)=>{
                        return <div key={idx} className="w-96 h-80 rounded-lg px-6  py-5 shadow-xl hover:shadow-2xl transition ease-in-out delay-200 duration-300 mb-10 ">
                        <div style={{backgroundColor:elem.color}} className="rounded-full w-20 h-20 flex items-center justify-center">
                            <elem.icon className="w-10 h-10 text-white font-bold" />
                        </div>
                        <div>
                            <h1 className="font-medium text-2xl mt-4 mb-3 ">{elem.heading}</h1>
                            <p className="mb-4 text-zinc-600">{elem.para}</p>
                            <a href="/" style={{color:elem.color}} className="hover:text-zinc-800 text-[17px]"> {elem.link} </a>
                        </div>
                    </div>
                    })}
            </div>
        </div>
    )
}