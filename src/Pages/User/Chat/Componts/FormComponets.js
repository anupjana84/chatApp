import React,{useState} from 'react'
import { PaperAirplaneIcon } from '@heroicons/react/24/solid'
const FormComponets = ({submitForm, setMessage, message}) => {

const [messageText, setMessageText]=useState('')
const formSubmit=(e)=>{
  e.preventDefault()
  submitForm(messageText)
  setMessageText('')


}

  return (<>
     <form className="w-screen  right-0" onSubmit={formSubmit}>
     {/* <input type="text"
     name='message'
      onChange={(e) => {
        setMessageText(e.target.value);
      }}
     placeholder='ENADSAFSDAF' /> */}
             <input
              type="text"
              placeholder="Write your message!"
              value={messageText}
              name="message"
              onChange={(e) => {
                setMessageText(e.target.value);
              }}
              className="w-full focus:outline-none focus:placeholder-gray-400
               text-gray-600 placeholder-gray-600 pl-12 bg-gray-200 rounded-md py-3"
            /> 
            <div className="absolute right-0 items-center inset-y-0  ">
             
             
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
              >
                
              </button>
              <button
                type="submit"
                className="inline-flex items-center justify-center
                absolute top-0 right-0
                 rounded-lg px-4 py-3 transition duration-500 ease-in-out text-white bg-blue-500
                  hover:bg-blue-400 focus:outline-none"
              >
                <span className="font-bold">Send</span>
               
                
              </button>
            </div>
          </form> 
{/* <input type="text" placeholder='ENADSAFSDAF' /> */}
</>
  )
}

export default FormComponets