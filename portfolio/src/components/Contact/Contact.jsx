import './Contact.sass';
import Button from '../../components/Button/Button';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

function Contact() {
  return (
    <div className="contactMe">
      <p>
        N'hésitez pas à me contacter pour toute question, collaboration ou
        simplement pour discuter de projets passionnants !{' '}
      </p>
      <Button
        link="mailto:meriscarrera@gmail.com"
        text={'Contactez-moi'}
        className={'white'}
      />
      <div className="contactMe__icons">
        <NavLink
          to="https://www.linkedin.com/in/maria-carrera-france/"
          target="_blank"
        >
          <FaLinkedinIn className="icon" />
        </NavLink>
        <NavLink to="https://github.com/MarieCourse" target="_blank">
          <FaGithub className="icon" />
        </NavLink>
      </div>
    </div>
  );
}

export default Contact;
