import React from 'react';
import './Work.sass';
import { useParams } from 'react-router-dom';
import projectsData from '../../datas/projects.json';
import Carousel from '../../components/Carousel/Carousel';
import FicheTitle from '../../components/FicheTitle/FicheTitle';
import Tag from '../../components/Tag/Tag';
import Description from '../../components/Description/Description';
import Button from '../../components/Button/Button';

function Work() {
  const { id } = useParams();
  const selectedProject = projectsData.find((project) => project.id === id);
  // Déstructuration d'objets pour extraire les propriétés individuelles de l'objet  du logement sélectionné..
  const { title, pictures, description, mission, tags, site, github } =
    selectedProject;

  return (
    <div className="main" key={id}>
      <div className="main__content">
        <FicheTitle title={title} location={mission} />
        <Tag tags={tags} />
        <Carousel pictures={pictures} alt={`${title}`} />
        <Description title="Description" content={description} />
        <div className="links">
          {site && <Button link={site} text="Site" className="black" />}
          {github && <Button link={github} text="Github" className="black" />}
        </div>
      </div>
    </div>
  );
}

export default Work;
