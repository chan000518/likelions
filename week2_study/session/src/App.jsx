import { useMemo } from 'react'
import './App.css'
import Editor from './components/Editor'
import Header from './components/header'
import List from './components/List'
import { useState, useRef} from 'react'
import { useCallback } from 'react'
import { createContext } from 'react'

const mockData = [
  {id: 0, isDone: false, content: "리액트 공부하기", date: new Date().getTime()},
  {id: 1, isDone: false, content: "빨래하기", date: new Date().getTime()},
  {id: 2, isDone: false, content: "노래연습하기", date: new Date().getTime()},
]

const reducer = (state, action) => {
  switch (action.type) {
    case 'CREATE':
      return [action.newTodo, ...state];
    case 'UPDATE':
      return state.map((item) =>
        item.id === action.targetId ? { ...item, isDone: !item.isDone } : item
      );
    case 'DELETE':
      return state.filter((item) => item.id !== action.targetId);
    default:
      return state;
  }
};

export const TodoStateContext = createContext();
export const TodoDispatchContext = createContext();

function App() {
  const [todos, setTodos] = useState(mockData);
  const idRef = useRef(3);

//   const onCreate = (content) => {
//     const newTodo = {
//       id: idRef.current,
//       isDone: false,
//       content : content,
//       date: new Date().getTime(),
//     }
//     setTodos([newTodo,...todos]) // 상태 변화 함수
//   }

//   const onUpdate = (targetId) => {
//   //   setTodos(todos.map((todo) => {
//   //   if(todo.id === targetId){
//   //     return {
//   //       ...todo,
//   //       isDone: !todos.isDone
//   //     }
//   //   }
//   //   return todo;
//   // }))
//   setTodos(todos.map((todo) => todo.id === targetId ? {...todo, isDone: !todo.isDone} : todo));
//   }

//   const onDelete = (targetId) => {
//     setTodos(todos.filter((todo) => todo.id !== targetId));
//   }

  const onCreate = useCallback( (content) => {
    dispatch({ 
      type: 'CREATE',
      data: { 
        id: idRef.current++, 
        isDone: false, 
        content, 
        date: new Date().getTime(), 
      } });
  }, []);;

  const onUpdate = useCallback((targetId) => {
    dispatch({ type: 'UPDATE', targetId });
  }, []);

  // 리랜더링이 되도 함수가 재생성되지 않음
  const onDelete = useCallback( (targetId) => {
    dispatch({ type: 'DELETE', targetId });
  }, []);// 의존성 배열이 비어있으면, 최초와 언마운트 시에만 실행됨

  // 메모이제이션 하여 함수 재생성을 방지
  const memoizedDispatch = useMemo(() => {
    return { onCreate, onUpdate, onDelete };
  },[]); // 의존성 배열이 비어있으면, 최초와 언마운트 시에만 실행됨

  return (
    <div className="App">
      <Header />
      <TodoStateContext.Provider value={todos}>
        <TodoDispatchContext.Provider value={{ memoizedDispatch }}>
          <Editor  />
          <List />
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
    </div>
  )
}

export default App
