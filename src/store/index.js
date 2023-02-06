import { configureStore } from "@reduxjs/toolkit";
import useradd from './userSlice'
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";

const persistConfig={
    key:"root",
    version:1,
    storage
}

 const reducer=combineReducers({
    userAdded:useradd,
 })

 const persistReducer=persistReducer(persistConfig,reducer)
 
export default configureStore({

    reducer : {
        users : persistReducer
    }  
})
