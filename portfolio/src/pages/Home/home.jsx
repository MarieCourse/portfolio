import React from 'react';
import Card from '../../components/Card/Card';
import projectsData from '../../datas/projects.json';
import Presentation from '../../components/Presentation/Presentation';
import About from '../../components/About/About';
import './Home.sass';
import Contact from '../../components/Contact/Contact';

function Home() {
  return (
    <div className="main home__main" id="accueil">
      <Presentation />
      <div className="home__main__section works" id="works">
        <h2>Works</h2>
        <p>
          Projets réalisés dans le cadre de ma formation en tant que
          développeuse web chez OpenClassrooms. Au cours de cette expérience,
          j'ai eu l'opportunité d'acquérir les compétences essentielles pour le
          développement front-end et back-end grâce aux technologies telles que
          HTML, CSS, JavaScript, React et Node.js, entre autres. J'ai pu
          également approfondir mes compétences en optimisation et débogage en
          utilisant des outils tels que Chrome DevTools, Wave et Lighthouse.
        </p>
        {/* Affichage de la liste des projets en utilisant le composant Card */}
        <div className="worksList">
          {/* Utilisation de map pour parcourir les données des projets depuis le fichier "logementsData" */}
          {projectsData.map((project) => (
            // {/* /* // Utilisation du composant Card pour afficher chaque logement
            // sous forme de carte */}
            <Card // Clé unique pour chaque carte (logement)
              key={project.id}
              project={project}
              id={project.id}
              title={project.title}
              cover={project.cover}
            />
          ))}
        </div>
      </div>
      <div className="home__main__section about" id="about">
        <h2>A propos</h2>
        <About />
      </div>
      <div className="home__main__section contact" id="contact">
        <h2>Contact</h2>
        <Contact />
      </div>
    </div>
  );
}

export default Home;
