import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Show from "./pages/Show";

function App() {

  return (
    <div className="h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/show/:id" element={<Show />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
