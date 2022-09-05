import { configureStore } from "@reduxjs/toolkit";
import useradd from './userSlice'
 
export default configureStore({

    reducer : {
        users : useradd
    }  
})
