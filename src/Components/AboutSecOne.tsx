import { Link } from "react-router-dom";
import bread1 from '../../public/images/breadcrumb_img01.png'
import bread1Bg from '../../public/images/breadcrumb_img_shape.png'
import shap1 from '../../public/images/breadcrumb_shape01.png'
import shap2 from '../../public/images/breadcrumb_shape02.png'
import line from '../../public/images/breadcrumb_line.png'
import { MdDoubleArrow } from "react-icons/md";

export default function AboutSecOne() {
  return (
    <div className="perr flex flex-col items-center gap-3 p-10 ">
      <div className="info flex items-center justify-between w-full">
        <div className=" flex flex-col gap-7 items-start">
        <p className="text-6xl uppercase font-black text-white">About us</p>
        <button className="btn-in-s"> <Link to={'/'}> Home</Link> <MdDoubleArrow /> About</button>
      </div>
      <div className="relative flex items-center justify-center">
        <img src={bread1} alt=""  className="w-80 -translate-x-15 z-9"/>
        <img src={bread1Bg} alt="" className="absolute top-5 right-22 rotate-10 translate-x-0 z8 scale-135 animate-pulse"/>
        {/* <img src={breadBg} alt="" /> */}
      </div>
      </div>

      <div className="shap flex flex-col items-center w-full  relative">
        <div className="flex justify-between items-center w-full ">
            <img src={shap1} alt="" className="-translate-x-10 translate-y-9  w-75"  />
            <img src={shap2} alt="" className="translate-x-10 translate-y-9  w-75" />
        </div>
        <img src={line} alt="" className=" absolute -bottom-13 h-3 w-400  "  />
      </div>
    </div>
  )
}
