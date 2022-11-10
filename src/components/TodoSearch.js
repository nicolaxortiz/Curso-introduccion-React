import React from "react";
import ".././css/TodoStyles.css"

function TodoSearch({getSearchValue, setSearch, loading}){

    const onSearchValueChange = (event) => {
        setSearch(event.target.value);
    }

    return(
        <input 
            placeholder="Busca tu tarea" 
            className="Buscador"
            value={getSearchValue}
            onChange={onSearchValueChange}
            disabled={loading}
        />
            
    );
}

export {TodoSearch};