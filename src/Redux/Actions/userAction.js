import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const userLogin=createAsyncThunk(
    'user/login',
    async ({email,password},{rejectWithValue})=>{
        try{
            const config={
                headers:{
                    'Content-Type':'application/json',
                }
            }
            const {data}=await axios.post(
                'https://reqres.in/api/login',
                {email,password},config
            )
            console.log("resp",data)
            return data
        }
        catch(error)
        {
            console.log(error)
        }
    }
)