import './Card.sass';
import { Link } from 'react-router-dom';

function Card({ project, id }) {
  const { title, cover } = project;

  return (
    // Utilisation de React Router DOM pour créer un lien réactif vers la page spécifique de chaque projet en fonction de son identifiant (id)
    <Link to={`/work/${id}`} className="projectCard">
      {/* Affichage du titre du projet */}
      <h2>{title}</h2>
      <span></span>
      {/* Affichage de la couverture du projet (image) avec un texte alternatif (alt) pour l'accessibilité */}
      <img src={cover} alt={title} />
    </Link>
  );
}

export default Card;
