import Slide from "../../types/Slide";

import "./FullWidthSlide.scss";

interface Props {
  slide: Slide;
}

export default function FullWidthSlide({ slide }: Props) {
  return (
    <div
      className="full-width-slide"
      style={{ backgroundImage: `url(${slide.image})` }}
    >
      <div className="full-width-slide__content">
        <div className="full-width-slide__text-content">
          <h2 className="full-width-slide__title">{slide.title}</h2>
          <p className="full-width-slide__description">{slide.description}</p>
        </div>
      </div>
    </div>
  );
}
