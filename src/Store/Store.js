import { configureStore } from "@reduxjs/toolkit";
import User from "../Reducers/User";
 const store = configureStore({
reducer:{
    User
}
})
export default store