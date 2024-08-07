import './Navigation.scss';

export default function Navigation() {
  return (
    <nav className="nav">
      <div className="nav__logo">Logo</div>
      <ul className="nav__list">
        <li className="nav__item">Home</li>
        <li className="nav__item">About</li>
        <li className="nav__item">QA</li>
        <li className="nav__item">Contact form</li>
      </ul>
      <button className="nav__contact-button">Contact form</button>
    </nav>
  );
}
