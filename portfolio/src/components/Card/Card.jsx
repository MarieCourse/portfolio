import './Card.sass';
import { Link } from 'react-router-dom';

function Card({ project, onClick, id }) {
  const { title, cover } = project;

  return (
    // Utilisation de React Router DOM pour créer un lien réactif vers la page spécifique de chaque logement en fonction de son identifiant (id)
    <Link to={`/work/${id}`} className="logementCard">
      {/* Affichage du titre du logement */}
      <h2>{title}</h2>
      {/* Affichage de la couverture du logement (image) avec un texte alternatif (alt) pour l'accessibilité */}
      <img src={cover} alt={title} />
    </Link>
  );
}

export default Card;
