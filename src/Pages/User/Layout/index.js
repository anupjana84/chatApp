import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeUser } from '../../../Reducers/User'
import { useNavigate } from "react-router-dom";
const Layout = ({children}) => {
  const dispatch=useDispatch()
  const navigate = useNavigate();
  const {user}=useSelector(state=>state.User)
  
  const logout=()=>{
    dispatch(removeUser())
    navigate('/home')
  }
  return (
    <>
    <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <Link className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" to="/">
      
      <span className="ml-3 text-xl">Tailblocks</span>
    </Link>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <Link className="mr-5 hover:text-gray-900" to='/'>Home</Link>
      <Link className="mr-5 hover:text-gray-900" to='/about'>About</Link>
      <Link className="mr-5 hover:text-gray-900" to='/contact'>Contact</Link>
      {!user?.token?
      <Link className="mr-5 hover:text-gray-900" to='/login'>Login</Link>:
      <Link className="mr-5 hover:text-gray-900" to='/Dashboard'> Dashboard</Link>}
      
     
      <>
      
     
      </>
      <Link className="mr-5 hover:text-gray-900" to='/register'>Register</Link>
      
     
    </nav>
    <button
    onClick={logout} className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Button
      {/* <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg> */}
    </button>
  </div>
</header>
    {children}
    </>
  )
}

export default Layout