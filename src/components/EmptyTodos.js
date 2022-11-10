import React from "react";
import ".././css/TodoStyles.css"

function EmptyTodos(props){

    return(
        <React.Fragment>
            <h1 className="emptyTitle">¡UPS!</h1>

            <img src="https://i.imgur.com/0OuplJc.png" className="imgEmpty"></img>

            <h2 className="empty-p">No hay resultados de busqueda para: '{props.st}'</h2>
        </React.Fragment>
    )
}

export {EmptyTodos};