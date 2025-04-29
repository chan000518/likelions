import './App.css'
import Editor from './components/Editor'
import Header from './components/header'
import List from './components/List'
import { useState, useRef} from 'react'

const mockData = [
  {id: 0, isDone: false, content: "리액트 공부하기", date: new Date().getTime()},
  {id: 1, isDone: false, content: "빨래하기", date: new Date().getTime()},
  {id: 2, isDone: false, content: "노래연습하기", date: new Date().getTime()},
]

function App() {
  const [todos, setTodos] = useState(mockData);
  const idRef = useRef(3);

  const onCreate = (content) => {
    const newTodo = {
      id: idRef.current,
      isDone: false,
      content : content,
      date: new Date().getTime(),
    }
    setTodos([newTodo,...todos]) // 상태 변화 함수
  }
  return (
    <div className="App">
      <Header />
      <Editor onCreate = {onCreate}/>
      <List todos ={todos}/>
    </div>
  )
}

export default App
