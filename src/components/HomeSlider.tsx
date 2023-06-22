import React from "react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import Slider1 from "../../public/images/slider/slider-1.jpg";
import Slider2 from "../../public/images/slider/slider-2.jpg";
import Slider3 from "../../public/images/slider/slider-3.jpg";
import Slider4 from "../../public/images/slider/slider-4.jpg";

// Import your slide images or components here

SwiperCore.use([Navigation, Pagination]);

const HomeSlider: React.FC = () => {
  return (
    <Swiper navigation pagination>
      <SwiperSlide>
        <Image
          src={Slider3}
          alt="slider-1"
          style={{
            height: "400px",
            width: "100%",
            objectFit: "cover",
          }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={Slider1}
          alt="slider-1"
          style={{
            height: "400px",
            width: "100%",
            objectFit: "cover",
          }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={Slider2}
          alt="slider-1"
          style={{
            height: "400px",
            width: "100%",
            objectFit: "cover",
          }}
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default HomeSlider;
