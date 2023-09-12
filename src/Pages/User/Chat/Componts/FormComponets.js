import React from 'react'
import { PaperAirplaneIcon } from '@heroicons/react/24/solid'
const FormComponets = ({submitForm, setMessage, message}) => {
  return (
    <form className="w-screen" onSubmit={submitForm}>
            <input
              type="text"
              placeholder="Write your message!"
              value={message}
              name="message"
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              className="w-full focus:outline-none focus:placeholder-gray-400
               text-gray-600 placeholder-gray-600 pl-12 bg-gray-200 rounded-md py-3"
            />
            <div className="absolute right-0 items-center inset-y-0  ">
             
             
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
              >
                {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 text-gray-600">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                   </svg> */}
              </button>
              <button
                type="submit"
                className="inline-flex items-center justify-center
                absolute top-0 right-0
                 rounded-lg px-4 py-3 transition duration-500 ease-in-out text-white bg-blue-500
                  hover:bg-blue-400 focus:outline-none"
              >
                <span className="font-bold">Send</span>
                <PaperAirplaneIcon className="h-6 w-6 text-white-500" />
                
              </button>
            </div>
          </form>
  )
}

export default FormComponets