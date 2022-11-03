import React from "react";
import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { TodoList } from './components/TodoList';
import { TodoItem } from './components/TodoItem';
import { CreateTodoButtom } from './components/CreateTodoButtom';
import { TodoContext} from './TodoContext/index.js';
import { Modal} from './Modal/index.js';
import { TodoForm } from "./components/TodoForm";
import { TodosError } from "./components/TodosError"
import { TodosLoading } from "./components/TodosLoading"
import { EmptyTodos } from "./components/EmptyTodos"



function AppUI(){
    const {error, loading, searchedTodos, completeTodos, deleteTodos, getOpenModal, setOpenModal} = React.useContext(TodoContext);

    return(
        <React.Fragment>
        <TodoCounter />
        <TodoSearch/>

        <TodoList>
            {error && <TodosError/>}  
            {loading && <TodosLoading/>}  
            {(!loading && !searchedTodos.length) && <EmptyTodos/>}    

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