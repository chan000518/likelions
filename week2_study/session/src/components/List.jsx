import "./List.css"
import TodoItem from "./TodoItem"
import { use, useState } from "react"

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

    // const getAnalyzedData = () => {
    //     console.log("getAnalyzedData 호출!"); // 함수가 리랜더링 시마다 계속 호출
    //     const totalCount = todos.length;
    //     const doneCount = todos.filter( // 필터연산 
    //         (todo) => todo.isDone
    //     ).length;
    //     const notDoneCount = totalCount - doneCount;

    //     return { totalCount, doneCount, notDoneCount };
    // }

    //useMemo를 사용하여 getAnalyzedData의 리랜더링을 방지
    const { totalCount, doneCount, notDoneCount } = 
    useMemo(() => {
        console.log("getAnalyzedData 호출!"); // 함수가 리랜더링 시마다 계속 호출
        const totalCount = todos.length;
        const doneCount = todos.filter( // 필터연산 
            (todo) => todo.isDone
        ).length;
        const notDoneCount = totalCount - doneCount;

        return { totalCount, doneCount, notDoneCount };
    }, [todos]); // 의존성 배열이 비어있으면 컴포넌트 생성 시에만 호출됨 todos를 넣으면 todos가 바뀔 때마다 호출됨

    // const { totalCount, doneCount, notDoneCount } = getAnalyzedData();
    
    return (
    <div className="List">
        <h4>Todo List🌱</h4>
        <input value= {search} onChange={onChangeSearch} placeholder="Todo를 입력하세요."/>
        
        <div>
            <div>total: {totalCount}</div>
            <div>done: {doneCount}</div>
            <div>notDone: {notDoneCount}</div>
        </div>

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