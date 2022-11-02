import React from "react";
import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { TodoList } from './components/TodoList';
import { TodoItem } from './components/TodoItem';
import { CreateTodoButtom } from './components/CreateTodoButtom';
import { TodoContext} from './TodoContext/index.js';
import { Modal} from './Modal/index.js';
import { TodoForm } from "./components/TodoForm";


function AppUI(){
    const {error, loading, searchedTodos, completeTodos, deleteTodos, getOpenModal, setOpenModal} = React.useContext(TodoContext);

    return(
        <React.Fragment>
        <TodoCounter />
        <TodoSearch/>

        <TodoList>
            {error && <p>Ayuda Dios, algo fallo :c</p>}  
            {loading && <p>Estamos cargando, no desesperes!</p>}  
            {(!loading && !searchedTodos.length) && <p>Crea un ToDo!</p>}    

            {searchedTodos.map(todo => (
            <TodoItem 
                key={todo.text} 
                text={todo.text}
                completed={todo.completed} 
                onComplete={() => {completeTodos(todo.text)}}
                onDelete={() => {deleteTodos(todo.text)}}
                />
            ))}
        </TodoList>   

        {getOpenModal && (
            <Modal>
                <TodoForm />
            </Modal>
        )}
            
        <CreateTodoButtom setOpenModal={setOpenModal} getOpenModal={getOpenModal}/>
      </React.Fragment>
    );
}

export {AppUI};