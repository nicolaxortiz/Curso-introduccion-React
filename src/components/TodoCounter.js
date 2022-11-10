import React from "react";
import ".././css/TodoStyles.css"

function TodoCounter({totalTodos, completedTodos, loading}){

    return(
        <React.Fragment>
            <h1 className="Titulo">Tus Tareas</h1>
            
            {loading && <h2 className="TodoCounter"> Cargando...</h2>}
            {!loading && <h2 className="TodoCounter"> Has completado {completedTodos} de {totalTodos} ToDos</h2>}

            
        </ React.Fragment>
        
    )
}

export {TodoCounter};