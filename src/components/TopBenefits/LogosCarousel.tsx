import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";    
import "swiper/css";                           
import "swiper/css/pagination";   
import { urlFor } from "../../sanityClient";
import type { ImageWithAlt } from "../../hooks/useHeader";

type Props = { logos: ImageWithAlt[] };

export const LogosCarousel = ({ logos }: Props) => {
  return (
    <div className="max-w-[1253px] mx-auto mt-[17px]">
      <Swiper
        modules={[Pagination]} 
        spaceBetween={16}
        slidesPerView={5}
        breakpoints={{
          0:   { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          992: { slidesPerView: 5 },
        }}
        pagination={{ clickable: true }}
      >
        {logos.map((logo, idx) => (
          <SwiperSlide key={idx} className="flex justify-center">
            <img
              src={urlFor(logo).width(150).url()}
              alt={logo.alt || `Featured in ${idx}`}
              className="h-8 object-contain w-full"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
