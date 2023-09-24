<<<<<<< HEAD
=======
import { Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import Contact from "./Pages/Contact"
import About from "./Pages/About"
import Dashboard from "./Pages/Dashboard"
import Login from "./Pages/Login"
import Register from "./Pages/Register"
import Protected from "./Pages/ProtectedRoute"

>>>>>>> bdb76a8 (08062023)

import MainRoute from './Routes/MainRoute'

import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'
const queryClient = new QueryClient(
  {
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false, // default: true
      },
    },
  }
)
const App = () => {
  return (
<<<<<<< HEAD
    <QueryClientProvider client={queryClient}>
    <MainRoute/>
    </QueryClientProvider>
=======
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
>>>>>>> bdb76a8 (08062023)
  )
}

export default App