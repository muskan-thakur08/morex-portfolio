import Formcard from "./Formcard";
import Inputform from "./Inputform";

export default function Contact() {
  return (
    <div className="max-w-screen-lg h-screen mx-auto font-inter">
      <div className="max-w-xl mx-auto pt-16">
        <h2 className="text-center text-[48px] mb-2 font-semibold">
          Let's Talk
        </h2>
        <p className="text-[#888888] text-[18px] font-medium text-center">
          Must explain to you how all this mistaken idea of denouncing pleasure
          born and give you a complete account the system
        </p>
      </div>
      <div className="flex gap-8 mt-10">
      <Inputform />
      <Formcard />
      </div>
    </div>
  );
}
