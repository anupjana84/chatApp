
import {useState, useEffect} from 'react'
import io from "socket.io-client";
import { removeUser } from '../../../Reducers/User';
const socket = io("http://localhost:8000/");





const Chat3 = () => {
 const [message, setMessage]=useState('')
 const [chat, setChat]=useState([])
console.log(chat, 'ooo' ,message)

    const submitForm=(e)=>{
      console.log("first", message)
        e.preventDefault()
       socket.emit('chat',{message})
        setMessage('')


    }



    useEffect(() => {
    
     socket.on('chat',(payload)=>{
      console.log(payload,'taa')
      //  const dadf = chat.push(payload)
      setChat([...chat, payload])
      setMessage('')

     })
    })
    
  return (
    <div className='flex flex-col justify-center items-center'>
        
        this text
        {chat.map((item,i)=>{
            return (
            <p key={i}>{item.message}</p>
            )
        })}
       
        
        
        <form  className='absolute bottom-10' onSubmit={submitForm}>

     <input type="text" className='border-2 ' 
      placeholder='Enter Name'
     value={message}
     name='message'
     onChange={(e)=>{setMessage(e.target.value)}}
     />
     <button type='submit' className='bg-red-800 '>Submit</button>
     </form>
    </div>
  )
}

export default Chat3

