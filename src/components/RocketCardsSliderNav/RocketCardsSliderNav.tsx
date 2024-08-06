import { useSwiper } from "swiper/react";

import "./RocketCardsSliderNav.scss";
import cn from "classnames";
import { useEffect, useState } from "react";

export default function RocketCardsSliderNav() {
  const swiper = useSwiper();
  const [activeIndex, setActiveIndex] = useState(swiper.realIndex);

  useEffect(() => {
    const handleSlideChange = () => {
      setActiveIndex(swiper.realIndex);
    };

    swiper.on("slideChange", handleSlideChange);

    return () => {
      swiper.off("slideChange", handleSlideChange);
    };
  }, [swiper]);

  const handleBulletClick = (index: number) => {
    swiper.slideToLoop(index);
  };

  return (
    <div className="rocket-cards-slider-nav">
      <button
        className="rocket-cards-slider-nav__button"
        onClick={() => swiper.slidePrev()}
      >
        <img src="./src/assets/icons/arrow-left.svg" alt="Left arrow" />
      </button>

      <div className="rocket-cards-slider-nav__pagination">
        {Array.from({ length: swiper.slides.length }).map((_, index) => (
          <button
            key={index}
            onClick={() => handleBulletClick(index)}
            className={cn("rocket-cards-slider-nav__pagination-bullet", {
              "rocket-cards-slider-nav__pagination-bullet--active":
                index === activeIndex,
            })}
          ></button>
        ))}
      </div>

      <button
        className="rocket-cards-slider-nav__button"
        onClick={() => swiper.slideNext()}
      >
        <img src="./src/assets/icons/arrow-right.svg" alt="Right arrow" />
      </button>
    </div>
  );
}
