import React from "react";
import ".././css/TodoStyles.css"

function EmptyTodos(){
    return(
        <React.Fragment>
            <h1 className="emptyTitle">¡Empieza Tu lista!</h1>

            <img src="https://i.imgur.com/0O6FhKE.png" className="imgEmpty"></img>

            <h2 className="empty-p">Crea un ToDo dando click en el icono</h2>
        </React.Fragment>
    )
}

export {EmptyTodos};