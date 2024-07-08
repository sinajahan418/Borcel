"use client"
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation, Autoplay } from "swiper/modules";

const Slider = () => {
  return (
    <div>
      <Swiper
        navigation={true}
        autoplay={{ delay: 2000 }}
        modules={[Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="https://set-coffee.com/wp-content/uploads/2023/12/slide.jpg"
            alt="Slide"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://set-coffee.com/wp-content/uploads/2021/10/winter-slie.jpg"
            alt="Slide"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://set-coffee.com/wp-content/uploads/2022/06/fall.jpg"
            alt="Slide"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
