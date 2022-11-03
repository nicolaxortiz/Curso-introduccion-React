import React from "react";
import ".././css/TodoStyles.css"

function TodosLoading(){
    return(
        <React.Fragment>
        <p className="loadingItem"></p>
        <p className="loadingItem"></p>
        <p className="loadingItem"></p>
        </React.Fragment>
    )
}

export {TodosLoading};