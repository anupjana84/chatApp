import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import io from "socket.io-client";
import { removeUser } from "../../../Reducers/User";
import { useNavigate } from "react-router-dom";
import Header from "../Chat/Componts/Header";
import FormComponets from "../Chat/Componts/FormComponets";
import MessageItem from "../Chat/Componts/MessageItem";


const Chat2 = () => {
   const dispatch = useDispatch()

   const navigate = useNavigate();
   const {user}=useSelector(state=>state.User)

   console.log(user,"use")
const socket=  io("http://localhost:8000/",{
   auth:{
      token:user?.id
   }
});

  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);
  console.log(chat.length, "ooo", message);

  const submitForm = (e) => {
    console.log("first", message);
    e.preventDefault();
    socket.emit("chat", { message });
    setMessage("");
  };
  useEffect(() => {
   
  
    
  }, [])
  
const logOut=()=>{
  dispatch(removeUser())
  // navigate('/')
}
  useEffect(() => {
    socket.on("chat", (payload) => {
      console.log(payload, "taa");
      //  const dadf = chat.push(payload)
      setChat([...chat, payload]);
      setMessage("");
    });
  });

  return (
    
    <div className="flex-1 p:2 sm:p-6 justify-between flex flex-col h-screen">
      <Header/>
      <div
        id="messages"
        className="flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch"
      >
       
           
        {chat.map((item, i) => {
          return (
            <MessageItem item={item} i={i}/>
            
          );
        })}
      </div>
      <div className=" px-4 pt-4 mb-2 sm:mb-0">
        <div className="relative flex">
          <span className="absolute inset-y-0 flex items-center">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-full h-12 w-12 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
            >
              {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 text-gray-600">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path>
                   </svg> */}
            </button>
          </span>
         <FormComponets submitForm={submitForm} setMessage={setMessage} message={setMessage} />
        </div>
      </div>
    </div>
  );
};

export default Chat2;
