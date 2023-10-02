
import React,{useState, useEffect} from 'react';
import axios from 'axios';
 
 import { Virtuoso } from 'react-virtuoso';
 


const Posts=()=>{
    
const [items,setItems]=useState(Array.from({ length: 20 })) 
const [page,setPage]=useState(1)
const [hasMore,setHasmore]=useState(true)
const[message, setMesage]=useState([])
const[total, setTotal]=useState(121)

// console.log(message, total);
const getData=async()=>{
  console.log("first")
       try {
    
    const response = await axios.get(
      `getallmessage?page=${page}`
    );
    const msg= response.data.data.slice().reverse()
    setMesage([...msg, ...message])
    
   
    setTotal(response.data.total)
   
   } catch (error) {
    console.log(error)
   }

}

 const fetchMoreData = async() => {
    if (items.length >= total) {
    setHasmore(false)
    
      return;
    }

    
   
        const da= Array.from({ length: 20 })
        const daa=items.concat(da)
            setItems(daa)
            setPage(page+1)

try {
    
    const response = await axios.get(
      `getallmessage?page=${page}`
    );
    setMesage([...message,...response.data.data])
    
    console.log(response.data.data);
    // setTotale(response.data.total)
    //  setItems(response.data.data);
    //  setLoding(false)
    //  setPage((prv)=>prv+1)
   } catch (error) {
    console.log(error)
   }
    
    
    
  }

useEffect(() => {
    getData()



 
}, [page])

    return(
      <>


<div style={{width: "100vw", height: "90vh", textAlign: "center"}}>
      <h1>React Inifinite Scroll Virtuoso</h1>
      
      <Virtuoso
        
        initialTopMostItemIndex={total- 1}
      
        data={message}
        firstItemIndex={Math.max(0, total-message.length)}
        startReached={()=>{setPage(prevstate=>prevstate+1)}}
        // itemSize={(el, field) => {
        //   return Math.round(el.getBoundingClientRect().height);
        // }}
        itemContent={(index, item)=>{
          return (
            <div key={index} className='w-full h-10 border-2 m-1'>
              <p>{item.message}</p>
              </div>
          )
        }}
      />
    </div>
    </>
    )
}
export default Posts;