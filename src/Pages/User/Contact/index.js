import React, { useState, useEffect, memo } from 'react'
import Navbar from './Navbar'
import SideBar from './SideBar'
import DropDown from './DropDown'
import { fetchUsers } from '../../../Reducers/User'
import { useDispatch, useSelector } from 'react-redux'
import io from "socket.io-client";

import { name } from '../../../Utils'
import MessageItem from '../Chat/Componts/MessageItem'
let socket


const Contact = () => {
  const { users, user } = useSelector(state => state.User)
  const [isOpen, setIsOpen] = useState(false)

  const [receiverId, setReceiverId] = useState('')
  const [receiverName, setReceiverName] = useState('')


  const dispatch = useDispatch()


  useEffect(() => {
    // console.log(user.toke)
    dispatch(fetchUsers(user.token))

    return () => {

    }
  }, [])

  useEffect(() => {
    socket = io("http://localhost:8000/", {
      auth: {
        token: user?.id
      }
    });


    return () => {

    }
  }, [])

  useEffect(() => {

    socket.on('userOffLine', (socket) => {
      const element = document.getElementById(`${socket.userId}-status`)
      if (element) {
        element.style.backgroundColor = 'red'

      }


    })

    socket.on('userOnLine', (socket) => {
      const element1 = document.getElementById(`${socket.userId}-status`)
      if (element1) {
        element1.style.backgroundColor = 'green'

      }

    })

    return () => {

    }
  }, [])





  return (
    <>
      <div className="bg-gray-50 dark:bg-gray-800">
        <div class="flex overflow-hidden bg-gray-50 dark:bg-gray-900">

          <Navbar click={() => {
            setIsOpen(!isOpen)
            console.log("first")
          }} />
          <SideBar />
          {/*========== user list============ */}
          {isOpen &&
            <>
              <div className="absolute z-50 top-16 right-0 max-w-sm my-4 overflow-scroll text-base fixed list-none
    h-80   bg-white divide-y divide-gray-100 rounded shadow-lg dark:divide-gray-600 dark:bg-gray-700 block" id="notification-dropdown"
                data-popper-placement="bottom">
                <div className="block px-4 py-2 text-base text-red-500 font-medium text-center text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  {user.email}
                </div>
                <div>
                  {users.length > 0 && users.map((item, index) => (
                    <button onClick={() => {
                      setReceiverId(item._id)
                      setReceiverName(item.name)

                    }
                    } key={item._id.toString()} className="flex px-4 py-3 border-b hover:bg-gray-100 dark:hover:bg-gray-600 dark:border-gray-600">
                      <div className="flex-shrink-0">
                        <img className="rounded-full w-11 h-11"
                          src="https://flowbite-admin-dashboard.vercel.app/images/users/bonnie-green.png" alt="Jese image" />
                        {item.isOnline == "offline" ? (
                          <div
                            id={`${item._id}-status`}
                            className={`absolute flex items-center justify-center w-3 h-3 ml-6 -mt-3 mb-2 border
             border-white rounded-full bg-primary-700 dark:border-gray-700 bg-red-400`}>

                          </div>
                        ) : (<div
                          id={`${item._id}-status`}
                          className={`absolute flex items-center justify-center w-3 h-3 ml-6 -mt-3 mb-2 border
             border-white rounded-full bg-primary-700 dark:border-gray-700 bg-green-400`}>

                        </div>)}

                      </div>
                      <div className="w-full pl-3">
                        <div className="text-gray-500 font-normal text-sm mb-1.5 dark:text-gray-400">

                          {item.name}</div>

                      </div>
                    </button>
                  ))}
                </div>

              </div>
            </>}
          {/*========== user list============ */}


          <div id="main-content" class="relative w-full h-full  bg-green-500 lg:ml-64 dark:bg-gray-900">



            {receiverId && <div class="w-full h-50 bg-red-600  flex 
items-center justify-center ">

              <p class="text-white text-xl mt-3">{receiverName}</p>
            </div>}

            <div
              id="messages"
              className="flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue 
        scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch
        relative"

            >
              {name.map((item, i) => {
                return (
                  <MessageItem key={i.toString()} item={item} i={i} />

                );
              })}


            </div>



            <div class="w-100 z-100 h-20 ml-50 bg-slate-600 opacity-8 absolute bottom-6 right-0"></div>

          </div>
        </div>
       

      </div>
      <div style={{width:'100%', height:"50px", backgroundColor:'red', position:'absolute' ,bottom:"0px "}}></div>
    </>
  )
}

export default Contact