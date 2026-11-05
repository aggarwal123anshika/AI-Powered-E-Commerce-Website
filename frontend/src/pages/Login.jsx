import React from 'react'
import logo from "../assets/logo.png"
import google from "../assets/google.png"
import { useNavigate } from 'react-router-dom'
import { IoEyeOutline } from "react-icons/io5";
import { IoEye } from "react-icons/io5";
import { useState } from 'react';
import { useContext } from 'react';
import { authDataContext } from '../context/authContext';
import axios from 'axios';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../../utils/Firebase';
import { userDataContext } from '../context/UserContext';

function Login() {
  let [show, setShow] = useState(false)
  let [email, setEmail] = useState("")
  let [password, setPassword] = useState("")
  let [loginError, setLoginError] = useState("")
  let {serverUrl} = useContext(authDataContext)
  let {getCurrentUser} = useContext(userDataContext)

  let navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()
    setLoginError("")
    try {
      let result = await axios.post(serverUrl + '/api/auth/login', {
        email, password
      },{}, {withCredentials : true})
      console.log(result.data)
      await getCurrentUser()
      navigate("/")

    } catch (error) {
      setLoginError(error.response?.data?.message || "Unable to log in. Please try again.")
    }
  }

  const googlelogin = async () => {
        try {
            const response = await signInWithPopup(auth, provider)
            let user = response.user;
            let name = user.displayName;
            let email = user.email;
  
            const result = await axios.post(serverUrl + "/api/auth/googlelogin",
              {name, email}, {withCredentials : true})
              console.log(result.data)
              await getCurrentUser()
              navigate("/")
  
        } catch (error) {
          console.log(error)
        }
      }
    return (
      <div className="w-screen min-h-screen bg-gradient-to-l from-[#141414] to-[#0c2025]
       text-white flex flex-col items-center justify-start">
        <div className="w-full h-[80px] flex items-center justify-start 
        px-[30px] gap-[10px] cursor-pointer" onClick={() => navigate("/")}>
          <img className="w-[25px] h-[25px] object-contain" 
          src={logo}alt="OneCart logo"/>
          <h1 className="text-[14px] font-sans">OneCart</h1>
        </div>
  
        <div className='w-full h-full flex items-center
         justify-center flex-col gap-[10px]'>
          <span className='text-[25px] font-semibold'> Login Page</span>
          <span className='text-[16px]'>Welcome to OneCart, Place your order</span>
        </div>
      <div className='max-w-[600px] w-[90%] h-[500px] bg-[#00000025]
      border-[1px] border-[#96969635] backdrop:blur-2xl
      rounded-lg shadow-lg flex items-center justify-center'>
          <form action="" onSubmit={handleLogin} className='w-[90%] h-[90%]
          flex flex-col items-center justify-start gap=[20px]'>
              <div className='w-[90%] h-[50px] bg-[#42656cae]
              rounded-lg flex items-center justify-center gap=[10px]
              py-[20px] cursor-pointer' onClick={googlelogin}>
                  <img src={google} alt="" className='w-[20px]'/> Login Account With Google
              </div>
              <div className='w-full h-[20px] flex items-center
              justify-center gap-[10px]'>
                  <div className='w-[40%] h-[1px] bg-[#96969635]'></div>
                   Or
                   <div className='w-[40%] h-[1px] bg-[#96969635]'></div>
              </div>
              <div className="w-[90%] h-[400px] flex flex-col 
              items-center justify-center gap-[15px] relative">
                
                 <input type="text" className='w-full h-[50px] border=[2px]
                border-[#96969635] backdrop:blur-sm rounded-lg shadow-lg bg-transparent
                placeholder-[#ffffffc7] px-[20px] font-semibold' placeholder='Email'
                 required onChange={(e) => {
                   setEmail(e.target.value)
                   setLoginError("")
                 }} value={email}/>
                 <input type={show?"text":"password"} className='w-full h-[50px] border=[2px]
                border-[#96969635] backdrop:blur-sm rounded-lg shadow-lg bg-transparent
                placeholder-[#ffffffc7] px-[20px] font-semibold' placeholder='Password'
                 required onChange={(e) => {
                   setPassword(e.target.value)
                   setLoginError("")
                 }} value={password}/>
                 {!show && <IoEyeOutline className='w-[20px] h-[20px] cursor-pointer
                  absolute right-[5%] bottom-[57%]' onClick={() => setShow(prev => !prev)}/>}
                 {show && <IoEye className='w-[20px] h-[20px] cursor-pointer
                  absolute right-[5%] bottom-[57%]' onClick={() => setShow(prev => !prev)}/>}
                 {loginError && <p role="alert" className="text-red-400">{loginError}</p>}
                 <button className='w-full h-[50px] bg-[#6060f5]
                 rounded-lg flex items-center justify-center mt-[20px]
                 text-[17px] font-semibold'>Login</button>
                 <p className='flex gap-[10px]'>You haven't any account?<span
                 className='text-[#5555f6cf] text-[17px] font-semibold
                  cursor-pointer' onClick={() => navigate("/signup")}>Create New Account</span></p>
              </div>
          </form>
      </div>
      </div>
    )
}

export default Login