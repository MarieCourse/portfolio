import React from 'react';
import Card from '../../components/Card/Card';
import projectsData from '../../datas/projects.json';
import Presentation from '../../components/Presentation/Presentation';
import About from '../../components/About/About';
import './home.sass';
import Contact from '../../components/Contact/Contact';
import { NavLink } from 'react-router-dom';

function Home() {
  return (
    <div className="main home__main" id="accueil">
      <Presentation />
      <div className="home__main__section works" id="works">
        <h2>Works</h2>
        {/* Affichage de la liste des projets en utilisant le composant Card */}
        <div className="worksList">
          {/* Utilisation de map pour parcourir les données des projets depuis le fichier "logementsData" */}
          {projectsData.map((project) => (
            <NavLink to={`/projet/${project.id}`} key={project.id}>
              {/* /* // Utilisation du composant Card pour afficher chaque logement
              sous forme de carte */}
              <Card // Clé unique pour chaque carte (logement)
                project={project}
                id={project.id}
                title={project.title}
                cover={project.cover}
              />
            </NavLink>
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
