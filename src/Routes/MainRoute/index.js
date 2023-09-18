import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom"
import { useSelector } from 'react-redux'
import About from '../../Pages/User/About'
import Home from '../../Pages/User/Home'
import Contact from '../../Pages/User/Contact'
import Dashboard from '../../Pages/User/Dashboard'
import Login from '../../Pages/User/Login'
import Register from '../../Pages/User/Register'
import PublicRoute from "../Public"
import PrivateRoute from "../PrivateRoute"
import DefaultLayout from "../../Pages/Admin/DashBoard/DefaultLayout"
import Chat from "../../Pages/User/Chat"
import UserDetails from "../../Pages/User/UserDetails"
import Chat2 from "../../Pages/User/Chat2"
import Chat3 from "../../Pages/User/Chat3"
import Frinds from "../../Pages/User/Frinds"

import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';




const MainRoute = () => {
  const { user } = useSelector(state => state.User)

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            user?.token && user?.id ? (
              <Navigate to="/chat3" />
            ) : (
              <Navigate to="/login" />
            )
          }
        ></Route>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />



        <Route path="/login" element={
          <PublicRoute>
            <Login />
          </PublicRoute>

        } />
        <Route path="/dashboard" element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>

        } />
        <Route path="/chat" element={
          <PrivateRoute>
            <Chat />
          </PrivateRoute>

        } />
        <Route path="/chat2" element={
          <PrivateRoute>
            <Chat2 />
          </PrivateRoute>

        } />
        
        <Route path="/chat3" element={<Chat3 />} />
        <Route path="/frinds" element={<Frinds />} />
        <Route path="/register" element={<Register />} />
        <Route path="/register" element={<Register />} />
        <Route path="/register1" element={<DefaultLayout />} />
        <Route path="/userDetails/:useId/:name" element={<UserDetails />} />
        {/* <Route path="*" element={<p>404 Not found</p>} /> */}
      </Routes>
      <ToastContainer/>
    </BrowserRouter>
  )
}

export default MainRoute