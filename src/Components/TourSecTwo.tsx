import { Link } from 'react-router-dom'
import sectionLine from '../../public/images/section_line.png'
import { FaPlayCircle } from "react-icons/fa";
import { TbLivePhotoFilled } from "react-icons/tb";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation  } from 'swiper/modules';
import { FaCaretSquareRight } from "react-icons/fa";
import { FaCaretSquareLeft } from "react-icons/fa";
const images =[
    {image : '../../public/images/live_img01.jpg' ,icon :< FaPlayCircle  />},
    {image : '../../public/images/gallery_img03.jpg', icon :< FaPlayCircle  />}

]


export default function TourSecTwo() {
  return (
    <div className="flex flex-col justify-center items-center gap-10">
      <div className='flex flex-col items-center gap-2'>
        <p className='text-4xl font-black'>WATCH LIVE STREAMS</p>
        <img src={sectionLine} alt="" />
      </div>
      <div className='w-full relative'>
        <div className="nn "><FaCaretSquareRight /></div>
      <div className="pp"><FaCaretSquareLeft /></div>
      </div>
      <main className=' relative w-250 h-[60vh] border-2 rounded-xl overflow-hidden bg-white/10  border-amber-600'>
        <div className='relative w-full z-1'>
            <Swiper
            slidesPerView={1}
            modules={[Navigation]}
            loop={true}
            navigation={{
                nextEl :'.nn',
                prevEl :'.pp'
            }}
            >

            {images.map((el)=>(
                <SwiperSlide key={el.image}>

            <>
            <img src={el.image} alt="" className='w-screen object-cover ' />
            <div className='z-3 absolute top-70 left-115 text-6xl'>
            <Link to={'www.youtube.com'}>{el.icon}</Link>
            </div>
                </>
                </SwiperSlide>

            ))}
                </Swiper>
        </div>
        <div className='absolute z-2 bottom-0 left-0 w-100  flex items-center uppercase justify-between p-5 h-35 bg-black/50 border-r-5 border-(--main-color)'>
            <div className='flex flex-col items-start gap-2 '>
                <div >
                    <p>Live Matches</p>
                </div>
                <p className='font-black text-3xl'>skyward</p>
                <p className='font-black text-lg text-(--main-color)'>10th mar 2022</p>
            </div>
            <div className='flex items-center gap-3 font-black'>
                <TbLivePhotoFilled />
                <Link to={'www.youtube.com'}>watch stream</Link>
            </div>
        </div>
      </main>
    </div>
  )
}
