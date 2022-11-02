import React from "react";
import ".././css/TodoStyles.css"
import { TodoContext } from "../TodoContext";

function TodoCounter(){

    const {totalTodos, completedTodos}  = React.useContext(TodoContext)

    return(
        <React.Fragment>
            <h1 className="Titulo">Tus Tareas</h1>
            <h2 className="TodoCounter"> Has completado {completedTodos} de {totalTodos} ToDos</h2>
        </ React.Fragment>
        
    )
}

export {TodoCounter};