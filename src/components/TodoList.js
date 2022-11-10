import React from "react";
import ".././css/TodoStyles.css"

function TodoList(props){
    return(
        <section>

            {props.error && props.onError()}
            {props.loading && props.onLoading()}
            {(!props.loading && !props.totalTodos) && props.onBlankList()}
            {(!!props.totalTodos && !props.searchedTodos.length) && props.onEmptyTodos(props.searchText)}
            {!!props.totalTodos && !props.filterTodos.length && props.onBlankFilter()}
            

            <ul className="Lista">
                {!!(props.getFilter.length) && !props.searchText.length && props.filterTodos.map(todo => props.render(todo))}
                {!!props.searchText.length && props.searchedTodos.map(todo => props.render(todo))}
            </ul>
        </section>
    );
}

export { TodoList};