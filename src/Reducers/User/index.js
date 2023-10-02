import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    user: {},
    messageOne:[],
    users:[],
    error: null,
    isLoding:false

}

export const useSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = 
            action.payload
            
        },
        removeUser: (state, {payload}) => {
            state.user = 
                {}
            
        },
        messageGet: (state, {payload}) => {
            state.messageOne =  []
                
            
        },
        setUsers: (state, action) => {
            console.log(action.payload,'action.payload')
            state.users =  action.payload
                
            
        },


    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state, action) => {
                state.isLoding = true;
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.users = action.payload;
                state.isLoding = false;
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.error = 'Somthing Worng'; 
            });
    },
    
})
export const {setUser,removeUser,messageGet,setUsers}= useSlice.actions
export default useSlice.reducer


// Thunks
export const fetchUsers= createAsyncThunk('users/fetch', async (token) => {
    // console.log(token,'token, asy')
    const res = await fetch('/allusers',{
        method:"Get",
        headers:{
            "Content-Type":"application/json",
            'Authorization': `Bearer ${token}`
        }
    });
    const data = await res.json();
    return data;
});