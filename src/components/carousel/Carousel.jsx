import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const Carousel = () => {
  const images = [
    "bgImage1.png",
    "bgImage2.png",
    "bgImage3.png",
    "bgImage4.png",
    "bgImage5.png",
  ];

  return (
    <div className="carousel-container">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        // pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="mySwiper"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-[75vh] object-cover object-top"
            />
            <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-b"></div>
          </SwiperSlide>
        ))}
      </Swiper>
      <style>
        {`
          .swiper-button-next,
          .swiper-button-prev {
            color: black;
          }
        `}
      </style>
    </div>
  );
};

export default Carousel;
