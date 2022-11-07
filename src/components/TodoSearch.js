import React from "react";
import ".././css/TodoStyles.css"

function TodoSearch({getSearchValue, setSearch}){

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