import "./HeadlineSection.scss";

export default function HeadlineSection() {
  return (
    <section className="headline-section">
      <nav className="headline-section__nav">
        <div className="headline-section__nav-logo">Logo</div>
        <ul className="headline-section__nav-list">
          <li className="headline-section__nav-item">Home</li>
          <li className="headline-section__nav-item">About</li>
          <li className="headline-section__nav-item">QA</li>
          <li className="headline-section__nav-item">Contact form</li>
        </ul>
        <button className="headline-section__contact-button">
          Contact form
        </button>
      </nav>
      <div className="headline-section__content">
        <h1 className="headline-section__headline">
          Dive deep in to the future
        </h1>
        <div className="headline-section__bottom">
          <img
            className="headline-section__bottom-sphere"
            src="./src/assets/icons/sphere-icon.svg"
            alt=""
          />
          <div className="headline-section__bottom-line"></div>
        </div>
      </div>
    </section>
  );
}
