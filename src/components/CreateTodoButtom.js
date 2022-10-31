import React from "react";
import ".././css/TodoStyles.css"

function CreateTodoButtom(props){
    const click = () => {
        alert("click");
    }

    return(
        <button 
            className="Boton"
            onClick={click}>
                Agregar Tarea
        </button>
    );
}

export { CreateTodoButtom};
