import { Link } from "react-router-dom";
import bread from '../../public/images/breadcrumb_img04.png'
import bread1 from '../../public/images/breadcrumb_img_shape01.png'
import bread2 from '../../public/images/breadcrumb_img_shape02.png'
import shap1 from '../../public/images/breadcrumb_shape01.png'
import shap2 from '../../public/images/breadcrumb_shape02.png'
import line from '../../public/images/breadcrumb_line.png'
import { MdDoubleArrow } from "react-icons/md";

export default function TourSecOne() {
  return (
    <div className="perr flex flex-col items-center gap-3 p-10 ">
      <div className="info flex items-center justify-between w-full">
        <div className=" flex flex-col gap-7 items-start">
        <p className="text-6xl uppercase font-black text-white">Tournament</p>
        <button className="btn-in-s"> <Link to={'/'}> Home</Link> <MdDoubleArrow /> Tournament</button>
      </div>
      <div className="relative flex items-center justify-center group">
        <img src={bread} className="w-75 -translate-x-25" alt="" />
        <img src={bread1} className="absolute top-0 right-70 transition-all duration-700 group-hover:right-58" width="170" alt="" />
        <img src={bread2}  className="absolute top-0 left-20 transition-all duration-700 group-hover:left-8" width="170" alt="" />
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
