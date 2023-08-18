import React from 'react';
import './Footer.sass';
import logo from '../../assets/logo footer.png';

function Footer() {
  return (
    <div className="footer">
      <img src={logo} alt="footer" />
      <p>© 2023 - María Carrera</p>
    </div>
  );
}

export default Footer;
