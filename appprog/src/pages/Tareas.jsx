import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TaskCard from '../components/TaskCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquarePlus, faSquareMinus } from '@fortawesome/free-regular-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './Tareas.css';

const Tareas = () => {
  const [showForm, setShowForm] = useState(false);
  const [taskData, setTaskData] = useState({ title: '', description: '', steps: '' });
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Cargar tareas guardadas en localStorage al cargar la página
    const savedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (savedTasks) {
      setTasks(savedTasks);
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTaskData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    const newTask = { ...taskData };
    setTasks(prevTasks => [...prevTasks, newTask]);
    
    localStorage.setItem('tasks', JSON.stringify([...tasks, newTask]));
    
    setTaskData({ title: '', description: '', steps: '' });
    setShowForm(false);
  };

  const handleRemoveLastTask = () => {
    const confirmDelete = window.confirm("¿Está seguro que desea eliminar la última tarea ingresada?");
    if (confirmDelete) {
      const updatedTasks = [...tasks];
      updatedTasks.pop(); 
      
      setTasks(updatedTasks);
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    }
  };

  return (
    <div className="tareas-container">
      <Navbar />
      <div className="body-container">
        <div className="content">
          <div className="title-container">
            <h1 className="title">Tareas</h1>
          </div>
          <div className="button-container">
            <FontAwesomeIcon icon={faSquarePlus} className="icon" style={{ fontSize: '28px', color: '#000', cursor: 'pointer' }} onClick={() => setShowForm(true)} />
            <FontAwesomeIcon icon={faSquareMinus} className="icon" style={{ fontSize: '28px', color: '#000', marginLeft: '10px', cursor: 'pointer' }} onClick={handleRemoveLastTask} />
          </div>
          <div className="task-cards">
            <Accordion defaultActiveKey="0" className='w-100'>
              {tasks.map((task, index) => (
                <Accordion.Item key={index} eventKey={index.toString()}>
                  <Accordion.Header>
                    <TaskCard
                      title={task.title}
                      description={task.description}
                    />
                  </Accordion.Header>
                  <Accordion.Body>
                    {task.steps}
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
      <Footer className='footer' />
    
      {showForm &&
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Agregar Nueva Tarea</h2>
            <Form onSubmit={handleFormSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Título</Form.Label>
                <Form.Control
                  type="text"
                  name="title"
                  value={taskData.title}
                  onChange={handleInputChange}
                  maxLength={50}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Descripción</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="description"
                  value={taskData.description}
                  onChange={handleInputChange}
                  maxLength={200}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Pasos</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="steps"
                  value={taskData.steps}
                  onChange={handleInputChange}
                  maxLength={500}
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Guardar Tarea
              </Button>
              <Button variant="secondary" onClick={() => setShowForm(false)} className="ms-2">
                Cancelar
              </Button>
            </Form>
          </div>
        </div>
      }
    </div>
  );
};

export default Tareas;
