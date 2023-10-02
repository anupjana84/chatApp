import React from 'react'
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom"
import Home from './Pages/User/Home'
import Dashboard from './Pages/User/Dashboard'
import Login from './Pages/User/Login'
import Register from './Pages/User/Register'
import Contact from './Pages/User/Contact'
import About from './Pages/User/About'
import Chat3 from './Pages/User/Chat3'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/chat3" element={<Chat3  />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App