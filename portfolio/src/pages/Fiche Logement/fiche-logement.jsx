import React from 'react';
import './fiche-logement.sass';
import { useParams } from 'react-router-dom';
import logementsData from '../../datas/logements.json';
import Carousel from '../../components/Carousel/Carousel';
import FicheTitle from '../../components/FicheTitle/FicheTitle';
import Tag from '../../components/Tag/Tag';
import Deroulant from '../../components/Deroulant/Deroulant';

function FicheLogement() {
  // Récuperation de l'id sur la URL
  const { id } = useParams();

  //Récupération de données depuis le fichier JSON grâce à l'ID du logement sélectionné.
  const selectedLogement = logementsData.find((logement) => logement.id === id);

  // Déstructuration d'objets pour extraire les propriétés individuelles de l'objet  du logement sélectionné..
  const { title, mission, tags, description, pictures } = selectedLogement;

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

export default FicheLogement;
