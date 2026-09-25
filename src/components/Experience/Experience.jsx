import React from 'react'
import './Experience.sass';

const experiences = [
  {
    role: 'Développeuse Web Full-Stack',
    company: 'SMALA',
    context: 'Plateforme de vente en ligne de vêtements d\'occasion pour enfants',
    dates: '06/2024 — présent',
    tasks: [
      "Développement full-stack du parcours de vente client (demande de vente, envoi de photos, choix de retrait, génération d'étiquette) et de l'outil de validation des demandes pour le service client.",
      "Conception et développement des outils internes de gestion utilisés quotidiennement par les équipes opérationnelles : mise en ligne des produits, préparation et suivi des commandes, retours et exports.",
      "Création du design system du site et prise en charge des évolutions front demandées par l'équipe marketing.",
      "Collaboration à la migration vers Shopify (synchronisation avec la base Strapi, backend Nest) et évolution continue de la boutique.",
    ],
    tags: ['Vue.js', 'Node.js', 'Nest.js', 'Strapi', 'Shopify', 'SQL'],
  },
  {
    role: 'Co-fondatrice',
    company: 'Quorum, galerie d\'art',
    context: 'Buenos Aires & Nantes',
    dates: '2015 — 2026',
    tasks: [
      "Création et maintenance du site e-commerce, suivi SEO (Google Analytics), photographie et communication sur les réseaux sociaux.",
    ],
    tags: ['SEO', 'E-commerce', 'Communication'],
  },
];

function Experience() {
  return (
    <div className="content experience">
      <h2>Expérience</h2>
      {experiences.map((exp) => (
        <div className="experience__item" key={exp.company}>
          <div className="experience__header">
            <h4>{exp.role}</h4>
            <span className="experience__dates">{exp.dates}</span>
          </div>
          <p className="experience__company">
            {exp.company} — <em>{exp.context}</em>
          </p>
          <ul className="experience__tasks">
            {exp.tasks.map((task, i) => (
              <li key={i}>{task}</li>
            ))}
          </ul>
          <div className="experience__tags">
            {exp.tags.map((tag) => (
              <span className="tag" key={tag}>{tag}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Experience;