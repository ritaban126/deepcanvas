import React from 'react'
import { assets } from '../assets/assets'
import { motion } from "motion/react";

const Contact = () => {
  return (
    // <div>
    //   <div className='flex flex-wrap gap-2 items-center justify-center text-2xl pt-10 border-t'>
    //     <p className='w-8 md:w-11 mt-2 h-[2px] bg-[#414141]'></p>
    //     <h1>CONTACT US</h1>
    //   </div>

    //   <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
    //     <img className='w-full md:max-w-[480px] rounded' src={assets.sample_img1} alt="" />
    //     <div className='flex flex-col justify-center items-start gap-6'>
    //       <p className='font-semibold text-xl text-gray-600'>Our Headquarters</p>
    //       <p className='text-gray-600'>57409 Willms Station <br />Suite 350, Washington, USA</p>
    //       <p className='text-gray-600'>Tel: (415) 555-0132 <br />Email: canvas.dev</p>
    //       <p className='font-semibold text-xl text-gray-600'>Careers at DeepCanvas</p>
    //       <p className='text-gray-600'>Learn more about our teams and job openings.</p>
    //       <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
    //     </div>
    //   </div>
      
    // </div>


<motion.div className="px-6 md:px-28 my-24"
 initial={{opacity: 0.2, y:100}}
  transition={{ duration: 1}}
  whileInView={{opacity: 1, y: 0}}
  viewport={{once: true}}
>
  {/* Heading */}
  <div className="flex items-center justify-center gap-4 mb-16">
    <span className="w-10 h-[2px] bg-gradient-to-r from-purple-500 to-pink-500"></span>
    <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 bg-clip-text text-transparent">
      Contact Us
    </h1>
    <span className="w-10 h-[2px] bg-gradient-to-r from-pink-500 to-purple-500"></span>
  </div>

  {/* Content */}
  <div className="flex flex-col md:flex-row items-center gap-14">

    {/* Image */}
    <div className="relative group w-full md:max-w-[480px]">
      <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur opacity-40"></div>
      <img
        src={assets.sample_img1}
        alt=""
        className="relative rounded-2xl shadow-2xl"
      />
    </div>

    {/* Info Card */}
    <div className="flex flex-col gap-6 bg-white/30 backdrop-blur-md
    border border-white/40 rounded-2xl shadow-xl p-10 max-w-xl">

      <div>
        <p className="font-semibold text-xl text-gray-800 mb-2">
          Our Headquarters
        </p>
        <p className="text-gray-600 leading-relaxed">
          57409 Rajgir Station <br />
          Suite 350, Bangaloare, India
        </p>
      </div>

      <div>
        <p className="text-gray-600 leading-relaxed">
          Tel: +9856412789 <br />
          Email: <span className="font-medium">canvas.dev</span>
        </p>
      </div>

      <div>
        <p className="font-semibold text-xl text-gray-800 mb-2">
          Careers at DeepCanvas
        </p>
        <p className="text-gray-600 leading-relaxed">
          Learn more about our teams and current job openings.
        </p>
      </div>

      {/* CTA */}
      <button
        className="mt-4 w-fit px-10 py-4 rounded-full text-sm font-medium text-white
        bg-gradient-to-r from-purple-500 to-pink-500
        hover:scale-105 hover:shadow-lg transition-all duration-300"
      >
        Explore Jobs
      </button>
    </div>

  </div>
</motion.div>

  )
}

export default Contact
