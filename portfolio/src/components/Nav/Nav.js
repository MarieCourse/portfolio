import React from 'react';
import './Nav.sass';
import { useState } from 'react';

function Nav() {
  const [showLinks, setShowLinks] = useState(false);
  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <nav className={`navbar ${showLinks ? 'show-nav' : 'hide-nav'}`}>
      <a href="/portfolio/" className="navbar__logo" onClick={handleShowLinks}>
        Maria Carrera
      </a>
      <ul className="navbar__links">
        <li className="navbar__item">
          <a
            href="/portfolio/"
            className="navbar__link"
            onClick={handleShowLinks}
          >
            ACCUEIL
          </a>
        </li>
        <li className="navbar__item">
          <a
            href="/portfolio/#works"
            className="navbar__link"
            onClick={handleShowLinks}
          >
            PORTFOLIO
          </a>
        </li>
        <li className="navbar__item">
          <a
            href="/portfolio/#about"
            className="navbar__link"
            onClick={handleShowLinks}
          >
            A PROPOS
          </a>
        </li>
        <li className="navbar__item">
          <a
            href="/portfolio/#contact"
            className="navbar__link"
            onClick={handleShowLinks}
          >
            CONTACT
          </a>
        </li>
      </ul>
      <button className="navbar__burger" onClick={handleShowLinks}>
        <span className="burger-bar"></span>
      </button>
    </nav>
  );
}

export default Nav;
