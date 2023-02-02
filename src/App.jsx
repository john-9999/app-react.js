import TaskList from "./components/TaskList.jsx"; /*importamos el componente que contendrá las tareas*/
import TaskForm from "./components/TaskForm.jsx";

/*ESTRUCTURA DE LA APP */

/*MAIN:
h-screen: Para que ocupe todo el largo de la pantalla 

DIV(CONTAINER): 
mx-auto: centra el contenedor que contiene todo el contenido
p-10: padding 10 hacia todos los lados
*/
function App(){
  return (
    <main className="bg-zinc-900 h-screen">
    <div className="container mx-auto p-10">
      <TaskForm />
      <TaskList />
    </div>
    </main>
  );
}


export default App;
