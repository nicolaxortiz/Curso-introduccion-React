import React from "react";
import ".././css/TodoStyles.css"

function TodoItem(props){

    return(
        <li className={`TodoItem ${props.completed && 'TodoItem--complete'}`}>
            <span 
                className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
                onClick={props.onComplete}
            >
                &#10003;
            </span>
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>{props.text}</p>
            <span 
                className="Eliminar"
                onClick={props.onDelete}>
                    X
            </span>
        </li>
    );
}

export { TodoItem };