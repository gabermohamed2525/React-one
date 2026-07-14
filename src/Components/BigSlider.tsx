import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";

import image1 from "../../public/images/gallery_img01.jpg";
import image2 from "../../public/images/gallery_img02.jpg";
import image3 from "../../public/images/gallery_img03.jpg";
import image4 from "../../public/images/gallery_img04.jpg";

import { Autoplay, EffectCoverflow } from "swiper/modules";

      
const images = [
        
        { id: 1, imageSlide: image1 },
        
        { id: 2, imageSlide: image2 },
        
        { id: 3, imageSlide: image3 },
        
        { id: 4, imageSlide: image4 },
      
      ];

      
      export default function BigSlider() {
        
        return (
          
          <div className="w-full">
            
            <Swiper
        
        modules={[Autoplay, EffectCoverflow]}
      
        autoplay={{
          
        delay: 2500,
          
          pauseOnMouseEnter: true,
        
        }}
        
        slidesPerView={3}
        
        spaceBetween={15}
        
        className="w-full"
        
        loop={true}
        
        effect={"coverflow"}
        
        coverflowEffect={{
          
          rotate: 50,
          
          stretch: 0,
          
          depth: 100,
          
          modifier: 1,
          
          slideShadows: true,
        
        }}
        
        breakpoints={{
          
          0: {
            
            slidesPerView: 1,
          
          },
          
          640: {
            
            slidesPerView: 2,
          
          },
          
          1024: {
            
            slidesPerView: 3,
          
          },
        
        }}
      
      >
              
              {images.map((el) => (
                
                <SwiperSlide key={el.id}>
                
                 <img
                    
                    src={el.imageSlide}
                    
                    alt={`Gallery ${el.id}`}
                    
                    className="w-full h-64 sm:h-72 md:h-80 lg:h-110 object-cover rounded-lg"
                  
                  />
                
                </SwiperSlide>
              
              ))}
            
            </Swiper>
          
          </div>
        
      );
      
      }