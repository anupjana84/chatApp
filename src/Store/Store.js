import { configureStore } from "@reduxjs/toolkit";
import User from "../Reducers/User";
import Products from "../Reducers/Products";

 const store = configureStore({
reducer:{
    User:User,
    Products:Products
}
})
export default store