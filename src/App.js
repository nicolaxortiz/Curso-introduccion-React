import React from 'react';
import { useTodos} from './useTodos.js';
import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { TodoList } from './components/TodoList';
import { TodoItem } from './components/TodoItem';
import { CreateTodoButtom } from './components/CreateTodoButtom';
import { Modal} from './Modal/index.js';
import { TodoForm } from "./components/TodoForm";
import { TodosError } from "./components/TodosError"
import { TodosLoading } from "./components/TodosLoading"
import { EmptyTodos } from "./components/EmptyTodos"
import { TodoHeader } from "./components/TodoHeader";

function App() {

  const {error, loading, searchedTodos, completeTodos, deleteTodos, getOpenModal, setOpenModal, totalTodos, completedTodos, getSearchValue, setSearch, addTodo} = useTodos();

  return(
    <React.Fragment>
      <TodoHeader>
          <TodoCounter totalTodos={totalTodos} completedTodos={completedTodos}/>
          <TodoSearch getSearchValue={getSearchValue} setSearch={setSearch}/>
      </TodoHeader>
    
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
              <TodoForm addTodo={addTodo} setOpenModal={setOpenModal}/>
          </Modal>
      )}
          
      <CreateTodoButtom setOpenModal={setOpenModal} getOpenModal={getOpenModal}/>
    </React.Fragment>
  );
}

export default App;
