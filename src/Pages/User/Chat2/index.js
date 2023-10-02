import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import io from "socket.io-client";
import { removeUser,messageGet, fetchUsers } from "../../../Reducers/User";
import { useNavigate } from "react-router-dom";
import Header from "../Chat/Componts/Header";
import FormComponets from "../Chat/Componts/FormComponets";
import MessageItem from "../Chat/Componts/MessageItem";

import axios from "axios";

let socket



const Chat2 = () => {
 const [userDiv, setUserDiv]=useState(false)
 const [message, setMessage] = useState("");
 const [receiverId, setReceiverId] = useState("");
 const [receiverName, setReceiverName] = useState("");
  const [chat, setChat] = useState([]);
const [page, setPage] = useState(1);

console.log(page)
   const dispatch = useDispatch()

   const navigate = useNavigate();
   const {user ,users}=useSelector(state=>state.User)


  //  console.log(user,"use")
  socket =  io("http://localhost:8000/",{
    auth:{
       token:user?.id
    }
 });
  
 

 
  // console.log(chat.length, "ooo", message);
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
  const submitForm = (message) => {
    
    axios.post("/savemessage",{
      message,
      receiverId,
      senderId:user.id

    } )
    .then(res=>{
      setChat([...chat,res.data])
    
    
      socket.emit("newMessage", res.data);
      console.log(res.data.message)
    })
    .catch(err=>{
      console.log(err)
    })
    
   
    //
    // socket.emit("chat", { message });
    // setMessage("");
    // getMessage()
  };
  
  
const logOut=()=>{
  dispatch(removeUser())
  // navigate('/')
}
socket.on("loadChat", (message) => {
  setChat([...chat,message])
});


  // useEffect(() => {
  //    socket.on("chat", (payload) => {
  //      setChat([...chat,payload])
       
     
  //    });
  // });
  const handelInfinteScroll=()=>{
    if(window.innerHeight + document.documentElement.scrollHeight+1 >document.documentElement.scrollTop){
      setPage((prv)=>prv+1)
    
    }
  }



  const lodaOldMessage=()=>{
    console.log("first")
    axios.get(`/getallmessage?page=${page}`)
    .then(res=>{
      const data =res.data.reverse()
      setChat([...chat,...data])
      
    
    })
    .catch(err=>{ 
      console.log(err)
    })
  }
  useEffect(() => {
    handelInfinteScroll()
  }, [])
  
  useEffect(() => {
    lodaOldMessage()
  }, [page])
  
  useEffect(() => {
    dispatch(fetchUsers(user.token))
  },[])
  useEffect(() => {
    window.addEventListener("scroll", handelInfinteScroll);
    return () => {
      window.removeEventListener("scroll", handelInfinteScroll);
    };
  
    
  }, [])
  return (
    <>
    
    <div className="flex-1 p:2 sm:p-6 justify-between flex flex-col h-screen">
      <Header logOut={logOut} click={()=>setUserDiv(!userDiv)} 
      receiverName={receiverName}
       />  
      <div
        id="messages"
        className="flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch"
      >
       
           
        {chat.length >0 && chat.map((item, i) => {
          return (
            <MessageItem key={i.toString()} item={item} i={i}/>
            
          );
        })}
      </div>
      <div className=" px-4 pt-4 mb-2 sm:mb-0">
        <div className="relative flex">
          <span className="absolute inset-y-0 flex items-center">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-full h-12 w-12 transition duration-500 
              ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
            >
             
            </button>
          </span>
         <FormComponets submitForm={submitForm} message={message}
         receiverId={receiverId}
         setMessage={setMessage}
         receiverName={receiverName}
         />
        </div>
      </div>
    </div>
{userDiv && (
<div className="w-80 sm:hiden h-full
 bg-red-400 opacity-90
  pointer-events-auto absolute top-0 
  
  flex flex-col left-0 transform translate-x-0">
       <button
       onClick={()=>setUserDiv(false)}
       className="absolute top-10 -right-5 w-10 h-10 bg-indigo-500 rounded-full
       flex items-center justify-center  ">
        <h1>X</h1>
       </button>
          

{users.map((item, i) => (
    <div className="w-full h-10 my-0.5

     bg-slate-500 flex  justify-between items-center px-2"
     key={i.toString()}
     onClick={()=>{setReceiverId(item._id)
      setReceiverName(item.name)
      setUserDiv(false)
     

     }}>
      <div className="w-10 h-10 bg-yellow-500 rounded-full relative">
        {item.isOnline==='online'?
        <div className="w-4 h-4 bg-green-500 rounded-xl absolute bottom-0 right-0  z-50 " id={`${item._id}-status`}>
          </div>: <div className="w-4 h-4 bg-red-500 rounded-xl absolute bottom-0 right-0 z-50 " id={`${item._id}-status`}>
            </div>}
       
      </div>
      <h1>{item.name}</h1>
    </div>
))}

          
          
       
        
      </div>)}
      
   
    </>
  );
};

export default Chat2;
