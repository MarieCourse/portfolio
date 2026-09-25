import React from 'react';
import './Work.sass';
import { useParams } from 'react-router-dom';
import projectsData from '../../datas/projects.json'
import Error from '../../components/Error/Error'

function Work() {
  const { id } = useParams();
  const selectedProject = projectsData.find((project) => project.id === id);
  if (!selectedProject) {
    return <Error />;
  }
  const { title, pictures, description, mission, tags, site, github } =
    selectedProject;

  return (
    <div className="main work" key={id}>
      <div className="work__title">
        <h3>{title}</h3>
        <p>{mission}</p>
      </div>
      <div className="work__tags">
        {tags.map((tag, index) => (
          <p key={index}>{tag}</p>
        ))}
      </div>
      <div className="work__img">
        <img src={pictures} alt=""/>
      </div>
      <div className="work__description">
        <h4>{title}</h4>
        <div>
          {description.split('\n').map((line, index) => (
            <React.Fragment key={index}>
              <p>{line}</p>
            </React.Fragment>
          ))}
        </div>
      </div>
      <div className="work__links">
        {site && <a href={site} className="button tertiary">Site</a>}
        {github && <a href={github} className="button tertiary">Github</a>}
      </div>
    </div>
  );
}

export default Work;
