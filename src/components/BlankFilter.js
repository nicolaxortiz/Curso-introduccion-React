import React from "react";

function BlankFilter(props){

    let title, msg, img;

    if(props.getFilter == "Completed"){
        title = "¿Qué paso?";  
        msg = "Parece que no has completado ninguna tarea aun";  
        img = "https://i.imgur.com/UjXFNb6.png"    
    }else{
        title = "¡Muy bien!";  
        msg = "Ya has completado todas tus tareas!";  
        img = "https://i.imgur.com/sqNgsjN.png"
    }
    return(
        <React.Fragment>
            <h1 className="emptyTitle">{title}</h1>

            <img src={img} className="imgEmpty"></img>

            <h2 className="empty-p">{msg}</h2>
        </React.Fragment>
    )
}

export {BlankFilter};