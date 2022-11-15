import React from "react";
import { useLocalStorage } from "./hooks/useLocalStorage";

function useTodos() {
    const {
        item: getTodos, 
        saveItem: saveTodos, 
        loading,
        error
      } = useLocalStorage("TODOS_V1", []);

      const [getModalItem, setModalItem] = React.useState(false);

      const [getSelectedItem, setSelectedItem] = React.useState('')
    
      const [getSearchValue, setSearch] = React.useState('');
      const [getOpenModal, setOpenModal] = React.useState(false);
    
      const [getFilter, setFilter] = React.useState('All');
    
      const completedTodos = getTodos.filter(todo => todo.completed).length;
      const totalTodos = getTodos.length;
    
      let filterTodos = [];

      if(getFilter==='All'){
        filterTodos = getTodos;
      } else if(getFilter==='Completed'){
        filterTodos= getTodos.filter(todo => {
          return todo.completed == true
        })
      } else if(getFilter==='Incomplete'){
        filterTodos= getTodos.filter(todo => {
          return todo.completed == false
        })
      }

      let searchedTodos = [];
    
      if(getSearchValue.length === 0){
        searchedTodos = getTodos;
      } else{
        searchedTodos = filterTodos.filter(todo => {
          const todoTitle = todo.title.toLowerCase();
          const searchText = getSearchValue.toLowerCase();
          return todoTitle.includes(searchText);
        }) 
      }

      const addTodo = (objeto) => {
        const newTodos = [...getTodos];
        newTodos.push({
          completed: false,
          title: objeto.title,
          text: objeto.text
        })
        saveTodos(newTodos)
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
        {
          loading,
          error,
          totalTodos,
          completedTodos,
          getSearchValue,
          setSearch,
          searchedTodos,
          completeTodos,
          deleteTodos,
          addTodo,
          getOpenModal,
          setOpenModal,
          getFilter,
          setFilter,
          filterTodos,
          getModalItem, 
          setModalItem,
          getSelectedItem,
          setSelectedItem
        }
    )
}

export {useTodos};


