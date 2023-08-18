import './about.sass';
import valeurs from '../../datas/valeurs.json';
import Deroulant from '../../components/Deroulant/Deroulant';

function About() {
  return (
    <div className="main">
      {/* Section "Deroulant" pour afficher les valeurs depuis le fichier "valeurs.json" */}
      <div className="deroulantAbout">
        {valeurs.map((valeur, index) => (
          <Deroulant
            key={index}
            title={valeur.title} // Titre de la valeur
            content={valeur.description} // Description de la valeur
          />
        ))}
      </div>
    </div>
  );
}

export default About;
