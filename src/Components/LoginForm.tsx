import React from 'react'
import { useState } from 'react';
import {Usecounter} from './Counter'
import { Navigate, useNavigate } from "react-router-dom";
import { warn } from 'console';
const LoginForm:React.FC=()=> {
    const [isOn, setIsOn] = useState(false);

  const toggle = () => {
    setIsOn(!isOn);
if(isOn){
    user?.setcolor('black');
    user?.bgsetcolor('white')
}
if(!isOn){
    user?.setcolor('white');
    user?.bgsetcolor('black')
   
}
}
const user=Usecounter();
const Navigate=useNavigate();
const handleclick = (e: React.FormEvent) => {
    e.preventDefault();
     // ✅ Prevent page reload
     if(user?.username){
        Navigate('/profile');
     }
     else{
        alert('please enter username')
     }
    
  };
  
  return (
   <>
   <div className='h-screen bg-black'>
    <div className='bg-black flex justify-center w-full pt-6 gap-4'>
        <h1 className='text-3xl font-medium text-white'>DarkMode</h1>
    <button
      onClick={toggle}
      className={`w-24 h-12 rounded-full flex items-center px-1 transition duration-500 ${
        isOn ? 'bg-green-500 justify-end' : 'bg-gray-400 justify-start'
      }`}
    >
                <div className='w-9 h-9 rounded-full bg-white'></div>
            </button>
        </div>
   <div className='bg-black w-full flex justify-center items-center h-[70vh]' >
    
    <form className=' p-4 lg:w-[25%] h-[400px] md:w-full sm:w-full shadow-lg shadow-slate-200' style={{backgroundColor:user?.bgcolor,color:user?.color}}>
       
        <div className='flex justify-center  w-full'>
            <h1 className='text-5xl font-bold '> Login</h1>
        </div>
        <div className='flex items-center w-full mt-10'>
            <h1 className='text-3xl font-bold  mb-3'>Username</h1>
        </div>
        <div className='flex  items-center w-full'>
            <input className='w-full h-10 px-2 border-2 border-black text-black' type="text" onChange={(e)=>{
                user?.setusername(e.target.value)
            }} />
        </div>

        <div className='flex  items-center w-full'>
            <h1 className='text-3xl font-bold  mb-3' >Password</h1>
        </div>
        <div className='flex items-center w-full'>
            <input className='w-full h-10 px-2 border-2 text-black border-black' type="password" />
        </div>
       
        <div className='flex justify-center items-center w-full mt-8'>
           <button className='bg-slate-600  text-3xl font-bold p-3 w-full hover:bg-green-600' type='submit' onClick={handleclick}>Login</button>
        </div>
        

    </form>

   </div>
   </div>
   </>
  )
}

export default LoginForm