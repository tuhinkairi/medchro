import { createSlice } from "@reduxjs/toolkit";

export const AuthenticationSlice = createSlice({
    name: "user session",
    initialState : {
        user : {},
        auth : false
    },
    reducers:{
        setAuth:(state,action)=>{
            state.user = action.payload.user;
            state.auth = action.payload.auth;
            console.log(state.user); 
            console.log(state.auth);
        }
    }
}) 
export const {setAuth} = AuthenticationSlice.actions;
export default AuthenticationSlice.reducer;