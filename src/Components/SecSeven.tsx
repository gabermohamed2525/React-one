import newL from "../../public/images/newsletter_icon.png";
import { FaPlus } from "react-icons/fa6";

export default function SecSeven() {
  return (
    <div className="new w-full lg:w-300 min-h-65 rounded-2xl px-5 md:px-10 lg:px-15 py-8 flex flex-col lg:flex-row items-center justify-between gap-8">
      <img
        src={newL}
        alt=""
        className="w-32 sm:w-40 md:w-48 lg:w-auto"
      />

      <p className="text-2xl sm:text-3xl lg:text-4xl font-black leading-tight text-center lg:text-left">
        SUBSCRIBE TO OUR <br /> NEWSLETTER
      </p>

      <div className="relative flex flex-col sm:flex-row items-center w-full lg:w-auto gap-4">
        <input
          type="text"
          className="btn-in w-full sm:w-80 lg:w-auto"
          placeholder="Enter Your Email"
        />

        <button className="btn-o w-full sm:w-50 h-15 lg:-translate-x-8">
          <FaPlus />
          add to card
        </button>
      </div>
    </div>
  );
}