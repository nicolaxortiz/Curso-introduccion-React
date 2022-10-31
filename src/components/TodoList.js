import React from "react";
import ".././css/TodoStyles.css"

function TodoList(props){
    return(
        <section>
            <ul className="Lista">
                {props.children}
            </ul>
        </section>
    );
}

export { TodoList};