import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/pagination";

import Rocket from "../../types/Rocket";

import Card from "../Card";
import RocketCardsSliderNav from "../RocketCardsSliderNav";

import "./RocketCardsSlider.scss";
import { Pagination } from "swiper/modules";

interface Props {
  rockets: Rocket[];
}

export default function RocketCardsSlider({ rockets }: Props) {
  return (
    <div className="rocket-cards-slider">
      <Swiper
        loop={true}
        slidesPerView={2}
        spaceBetween={20}
        pagination={{ clickable: true }}
        modules={[Pagination]}
      >
        {rockets.map((rocket) => (
          <SwiperSlide key={rocket.id}>
            <Card rocket={rocket} />
          </SwiperSlide>
        ))}
        <RocketCardsSliderNav />
      </Swiper>
    </div>
  );
}
