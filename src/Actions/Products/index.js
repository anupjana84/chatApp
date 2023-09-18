import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const getProduct=()=>createAsyncThunk("getProduct",async()=>{
   
    
     const  data =  await axios.get("https://fakestoreapi.com/products")
        return data
   
})