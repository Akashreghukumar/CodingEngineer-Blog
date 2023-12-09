import React, { useState } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {userLogin} from "../../Redux/Actions/userAction"
import {  signInWithEmailAndPassword   } from 'firebase/auth';
import { auth } from '../../Configs/firebaseConfig';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  
  const dispatch=useDispatch()
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const navigate=useNavigate()
  console.log(email,password)

  // const data={
  //   'email':email,
  //   'password':password
  // }

  const submitForm=(e)=>{
    console.log("Form submitted")
    e.preventDefault()
    // dispatch(userLogin(data))
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        localStorage.setItem("AuthKey",user.accessToken)
        navigate("/")
        console.log("signin successful",user);
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage)
    });
  }

  return (
    <div className='login-page'>
        <div className='login-container'>
            <div className='login-container-1'>  
            <img style={{borderRadius:"50%"}} src="https://yt3.ggpht.com/hl-pTaz79SrS12_5pI3k39pMC5MHBu7XkzR8BE9NkkXnd2lWa7v4oLXc-sftEb-ZdcQibAyjhQ=s176-c-k-c0x00ffffff-no-rj-mo" />
            </div>
            <div className='login-container-2 flex-column gap-4'>
                <div>
                    <h2>Login</h2>
                </div>
                <div className='d-flex flex-column gap-4'>
                    <div>
                        <input type="text" placeholder='Email'
                        onChange={(e)=>setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <input type="password" placeholder='Password'
                        onChange={(e)=>setPassword(e.target.value)}
                        />
                    </div>
                </div>
                <div>
                    <button onClick={(e)=>submitForm(e)}>Login</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login