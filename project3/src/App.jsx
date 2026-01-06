import { BrowserRouter, Route, Routes } from "react-router-dom"
import About from "./components/About"
import Home from "./components/Home"
import Master from "./components/Master"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Master />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App