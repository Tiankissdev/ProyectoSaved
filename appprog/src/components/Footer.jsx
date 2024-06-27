
import React from 'react';
import './Footer.css';
import logo from '../assets/logosol.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <img src={logo} alt="Logo" className="footer-logo" />
        <span className="footer-text">TLAM TaskMaster</span>
      </div>
      <div className="footer-small-text">
        © 2024 Todos los derechos reservados
      </div>
    </footer>
  );
};

export default Footer;