import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";

import Rocket from "../../types/Rocket";

import Card from "../Card";

import "./RocketCardsSlider.scss";

interface Props {
  rockets: Rocket[];
}

export default function RocketCardsSlider({ rockets }: Props) {
  const cards = rockets.map((rocket) => <Card rocket={rocket} />);

  return (
    <Swiper slidesPerView={3} spaceBetween={20}>
      {cards.map((card) => (
        <SwiperSlide>{card}</SwiperSlide>
      ))}
    </Swiper>
  );
}
