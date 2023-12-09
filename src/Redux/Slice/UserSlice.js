import {createSlice} from '@reduxjs/toolkit'
import {userLogin} from '../Actions/userAction'

const initialState={
    loading:false,
    userInfo:{},
    userToken:null,
    error:null,
    success:false
}

const userSlice=createSlice({
    name:"UserDetails",
    initialState,
    reducers:{},
    extraReducers:{

        [userLogin.pending]:(state)=>{
            state.loading=true
            state.error=null 
        },

        [userLogin.fulfilled]:(state,{payload})=>{
            state.loading=false
            state.userInfo=payload
            console.log("payload from slice",payload)
        },

        [userLogin.rejected]:(state,{paylaod})=>{
            state.loading=false
            state.error=paylaod
        }
    }
})

export default userSlice.reducer