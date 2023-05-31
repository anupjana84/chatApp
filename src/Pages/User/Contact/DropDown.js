import React,{memo, useEffect} from 'react'

const DropDown = ({users,socket}) => {

console.log(socket,"socket")

  useEffect(() => {
    socket.on('userOffLine',(sockett)=>{
      const element = document.getElementById(`${sockett.userId}-status`)
     if (element) {
      element.style.backgroundColor='red'
      
     }
     
     
     })
     
     socket.on('userOnLine',(sockett)=>{
      console.log("useronline")
      const element1 = document.getElementById(`${sockett.userId}-status`)
     if (element1) {
      element1.style.backgroundColor='green'
      
     }
      
     })
  }, [])
  

  return (
    <div className="absolute z-50 top-16 right-0 max-w-sm my-4 overflow-scroll text-base list-none
    h-80   bg-white divide-y divide-gray-100 rounded shadow-lg dark:divide-gray-600 dark:bg-gray-700 block" id="notification-dropdown"
     data-popper-placement="bottom">
    <div className="block px-4 py-2 text-base font-medium text-center text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        
    </div>
    <div>
      {users.length>0 && users.map((item,index)=>(
      <a key={item._id.toString()} className="flex px-4 py-3 border-b hover:bg-gray-100 dark:hover:bg-gray-600 dark:border-gray-600">
        <div className="flex-shrink-0">
          <img className="rounded-full w-11 h-11"
           src="https://flowbite-admin-dashboard.vercel.app/images/users/bonnie-green.png" alt="Jese image"/>
          {item.isOnline=="offline"?(
            <div
            id={`${item._id}-status`}
            className={`absolute flex items-center justify-center w-3 h-3 ml-6 -mt-3 mb-2 border
             border-white rounded-full bg-primary-700 dark:border-gray-700 bg-red-400`}>
             
            </div>
          ):(<div
            id={`${item._id}-status`}
            className={`absolute flex items-center justify-center w-3 h-3 ml-6 -mt-3 mb-2 border
             border-white rounded-full bg-primary-700 dark:border-gray-700 bg-green-400`}>
             
            </div>)}
          
        </div>
        <div className="w-full pl-3">
            <div className="text-gray-500 font-normal text-sm mb-1.5 dark:text-gray-400">

             {item.name}</div>
            
        </div>
      </a>
      ))}
      
     
      
     
     
      
     
      
      
      
     
     
    </div>
   
  </div>
  )
}

export default memo(DropDown)