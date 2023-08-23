import React from 'react';
import './Work.sass';
import { useParams } from 'react-router-dom';
import projectsData from '../../datas/projects.json';
import Carousel from '../../components/Carousel/Carousel';
import FicheTitle from '../../components/FicheTitle/FicheTitle';
import Tag from '../../components/Tag/Tag';
import Deroulant from '../../components/Deroulant/Deroulant';

function Work() {
  const { id } = useParams();
  const selectedProject = projectsData.find((project) => project.id === id);
  // Déstructuration d'objets pour extraire les propriétés individuelles de l'objet  du logement sélectionné..
  const { title, mission, tags, description, pictures } = selectedProject;

  return (
    <div className="main" key={id}>
      <Carousel pictures={pictures} alt={`${title}, ${mission}`} />
      <div className="fiche__section1">
        <div className="fiche__section1A">
          {/* Composant FicheTitle pour afficher le titre et l'emplacement du logement */}
          <FicheTitle title={title} location={mission} />
          {/* Composant Tag pour afficher les étiquettes associées au logement */}
          <Tag tags={tags} />
        </div>
      </div>
      <div className="informations">
        <div>
          {/* Composant Deroulant pour afficher la description du logement */}
          <Deroulant title="Description" content={description} />
        </div>
      </div>
    </div>
  );
}

export default Work;
