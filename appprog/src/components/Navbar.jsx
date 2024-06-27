import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import logo from '../assets/logosol.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <img src={logo} className='logo-img' alt="Logo" />
        <span className="nav-name">TLAM TaskMaster</span>
      </Link>
      <div className="nav-links">
        <Link to="/nosotros">Nosotros</Link>
        <Link to="/tareas">Tareas</Link>
        <Link to="/problemas">Problemas Frecuentes</Link>
        <Link to="/cerrar-sesion">Cerrar Sesión</Link>
      </div>
    </nav>
  );
};

export default Navbar;
