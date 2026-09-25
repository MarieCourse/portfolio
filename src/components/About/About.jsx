import './About.sass';
import portrait from '../../assets/portrait-maria-carrera.png';
import React from 'react'

function About() {
  return (
    <div className="content about">
      <h2>Á propos</h2>
      <div className="about__content">
        <img src={portrait} alt="Portrait Maria Carrera"/>
        <div>
          <p>
            <b>Développeuse web full-stack</b>, je conçois et fais évoluer des outils internes sur mesure : de la logique
            métier côté serveur jusqu'aux interfaces que l'on utilise au quotidien. J'aime particulièrement transformer
            des besoins concrets en solutions simples et durables.
          </p>
          <p>
            Mon chemin vers le développement n'a rien de linéaire : j'ai d'abord été galeriste indépendante. J'en garde
            le sens du détail, une vraie autonomie et l'exigence du travail bien fait — des qualités qui nourrissent
            chaque ligne de code que j'écris.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
