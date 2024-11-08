// src/components/TaskList.js
import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, onEdit, onDelete }) => (
  <div>
    {tasks.length === 0 ? (
      <p>No hay tareas disponibles.</p>
    ) : (
      tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))
    )}
  </div>
);

export default TaskList;
