import React from "react";
import ".././css/TodoStyles.css"
import { TodoContext } from "../TodoContext";

function TodoSearch(){

    const {getSearchValue, setSearch} = React.useContext(TodoContext);

    const onSearchValueChange = (event) => {
        console.log(event.target.value);
        setSearch(event.target.value);

    }

    return(
        <input 
            placeholder="Busca tu tarea" 
            className="Buscador"
            value={getSearchValue}
            onChange={onSearchValueChange}/>
    );
}

export {TodoSearch};