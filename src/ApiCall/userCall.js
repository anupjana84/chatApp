import axios from "axios";
import { useQuery, useQueryClient } from "react-query";
import { useSelector } from "react-redux";


const fetchData = async () => {
  try {
    const {data} = await axios.get(`https://jsonplaceholder.typicode.com/comments`,{
      // headers: {
      //     'Authorization': `Bearer ${token}` 
      //   }
      
  });
  return data
  } catch (error) {
   
    throw Error(error || "Something went wrong")
  }
  };
  
  // const GetAllUsers = (token) => {  
    
  //   const {user} =useSelector(state=>state.User)
  //   return   useQuery(["user", user.token,user.id], () =>  fetchData(token,user.id));
  
     
  // };
  
  export { fetchData };
  
  
 