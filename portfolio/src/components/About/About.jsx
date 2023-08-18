import './About.sass';
import portrait from '../../assets/portrait-maria-carrera.png';

function About() {
  return (
    <div className="aboutMe">
      <img src={portrait} alt="Portrait Maria Carrera" />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium,
        maiores quis dolorum eum, minus consequuntur quam fugiat exercitationem
        assumenda, neque ipsam provident labore repellat vero eos architecto
        tempora. Nisi, incidunt!
      </p>
    </div>
  );
}

export default About;
