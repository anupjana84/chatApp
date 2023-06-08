import { Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import Contact from "./Pages/Contact"
import About from "./Pages/About"
import Dashboard from "./Pages/Dashboard"
import Login from "./Pages/Login"
import Register from "./Pages/Register"
import Protected from "./Pages/ProtectedRoute"


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="about" element={ <About/> } />
        <Route path="contact" element={ <Contact/> } />
       
        <Route path="dashboard" element={ <Protected Component={Dashboard} /> } />
        <Route path="login" element={ <Login/> } />
        <Route path="register" element={ <Register/> } />
      </Routes>
    </div>
  )
}

export default App