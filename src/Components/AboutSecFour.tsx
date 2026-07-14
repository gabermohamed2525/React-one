import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import gallary1 from "../../public/images/about_gallery01.jpg";
import gallary2 from "../../public/images/about_gallery02.jpg";
import gallary3 from "../../public/images/about_gallery03.jpg";
import gallary4 from "../../public/images/about_gallery04.jpg";
import gallary5 from "../../public/images/about_gallery05.jpg";
import gallary6 from "../../public/images/about_gallery06.jpg";
import { Autoplay } from "swiper/modules";

const images = [
  { id: 1, image: gallary1 },
  { id: 2, image: gallary2 },
  { id: 3, image: gallary3 },
  { id: 4, image: gallary4 },
  { id: 5, image: gallary5 },
  { id: 6, image: gallary6 },
];

export default function AboutSecFour() {
  return (
    <div className="w-full">
      <Swiper
      modules={[Autoplay]}
      autoplay={true}
        spaceBetween={2}
        slidesPerView={3}
        loop={true}
      >
        {images.map((el) => (
          <SwiperSlide key={el.id}>
            <img
              src={el.image}
              alt=""
              className="w-80 rounded-lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}