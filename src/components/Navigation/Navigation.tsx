import { Link } from "react-router-dom";
import "./Navigation.scss";

export default function Navigation() {
  return (
    <nav className="nav">
      <Link to="/">
        <div className="nav__logo nav__button">Logo</div>
      </Link>
      <ul className="nav__list">
        <Link to="/">
          <li className="nav__item">Home</li>
        </Link>
        <Link to="/about">
          <li className="nav__item">About</li>
        </Link>
        <Link to="/qa">
          <li className="nav__item">QA</li>
        </Link>
        <Link to="/contact">
          <li className="nav__item">Contact form</li>
        </Link>
      </ul>
      <Link to="/contact">
        <div className="nav__contact-button nav__button">Contact form</div>
      </Link>
    </nav>
  );
}
