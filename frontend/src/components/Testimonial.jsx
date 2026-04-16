// import React from 'react'
// import { testimonialsData } from '../assets/assets'
// import {assets} from "../assets/assets"
// import { motion } from "motion/react"

// const Testimonial = () => {
//   return (
// <motion.div className="my-24 py-16 px-6"
//   initial={{opacity: 0.2, y:100}}
//   transition={{ duration: 1}}
//   whileInView={{opacity: 1, y: 0}}
//   viewport={{once: true}}
// >
//   {/* Heading */}
//   <div className="text-center mb-16">
//     <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 bg-clip-text text-transparent">
//       Customer Testimonials
//     </h1>
//     <p className="mt-4 text-lg text-gray-600">
//       What our users are saying
//     </p>
//   </div>

//   {/* Testimonials */}
//   <div className="flex justify-center flex-wrap gap-8 max-w-7xl mx-auto">
//     {testimonialsData.map((testimonial, index) => (
//       <div
//         key={index}
//         className="group w-80 bg-white/30 backdrop-blur-md
//         border border-white/40 rounded-2xl shadow-xl
//         p-10 cursor-pointer
//         hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
//       >
//         <div className="flex flex-col items-center text-center">
          
//           {/* Avatar */}
//           <div className="relative mb-4">
//             <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur opacity-40"></div>
//             <img
//               src={testimonial.image}
//               alt=""
//               className="relative w-16 h-16 rounded-full object-cover"
//             />
//           </div>

//           {/* Name & Role */}
//           <h2 className="text-xl font-semibold text-gray-800">
//             {testimonial.name}
//           </h2>
//           <p className="text-gray-500 text-sm mb-4">
//             {testimonial.role}
//           </p>

//           {/* Stars */}
//           <div className="flex gap-1 mb-4">
//             {Array(testimonial.stars)
//               .fill()
//               .map((_, i) => (
//                 <img
//                   key={i}
//                   src={assets.rating_star}
//                   alt=""
//                   className="w-4 h-4"
//                 />
//               ))}
//           </div>

//           {/* Text */}
//           <p className="text-gray-700 text-sm leading-relaxed">
//             “{testimonial.text}”
//           </p>
//         </div>
//       </div>
//     ))}
//   </div>
// </motion.div>

//   )
// }

// export default Testimonial


import React from 'react'
import { testimonialsData, assets } from '../assets/assets'
import { motion } from "motion/react"

const Testimonial = () => {
  return (
    <motion.div
      className="my-28 py-20 px-6 relative overflow-hidden"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >

      {/* Background glow */}
      <div className="absolute -top-20 left-1/4 w-72 h-72 bg-purple-300/30 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-pink-300/30 blur-3xl rounded-full"></div>

      {/* Heading */}
      <div className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold 
        bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 
        bg-clip-text text-transparent">
          What Users Say
        </h1>

        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Thousands of users are already generating high-quality AI images in seconds.
          Whether you're a designer, content creator, or just exploring ideas — our tool helps you bring imagination to life effortlessly.
        </p>
      </div>

      {/* Cards */}
      <div className="flex flex-wrap justify-center gap-10 max-w-7xl mx-auto">

        {testimonialsData.map((testimonial, index) => (
          <motion.div
            key={index}
            className="group relative w-80 p-8 rounded-3xl 
            bg-white/30 backdrop-blur-xl border border-white/40 
            shadow-lg cursor-pointer overflow-hidden"
            
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.6,
              delay: index * 0.15,
              type: "spring",
              stiffness: 120
            }}
            whileHover={{
              scale: 1.05,
              rotate: 1,
              y: -8
            }}
            viewport={{ once: true }}
          >

            {/* glow border on hover */}
            <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-purple-400/20 via-pink-400/20 to-transparent blur-xl"></div>

            <div className="relative text-center">

              {/* Avatar */}
              <div className="relative mb-5 flex justify-center">
                <div className="absolute w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 blur-md opacity-50 animate-pulse"></div>

                <img
                  src={testimonial.image}
                  alt=""
                  className="relative w-16 h-16 rounded-full object-cover border-2 border-white shadow-md"
                />
              </div>

              {/* Name */}
              <h2 className="text-xl font-semibold text-gray-800">
                {testimonial.name}
              </h2>

              <p className="text-gray-500 text-sm mb-3">
                {testimonial.role}
              </p>

              {/* Stars */}
              <div className="flex justify-center gap-1 mb-4">
                {Array(testimonial.stars).fill().map((_, i) => (
                  <img
                    key={i}
                    src={assets.rating_star}
                    alt=""
                    className="w-4 h-4"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-700 text-sm leading-relaxed">
                “{testimonial.text}”
              </p>

            </div>
          </motion.div>
        ))}

      </div>
    </motion.div>
  )
}

export default Testimonial


