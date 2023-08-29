import './Header.sass';

function Header() {
  // const scrollToSection = (sectionId) => {
  //   const sectionRef = document.getElementById(sectionId);
  //   if (sectionRef) {
  //     const offset = sectionRef.getBoundingClientRect().top + window.scrollY;
  //     window.scrollTo({
  //       top: offset,
  //       behavior: 'smooth',
  //     });
  //   }
  // };

  return (
    <div className="header">
      {/* Logo de Kasa, en utilisant Link pour rediriger vers la page d'accueil lorsqu'on clique dessus */}
      <a
        href="/#accueil"
        // onClick={() => scrollToSection('accueil')}
        className="header__nav__link"
      >
        María Carrera
      </a>
      {/* Navigation du header avec les liens */}
      <nav className="header__nav">
        {/* Lien vers la page d'accueil, le lien sera actif (avec une classe "active") lorsqu'on est sur cette page */}
        <a
          href="/#accueil"
          // onClick={() => scrollToSection('accueil')}
          className="header__nav__link"
        >
          Accueil
        </a>
        {/* Lien vers la page "Works", le lien sera actif lorsqu'on est sur cette page */}
        <a
          href="/#works"
          // onClick={() => scrollToSection('works')}
          className="header__nav__link"
        >
          Works
        </a>
        {/* Lien vers la page "A Propos", le lien sera actif lorsqu'on est sur cette page */}
        <a
          href="/#about"
          // onClick={() => scrollToSection('about')}
          className="header__nav__link"
        >
          A Propos
        </a>
        {/* Lien vers la page "Contact", le lien sera actif lorsqu'on est sur cette page */}
        <a
          href="/#contact"
          className="header__nav__link"
          // onClick={() => scrollToSection('contact')}
        >
          Contact
        </a>
      </nav>
    </div>
  );
}

export default Header;
