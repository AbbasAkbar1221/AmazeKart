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
    "bgImage5.png"
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
              className="w-full h-auto "
            />
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