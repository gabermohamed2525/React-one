import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa6";
import { MdOutlineAccessTime } from "react-icons/md";
import { FaPlayCircle } from "react-icons/fa";
import live from '../../public/images/live-stream-icon.png'
import video1 from '../../public/images/video_nav01.jpg'
import video2 from '../../public/images/video_nav02.jpg'
import video3 from '../../public/images/video_nav03.jpg'
import stream from '../../public/images/fighter.jpeg'
import spiner from '../../public/images/live_stream_shape.png'
export default function SecFive() {
  return (
    <div className=" pernat flex flex-col items-center justify-start gap-10  w-full h-[135vh] relative">
      <div className="absolute w-125 z-9 top-27 left-105 spiner">
          <img src={spiner} alt="" />
        </div>
      <div className="z-8 flex live justify-center items-center rounded-full mt-15 overflow-hidden w-110 h-110  shadow-lg absolute top-20 left-112.5 bg-(--video-color)">
        <img src={stream} className="w-full h-full object-cover"  alt="" />
</div>
      <main className="flex items-center justify-between bg-(--color-sec) p-8 my-100 w-[90%] text-white border border-white/10">
        <div className="info flex flex-col items-start justify-center gap-5 p-5 h-[60vh]">
         <div className="bg-(--main-color) flex items-center justify-center w-20 h-20 rounded">
          <img src={live} alt="" width={50}/>
         </div>
          <div className="flex-col flex gap-1">
          <b className="text-(--main-color) uppercase text-2xl font-black">MULTIPLE WAYS TO</b>
          <p className="uppercase text-5xl font-black">live streaming</p>
          </div>
          <p className="hoo">Lpsum dolor sit amet, consectetur adipiscing elit, <br />sed labore et dolore magna aliqua.</p>
          <div className="flex items-center gap-2 text-(--main-color) uppercase font-black duration-300 hover:text-white">
            <Link to={''}>add streaming</Link>
            <FaPlus className="cursor-pointer" />
          </div>
          </div>

          <div className="second flex flex-col items-center  gap-3 justify-center me-20">
            <MdOutlineAccessTime className="text-xl"/>
            <button className="btn">watch live <FaPlayCircle /> </button>

          </div>

          <div className="third flex flex-col gap-4 items-center">
              <div className="flex items-center gap-4 font-black text-xl">
                <Link to={''}>WARFILED</Link>
                <img src={video3} className="rounded border-2 border-(--main-color)" alt="" />
              </div>
              <div className="flex items-center gap-4 font-black text-xl">
                <Link to={''}>HANCOCK</Link>
                <img src={video1} className="rounded border-2 border-(--main-color)" alt="" />
              </div>
              <div className="flex items-center gap-4 font-black text-xl">
                <Link to={''}>ZOMBIE</Link>
                <img src={video2} className="rounded border-2 border-(--main-color)" alt="" />
              </div>
              
          </div>
      </main>
    </div>
  )
}
