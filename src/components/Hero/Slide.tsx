"use client";

import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const slideItems = ["bradvisors", "f", "valor", "tc", "bm&c", "neofeed"];

export function Slide() {
  return (
    <Swiper
      slidesPerView={1}
      modules={[Autoplay]}
      autoplay={{
        delay: 3000,
      }}
      loop
      speed={1000}
      breakpoints={{
        1024: {
          slidesPerView: 2,
        },
      }}
    >
      {slideItems.map((item) => (
        <SwiperSlide key={item}>
          <div className="flex h-[30px] items-center">
            <Image
              src={`/img/hero/${item}.svg`}
              alt={item}
              width={150}
              height={30}
              className="h-full w-full object-contain"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
