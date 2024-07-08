import { configureStore } from "@reduxjs/toolkit";
import  userDetail  from "../Features/userDetailsSlice";

const store = configureStore({
    reducer:{
       app:userDetail
    }
})

export default store;