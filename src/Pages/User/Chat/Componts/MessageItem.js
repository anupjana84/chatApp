import React from 'react'
import { useSelector } from 'react-redux'

const MessageItem = ({item, i}) => {
  const {user}=useSelector(state=>state.User)

  // console.log(item.sender.status)
  return (
    <div className="chat-message">
    <div className={`flex items-end  ${user.id==item.senderId?"justify-end ":"justify-start "} `  }>
      <div className={`flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 
      ${user.id==item.senderId?"order-1":"order-2"}   items-end `}>
        <div>
          <span className={`px-4 py-2 rounded-lg inline-block
          
           ${user.id==item.senderId?"bg-blue-600 rounded-br-none":"bg-gray-300 rounded-bl-none"}  text-white`}>
            {item.message}
          </span>
        </div>
      </div>
      <img
        src="https://images.unsplash.com/photo-1590031905470-a1a1feacbb0b?ixlib=rb-1.2.1
      &amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
        alt="My profile"
        className={`w-6 h-6 rounded-full  ${user.id==item.senderId?"order-2":"order-1"}`}
      />
    </div>
  </div>
  )
}

export default MessageItem