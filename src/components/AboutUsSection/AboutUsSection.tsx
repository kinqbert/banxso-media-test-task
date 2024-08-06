import "./AboutUsSection.scss";

export default function AboutUsSection() {
  return (
    <section className="about-us-section">
      <h2 className="about-us-section__title">About us</h2>
      <div className="about-us-section__video-wrapper">
        <img
          className="about-us-section__video"
          src="./src/assets/images/video-preview.jpg"
          alt="Video Preview Image"
        />
        <div className="about-us-section__video-play-button">
          <img className="about-us-section__video-play-button-icon" src="./src/assets/icons/play-icon.svg" alt="Video Play Button" />
        </div>
      </div>
    </section>
  );
}
