import React, { useContext, useEffect, useState } from 'react'
import { ImageContext } from '../context/ImageContext';
import { RxCross1 } from "react-icons/rx";
import { motion } from "motion/react";
import axios from 'axios';
import { toast } from 'react-toastify';


const Login = () => {
  const [state, setState] = useState('Login');
  const {setToken,setShowLogin,backendUrl,setUser} = useContext(ImageContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const onSubmitHandeller = async (event) => {
    event.preventDefault();
    try {
      if(state === 'Login') {
        const {data} = await axios.post(backendUrl + '/api/user/login', {email,password})
        if(data.success) {
          localStorage.setItem('token',data.token)
          setToken(data.token)
          setUser(data.user)
          setShowLogin(false);
        }
        else{
          toast.error(data.message)
        }
      }
      else{
        const {data} = await axios.post(backendUrl + '/api/user/register',{name,email,password})
        if(data.success) {
          localStorage.setItem('token',data.token)
          setToken(data.token)
          setUser(data.user)
          setShowLogin(false);
        }
        else{
          toast.error(data.message)
        }
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message)
    }
  }
  

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'unset'
    }
  },[])


  return (
    <div className='fixed top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center'>

      <motion.form onSubmit={onSubmitHandeller} className='relative bg-white p-10 rounded-xl text-slate-500'
        initial={{opacity: 0.2, y:50}}
        transition={{ duration: 1}}
        whileInView={{opacity: 1, y: 0}}
        viewport={{once: true}}
      >
        <h1 className='text-center text-2xl text-neutral-700 font-medium'>{state}</h1>
        <p className='text-sm mt-2'>Welcome back! Please sign in to continue</p>

        {state !== 'Login' && <div className='border px-6 py-2 flex items-center gap-2 rounded-full mt-5'>
          {/* <img src={assets.user_icon} alt="" /> */}
          <input type="text" onChange={(e)=>setName(e.target.value)} value={name} className='outline-none text-sm' placeholder='Full Name' required/>
        </div>}

        <div className='border px-6 py-2 flex items-center gap-2 rounded-full mt-4'>
          {/* <img src={assets.user_icon} alt="" /> */}
          <input type="email" onChange={(e)=>setEmail(e.target.value)} value={email} className='outline-none text-sm' placeholder='Email' required/>
        </div>

        <div className='border px-6 py-2 flex items-center gap-2 rounded-full mt-4'>
          {/* <img src={assets.user_icon} alt="" /> */}
          <input type="password" onChange={(e)=>setPassword(e.target.value)} value={password} className='outline-none text-sm' placeholder='password' required/>
        </div>

        <p className='text-sm text-blue-600 my-4 cursor-pointer'>Forget Password</p>

        <button className='bg-blue-600 w-full text-white py-2 rounded-full'>{state === 'Login' ? 'login' : 'create account'}</button>

        { state === 'Login' ? <p className='mt-5 text-center'>Don't have an account? <span className='text-blue-600 cursor-pointer' onClick={()=>setState('Sign Up')}>Sign Up</span></p>
        :
        <p className='mt-5 text-center'>Already have an account? <span className='text-blue-600 cursor-pointer' onClick={()=>setState('Login')}>Login</span></p>}

        <RxCross1 onClick={()=> setShowLogin(false)}  className='absolute top-5 right-5 text-xl cursor-pointer'/>
      </motion.form>
    </div>
  )
}

export default Login
