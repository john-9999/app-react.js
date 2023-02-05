import { useContext } from 'react'/*ya que queremos utilizar algo del contexto, importamos el contexto*/
import { TaskContext } from "../context/TaskContext";

/*ESTA FUNCIÓN MOSTRARÁ LAS TAREAS NUEVAS QUE SE AGREGEN */
/*AL BOTON ELIMINAR TAREA LE CREAMOS LA FUNCIÓN DE ELIMINAR Y LE PASAMOS COMO PARAMETRO EL task.id de cada tarea */
function TaskCard({ task }) {

  const {deleteTask} = useContext(TaskContext)

  const valor =  useContext (TaskContext) /*Traemos el valor*/
  /*console.log(valor)*/

  /*DIV:
  bg-gray-800: background
  text-white: texto color blanco
  p-4: padding 4
  rounded-md: borde redondeado
  ___
  H1:
  text-xl: TEXTO PARA TITULOS ESTRA LARGE
  font-bold: FUENTE O GROSOR DE LA LETRA PARA EL H1
  capitalize: 1ER LETRA MAYUSCULA

  P:
  text-gray-500: color mas tenue al texto
  text-sm: texto más pequeño

  BUTTON (ELIMINAR TAREA):
  bg-sky-400: background del boton color sky
  px-2:padding del x horizontal (a los lados) de 2
  py-1: paddin y
  rounded-md: borde redondeado para el boton eliminar tarea
  mt-4: margin top de 4
  */
  return (
    <div className='bg-gray-800 text-white p-4 rounded-md overflow-auto'>
      <h1 className='text-2x1 font-bold capitalize'>{task.title}</h1>
      <p className='text-stone-50 text-sm mt-3 '>{task.description}</p>
      <button className='bg-sky-400 px-2 py-1 rounded-md mt-4 hover:bg-red-400' onClick={()=>deleteTask(task.id)}>
        Eliminar tarea 
      </button>
    </div>
  );
}

export default TaskCard;
