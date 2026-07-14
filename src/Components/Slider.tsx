import winner1 from '../../public/images/winner_img01.png';
import winner2 from '../../public/images/winner_img02.png';
import winner3 from '../../public/images/winner_img03.png';
import { Navigation} from'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import 'swiper/swiper-bundle.css'

import { FaAngleRight } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";


const banners = [
  { id: 1, image: winner1, span: '2ND PLACE' },
  { id: 2, image: winner2, span: '2ND PLACE' },
  { id: 4, image: winner1, span: '2ND PLACE' },
  { id: 3, image: winner3, span: '2ND PLACE' },
];

export default function Slider() {
  return (
    <div className="w-full relative">
        <div className='next'><FaAngleRight /></div>
        <div className='prev'><FaAngleLeft /></div>
      <Swiper
      modules={[  Navigation]}
    //   autoplay={{delay:3000 , pauseOnMouseEnter: true}}
      navigation={{
        nextEl: '.next',
        prevEl: '.prev'
      }}
        slidesPerView={3}
        spaceBetween={20}
        loop = {true}
        className="w-full"
      >
        {banners.map((el) => (
          <SwiperSlide key={el.id}>
            <div className="flex flex-col items-center justify-center gap-3">
              <img
                src={el.image}
                alt={el.span}
                className="w-32 object-contain"
              />

              <span className="bg-(--main-color) px-2 py-1 rounded font-black text-sm">
                {el.span}
              </span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}