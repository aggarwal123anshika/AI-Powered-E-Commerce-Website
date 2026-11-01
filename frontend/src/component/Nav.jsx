import React from 'react'
import logo from '../assets/logo.png'

function Nav() {
  return (
    <div className='w-full h-[70px] bg-[#ecfafaec]
    z-10 fixed top-0 flex items-center justify-between
    px-[30px] shadow-md shadow-black'>

        <div className='w-[30%] flex items-center justify-start
        gap-[10px]'>
            <img src={logo} alt="" className='w-[30px]'/>
            <h1 className='text-[25px] text-[black]
            font-sans'>OneCart</h1>
        </div>
        <div className='w-[40%]'></div>

    </div>
  )
}

export default Nav