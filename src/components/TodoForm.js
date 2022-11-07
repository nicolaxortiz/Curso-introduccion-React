import React from "react";

function TodoForm({addTodo, setOpenModal}) {

    const [getNewTodoValue, setNewTodoValue] = React.useState('');

    const OnCancel = () => {
        setOpenModal(false)
    }

    const OnChange = (event) => {
        setNewTodoValue(event.target.value) 
    }

    const OnSubmit = (event) => {
        event.preventDefault();
        addTodo(getNewTodoValue)
        setOpenModal(false)
    }

    return(
        <form onSubmit={OnSubmit} className="formulario">
            <p className="tituloForm">Ingresa tu nueva tarea!</p>
            <textarea 
                className="textArea"
                value={getNewTodoValue}
                onChange={OnChange}
                placeholder="Escribe tu nueva tarea!"
            />
            <div className="buttonContainer">
                <button
                    className="btnCancelar"
                    type="button"
                    onClick={OnCancel}
                >
                    Cerrar
                </button>

                <button
                    className="btnGuardar"
                    type="submit"
                >
                    Guardar
                </button>
            </div>
        </form>
    );
}

export {TodoForm}