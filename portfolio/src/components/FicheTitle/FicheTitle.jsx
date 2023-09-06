import React from 'react';
import './FicheTitle.sass';

function FicheTitle({ title, mission }) {
  return (
    <div className="titleDescription">
      <h3>{title}</h3>
      <p>{mission}</p>
    </div>
  );
}

export default FicheTitle;
