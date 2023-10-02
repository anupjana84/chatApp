// import React,{useState,useEffect} from 'react'
// import MessageItem from '../Chat/Componts/MessageItem'
// import FormComponets from '../Chat/Componts/FormComponets'
// import axios from 'axios'
// import {  fetchData } from '../../../ApiCall/userCall'
// import { useDispatch, useSelector } from 'react-redux'
// import { useQuery, useQueryClient } from "react-query";
// import { ToastContainer, toast } from 'react-toastify';
// import { setUsers } from '../../../Reducers/User'
// import { fetchUsers } from '../../../Reducers/User'


// import '../../../App.css'

// import io from "socket.io-client";
// import { Link } from 'react-router-dom'

// const online={
// color:'red'
// }


// // let 
// const Chat3 = () => {
// const [message, setMessage] = useState('')
// const [receiverUser, setReceiverUser]=useState('')


//   const dispatch = useDispatch()
//  const {users,user} =useSelector(state=>state.User)

// //  console.log(users,"uuu",user)
// const { data,isLoading }=useQuery('user',fetchData,{
//   onError:(error)=>{
    
// toast.error(error.message)
//   }
// },{
//   refetchOnWindowFocus: false,
//   // cached request will stay "fresh" for 10 seconds
//   staleTime: 10000,
// },)






// // useEffect(() => {
// //   const socket=  io("http://localhost:8000/",{
// //     auth:{
// //        token:user?.id
// //     }
// //   });
// //   socket.on('userOffLine',(socket)=>{
// //    const element = document.getElementById(`${socket.userId}-status`)
// //   if (element) {
// //    element.style.backgroundColor='red'
// //    element.innerHTML="offline"
// //   }
  
  
// //   })
  
// //   socket.on('userOnLine',(socket)=>{
// //    const element1 = document.getElementById(`${socket.userId}-status`)
// //   if (element1) {
// //    element1.style.backgroundColor='green'
// //    element1.innerHTML="online"
// //   }
   
// //   })
  
// //   return () => {
    
// //   }
// // }, [])







//   const [toogelButton, settoggleButton]=useState(true)


// const name=[
//   {message:'one'},
//   {message:'one'},
//   {message:'one'},
//   {message:'one'},
//   {message:'one'},
//   {message:'one'},
//   {message:'one'},
//   {message:'one'},
//   {message:'one'},
//   {message:'one'},
//   {message:'one'},
//   {message:'one'},
//   {message:'one'},
//   {message:'one'},
//   {message:'one'},
//   {message:'one'},
//   {message:'one'},
//   {message:'one'},
//   {message:'one'},
//   {message:'one'},
//   {message:'one'},
//   {message:'one'},
//   {message:'one'},
//   {message:'one'},
//   {message:'one'},
//   {message:'one'},
//   {message:'one'},
//   {message:'one'},
//   {message:'one'},
//   {message:'one'},
//   {message:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type'},
//   {message:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type'},
// ]

// const forSubmit= async(e)=>{
//   e.preventDefault()
//    await axios.post('/message',{

//   })
// }
// const receiverSet=(e,id)=>{
//   e.preventDefault()
//   setReceiverUser(id)

//  console.log(id)


// }
  



// useEffect(() => {
//   dispatch(fetchUsers(user.token))

//   return () => {
    
//   }
// }, [])


//   return (
//   <>
//   <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
//     <div className="px-3 py-3 lg:px-5 lg:pl-3">
//       <div className="flex items-center justify-between">
//         <div className="flex items-center justify-start">
//           <button data-drawer-target="logo-sidebar" 
//           onClick={()=>settoggleButton(!toogelButton)}
         
