import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { PiShootingStarFill } from "react-icons/pi";
import { FaRegUserCircle } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { FaPhoneAlt } from "react-icons/fa";
import { ImageContext } from '../context/ImageContext';

const Navbar = () => {
   const {user,setShowLogin,credit,logout} = useContext(ImageContext);
   const navigate = useNavigate();

   const onClickHandeler = () => {
    if(user) {
      navigate('/aiimage')
    }
    else{
      setShowLogin(true)
    }
   }

  return (
    <div  className='w-full flex items-center justify-between py-4 px-6 sticky top-0 z-50 bg-white/10 backdrop-blur-md'>
    <Link to='/'>
      <h1 className="font-prata text-2xl font-semibold bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 bg-clip-text text-transparent drop-shadow-[4px_4px_12px_rgba(255,0,150,0.7)]">
       <span className="font-dancing inline-block animate-none text-black ">D</span>eepCanvas
      </h1>
      </Link>
      <div>
        {
          user ? 
          <div className='flex items-center gap-2 sm:gap-3'>
            <button onClick={() => navigate('/buy')} className='flex items-center gap-2 bg-pink-50 px-4 sm:px-6 py-1.5 sm:py-3 rounded-full hover:scale-105 transition-all duration-700'>
              <PiShootingStarFill className='w-7 text-xl'/>
              <p className='text-xs sm:text-sm font-medium text-gray-600'>Credits left : {credit}</p>
            </button>
            <p className='text-gray-600 max-sm:hidden pl-4'>Welcome, {user.name}</p>
     <div className='relative group'>
        <FaRegUserCircle className='w-10 text-2xl drop-shadow cursor-pointer text-gray-700 hover:text-pink-500 transition-colors' />
        
        {/* --- Dropdown Menu --- */}
        <div className='absolute hidden group-hover:block top-full right-0 z-20 pt-2 animate-fadeIn'>
          <ul className='list-none w-48 m-0 p-2 bg-white/90 backdrop-blur-md rounded-xl shadow-xl border border-pink-100 text-sm ring-1 ring-black ring-opacity-5'>
            {/* Logout Item */}
            <li 
              onClick={logout} 
              className='py-2.5 px-4 cursor-pointer font-medium flex items-center gap-3 text-gray-700 hover:bg-pink-50 hover:text-pink-600 transition-all rounded-lg'
            >
              <FiLogOut className='text-lg' />
              <span>Logout</span>
            </li>
            {/* Divider */}
            <hr className='my-1 border-gray-100'/>
            {/* Contact Item */}
            <Link to='/contact' className='no-underline'>
              <li className='py-2.5 px-4 cursor-pointer font-medium flex items-center gap-3 text-gray-700 hover:bg-pink-50 hover:text-pink-600 transition-all rounded-lg'>
                <FaPhoneAlt className='text-base' />
                <span>Contact Us</span>
              </li>
            </Link>
          </ul>
        </div>
      </div>
      </div>
          : 
         <div className='flex items-center gap-3 sm:gap-8'>
            {/* Pricing - Subtle Hover Effect */}
            <p 
              onClick={() => navigate('/buy')} 
              className='cursor-pointer font-medium text-gray-700 hover:text-pink-500 transition-colors duration-300 text-sm sm:text-lg relative group'
            >
              Pricing
              <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-pink-400 transition-all duration-300 group-hover:w-full'></span>
            </p>
            {/* Generate Button - Glassmorphism & Glow */}
            <button 
              onClick={onClickHandeler} 
              className='relative overflow-hidden bg-white border border-pink-200 text-pink-500 font-semibold rounded-full px-5 py-2 sm:px-8 sm:py-2.5 text-xs sm:text-base shadow-sm hover:shadow-pink-200 hover:shadow-lg transition-all duration-300 active:scale-95'
            >
              <span className='relative z-10'>Generate</span>
              <div className='absolute inset-0 bg-pink-50 opacity-0 hover:opacity-100 transition-opacity duration-300'></div>
            </button>
          </div>
        }
      </div>
    </div>
  )
}

export default Navbar
