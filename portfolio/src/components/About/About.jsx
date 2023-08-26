import './About.sass';
import portrait from '../../assets/portrait-maria-carrera.png';
import Button from '../Button/Button';

function About() {
  return (
    <div className="aboutMe">
      <img src={portrait} alt="Portrait Maria Carrera" />
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium,
          maiores quis dolorum eum, minus consequuntur quam fugiat
          exercitationem assumenda, neque ipsam provident labore repellat vero
          eos architecto tempora. Nisi, incidunt!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium,
          maiores quis dolorum eum, minus consequuntur quam fugiat
          exercitationem assumenda, neque ipsam provident labore repellat vero
          eos architecto tempora. Nisi, incidunt!
        </p>
        <Button text={'VOIR MON CV'} className={'black'} />
      </div>
    </div>
  );
}

export default About;
