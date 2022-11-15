import React from "react";

function TodoForm({addTodo, setOpenModal}) {

    const [getNewTodoValue, setNewTodoValue] = React.useState({title: '', text: ''});
    const [getTitle, setTitle] = React.useState('')
    const [getText, setText] = React.useState('')
    let sendTodo;

    const OnCancel = () => {
        setOpenModal(false)
    }

    const onChangeTitle = (event) => {
        setTitle(event.target.value)
    }

    const onChangeText = (event) => {
        setText(event.target.value)
    }

    const OnSubmit = (event) => {
        event.preventDefault();
        setNewTodoValue({title: getTitle, text: getText})
        console.log(getNewTodoValue);
        // addTodo(getNewTodoValue)
        setOpenModal(false)
    }

    return(
        <form onSubmit={OnSubmit} className="formulario">
            <p className="tituloForm"><strong>Ingresa tu nueva tarea!</strong></p>
            <label className="subtitle">Titulo</label>
            <input
                className="textArea"  
                placeholder="Dale un nombre a tu tarea" 
                onChange={onChangeTitle} 
            />

            <br/><br/>

            <label className="subtitle">Descripcion</label>
            <textarea 
                className="textArea"
                onChange={onChangeText}
                placeholder="Apunta lo importante"
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