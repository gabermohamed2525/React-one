import { FaPlayCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="header flex flex-col items-center justify-center gap-3 h-[80vh] text-white px-4">
      <p className="font-bold tracking-[8px] sm:tracking-[15px] md:tracking-[20px] lg:tracking-[30px] text-sm sm:text-lg md:text-xl lg:text-2xl">
        the Season 8
      </p>

      <p className="steam uppercase font-black text-5xl sm:text-7xl md:text-8xl lg:text-[120px] text-center leading-none">
        steam
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
        <button className="btn">
          watch live <FaPlayCircle />
        </button>

        <Link
          to=""
          className="uppercase duration-500 hover:text-(--main-color) font-bold text-base sm:text-lg lg:text-xl"
        >
          dream making
        </Link>
      </div>
    </div>
  );
}