import Card from '../../components/Card/Card';
import logementsData from '../../datas/logements.json';
import Presentation from '../../components/Presentation/Presentation';
import About from '../../components/About/About';
import './home.sass';
import Contact from '../../components/Contact/Contact';

function Home() {
  return (
    <div className="main home__main">
      <Presentation />
      <div className="home__main__section works">
        <h2>Works</h2>
        {/* Affichage de la liste des logements en utilisant le composant Card */}
        <div className="worksList">
          {/* Utilisation de map pour parcourir les données des logements depuis le fichier "logementsData" */}
          {logementsData.map((item) => (
            // Utilisation du composant Card pour afficher chaque logement sous forme de carte
            <Card
              key={item.id} // Clé unique pour chaque carte (logement)
              id={item.id}
              title={item.title}
              cover={item.cover}
            />
          ))}
        </div>
      </div>
      <div className="home__main__section about">
        <h2>A propos</h2>
        <About />
      </div>
      <div className="home__main__section contact">
        <h2>Contact</h2>
        <Contact />
      </div>
    </div>
  );
}

export default Home;
