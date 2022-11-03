import React from "react";
import ".././css/TodoStyles.css"

function EmptyTodos(){
    return(
        <React.Fragment>
            <h1 className="emptyTitle">¡Empieza Tu lista!</h1>

            <h2 className="empty-p">Crea tu primer ToDo dando click en el icono</h2>
        </React.Fragment>
    )
}

export {EmptyTodos};