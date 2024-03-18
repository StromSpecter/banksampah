import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Navbar from "./components/Navbar"


const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" Component={Home}/>
      </Routes>
    </div>
  )
}

export default App