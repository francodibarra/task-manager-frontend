// src/components/TaskItem.js
import React from 'react';
import { Card, Button } from 'react-bootstrap';

const TaskItem = ({ task, onEdit, onDelete }) => (
  <Card className="mb-3">
    <Card.Body>
      <Card.Title>{task.title}</Card.Title>
      {task.description && <Card.Text>{task.description}</Card.Text>}
      <Button variant="info" className="mr-2" onClick={() => onEdit(task)}>
        Editar
      </Button>
      <Button variant="danger" onClick={() => onDelete(task.id)}>
        Eliminar
      </Button>
    </Card.Body>
  </Card>
);

export default TaskItem;

