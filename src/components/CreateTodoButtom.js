import React from "react";
import ".././css/TodoStyles.css"

function CreateTodoButtom({setOpenModal, getOpenModal}){
    const click = () => {
        setOpenModal(!getOpenModal)
    }

    return(
        <button 
            className="Boton"
            onClick={click}>
                +
        </button>
    );
}

export { CreateTodoButtom};
