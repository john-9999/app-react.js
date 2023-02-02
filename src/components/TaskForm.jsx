import React from "react";
import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

/*CONEXIÓN CON APP.JSX:function createTask(taskTitle). La funcion TaskForm tendrá como parametro el prop que creamos en App.jsx*/
/*CONECTAMOS EL FORMULARIO CON LA CREACIÓN DE TITULOS DE NUEVAS TAREAS */
function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const {createTask} = useContext(TaskContext)

  /*FUNCIÓN ENFOCADA EN EL COMPONENTE DEL FORM (REACT DEV TOOLS)*/
  /*Cuándo hagamos submit pasara la siguiente función... */
  /*Al guardar y hacer submit, crearas la tarea y mostrarás el title y description*/
  const hundleSubmit = (e) => {
    e.preventDefault();
    console.log(title, description);
    createTask({
      title,
      description,
    }); /*a createTask le pasamos como parametro el title y description para crear la nueva tarea, componente creado en la function createTask que está en App.jsx (la nueva tarea que agregamos en el formulario) */
    setTitle(""); /*ACTUALIZAMOS Y LIMPIAMOS EL ESTADO DEL HOOK, DSP DE AÑADIR UNA NUEVA TAREA*/
    setDescription(""); /*ACTUALIZAMOS Y LIMPIAMOS EL ESTADO DEL HOOK, DSP DE AÑADIR UNA NUEVA TAREA*/
  };

  /*MOSTRAR EL FORM QUE CONTIENE EL INPUT(NOMBRE DE TAREA) Y UN TEXTAREA(DESCRIPTION)
  DIV:
  max-w-md: Establece un ancho predeterminado
  mx-auto: Centramos el div
  
  FORM:
  bg-slate-800: Background del formulario
  p-10: paddin 10
  mb-4:margin bottom 4

  INPUT Y TEXT AREA:
  bg-slate-300:BACKGROUND
  p-3: PADDING
  w-full:ABARCA TODO EL ANCHO MAXIMO
  mb-2: MARGIN BOTTOM


  */
  return (
    <div className="max-w-md mx-auto">
      <form className="bg-slate-800 p-10 mb-4" onSubmit={hundleSubmit}>
        
        <h1 className=" text-xl font-bold text-zinc-50 capitalize mb-3 ">Organizá tu alimentación</h1>
        <h4 className=" text-2x1 font-bold text-zinc-50 mb-3 ">Desarrollado por <a className="text-sky-400" target="_blank" href="https://john-9999.github.io/Frontendprojects.github.io/#">Juan Manuel Perez</a></h4>
        <input
          placeholder="Comida (desayuno,almuerzo,merienda,cena)"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={ title }/*ACTUALIZAMOS Y LIMPIAMOS EL componente, DSP DE AÑADIR UNA NUEVA TAREA*/
          autoFocus /*Al refrescar la página inicia el puntero en el input*/
          className="bg-slate-300 p-3 w-full mb-2"
        ></input>
        <textarea
          placeholder="Descripción"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          value={ description }/*ACTUALIZAMOS Y LIMPIAMOS EL componente, DSP DE AÑADIR UNA NUEVA DESCRIPTION*/
          className="bg-slate-300 p-3 w-full mb-2"
        ></textarea>
        
        <button
        className="bg-slate-300 px-3 py-1 text-stone-900"
        >
          Guardar
        </button>
      </form>
    </div>
  );
}

export default TaskForm;
