import { useState } from "react";
import logo from "../../public/images/logo.png";
import headrtIcon from "../../public/images/hader_icon.png";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import NavLi from "../Components/NavLi";
import AuthBtn from "../Components/AuthBtn";
import { Link } from "react-router-dom";

const navLinks = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Tournament",
    path: "/tournament",
  },
  {
    name: "Blogs",
    path: "/blog",
  },
  {
    name: "Shop",
    path: "/prodcuts",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];         

export default function Navbar() {
  const [open, setOpen] = useState(false);
  
  return (
    <>
      <nav className="sticky top-0 z-1000 flex items-center justify-between p-5 bg-(--scondary-color) text-white border-r-8 border-(--main-color)">
        {/* Logo */}
        <div className="logo w-52 lg:w-75">
          <img src={logo} alt="Logo" />
        </div>

        {/* Desktop Links */}
        <div className="nav-links hidden lg:block ">
          <ul className="flex items-center justify-center gap-10 font-bold text-md text-(--font-color)">
            {navLinks.map((el) => (
              <NavLi key={el.path} {...el} />
            ))}
          </ul>
        </div>

        {/* Desktop Right */}
        <div className="right-nav  hidden lg:flex justify-between px-5 py-4 items-center gap-7 text-(--font-color)">
          <FaSearch className="cursor-pointer duration-300 hover:text-(--main-color)" />
          <AuthBtn />
          <img
            src={headrtIcon}
            alt=""
            className="cursor-pointer duration-700 hover:rotate-360"
          />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-3xl text-(--font-color) hover:cursor-pointer"
          onClick={() => setOpen(!open) }
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden bg-(--scondary-color) transition-all duration-300 ${
          open ? "max-h-125 py-6 px-6" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col gap-6 text-center  font-bold text-(--font-color)">
          
          {navLinks.map((el) => (
            <div className="flex flex-col gap-6 duration-300 hover:bg-(--main-color) hover:cursor-pointer p-1 text-white rounded-xl border-2 border-(--main-color)/20">

              <NavLi key={el.path} {...el} />
            </div>
          ))}
        </ul>

        <div className="flex items-center justify-center gap-6 mt-8 text-(--font-color)">
          <Link to={'/prodcuts'}>
          <FaSearch className="cursor-pointer text-xl hover:text-(--main-color)" />
          </Link>

          <AuthBtn />
          <img
            src={headrtIcon}
            alt=""
            className="w-8 cursor-pointer duration-700 hover:rotate-360"
          />
        </div>
      </div>
    </>
  );
}