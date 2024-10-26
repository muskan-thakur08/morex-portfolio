import { FaArrowRight } from "react-icons/fa6";
export default function Inputform() {
  return (
    <div className="max-w-lg h-[600px] shadow-lg shadow-zinc-300 rounded-md ml-20 px-10">
      <h1 className="text-center text-3xl font-medium">Get In Touch</h1>
      <div className="max-w-md h-full">
        <div className="flex items-center justify-center">
          <form className="flex gap-3 mt-8">
            <input
              type="text"
              placeholder="Your Name"
              className="w-[196px] h-[50px] outline-none border-b-[1px] px-2 py-1 focus:border-b-primaryOrange"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-[196px] h-[50px] outline-none border-b-[1px] px-2 py-1 focus:border-b-primaryOrange"
              required
            />
          </form>
        </div>
        <div className="max-w-md ml-3 mt-5 h-[50px] flex flex-col">
          <input
            type="text"
            placeholder="Your Phone"
            className="w-full outline-none border-b-[1px] px-2 h-[50px] py-4 focus:border-b-primaryOrange"
            required
          />
          <input type="text" placeholder="Subject" className="w-full h-[50px] outline-none border-b-[1px] px-2 mt-5 py-4 focus:border-b-primaryOrange"  required />
        <div>
            <textarea placeholder="Message" className="w-full h-[172px] outline-none border-b-[1px] mt-5 px-2 focus:border-b-primaryOrange resize-none"  required></textarea>
        </div>
        <div className="flex items-center justify-center mt-10">
            <button className="flex gap-2 items-center justify-center px-10 py-3 rounded-full text-white bg-primaryOrange font-medium">Submit Now <FaArrowRight /></button>
        </div>
        </div>
      </div>
    </div>
  );
}
