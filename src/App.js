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
import { BlankList } from './components/BlankList';

function App() {

  const {error, loading, searchedTodos, completeTodos, deleteTodos, getOpenModal, setOpenModal, totalTodos, completedTodos, getSearchValue, setSearch, addTodo} = useTodos();

  return(
    <React.Fragment>
      <TodoHeader>
          <TodoCounter totalTodos={totalTodos} completedTodos={completedTodos} loading={loading}/>
          <TodoSearch getSearchValue={getSearchValue} setSearch={setSearch} loading={loading}/>
      </TodoHeader>
    
      <TodoList 
        error={error}
        loading={loading}
        searchedTodos={searchedTodos}
        searchText={getSearchValue}
        totalTodos={totalTodos}
        onError={() => <TodosError />}
        onLoading={() => <TodosLoading/>}
        onEmptyTodos={(searchText) => <EmptyTodos st={searchText}/>}
        onBlankList={() => <BlankList/>}
        render={todo => (
          <TodoItem 
              key={todo.text} 
              text={todo.text}
              completed={todo.completed} 
              onComplete={() => {completeTodos(todo.text)}}
              onDelete={() => {deleteTodos(todo.text)}}
              />
          )}
      />
 
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
