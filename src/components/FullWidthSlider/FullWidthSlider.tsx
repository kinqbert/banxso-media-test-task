import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper/types";
import "swiper/scss";

import Slide from "../../types/Slide";
import FullWidthSlide from "../Slide";

import { Navigation, Pagination } from "swiper/modules";
import { ArrowLeftIcon, ArrowRightIcon } from "../Icons";
import { useRef } from "react";

import './FullWidthSlider.scss';

interface Props {
  slides: Slide[];
}

export default function FullWidthSlider({ slides }: Props) {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <Swiper
      onSwiper={(swiper) => {
        swiperRef.current = swiper;
      }}
      slidesPerView={1}
      spaceBetween={20}
      pagination={{ clickable: true, el: ".swiper-pagination" }}
      modules={[Navigation, Pagination]}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <FullWidthSlide slide={slide} />
        </SwiperSlide>
      ))}
      <div className="swiper-controls">
        <button
          className="swiper-button-prev"
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <ArrowLeftIcon fill="white" />
        </button>
        <div className="swiper-pagination"></div>
        <button
          className="swiper-button-next"
          onClick={() => swiperRef.current?.slideNext()}
        >
          <ArrowRightIcon fill="white" />
        </button>
      </div>
    </Swiper>
  );
}
