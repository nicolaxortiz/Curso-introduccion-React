import React from 'react';
import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { TodoList } from './components/TodoList';
import { TodoItem } from './components/TodoItem';
import { CreateTodoButtom } from './components/CreateTodoButtom';
import { TodoContext, TodoProvider} from './TodoContext/index.js'

function App() {

  return (
    <TodoProvider>
      <React.Fragment>
        <TodoCounter />
        <TodoSearch/>

        <TodoContext.Consumer>
          {({error, loading, searchedTodos, completeTodos, deleteTodos}) => (
            <TodoList>
              {error && <p>Ayuda Dios, algo fallo :c</p>}  
              {loading && <p>Estamos cargando, no desesperes!</p>}  
              {(!loading && !searchedTodos.length) && <p>Crea tu primer ToDo!</p>}    
    
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
          )}
        </TodoContext.Consumer>
        
        <CreateTodoButtom />
      </React.Fragment>
    </TodoProvider>
  );
}

export default App;
