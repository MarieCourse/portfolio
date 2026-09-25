import React from 'react'
import './Works.sass';
import projectsData from '../../datas/projects.json'

function Works() {
  return (
    <div className="content works">
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
      <div className="works__list">
        {projectsData.map((project) => (
          <a href={`/portfolio/${project.id}`} className="works__card" key={project.id}>
            <h2>{project.title}</h2>
            <span></span>
            <img src={project.cover} alt={project.title}/>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Works;
