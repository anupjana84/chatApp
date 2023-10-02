import { useDispatch } from "react-redux";
import { logInfunc } from "../../Config";
import { ToastContainer, toast } from 'react-toastify';
import { setUser } from "../../Reducers/User";


export class AuthSerive{
   
   
//    async register(email, password, username,){
//       try {
//         const data = await registerFunc({email, password, username});
//          return data;
//       } catch (error) {
//         toast.error(error.response.data.error) 
//         // console.log(error.response.data.error)
//         // console.log(JSON.stringify(error))
//     //    throw   Error(error || "Something went wrong")
//       }
   
//    }
   async login(email, password){
      try {
    const {data} = await logInfunc({email, password});
       
         console.log(data,'op')
         return data;
      } catch (error) {
        toast.error(error.response.data.error) 
        // console.log(error.response.data.error)
        // console.log(JSON.stringify(error))
    //    throw   Error(error || "Something went wrong")
      }
   
   }
}
export const authService = new AuthSerive();
