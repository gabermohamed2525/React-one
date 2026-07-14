import { NavLink } from "react-router-dom";
import { FaRegCircleRight } from "react-icons/fa6";
import image1 from "../../public/images/game_img01.png";
import image2 from "../../public/images/game_img02.png";
import image3 from "../../public/images/game_img03.png";
import image4 from "../../public/images/game_img04.png";
import shadow from "../../public/images/gamer_img_shadow.png";

export default function SecOne() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-19 my-12 px-5 lg:px-0 overflow-hidden">
      
      {/* Left */}
      <div className="one relative z-6 flex flex-col items-start justify-center gap-6 lg:gap-9 bg-(--scondary-color) p-6 lg:p-8 w-full lg:w-145 min-h-125 lg:h-120">

        <div className="link uppercase font-bold text-xs sm:text-sm flex flex-wrap items-center gap-3">
          <NavLink
            to=""
            className="duration-300 hover:text-(--main-color)"
          >
            find team member
          </NavLink>

          -

          <NavLink
            to="c"
            className="duration-300 hover:text-(--main-color)"
          >
            our game shop
          </NavLink>
        </div>

        <div className="bg-(--main-color) w-full h-1.5 rounded-b-3xl relative">
          <div className="bg-(--main-color) w-15 h-1.5 absolute top-1 right-15 rounded-2xl"></div>
        </div>

        <p className="leading-tight text-3xl sm:text-4xl lg:text-5xl font-black uppercase">
          EXPERIENCE just for
          <br />
          gamers <span className="text-(--main-color)">OFFER</span>
        </p>

        <p className="hoo leading-7 text-sm sm:text-base text-(--font-inter)">
          Nullam quis ante. Maecenas ullamcorper, dui et placerat feugiat,
          eros pede varius nisi, condimentum viverra felis nunc et lorem. In
          auctor lobortis lacus. Phasellus gravida semper nisi. Aliquam
          lobortis.
        </p>

        <div className="flex items-center gap-3">
          <FaRegCircleRight className="text-(--main-color) text-lg" />
          <p className="hoo text-sm sm:text-base">
            Will sharpen your brain and focus
          </p>
        </div>
      </div>

      {/* Right */}
      <div className="two relative w-full max-w-125 lg:w-110 flex items-center justify-center">

        <img
          src={image1}
          alt=""
          className="w-[75%] sm:w-[80%] lg:w-100 relative z-8"
        />

        <div className="absolute inset-0 flex justify-between items-center z-7">

          <img
            src={image2}
            alt=""
            className="w-20 sm:w-24 lg:w-30 -translate-x-6 sm:-translate-x-10 lg:-translate-x-25 -translate-y-10 sm:-translate-y-16 lg:-translate-y-22"
          />

          <img
            src={image3}
            alt=""
            className="w-28 sm:w-32 lg:w-40 translate-x-4 lg:translate-x-10"
          />

          <img
            src={image4}
            alt=""
            className="w-20 sm:w-24 lg:w-28 translate-x-5 sm:translate-x-8 lg:translate-x-17"
          />
        </div>

        <img
          src={shadow}
          alt=""
          className="absolute left-1/2 -translate-x-1/2 w-175 lg:w-250 z-5"
        />

        <img
          src={shadow}
          alt=""
          className="absolute left-1/2 -translate-x-1/2 translate-y-20 lg:translate-y-30 w-175 lg:w-250 z-5"
        />
      </div>
    </div>
  );
}