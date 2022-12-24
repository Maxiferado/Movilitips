import React from "react";
import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

import bucara from "../../assets/bucara.png";
import bogota from "../../assets/bogota.png";
import medellin from "../../assets/Medellin.png";
import maininfo from "../../assets/swiperbanner.png"

const Swiperxd = () => {
  return (
    <>
    <div className="bg-slate-200 drop-shadow-md">
    <Swiper    
    className="w-9/12 h-3/4"  
      modules={[Navigation, Pagination, Scrollbar, Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      autoplay
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide className="">
        <img src={bogota} alt="Bogota" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={maininfo} alt="Bucaramanga" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={medellin} alt="Medellin" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={bucara} alt="Bucaramanga" />
      </SwiperSlide>      
    </Swiper>
    </div>
    </>
  );
};

export default Swiperxd;
