// Home.jsx

import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Home.css'; // Asegúrate de importar tus estilos CSS aquí si es necesario

const Home = () => {
  return (
    <div className="home-container">
      <Navbar /> 
      <div className="content">
        
        <h1>Bienvenido a mi aplicación</h1>
        <p>Aquí iría el contenido principal de tu página de inicio.</p>
      </div>
      <Footer /> 
    </div>
  );
};

export default Home;
