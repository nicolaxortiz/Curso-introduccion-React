import React from 'react';
import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { TodoList } from './components/TodoList';
import { TodoItem } from './components/TodoItem';
import { CreateTodoButtom } from './components/CreateTodoButtom';

function useLocalStorage(itemName, initialValue) {
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [item, setItem] = React.useState(initialValue)

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;

        if(!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        }else{
          parsedItem = JSON.parse(localStorageItem);
        }

        setItem(parsedItem);
        setLoading(false);
      } catch (error) {
        setError(error)
      }
    }, 1000)
  }, []);

  const saveItem = (newItem) => {
    try {
      localStorage.setItem(itemName, JSON.stringify(newItem))
      setItem(newItem);
    } catch (error) {
      setError(error)
    }
  }

  return{
    item, 
    saveItem,
    loading,
    error
  };
}

function App() {

  const {
    item: getTodos, 
    saveItem: saveTodos, 
    loading,
    error
  } = useLocalStorage("TODOS_V1", []);

  const [getSearchValue, setSearch] = React.useState('');

  const completedTodos = getTodos.filter(todo => todo.completed).length;
  const totalTodos = getTodos.length;

  let searchedTodos = [];

  if(getSearchValue.length === 0){
    searchedTodos = getTodos;
  } else{
    searchedTodos = getTodos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = getSearchValue.toLowerCase();
      return todoText.includes(searchText);
    }) 
  }

  const completeTodos = (text) => {
    const todoIndex = getTodos.findIndex(todo => todo.text === text);
    const newTodos = [...getTodos];
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos);
  }

  const deleteTodos = (text) => {
    const newTodos = getTodos.filter(todo => todo.text !== text);
    saveTodos(newTodos);
  };

  // React.useEffect(() => {
  //   console.log("Llamando el efect")
  // }, [completedTodos]);

  return (
    <React.Fragment>
      <TodoCounter 
        total={totalTodos}
        completed={completedTodos}
      />
      <TodoSearch 
        searchValue={getSearchValue}
        setSearch={setSearch}
      />
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
      <CreateTodoButtom />
    </React.Fragment>
  );
}

export default App;
