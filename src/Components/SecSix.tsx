import Headung from "./re-usable Com/Headung";
import section from "../../public/images/section_line.png";
import img1 from "../../public/images/shop_img01.png";
import img2 from "../../public/images/shop_img02.png";
import img3 from "../../public/images/shop_img03.png";
import { Link } from "react-router-dom";
import { FaShareAlt } from "react-icons/fa";
import { MdOutlineAccessTime } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";

export default function SecSix() {
  return (
    <div className="flex flex-col items-center justify-center gap-10 p-4">
      <Headung title="check our gears" />
      <img src={section} className="-translate-y-6" alt="" />

      <main className="grid w-full grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 place-items-center">
        {/* Card 1 */}
        <div className="card w-full max-w-97.5 h-150 p-7 flex flex-col items-start justify-between gap-4">
          <div className="mini-cart relative flex justify-center items-center w-full h-80">
            <img src={img1} className="w-40" alt="" />

            <div className="absolute right-8 top-18 flex items-center justify-center rounded-4xl duration-300 hover:text-(--main-color) hover:border-(--main-color) w-10 h-10 cursor-pointer border-2 border-white/50">
              <FaShareAlt />
            </div>

            <div className="absolute right-6 top-3 flex gap-2 items-center uppercase text-sm font-black text-(--main-color)">
              <MdOutlineAccessTime />
              <span>in 4 days</span>
            </div>
          </div>

          <div className="flex items-center justify-between w-full">
            <div className="flex flex-col items-start gap-1">
              <Link
                to=""
                className="text-xl font-black duration-300 hover:text-(--main-color)"
              >
                HEADPHONES
              </Link>

              <p className="hoo">E-SPORTS</p>
            </div>

            <span className="font-black text-xl text-(--main-color)">
              $18
            </span>
          </div>

          <div className="flex justify-between items-center w-full">
            <button className="btn-s-m">
              <FaPlus />
              add to card
            </button>

            <button className="btn-s-s">
              <FaHeart />
            </button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="card w-full max-w-97.5 h-150 p-7 flex flex-col items-start justify-between gap-4">
          <div className="mini-cart relative flex justify-center items-center w-full h-80">
            <img src={img2} className="w-40" alt="" />

            <div className="absolute right-8 top-18 flex items-center justify-center rounded-4xl duration-300 hover:text-(--main-color) hover:border-(--main-color) w-10 h-10 cursor-pointer border-2 border-white/50">
              <FaShareAlt />
            </div>

            <div className="absolute right-6 top-3 flex gap-2 items-center uppercase text-sm font-black text-(--main-color)">
              <MdOutlineAccessTime />
              <span>in 4 days</span>
            </div>
          </div>

          <div className="flex items-center justify-between w-full">
            <div className="flex flex-col items-start gap-1">
              <Link
                to=""
                className="text-xl uppercase font-black duration-300 hover:text-(--main-color)"
              >
                CONTROLLER
              </Link>

              <p className="hoo">E-SPORTS</p>
            </div>

            <span className="font-black text-xl text-(--main-color)">
              $29
            </span>
          </div>

          <div className="flex justify-between items-center w-full">
            <button className="btn-s-m">
              <FaPlus />
              add to card
            </button>

            <button className="btn-s-s">
              <FaHeart />
            </button>
          </div>
        </div>

        {/* Card 3 */}
        <div className="card w-full max-w-97.5 h-150 p-7 flex flex-col items-start justify-between gap-4">
          <div className="mini-cart relative flex justify-center items-center w-full h-80">
            <img src={img3} className="w-40" alt="" />

            <div className="absolute right-8 top-18 flex items-center justify-center rounded-4xl duration-300 hover:text-(--main-color) hover:border-(--main-color) w-10 h-10 cursor-pointer border-2 border-white/50">
              <FaShareAlt />
            </div>

            <div className="absolute right-6 top-3 flex gap-2 items-center uppercase text-sm font-black text-(--main-color)">
              <MdOutlineAccessTime />
              <span>in 4 days</span>
            </div>
          </div>

          <div className="flex items-center justify-between w-full">
            <div className="flex flex-col items-start gap-1">
              <Link
                to=""
                className="text-xl uppercase font-black duration-300 hover:text-(--main-color)"
              >
                GAMING MASK
              </Link>

              <p className="hoo">E-SPORTS</p>
            </div>

            <span className="font-black text-xl text-(--main-color)">
              $45
            </span>
          </div>

          <div className="flex justify-between items-center w-full">
            <button className="btn-s-m">
              <FaPlus />
              add to card
            </button>

            <button className="btn-s-s">
              <FaHeart />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}