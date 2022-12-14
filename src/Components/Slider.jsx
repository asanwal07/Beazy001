// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import image1 from '../images/logo.png';
import Testimo from "./Testimo";

// import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper";

export default function App() {
      return (
            <div className="Sliding-Material">
                  <>

                        <Swiper
                              slidesPerView={1}
                              spaceBetween={30}
                              loop={true}
                              pagination={{
                                    clickable: true,
                              }}
                              navigation={true}
                              modules={[Pagination, Navigation]}
                              className="mySwiper"
                        >
                              <SwiperSlide>{<img src={image1} alt="hey bro"></img>}</SwiperSlide>
                              <SwiperSlide>Slide <Testimo /></SwiperSlide>
                              <SwiperSlide></SwiperSlide>
                              <SwiperSlide></SwiperSlide>
                              <SwiperSlide>Slide 5</SwiperSlide>
                              <SwiperSlide>Slide 6</SwiperSlide>
                              <SwiperSlide>Slide 7</SwiperSlide>
                              <SwiperSlide>Slide 8</SwiperSlide>
                              <SwiperSlide>Slide 9</SwiperSlide>
                        </Swiper>
                  </>
            </div>
      );
}