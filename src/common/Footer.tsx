import { Link } from "react-router-dom";
import logo from "../../public/images/logo.png";
import payments from "../../public/images/cart_img.png";
import { FaSearch } from "react-icons/fa";
import { RiFacebookFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="flex flex-col relative">
      <footer className="flex flex-col    items-center justify-center gap-8 p-4 md:p-8">
        {/* Top */}
<div className="topSide flex flex-wrap lg:flex-nowrap justify-between items-center w-full p-3 gap-5">          {/* Logo */}
          <div>
            <img
              src={logo}
              className="w-28 sm:w-36 md:w-44 lg:w-auto"
              alt=""
            />
          </div>

          {/* Links */}
          <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-5 lg:gap-8 text-(--font-color) text-[10px] sm:text-xs md:text-sm lg:text-lg uppercase font-black">
            <Link to="" className="duration-300 hover:text-(--main-color)">
              Home
            </Link>

            <Link to="" className="duration-300 hover:text-(--main-color)">
              About
            </Link>

            <Link to="" className="duration-300 hover:text-(--main-color)">
              Tournament
            </Link>

            <Link to="" className="duration-300 hover:text-(--main-color)">
              Blogs
            </Link>

            <Link to="" className="duration-300 hover:text-(--main-color)">
              Pages
            </Link>

            <Link to="" className="duration-300 hover:text-(--main-color)">
              Contact
            </Link>
          </div>

          {/* Search - تظهر فقط على الشاشات الكبيرة */}
          <div className="big-search hidden lg:block">
            <p>Find Here Now</p>

            <div className="search">
              <FaSearch />
            </div>
          </div>
        </div>

        <hr className="w-full border-white/20" />

        {/* Bottom */}
        <div className="bottomSide flex justify-between items-center w-full p-3">
          <div className="flex justify-center items-center gap-2 sm:gap-3 md:gap-4 lg:gap-6 text-(--font-color) text-[10px] sm:text-xs md:text-sm lg:text-base">
            <p className="duration-300 hover:text-(--main-color) cursor-pointer">
              FAQ
            </p>

            <p className="duration-300 hover:text-(--main-color) cursor-pointer">
              Help Center
            </p>

            <p className="duration-300 hover:text-(--main-color) cursor-pointer">
              Terms of Use
            </p>

            <p className="duration-300 hover:text-(--main-color) cursor-pointer">
              Privacy
            </p>
          </div>

          <div className="flex justify-center gap-2 items-center">
            <div className="socail text-(--font-color) bg-(--ni-color) rounded-full p-2 sm:p-2.5 lg:p-3">
              <RiFacebookFill className="duration-300 hover:text-(--main-color) cursor-pointer text-sm sm:text-base lg:text-lg" />
            </div>

            <div className="socail text-(--font-color) bg-(--ni-color) rounded-full p-2 sm:p-2.5 lg:p-3">
              <FaTwitter className="duration-300 hover:text-(--main-color) cursor-pointer text-sm sm:text-base lg:text-lg" />
            </div>

            <div className="socail text-(--font-color) bg-(--ni-color) rounded-full p-2 sm:p-2.5 lg:p-3">
              <FaYoutube className="duration-300 hover:text-(--main-color) cursor-pointer text-sm sm:text-base lg:text-lg" />
            </div>

            <div className="socail text-(--font-color) bg-(--ni-color) rounded-full p-2 sm:p-2.5 lg:p-3">
              <FaGoogle className="duration-300 hover:text-(--main-color) cursor-pointer text-sm sm:text-base lg:text-lg" />
            </div>
          </div>
        </div>
      </footer>

      {/* Copyright */}
      <div className="bg-(--ni-color) p-4 flex justify-between items-center text-(--font-color)">
        <p className="uppercase text-[10px] sm:text-xs md:text-sm">
          Copyright © 2026 All Rights Reserved By{" "}
          <span className="text-(--main-color)">GABER</span>
        </p>

        <img
          src={payments}
          className="w-28 sm:w-36 md:w-48 lg:w-65"
          alt=""
        />
      </div>
    </div>
  );
}