import { useSwiper } from "swiper/react";

import { ArrowLeftIcon, ArrowRightIcon } from "../Icons";

import "./RocketCardsSliderNav.scss";

export default function RocketCardsSliderNav() {
  const swiper = useSwiper();

  return (
    <div className="rocket-cards-slider-nav">
      <button
        className="rocket-cards-slider-nav__button"
        onClick={() => swiper.slidePrev()}
      >
        <ArrowLeftIcon />
      </button>

      <button
        className="rocket-cards-slider-nav__button"
        onClick={() => swiper.slideNext()}
      >
        <ArrowRightIcon />
      </button>
    </div>
  );
}
