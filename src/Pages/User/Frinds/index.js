import React from 'react'
import { item } from '../../../Utils'

const Frinds = () => {
  
  return (
    <>
    <div className='w-screen h-20 bg-purple-400'></div>
    <div className="max-w-max-2xl mx-auto bg-white shadow-xl min-w-0 dark:bg-slate-800 dark:highlight-white/5">
  <div className="overflow-x-auto flex">
    {item.map((item)=>{
        return(
            <div className="flex-none py-6 px-3 first:pl-6 last:pr-6">
      <div className="flex flex-col items-center justify-center gap-3">
        <img className="w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1605405748313-a416a1b84491?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80"/>
        <strong className="text-slate-900 text-xs font-medium dark:text-slate-200">Sarah</strong>
      </div>
    </div>
        )
    })}
    </div>
    </div>
    
    
   
    </>
  )
}

export default Frinds