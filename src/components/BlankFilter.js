import React from "react";

function BlankFilter(){
    return(
        <React.Fragment>
            <h1 className="emptyTitle">¿Qué paso?</h1>

            <img src="https://i.imgur.com/sqNgsjN.png" className="imgEmpty"></img>

            <h2 className="empty-p">Parece que ninguna tarea cumple con el filtro</h2>
        </React.Fragment>
    )
}

export {BlankFilter};