import './About.sass';
import portrait from '../../assets/portrait-maria-carrera.png';
import Button from '../Button/Button';
import {
  FaReact,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGithub,
} from 'react-icons/fa';

function About() {
  const pdfPath = process.env.PUBLIC_URL + '/cv_maria_carrera.pdf';

  return (
    <div className="aboutMe">
      <div className="about__content">
        <img src={portrait} alt="Portrait Maria Carrera" />
        <div>
          <p>
            Galeriste indépendante en reconversion professionnelle, passionnée
            par le développement web. J'ai récemment achevé ma formation dans ce
            domaine chez OpenclassRooms. Mon profil ingénieux et bien organisé
            me permet de m'intégrer harmonieusement au sein d'équipes de travail
            diverses. Attirée par les défis stimulants, je suis constamment en
            quête de nouvelles connaissances.
          </p>
          <p>
            Mon parcours atteste de ma détermination à exceller dans ce domaine,
            où je suis prête à mettre en œuvre les compétences que j'ai
            acquises.
          </p>
        </div>
      </div>
      <div className="about__competences">
        <h3>Mes compétences</h3>
        <div className="about__competences__icones">
          <FaCss3Alt />
          <FaHtml5 />
          <FaReact />
          <FaJsSquare />
          <FaNodeJs />
          <FaGithub />
        </div>
      </div>
      <Button link={pdfPath} text={'VOIR MON CV'} className={'black'} />
    </div>
  );
}

export default About;
