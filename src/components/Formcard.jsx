import { CiLocationOn } from "react-icons/ci";
import { TfiEmail } from "react-icons/tfi";
import { FaPhoneVolume } from "react-icons/fa6";
export default function Formcard() {
  let data = [
    {
      heading: "25 North Street,Dubai",
      icon: CiLocationOn,
      para: "Office Address",
    },
    { heading: "info@elito.com", icon: TfiEmail, para: "Office Mail" },
    { heading: "+91 256 -987-239", icon: FaPhoneVolume, para: "Office Phone" },
  ];
  return (
    <div className="flex flex-col gap-3">
      {data.map((elem, idx) => {
        return (
          <div className="w-[300px] h-[180px] rounded-md shadow-lg">
            <h1 className="text-center pt-7 font-semibold">
             {elem.heading}
            </h1>
            <div className="flex items-center pl-12 mt-5 gap-4">
              <div className="w-20 h-20 bg-white shadow-lg shadow-zinc-300 rounded-full flex items-center justify-center">
                <elem.icon className="w-8 h-8 text-primaryOrange" />
              </div>
              <p className="text-zinc-600">{elem.para}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
