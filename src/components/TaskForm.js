import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";

const TaskForm = ({ onSave, selectedTask, onCancel }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (selectedTask) {
      setTitle(selectedTask.title);
      setDescription(selectedTask.description || "");
    } else {
      setTitle("");
      setDescription("");
    }
  }, [selectedTask]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) {
      alert("El título es obligatorio");
      return;
    }

    const task = {
      title,
      description,
    };

    if (selectedTask) {
      task.id = selectedTask.id;
    }

    onSave(task);

    if (!selectedTask) {
      setTitle("");
      setDescription("");
    }
  };

  return (
    <div>
      <h2>{selectedTask ? "Editar Tarea" : "Agregar Tarea"}</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formTitle">
          <Form.Label>Título</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese el título"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="formDescription">
          <Form.Label>Descripción</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Ingrese la descripción"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="mr-2 buttons">
          {selectedTask ? "Actualizar" : "Agregar"}
        </Button>
        {selectedTask && (
          <Button variant="secondary" onClick={onCancel}>
            Cancelar
          </Button>
        )}
      </Form>
    </div>
  );
};

export default TaskForm;
