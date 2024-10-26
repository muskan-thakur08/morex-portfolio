import { FaArrowRight } from "react-icons/fa6";
import { useState } from "react";
export default function Inputform() {
  let [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  function handleSubmit(e) {
    setFormData({...formData,[e.target.name]:e.target.value});
    console.log(formData);
  }
  return (
    <div className="max-w-lg h-[600px] shadow-lg shadow-zinc-300 rounded-md ml-20 px-10">
      <h1 className="text-center text-3xl font-medium pt-5">Get In Touch</h1>
      <div className="max-w-md h-full">
        <div className="flex items-center justify-center">
          <form className="flex gap-3 mt-8 pl-3">
            <input
              type="text"
              placeholder="Your Name"
              className="w-[196px] h-[50px] outline-none border-b-[1px] px-2 py-1 focus:border-b-primaryOrange"
              required
              value={formData.name}
              onChange={handleSubmit}
              name="name"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-[196px] h-[50px] outline-none border-b-[1px] px-2 py-1 focus:border-b-primaryOrange"
              required
              value={formData.email}
              onChange={handleSubmit}
              name="email"
            />
          </form>
        </div>
        <div className="max-w-md ml-3 mt-5 h-[50px] flex flex-col">
          <input
            type="text"
            placeholder="Your Phone"
            className="w-full outline-none border-b-[1px] px-2 h-[50px] py-4 focus:border-b-primaryOrange"
            required
            value={formData.phone}
            onChange={handleSubmit}
            name="phone"
          />
          <input
            type="text"
            placeholder="Subject"
            className="w-full h-[50px] outline-none border-b-[1px] px-2 mt-5 py-4 focus:border-b-primaryOrange"
            required
            value={formData.subject}
            onChange={handleSubmit}
            name="subject"
          />
          <div>
            <textarea
              placeholder="Message"
              className="w-full h-[172px] outline-none border-b-[1px] mt-5 px-2 focus:border-b-primaryOrange resize-none"
              required
              value={formData.message}
              onChange={handleSubmit}
              name="message"
            ></textarea>
          </div>
          <div className="flex items-center justify-center mt-10">
            <button
              onClick={handleSubmit}
              className="flex gap-2 items-center justify-center px-10 py-3 rounded-full text-white bg-primaryOrange font-medium hover:bg-[#ca5d45]"
            >
              Submit Now <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
