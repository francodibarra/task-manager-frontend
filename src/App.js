import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col, Alert } from "react-bootstrap";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  useEffect(() => {
    fetchTasks();
  }, []);

  const showMessage = (text, type = "success") => {
    setMessage(text);
    setMessageType(type);
    setTimeout(() => {
      setMessage("");
    }, 3000);
  };

  const fetchTasks = async () => {
    try {
      const response = await axios.get("http://localhost:8000/tasks");
      setTasks(response.data);
    } catch (error) {
      console.error("Error al obtener las tareas:", error);
    }
  };

  const handleSaveTask = async (task) => {
    if (task.id) {
      try {
        await axios.put(`http://localhost:8000/tasks/${task.id}`, task);
        fetchTasks();
        setSelectedTask(null);
        showMessage("Tarea actualizada correctamente");
      } catch (error) {
        console.error("Error al actualizar la tarea:", error);
        showMessage("Error al actualizar la tarea", "danger");
      }
    } else {
      try {
        await axios.post("http://localhost:8000/tasks", task);
        fetchTasks();
        showMessage("Tarea agregada correctamente");
      } catch (error) {
        console.error("Error al agregar la tarea:", error);
        showMessage("Error al agregar la tarea", "danger");
      }
    }
  };

  const handleEditTask = (task) => {
    setSelectedTask(task);
  };

  const handleCancelEdit = () => {
    setSelectedTask(null);
  };

  const handleDeleteTask = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/tasks/${id}`);
      fetchTasks();
      showMessage("Tarea eliminada correctamente");
    } catch (error) {
      console.error("Error al eliminar la tarea:", error);
      showMessage("Error al eliminar la tarea", "danger");
    }
  };

  return (
    <Container>
      <h1 className="my-4 text-center">Gestión de Tareas</h1>
      {message && (
        <Alert variant={messageType} onClose={() => setMessage("")} dismissible>
          {message}
        </Alert>
      )}
      <Row>
        <Col md={4}>
          <TaskForm
            onSave={handleSaveTask}
            selectedTask={selectedTask}
            onCancel={handleCancelEdit}
          />
        </Col>
        <Col md={8}>
          <TaskList
            tasks={tasks}
            onEdit={handleEditTask}
            onDelete={handleDeleteTask}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
