import { createSlice } from "@reduxjs/toolkit";

// const deleteUser:(state,payload)=>{
//     // const newData = state?userData?.filter((item) =>( item.id != payload));
//     const newData = state?userData?.filter((val)=>{
//         if(val.id!=payload){
//             return val;
//         }
       
//     })
// }


const initialState={
    userData:[]
}

const UserSlice=createSlice({
    name : "users",
    initialState ,
    reducers : {
        userAdded:(state, action)=> {
            const {payload}=action;
            payload && state.userData.push(payload)
        },
        removeAllData:(state, action)=> {
            state.userData=[]
        },
        removeOneData:(state, action)=> {
            const {payload}=action;
            // const newData = state?userData?.filter((item) =>( item.id != payload));
            // console.log(newData,"newData")
            // state.userData=newData
        },
        // userDelete(state, action) {
        //     const newhistoryGenrate = state?.filter((item) => item.id != action.payload);
        //     console.log(newhistoryGenrate,"newhistoryGenrate")
        //     // state(newhistoryGenrate);
        // }
    }
})

export const {userAdded,userDelete}=UserSlice.actions;
export default UserSlice.reducer;