import { PlayIcon } from "../Icons";

import "./AboutUsSection.scss";

export default function AboutUsSection() {
  return (
    <section className="about-us-section">
      <h2 className="about-us-section__title">About us</h2>
      <div className="about-us-section__video-wrapper">
        <img
          className="about-us-section__video"
          src="./images/video-preview.jpg"
          alt="Video Preview Image"
        />
        <div className="about-us-section__video-play-button">
          <PlayIcon />
        </div>
      </div>
    </section>
  );
}
