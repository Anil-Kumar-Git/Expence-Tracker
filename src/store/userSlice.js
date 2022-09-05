import { createSlice } from "@reduxjs/toolkit";

const initialState=[]



const UserSlice=createSlice({
    name : "users",
    initialState ,
    reducers : {
        userAdded(state, action) {
            state.push(action.payload);
        }
    }
})

export const {userAdded}=UserSlice.actions;

export default UserSlice.reducer;