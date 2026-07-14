import prize from "../../public/images/prize_img.png";
import { MdOutlineAccessTime } from "react-icons/md";
import Slider from "./Slider";

export default function SecTwo() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-6 mt-20 lg:mt-25 p-5 lg:p-8">

      {/* Left */}
      <div className="one flex flex-col items-center lg:items-start text-center lg:text-left gap-3 w-full lg:w-80">
        <span className="uppercase text-(--main-color) text-base lg:text-lg font-black">
          check out our next
        </span>

        <p className="text-2xl sm:text-3xl font-black">
          GAMING TOURNAMENTS !
        </p>

        <p className="hoo text-sm">
          Lpsum dolor sit amet, consectetur adipiscing elit, sed labore et
          dolore magna aliqua.
        </p>

        <button className="btn-s">join with us</button>
      </div>

      {/* Center */}
      <div className="two flex flex-col items-center gap-3">
        <b className="text-2xl lg:text-3xl uppercase font-black">
          Prize pool
        </b>

        <p className="text-xl lg:text-2xl bg-(--main-color) px-6 lg:px-7 py-2 lg:py-3 text-black rounded-4xl">
          $80000
        </p>

        <MdOutlineAccessTime className="text-xl lg:text-2xl" />

        <img
          src={prize}
          className="w-32 sm:w-36 lg:w-42"
          alt=""
        />
      </div>

      {/* Right */}
      <div className="three flex flex-col items-center gap-5 bg-(--scondary-color) w-full max-w-105 lg:w-100 px-5 lg:px-8 py-7 lg:py-9 rounded">
        <p className="font-bold text-xl lg:text-2xl">
          LAST WINNERS
        </p>

        <Slider />
      </div>

    </div>
  );
}