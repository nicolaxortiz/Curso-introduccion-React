import React from "react";

function TodoInfo(props) {

    const OnCancel = () => {
        props.setModalItem(false)
    }

    return(
        <React.Fragment>
            <form className="informacion">
            <p className="tituloForm">Informacion!</p>
            <h2 className="subtitle"><strong>Tarea:</strong> {props.getSelectedItem}</h2>
            
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