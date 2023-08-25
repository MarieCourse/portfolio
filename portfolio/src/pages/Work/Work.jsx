import React from 'react';
import './Work.sass';
import { useParams } from 'react-router-dom';
import projectsData from '../../datas/projects.json';
import Carousel from '../../components/Carousel/Carousel';
import FicheTitle from '../../components/FicheTitle/FicheTitle';
import Tag from '../../components/Tag/Tag';
import Description from '../../components/Description/Description';

function Work() {
  const { id } = useParams();
  const selectedProject = projectsData.find((project) => project.id === id);
  // Déstructuration d'objets pour extraire les propriétés individuelles de l'objet  du logement sélectionné..
  const { title, cover, pictures, description, mission, tags } =
    selectedProject;

  return (
    <div className="main" key={id}>
      <div className="main__content">
        <Carousel pictures={pictures} alt={`${title}`} />
        <div className="main__content__info">
          <FicheTitle title={title} location={mission} />
          <Tag tags={tags} />
          <Description title="Description" content={description} />
        </div>
      </div>
    </div>
  );
}

export default Work;
