import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import './Problemas.css';
import userAvatar from '../assets/usuario.png';  // Importa la imagen del usuario
import botAvatar from '../assets/bot.png';       // Importa la imagen del bot

const Problemas = () => {
  const [chatMessages, setChatMessages] = useState([]);
  const [isBotTyping, setIsBotTyping] = useState(false);

  const handleUserMessage = (message) => {
    setChatMessages(prevMessages => [
      ...prevMessages,
      { text: message, sender: 'user' }
    ]);

    setIsBotTyping(true);
    setTimeout(() => {
      let response = "";
      if (message.toLowerCase() === "hola") {
        response = "Hola! Soy un ChatBot de ayuda, estoy aquí para informarte sobre dudas de problemas frecuentes que tengas con tus electrodomésticos!";
      } else if (message.toLowerCase() === "como estas?") {
        response = "Soy solo unas líneas de código... me gustaría sentir.";
      } else if (message.toLowerCase().includes("microondas")) {
        response = "Problemas Frecuentes sobre Microondas: Clickea aquí <a href='https://www.lacasadelelectrodomestico.com/blog/microondas-con-taras/' target='_blank' rel='noopener noreferrer'>Problemas Frecuentes sobre Microondas</a>";
      } else if (message.toLowerCase().includes("heladera")) {
        response = "Problemas Frecuentes sobre Heladera: Clickea aquí <a href='https://www.timbrit.com.ar/blog/problemas-con-la-heladera-por-que-no-enfria/' target='_blank' rel='noopener noreferrer'>Problemas Frecuentes sobre Heladera</a>";
      } else if (message.toLowerCase().includes("lavadora") || message.toLowerCase().includes("lavarropas")) {
        response = "Problemas Frecuentes sobre Lavarropas: Clickea aquí <a href='https://www.homeserve.es/blog/2022/04/26/5-averias-lavadoras/' target='_blank' rel='noopener noreferrer'>Problemas Frecuentes sobre Lavarropas</a>";
      } else if (message.toLowerCase().includes("secadora")) {
        response = "Problemas Frecuentes sobre Secadora de Ropa: Clickea aquí <a href='https://www.fersay.com/blog/conoce-los-problemas-mas-comunes-de-las-secadoras-y-como-arreglarlos/' target='_blank' rel='noopener noreferrer'>Problemas Frecuentes sobre Secadora de Ropa</a>";
      } else if (message.toLowerCase().includes("lavavajillas")) {
        response = "Problemas Frecuentes sobre Lavavajillas: Clickea aquí <a href='https://www.worten.es/blog/1534/problemas-mas-comunes-lavavajillas/' target='_blank' rel='noopener noreferrer'>Problemas Frecuentes sobre Lavavajillas</a>";
      } else if (message.toLowerCase().includes("horno electrico")) {
        response = "Problemas Frecuentes sobre Horno Eléctrico: Clickea aquí <a href='https://www.homeserve.es/blog/2020/01/23/averias-hornos-electricos/' target='_blank' rel='noopener noreferrer'>Problemas Frecuentes sobre Horno Eléctrico</a>";
      } else if (message.toLowerCase().includes("horno")) {
        response = "Problemas Frecuentes sobre Horno: Clickea aquí <a href='https://www.victorsat.es/cuales-son-las-averias-mas-comunes-en-los-hornos_fb83043.html' target='_blank' rel='noopener noreferrer'>Problemas Frecuentes sobre Horno</a>";
      } else if (message.toLowerCase().includes("estufa")) {
        response = "Problemas Frecuentes sobre Estufa: Clickea aquí <a href='https://www.camarounds.com/fallas-comunes-de-estufas/' target='_blank' rel='noopener noreferrer'>Problemas Frecuentes sobre Estufa</a>";
      } else if (message.toLowerCase().includes("licuadora")) {
        response = "Problemas Frecuentes sobre Licuadora: Clickea aquí <a href='https://polaridad.es/fallas-frecuentes-en-una-licuadora/' target='_blank' rel='noopener noreferrer'>Problemas Frecuentes sobre Licuadora</a>";
      } else if (message.toLowerCase().includes("batidora")) {
        response = "Problemas Frecuentes sobre Batidora: Clickea aquí <a href='https://www.lavanguardia.com/comer/tendencias/20191205/472057841506/errores-batidora-escoger-usar-comprar-navidad.html' target='_blank' rel='noopener noreferrer'>Problemas Frecuentes sobre Batidora</a>";
      } else if (message.toLowerCase().includes("cafetera")) {
        response = "Problemas Frecuentes sobre Cafetera: Clickea aquí <a href='https://www.20minutos.es/noticia/5024091/0/cuales-son-problemas-mas-frecuentes-cafetera-como-solucionarlos/' target='_blank' rel='noopener noreferrer'>Problemas Frecuentes sobre Cafetera</a>";
      } else if (message.toLowerCase().includes("tostadora")) {
        response = "Problemas Frecuentes sobre Tostadora: Clickea aquí <a href='https://tostadictos.com/tostadoras/problemas-habituales-en-tostadoras/' target='_blank' rel='noopener noreferrer'>Problemas Frecuentes sobre Tostadora</a>";
      } else if (message.toLowerCase().includes("aire acondicionado")) {
        response = "Problemas Frecuentes sobre Aire Acondicionado: Clickea aquí <a href='https://diansa.com/blog/2017/06/26/problemas-aire-acondicionado/' target='_blank' rel='noopener noreferrer'>Problemas Frecuentes sobre Aire Acondicionado</a>";
      } else if (message.toLowerCase().includes("maquina de helados")) {
        response = "Problemas Frecuentes sobre Máquina de Helados: Clickea aquí <a href='https://www.vevor.com/es/diy-ideas/vevor-ice-cream-machine-troubleshooting-b_10563/' target='_blank' rel='noopener noreferrer'>Problemas Frecuentes sobre Máquina de Helados</a>";
      } else if (message.toLowerCase().includes("maquina de coser")) {
        response = "Problemas Frecuentes sobre Máquina de Coser: Clickea aquí <a href='https://www.maquinasdecoserladys.es/los-10-fallos-mas-comunes-en-una-maquina-de-coser/' target='_blank' rel='noopener noreferrer'>Problemas Frecuentes sobre Máquina de Coser</a>";
      } else if (message.toLowerCase().includes("aspiradora")) {
        response = "Problemas Frecuentes sobre Aspiradora: Clickea aquí <a href='https://www.gaselecsat.com/cuales-son-las-averias-mas-comunes-en-las-aspiradoras_fb92034.html' target='_blank' rel='noopener noreferrer'>Problemas Frecuentes sobre Aspiradora</a>";
      } else if (message.toLowerCase().includes("pava electrica")) {
        response = "Problemas Frecuentes sobre Pava Eléctrica: Clickea aquí <a href='https://www.toolify.ai/es/ai-news-es/aprende-a-reparar-tu-hervidor-de-agua-elctrico-fcilmente-224965' target='_blank' rel='noopener noreferrer'>Problemas Frecuentes sobre Pava Eléctrica</a>";
      } else if (message.toLowerCase().includes("plancha")) {
        response = "Problemas Frecuentes sobre Plancha: Clickea aquí <a href='https://www.ocu.org/electrodomesticos/planchas/consejos/problemas-plancha' target='_blank' rel='noopener noreferrer'>Problemas Frecuentes sobre Plancha</a>";
      } else if (message.toLowerCase().includes("freidora")) {
        response = "Problemas Frecuentes sobre Freidora: Clickea aquí <a href='https://www.vevor.com/es/diy-ideas/electric-deep-fryer-troubleshooting/' target='_blank' rel='noopener noreferrer'>Problemas Frecuentes sobre Freidora</a>";
      } else if (message.toLowerCase().includes("parrilla electrica")) {
        response = "Problemas Frecuentes sobre Parrilla Eléctrica: Clickea aquí <a href='https://cocina-casera.com/blog/problemas-frecuentes-parrilla-electrica/' target='_blank' rel='noopener noreferrer'>Problemas Frecuentes sobre Parrilla Eléctrica</a>";
      } else {
        response = "No tengo información en mi librería acerca de este problema. Comunícate <a href='https://api.whatsapp.com/send?phone=+5493813858382&text=Hola+quisiera+hablar+con+Tiago+Lopez%21+😀💻%EF%B8%8F' target='_blank' rel='noopener noreferrer'>aquí</a> para poder agregarlo/solucionarlo.";
      }
      setChatMessages(prevMessages => [
        ...prevMessages.filter(msg => msg.sender === 'user'),
        { text: response, sender: 'bot' }
      ]);
      setIsBotTyping(false);
    }, 1000); // Simula carga
  };

  useEffect(() => {
    const lastMessage = chatMessages.length > 0 && chatMessages[chatMessages.length - 1];
    if (lastMessage && lastMessage.sender === 'bot') {
      setIsBotTyping(true);
      setTimeout(() => {
        setIsBotTyping(false);
      }, 1000); 
    }
  }, [chatMessages]);

  return (
    <div className="problemas-container">
      <Navbar />
      <div className="content">
        <h1 className="title">Habla con nuestro Bot Personalizado!</h1>
        <p className="bot-explicacion">
          Nuestro bot está diseñado para ayudarte con preguntas frecuentes y problemas comunes. Simplemente escribe tu pregunta y él intentará darte la mejor respuesta posible. Prueba preguntándole sobre temas como "Problemas con mi Microondas" para obtener información específica sobre ese tema.
        </p>
        <div className="chat-container">
          {chatMessages.map((message, index) => (
            <div key={index} className={`message ${message.sender}`}>
              {message.sender === 'user' ? (
                <div className="message-content">
                  <img src={userAvatar} className="user-avatar" alt="User Avatar" />
                  {message.text}
                </div>
              ) : (
                <div className="message-content">
                  {isBotTyping ? (
                    <div className="loader"></div>
                  ) : (
                    <img src={botAvatar} className="bot-avatar" alt="Bot Avatar" />
                  )}
                  <span dangerouslySetInnerHTML={{ __html: message.text }}></span>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="input-container">
          <input
            type="text"
            placeholder="Escribe tu mensaje..."
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                handleUserMessage(e.target.value);
                e.target.value = "";
              }
            }}
          />
          <Link to="/tareas" className="btn-agregar-tareas">Agregar Tareas</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Problemas;

