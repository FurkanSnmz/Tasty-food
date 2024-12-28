import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="l-header" id="header">
      <nav className="nav bd-container">
        <Link to="/" className="nav__logo">Tasty</Link>
        <div className="nav__menu" id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item"><Link to="/" className="nav__link active-link">Ana Sayfa</Link></li>
            <li className="nav__item"><Link to="/about" className="nav__link">Hakkımızda</Link></li>
            <li className="nav__item"><Link to="/menu" className="nav__link">Menü</Link></li>
            <li className="nav__item"><Link to="/contact" className="nav__link">Bize Ulaşın</Link></li>
            <li><i className="bx bx-moon change-theme" id="theme-button"></i></li>
          </ul>
        </div>
        <div className="nav__toggle" id="nav-toggle">
          <i className="bx bx-menu"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;