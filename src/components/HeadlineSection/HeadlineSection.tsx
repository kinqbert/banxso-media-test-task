import { SphereIcon } from "../Icons";

import Navigation from "../Navigation";

import "./HeadlineSection.scss";

export default function HeadlineSection() {
  return (
    <section className="headline-section">
      <Navigation />
      <div className="headline-section__content">
        <h1 className="headline-section__headline">
          Dive deep in to the future
        </h1>
        <div className="headline-section__bottom">
        <SphereIcon />
          <div className="headline-section__bottom-line"></div>
        </div>
      </div>
    </section>
  );
}
