// import React, { useState, useRef } from 'react';
import './Deroulant.sass';

function Deroulant({ title, content }) {
  // // State pour gérer l'état d'ouverture ou de fermeture du contenu
  // const [isOpen, setIsOpen] = useState(false);
  // // Référence à l'élément DOM du contenu pour calculer la hauteur
  // const contentRef = useRef(null);
  // // State pour stocker la hauteur du contenu (sera utilisée pour l'animation de la hauteur)
  // const [contentHeight, setContentHeight] = useState(0);

  // // Fonction pour gérer le basculement de l'état d'ouverture/fermeture
  // const handleToggle = () => {
  //   setIsOpen((prevState) => !prevState);
  //   // Si le contenu n'était pas ouvert, on met à jour la hauteur pour afficher le contenu
  //   if (!isOpen) {
  //     setContentHeight(contentRef.current.scrollHeight);
  //   } else {
  //     // Sinon, on réinitialise la hauteur pour cacher le contenu
  //     setContentHeight(0);
  //   }
  // };

  return (
    <div className="deroulant">
      <div>
        {/* Titre dynamique du deroulant */}
        <h4>{title}</h4>
        {/* Bouton pour ouvrir/fermer le contenu */}
        {/* <button onClick={handleToggle}>
          <img
            src={arrowUp}
            alt=""
            className={isOpen ? 'img-button rotate' : 'img-button'}
          />
        </button> */}
      </div>
      <div className="content-parent open">
        {/* Le contenu réel qui sera affiché ou masqué */}
        <div className="content">
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
}

export default Deroulant;
