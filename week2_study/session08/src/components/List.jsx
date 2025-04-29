import "./List.css"
import TodoItem from "./TodoItem"
import { useState } from "react"

const List = ({ todos, onUpdate ,onDelete}) => {
    const [search, setSearch] = useState("");

    const onChangeSearch = (e) => {
        setSearch(e.target.value);
    }

    const getFilteredTodos = () => {
        if (search === "") {
            return todos;
        }

        return todos.filter((todo) => {
            return todo.content.toLowerCase().includes(search.toLowerCase());
        });
    }

    const filteredTodos = getFilteredTodos();

    return (
    <div className="List">
        <h4>Todo List🌱</h4>
        <input value= {search} onChange={onChangeSearch} placeholder="Todo를 입력하세요."/>
        <div className="todos_wrapper">
            {filteredTodos.map((todo) => {
                return (
                    <TodoItem onUpdate= {onUpdate } onDelete={onDelete} key={todo.id} {...todo} />
                )
            })}
        </div>
    </div>
    )
}

export default List