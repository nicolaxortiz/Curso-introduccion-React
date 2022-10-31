import React from "react";
import ".././css/TodoStyles.css"

function TodoCounter({total , completed}){
    return(
        <React.Fragment>
            <h1 className="Titulo">Tus Tareas</h1>
            <h2 className="TodoCounter"> Has completado {completed} de {total} ToDos</h2>
        </ React.Fragment>
        
    )
}

export {TodoCounter};