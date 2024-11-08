# Gestor de Tareas - Frontend

Este es el frontend de la aplicación de gestión de tareas, construido con **React** y **React Bootstrap**. Permite a los usuarios crear, visualizar, actualizar y eliminar tareas.

## **Tabla de Contenidos**

- [Características](#características)
- [Prerrequisitos](#prerrequisitos)
- [Instalación](#instalación)
- [Ejecución](#ejecución)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Descripción de Componentes](#descripción-de-componentes)
- [Notas Adicionales](#notas-adicionales)

## **Características**

- **Formulario** para agregar y actualizar tareas.
- **Lista de tareas** con opciones para editar y eliminar.
- **Estilos** aplicados con React Bootstrap para una interfaz moderna y responsiva.
- **Manejo de estado** con `useState` y efectos con `useEffect`.

## **Prerrequisitos**

Antes de comenzar, asegúrate de tener instaladas las siguientes herramientas en tu máquina local:

- [Node.js](https://nodejs.org/) (versión 20 o superior)
- [npm](https://www.npmjs.com/)

## **Instalación**

Sigue estos pasos para configurar el proyecto en tu entorno local:

1. **Clona el repositorio**

    ```bash
    git clone https://github.com/francodibarra/task-manager-frontend.git
    cd task-manager-frontend

1. **Instala las dependencias**
    ```bash
    npm install

## **Ejecución** 
- Para iniciar la aplicación en modo de desarrollo:
    ```bash
    npm start

- La aplicación se abrirá en http://localhost:3000.
- Nota: Asegúrate de que el backend esté corriendo y accesible en http://localhost:8000 o actualiza las URL en las llamadas a la API si el backend se ejecuta en otro puerto.

## **Estructura del Proyecto**
    task-manager-frontend/
    ├── node_modules/
    ├── public/
    │   ├── index.html
    │   └── favicon.ico
    ├── src/
    │   ├── components/
    │   │   ├── TaskForm.js
    │   │   ├── TaskItem.js
    │   │   └── TaskList.js
    │   ├── App.js
    │   ├── App.css
    │   ├── index.js
    │   └── index.css
    ├── package.json
    └── README.md

## **Descripción de Componentes**
**TaskForm**
- Permite agregar una nueva tarea o editar una existente.
- Utiliza useState para manejar los campos del formulario.
- Valida que el título no esté vacío antes de enviar.

**TaskItem**
- Muestra la información de una tarea individual.
- Proporciona botones para editar o eliminar la tarea.

**TaskList**
- Renderiza una lista de TaskItem.
- Muestra un mensaje si no hay tareas disponibles.

## **Notas Adicionales**
- Configuración del Backend: Por defecto, la aplicación asume que el backend está en http://localhost:8000. Si el backend se ejecuta en otro puerto o dominio, actualiza las llamadas a la API en App.js.