import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: {},

}

export const useSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (start, actions) => {
            start.user = 
                actions.payload
            
        },
        removeUser: (start, action) => {
            start.user = 
                {}
            
        }
    }
    
})
export const {setUser,removeUser}= useSlice.actions
export default useSlice.reducer