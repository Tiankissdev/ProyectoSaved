import React from 'react';
import {Link} from "react-router-dom"
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Nosotros.css';
import contacto from "../assets/datos-de-contacto.png";
import quienesSomos from "../assets/acerca-de.png";
import objetivo from "../assets/publico-objetivo.png";

const Nosotros = () => {
  return (
    <div className="nosotros-container">
      <Navbar />
      <div className="cards-container">
        <div className="card">
          <h2>Contacto</h2>
          <p>
            Para contactarte con nosotros puedes enviar mensajes/mail a los
            siguientes contactos:
          </p>
          <p><b>Tiago Lopez</b> <br/>
            Teléfono: <a href="https://w.app/TiagoDev" target="_blank" rel="noopener noreferrer">Clickea Aquí!</a><br/>
            Email: tiago200205@gmail.com
          </p>
          <p><b>Alvaro Medina</b> <br/>
            Teléfono: <a href="https://w.app/AlvaroMedina" target="_blank" rel="noopener noreferrer">Clickea Aquí!</a> <br/>
            Email: alvaromed458@gmail.com
          </p>
          <img src={contacto} alt="Contacto" />
        </div>
        <div className="card">
          <h2>¿Cuál es nuestro Objetivo?</h2>
          <p>
            Nuestro objetivo con este proyecto es aprobar <b>Programación III</b> y
            continuar aprendiendo cada día más en nuestras carreras de
            programadores. buscamos actualizar/mejorar nuestro proyecto y si es posible implementarlo en la vida cotidiana. 
            Creemos firmemente que la colaboración y la constante mejora 
            son fundamentales para el éxito en el ámbito de la programación y el desarrollo de software.
            Además, aspiramos a que este proyecto no solo nos permita alcanzar nuestros objetivos académicos,
            sino que también sirva como un trampolín para futuras oportunidades profesionales.
            <br />
            <b>Muchas Gracias.</b>
          </p>
          <img src={objetivo} alt="Nuestro Objetivo" />
          <Link to="/tareas" className="comenzar-btn">Comenzar Ya</Link>
        </div>
        <div className="card">
          <h2>¿Quiénes Somos?</h2>
          <p>
            Los encargados de llevar a cabo este proyecto son 
            <b>Tiago Lopez y Alvaro Medina.</b> En la búsqueda de resolver 
            problemas cotidianos y mejorar la productividad, surgió 
            la idea de crear un manejador de tareas que pudiera cubrir las necesidades 
            tanto en un hogar como en una empresa. Desde el inicio, nuestro objetivo 
            fue diseñar una herramienta intuitiva y versátil que no solo pudiera
            facilitar la organización, sino que también mejorara la calidad de vida 
            de nuestros usuarios al permitirles gestionar sus tareas de manera más efectiva.
          </p>
          <img src={quienesSomos} alt="Quiénes Somos" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Nosotros;
