import React from "react";
import ".././css/TodoStyles.css"

function TodoFilter(props){

    function onChangeFilter(filter) {
        props.setFilter(filter)
    }

    return(
            <div className="containerFilter">
                <h3 className={`txtFilter ${props.getFilter === "All" && 'txtFilter--Activate'}`} onClick={() => {onChangeFilter("All")}}>All</h3>
                <h3 className="separador">|</h3>
                <h3 className={`txtFilter ${props.getFilter === "Completed" && 'txtFilter--Activate'}`} onClick={() => {onChangeFilter("Completed")}}>Completed</h3>
                <h3 className="separador">|</h3>
                <h3 className={`txtFilter ${props.getFilter === "Incomplete" && 'txtFilter--Activate'}`} onClick={() => {onChangeFilter("Incomplete")}}>Incomplete</h3>
            </div>
    )
}

export { TodoFilter };