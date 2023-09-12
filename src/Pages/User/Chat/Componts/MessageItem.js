import React from 'react'

const MessageItem = ({item, i}) => {
  return (
    <div className="chat-message">
    <div className={`flex items-end  ${i%2==0?"justify-end ":"justify-start "} `  }>
      <div className={`flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 ${i%2==0?"order-1":"order-2"}   items-end `}>
        <div>
          <span className={`px-4 py-2 rounded-lg inline-block rounded-br-none ${i%2==0?"bg-blue-600":"bg-gray-300"}  text-white`}>
            {item.message}
          </span>
        </div>
      </div>
      <img
        src="https://images.unsplash.com/photo-1590031905470-a1a1feacbb0b?ixlib=rb-1.2.1
      &amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
        alt="My profile"
        className={`w-6 h-6 rounded-full  ${i%2==0?"order-2":"order-1"}`}
      />
    </div>
  </div>
  )
}

export default MessageItem