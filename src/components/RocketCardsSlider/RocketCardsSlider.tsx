import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/scss";
import "swiper/scss/pagination";

import Rocket from "../../types/Rocket";

import Card from "../Card";
import SliderNav from "../SliderNav";

import "./RocketCardsSlider.scss";


interface Props {
  rockets: Rocket[];
}

export default function RocketCardsSlider({ rockets }: Props) {
  return (
    <div className="rocket-cards-slider">
      <Swiper
        loop={true}
        slidesPerView={3}
        spaceBetween={20}
        pagination={{ clickable: true }}
        modules={[Pagination]}
      >
        {rockets.map((rocket) => (
          <SwiperSlide key={rocket.id}>
            <Card rocket={rocket} />
          </SwiperSlide>
        ))}
        <SliderNav />
      </Swiper>
    </div>
  );
}
