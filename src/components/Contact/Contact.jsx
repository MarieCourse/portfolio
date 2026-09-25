import './Contact.sass';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import React from 'react'

function Contact() {
  return (
    <div className="content contact">
      <h2>Contact</h2>
      <p>
        Actuellement en recherche de nouvelles opportunités
        N'hésitez pas à me contacter pour toute question, collaboration ou
        simplement pour discuter de projets passionnants !{' '}
      </p>
      <a
        href="mailto:meriscarrera@gmail.com"
        className="button secondary"
      >Contactez-moi</a>
      <div className="contact__icons">
        <NavLink
          to="https://www.linkedin.com/in/maria-carrera-france/"
          target="_blank"
        >
          <i ></i>
          <FaLinkedinIn className="icon"/>
        </NavLink>
        <NavLink to="https://github.com/MarieCourse" target="_blank">
          <FaGithub className="icon"/>
        </NavLink>
      </div>
    </div>
  );
}

export default Contact;
