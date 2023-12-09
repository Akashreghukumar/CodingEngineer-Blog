import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../Redux/Slice/UserSlice'

const store=configureStore(
    {
        reducer:{
            user:userReducer
        }
    }
)
export default store