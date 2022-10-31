import React from "react";
import ".././css/TodoStyles.css"

function TodoSearch( {searchValue, setSearch} ){

    const onSearchValueChange = (event) => {
        console.log(event.target.value);
        setSearch(event.target.value);

    }

    return(
        <input 
            placeholder="Busca tu tarea" 
            className="Buscador"
            value={searchValue}
            onChange={onSearchValueChange}/>
    );
}

export {TodoSearch};