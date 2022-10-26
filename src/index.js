import './styles.css';

import { Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';


export const todoList = new TodoList();

todoList.todos.forEach(crearTodoHtml);

console.log('todos', todoList.todos);







/*
   La unica diferencia entre el Session Storage y el Local Storage, 
   es que el Session Storage se va a borrar todo cuando cerremos el navegador web.
   El localStorage no posee tiempo de expiracion, aqui vamos a poder almacenar info_
   que necesite nuestra app.
   ADVERTENCIA: la informacion almacenada en el localStorage es vivisble para el usuario final,
    por lo tanto no es nada recomendable almacenar contraseñas o cosas sensibles para el ususario
*/



