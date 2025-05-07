import './App.css'
import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Diary from './pages/Diary.jsx'
import New from './pages/New.jsx'
import NotFound from './pages/NotFound'
import Button from './components/Button.jsx'
import Header from './components/Header.jsx'

import { getEmotionImage } from './util/get-emotion.js'

function App() {
  const nav = useNavigate();

  const onClickButton = () => {
    nav('/new');
  }

  return (
    <>
      <Header 
        title = {"Header"}
        leftChild={<Button text={"Left"} />}
        rightChild={<Button text={"Right"} />}
      />

      <Button 
        text = {"123"}
        onClick = {() => {
          console.log("123")
        }}
      />

      <Button 
        text = {"123"}
        type = {"POSITIVE"}
        onClick = {() => {
          console.log("123")
        }}
      />

      <Button 
        text = {"123"}
        type = {"NEGATIVE"}
        onClick = {() => {
          console.log("123")
        }}
      />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/diary/:id' element={<Diary />} />
      <Route path='/new' element={<New />} />
      <Route path='*' element={ <NotFound />} />
    </Routes>
    </>
    
  )
}

export default App
