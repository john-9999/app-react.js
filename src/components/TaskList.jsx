import TaskCard from "./TaskCard.jsx";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

/*creamos el componente que mostrará las tareas. Le pasamos el prop tasks que se encuentra en el componente creado en APP.JSX*/
function TaskList() {

  const {tasks} = useContext(TaskContext)

  if (tasks.length === 0) {
    return (
      <h1 className=" text-xl font-bold text-zinc-50 capitalize mb-3 text-center ">No hay tareas aún</h1>
    ); /*si las tareas están en 0, dí que no hay tareas aun*/
  }

  /*CONEXIÓN CON TaskCard.jsx: Retornamos, recorremos las tareas(con map), pasamos key al container que contiene la muestra de tareas y mostramos las tareas que queremos*/
  /*le paso como parametro la tarea para que la recorra */
  /*le paso un props y la key para conectar con TaskCard.jsx */
  /*className="grid grid-cols-4": numero de columnas dentro del div que contiene la lista de tareas
  gap-2: Distancia de Espacio entre las columnas*/
  return (
    <div className="grid grid-cols-2 gap-4">
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
        /> /*te voy a pasar un prop y el valor sera la tarea que se este recorrriendo en ese momento */
      ))}
    </div>
  );
}

export default TaskList;