//            type="button" className="inline-flex items-center p-2 text-sm text-gray-500 
//            rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
            
              
//            </button>
//           <span className="flex ml-2 md:mr-24">
//             <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="FlowBite Logo" />
//             <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">Flowbite</span>
//           </span>
//         </div>
//         <div className="flex items-center">
//             <div className="flex items-center ml-3">
//               <div>
//                 <button type="button" className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" aria-expanded="false" data-dropdown-toggle="dropdown-user">
//                   <span className="sr-only">Open user menu</span>
//                   <img className="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="user photo"/>
//                 </button>
//               </div>
//               <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600" id="dropdown-user">
//                 <div className="px-4 py-3" role="none">
//                   <p className="text-sm text-gray-900 dark:text-white" role="none">
//                     Neil Sims
//                   </p>
//                   <p className="text-sm font-medium text-gray-900 truncate dark:text-gray-300" role="none">
//                     neil.sims@flowbite.com
//                   </p>
//                 </div>
//                 <ul className="py-1" role="none">
//                   <li>
//                     <Link to="/contact" className="block px-4 py-2 text-sm text-gray-700
//                      hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Dashboard</Link>
//                   </li>
//                   <li>
//                     <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Settings</a>
//                   </li>
//                   <li>
//                     <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300
//                      dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Earnings</a>
//                   </li>
//                   <li>
//                     <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Sign out</a>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//       </div>
//     </div>
//   </nav>
  
//   <aside id="logo-sidebar" className={`fixed top-0 left-0 z-40 md:w-64 max-sm:w-30 h-screen pt-20 
  
//   ${toogelButton?"max-sm:-translate-x-full":"max-sm:translate-x-0"}
//   transition-transform  bg-red border-r border-gray-200
//   md:translate-x-0
  
  
//    dark:bg-gray-800 dark:border-gray-700 `} aria-label="Sidebar">
//      <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
//         <ul className="space-y-2 font-medium">
//            <li>
//               <Link to="/contact" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                
//                  <span className="ml-3">Dashboard {user.email}</span>
//               </Link>
//            </li>
//            <li>
//               <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                 
//                  <span className="flex-1 ml-3 whitespace-nowrap">Kanban</span>
//                  <span className="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">Pro</span>
//               </a>
//            </li>
          
         
//         </ul>
//      </div>
//   </aside>
  
//   <div className="pb-0 sm:ml-64 h-full flex  ">
//     <div className='sm:w-0/12 bg-purple-400 h-full md:w-2/12'>
//       <p className='mt-10'>{user?.email}</p>
//        {users && users.length > 0 && users.map((item,i)=>{
//         return(
//               <div onClick={(e)=>receiverSet(e,item._id)} key={item._id.toString()} className='w-full h-10 flex bg-indigo-300 m-1 px-2 justify-between items-center relative' 
//               >
//                 <div className={`w-6 h-6 rounded-full absolute top-0 left-0 `}
//                 >

//                  </div>
                
//                 <p>{item.name}</p>
//                 {item.isOnline=='online'?(<p style={{backgroundColor:'green'}}  id={`${item._id}-status`}>online</p>)
//                 :(<p id={`${item._id}-status`} style={{backgroundColor:'red'}}>Offline</p>)}
                
                
                
//               </div>
//         )
//       })} 
      
//     </div>
//     <div className='md:w-10/12 bg-purple-800 h-full md:w-12/12 '>
//     <div
//         id="messages"
//         className="flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch
//         relative"

//       >  
//         {name.map((item, i) => {
//           return (
//             <MessageItem key={i.toString()} item={item} i={i}/>
            
//           );
//         })}
      
//      </div>
//     </div>
     
//         {/* {name.map((item, i)=>{
//           <MessageItem  item={item} i={i}/>
//         })} */}
        
    
  
        
      
     
//   </div>
//   <form onSubmit={forSubmit} className='fixed bottom-2 z-50 w-full ml-64 max-sm:ml-0 h-10 px-5 flex border-gray-200'>

//   <input type="text " className="w-10/12 h-10 rounded-lg rounded-br-none rounded-tr-none  
//   pl-5 bg-blue-800"  placeholder='Message'
//   onChange={(e)=>setMessage(e.target.value)}
//   />

// <button className='bg-red-100 w-2/12 h-10 rounded-lg rounded-bl-none rounded-tl-none '>
//   Send
// </button>
//      </form>
// </>
//   )
// }

// export default Chat3


import React from 'react'

const Chat3 = () => {
  return (
    <div>Chat3</div>
  )
}

export default Chat3