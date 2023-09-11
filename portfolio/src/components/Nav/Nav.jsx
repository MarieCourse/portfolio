import React, { useEffect } from 'react';
import './Nav.sass';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Nav() {
  const [showLinks, setShowLinks] = useState(false);
  const location = useLocation();

  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };

  const closeNav = () => {
    if (showLinks) {
      setShowLinks(false);
    }
  };

  useEffect(() => {
    const targetSection = location.hash.substring(1);
    if (location.pathname === '/portfolio/' && location.hash) {
      scrollToSection(targetSection);
      closeNav();
    }
  }, [location]);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView();
    }
  };

  return (
    <nav className={`navbar ${showLinks ? 'show-nav' : 'hide-nav'}`}>
      <a href="/portfolio/" className="navbar__logo" onClick={closeNav}>
        Maria Carrera
      </a>
      <ul className="navbar__links">
        <li className="navbar__item">
          <Link
            to="/portfolio/#accueil"
            className="navbar__link"
            onClick={closeNav}
          >
            ACCUEIL
          </Link>
        </li>
        <li className="navbar__item">
          <Link
            to="/portfolio/#works"
            className="navbar__link"
            onClick={closeNav}
          >
            PORTFOLIO
          </Link>
        </li>
        <li className="navbar__item">
          <Link
            to="/portfolio/#about"
            className="navbar__link"
            onClick={closeNav}
          >
            A PROPOS
          </Link>
        </li>
        <li className="navbar__item">
          <Link
            to="/portfolio/#contact"
            className="navbar__link"
            onClick={closeNav}
          >
            CONTACT
          </Link>
        </li>
      </ul>
      <button className="navbar__burger" onClick={handleShowLinks}>
        <span className="burger-bar"></span>
      </button>
    </nav>
  );
}

export default Nav;
