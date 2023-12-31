import React from 'react'
import { useSelector } from 'react-redux'


const Header = ({logOut, click,receiverName}) => {
  const {user}=useSelector(state=>state.User)

  return (
    <div className="flex sm:items-center justify-between py-3 border-b-2 border-gray-200">
        <div className="relative flex items-center space-x-4">
          <div className="relative">
            <span className="absolute text-green-500 right-0 bottom-0">
              {/* <svg width="20" height="20">
                      <circle cx="8" cy="8" r="8" fill="currentColor"></circle>
                   </svg> */}
            </span>
            <img
              src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1
             &amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
              alt=""
              className="w-10 sm:w-16 h-10 sm:h-16 rounded-full mx-1"
              
            />
          </div>
          <div className="flex flex-col leading-tight">
            <div className="text-2xl mt-1 flex items-center">
              <span className="text-gray-700 mr-3">{user?.name}</span>
            </div>
            <span className="text-lg text-gray-600">{user?.email}</span>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <button
           onClick={logOut}
            type="button"
            className="inline-flex items-center
             justify-center rounded-lg border h-10 w-20 transition 
             duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
          >
            Logout
          </button>
          <button
            type="button"
            onClick={()=>click()}
            className="inline-flex items-center justify-center rounded-lg
             border h-10 px-2 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
          >
           User List
          </button>
          {receiverName.length>0 && 
          <button
          type="button"
          className="inline-flex
          relative items-center justify-center rounded-lg border h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
        >
          {receiverName}
          <div className=' w-3 h-3 right-0  bg-green-300 absolute z-20 rounded-lg'></div>
          {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
              </svg> */}
        </button>}
          
        </div>
      </div>
  )
}

export default Header