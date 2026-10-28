import React from 'react'
import logo from "../assets/logo.png"
import google from "../assets/google.png"
import { useNavigate } from 'react-router-dom'
function Registration() {
    let navigate = useNavigate()
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
        <span className='text-[25px] font-semibold'> Registration Page</span>
        <span className='text-[16px]'>Welcome to OneCart, Place your order</span>
      </div>
    <div className='max-w-[600px] w-[90%] h-[500px] bg-[#00000025]
    border-[1px] border-[#96969635] backdrop:blur-2xl
    rounded-lg shadow-lg flex items-center justify-center'>
        <form action="" className='w-[90%] h-[90%]
        flex flex-col items-center justify-start gap=[20px]'>
            <div className='w-[90%] h-[50px] bg-[#42656cae]
            rounded-lg flex items-center justify-center gap=[10px]
            py-[20px] cursor-pointer'>
                <img src={google} alt="" className='w-[20px]'/> Registration With Google
            </div>
            <div className='w-full h-[20px] flex items-center
            justify-center gap-[10px]'>
                <div className='w-[40%] h-[1px] bg-[#96969635]'></div>
                 Or
                 <div className='w-[40%] h-[1px] bg-[#96969635]'></div>
            </div>
        </form>
    </div>
    </div>
  )
}

export default Registration
