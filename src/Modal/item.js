import React from "react";
import ReactDOM from "react-dom";
import ".././css/TodoStyles.css"

function ModalItem({children}) {
    return ReactDOM.createPortal(
        <div className="modalBackground">{children}</div>,
        document.getElementById('modal')
    );
}

export {ModalItem};