import React from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider(props) {
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

    return(
        <TodoContext.Provider value={{
            loading,
            error,
            totalTodos,
            completedTodos,
            getSearchValue,
            setSearch,
            searchedTodos,
            completeTodos,
            deleteTodos
        }}>
            {props.children}
        </TodoContext.Provider>
    )
}

export {TodoContext, TodoProvider};


