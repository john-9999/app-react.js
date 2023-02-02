import React from 'react'
import { createContext, useState, useEffect } from 'react'
import { tasks as data } from "../data/tasks.js"; /*importamos el json que contiene las tareas*/

/*TODOS LOS COMPONENTES PODRÁN ACCEDER AL CONTEXTO(CONTENEDOR QUE CONTIENE A TODOS LOS ELEMENTOS) Y ASI FACILITAR EL PROCESO PARA CONECTARSE Y MOSTRARSE*/

/*CREAMOS EL NOMBRE DEL CONTEXTO Y LO DEFINIMOS*/
export const TaskContext = createContext()

/*FUNCIÓN QUE PROVEE LA INFORMACIÓN A MOSTRAR */
/*COMPONENTE QUE VA A CONTENER TODO, RETORNAMOS LA INFORMACIÓN DE LOS HIJOS*/
export function TaskContextProvider(props) {

/*ESTADO DE LAS TAREAS*/
  const [tasks, setTasks] = useState(
    []
  );
  
  
/*FUNCION PARA CREAR TAREAS*/
  function createTask(task) {
    setTasks([
      ...tasks,
      {
        title: task.title,
        id: tasks.length /*ORDEN DE ID(0,1,2,3,4,5,ETC)*/,
        description: task.description,
      },
    ]);
  }

  /*FUNCION PARA ELIMINAR TAREA */
  function deleteTask(taskId) {
    setTasks(tasks.filter(task => task.id !== taskId))/*FILTRAMOS,si la tarea es distinta del valor que está seleccionando el usuario se deja y si es igual se saca, true o false = true (se deja) false(se elimina) */
  }

  /*RENDERIZAMOS EL COMPONENTE Y LA DATA*/
  useEffect(() => {
    setTasks(data);
  }, []);

  /*COMO value, le pasaremos un objeto ya que vamos a pasarle varias cosas como la funcion de ELIMINAR,CREAR TAREAR Y LA VARIABLE DEFINIDA EN EL ESTADO.*/
  return (
    <TaskContext.Provider value={{
      tasks,
      deleteTask,
      createTask
    }}>{props.children}</TaskContext.Provider>
  );
}