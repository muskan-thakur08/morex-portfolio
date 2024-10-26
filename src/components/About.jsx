import "./about.css";
export default function About() {
    
    return (
        <div className="img">
            <div className="max-w-screen-xl h-screen mx-auto font-rubik px-10 mb-10">
                <div className="flex justify-between">
                    <div className="relative">
                        <img src="https://themihub.com/html/morex-bootstrap/morex/assets/img/other/about.png" alt="" />
                        <div className="text-center mt-5 leading-none">
                            <h1 className="text-[70px] text text-white">+27</h1>
                            <p className="text-[#333333] text-2xl font-semibold">Experience Working</p>
                        </div>
                    </div>
                    <div>
                        <h1 className="text-[#ee5f38] uppercase text-[20px] font-semibold">About me</h1>
                        <h1 className="text-[34px] text-[#333333] font-semibold mt-2">I can design world for <br /> leading ui/ux </h1>
                        <div className="mt-4">
                            <h1 className="text-[#ee5f38] text-[22px] uppercase font-semibold mb-5">Personal infos:</h1>
                            <div className="flex gap-8 text-[#636363] text-lg">
                                <div className="flex flex-col gap-2">
                                    <p>First Name: Maras</p>
                                    <p>Address: Dubai</p>
                                    <p>Age: 24 Years</p>
                                    <p>Nationality: Tunisian</p>
                                    <p>Freelance: Available</p>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <p>Last Name: Faron</p>
                                    <p>Phone: +28921184010</p>
                                    <p>Email: you@mail.com</p>
                                    <p>Skype: Roben.Boris</p>
                                    <p>Languages: French, English</p>
                                </div>

                            </div>
                            <button className="px-10 py-3 bg-[#ee5f38] text-white rounded-full text-xl font-medium mt-10 hover:bg-zinc-800 transition ease-in-out delay-100 duration-200 tracking-wide">Hire Me</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}