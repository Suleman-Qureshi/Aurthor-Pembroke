"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

function SwiperSlider() {
  const items = [
    "CONCIERGE SERVICES",
    "CORPORATE & PRIVATE",
    "EXECUTIVE TRANSFERS",
    "BESPOKE TRAVEL",
  ];

  return (
    <div className="bg-secondary py-4 overflow-hidden">
      <Swiper
        modules={[Autoplay]}
        slidesPerView="auto"
        spaceBetween={80}
        loop={true}
        speed={3000} // long duration = smooth movement
        autoplay={{
          delay: 1, // ⚠️ must NOT be 0
          disableOnInteraction: false,
        }}
        allowTouchMove={false}
        loopAdditionalSlides={items.length}
        className="continuous-swiper"
      >
        {[...items, ...items, ...items,...items, ...items, ...items].map((item, index) => (
          <SwiperSlide key={index} className="!w-auto">
            <span className="text-xs tracking-[0.3em] text-primary whitespace-nowrap">
              {item}
            </span>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default SwiperSlider;