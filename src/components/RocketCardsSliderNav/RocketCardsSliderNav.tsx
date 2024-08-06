import { useSwiper } from "swiper/react";

import "./RocketCardsSliderNav.scss";

export default function RocketCardsSliderNav() {
  const swiper = useSwiper();

  return (
    <div className="rocket-cards-slider-nav">
      <button
        className="rocket-cards-slider-nav__button"
        onClick={() => swiper.slidePrev()}
      >
        <img src="./src/assets/icons/arrow-left.svg" alt="Left arrow" />
      </button>

      <button
        className="rocket-cards-slider-nav__button"
        onClick={() => swiper.slideNext()}
      >
        <img src="./src/assets/icons/arrow-right.svg" alt="Right arrow" />
      </button>
    </div>
  );
}
