// routes.jsx

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import CerrarSesion from './pages/CerrarSesion';
import Problemas from './pages/Problemas';
import Tareas from './pages/Tareas'; // Asegúrate de importar el componente Tareas
import Nosotros from './pages/Nosotros';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cerrar-sesion" element={<CerrarSesion />} />
        <Route path="/problemas" element={<Problemas />} />
        <Route path="/tareas" element={<Tareas />} /> {/* Asegúrate de usar Tareas como componente aquí */}
        <Route path="/nosotros" element={<Nosotros />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
