import React from "react";
import ".././css/TodoStyles.css"

function TodoList(props){

    console.log(props.searchText);
    return(
        <section>

            {props.error && props.onError()}
            {props.loading && props.onLoading()}
            {(!props.loading && !props.totalTodos) && props.onBlankList()}
            {(!!props.totalTodos && !props.searchedTodos.length) && props.onEmptyTodos(props.searchText)}
            

            <ul className="Lista">
                {props.searchedTodos.map(todo => props.render(todo))}
            </ul>
        </section>
    );
}

export { TodoList};