import './home.sass';
import React from 'react';
import Presentation from '../../components/Presentation/Presentation'
import About from '../../components/About/About'
import Experience from '../../components/Experience/Experience'
import Contact from '../../components/Contact/Contact'
import Skills from '../../components/Skills/Skills'
import Works from '../../components/Works/Works'

function Home() {
  return (
    <div className="main home__main" id="accueil">
      <div className="home__section">
        <Presentation/>
      </div>
      <div className="home__section" id="about">
        <About/>
      </div>
      <div className="home__section" id="experience">
        <Experience/>
      </div>
      <div className="home__section" id="skills">
        <Skills/>
        <a
          href="https://drive.google.com/file/d/1QPXsglIja_yO210N2yvRGM_BAEUefzoB/view?usp=sharing"
          className="button secondary">Voir mon CV</a>
      </div>
      <div className="home__section" id="works">
        <Works/>
      </div>
      <div className="home__section" id="contact">
        <Contact/>
      </div>
    </div>
  );
}

export default Home;
