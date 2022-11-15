import React from "react";

function TodoInfo(props) {

    const OnCancel = () => {
        props.setModalItem(false)
    }

    return(
        <React.Fragment>
            <form className="informacion">
            <p className="tituloForm">Información!</p>
            <h2 className="subtitle"><strong>Tarea:</strong> {props.getSelectedItem.title}</h2>
            <h2 className="subtitle"><strong>Descripción:</strong> {props.getSelectedItem.text}</h2>
            
            <div className="buttonContainer">
                <button
                    className="btnCerrar"
                    type="button"
                    onClick={OnCancel}
                >
                    Cerrar
                </button>
            </div>
            </form>
        </React.Fragment>
    )
}

export { TodoInfo }