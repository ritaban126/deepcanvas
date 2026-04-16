
import React from 'react'
import { exampleImages } from '../assets/assets'
import { motion } from "motion/react"

const Examples = () => {
  return (
    <div className="py-16">

      {/* Heading */}
      <motion.h1
        className="text-4xl sm:text-5xl font-extrabold text-center mb-4 
        bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 
        bg-clip-text text-transparent tracking-tight"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        AI Creations
      </motion.h1>

      <motion.p
        className="text-center text-gray-700 max-w-xl mx-auto mb-12 text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Turn your imagination into stunning visuals using powerful AI prompts.
      </motion.p>

      {/* Grid */}
      <motion.div
        className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
      >
        {exampleImages.map((item, index) => (
          <motion.div
            key={index}
            className="group relative rounded-2xl overflow-hidden 
            backdrop-blur-lg bg-white/20 border border-white/30 
            shadow-lg hover:shadow-2xl transition-all duration-500"
            whileHover={{ scale: 1.04 }}
          >

            {/* Image */}
            <img
              src={item.image}
              alt=""
              className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80"></div>

            {/* Prompt Text */}
            <div className="absolute inset-0 flex items-end p-4">
              <h3 className="text-white text-sm font-medium leading-snug 
              opacity-0 translate-y-4 
              group-hover:opacity-100 group-hover:translate-y-0 
              transition-all duration-500">
                {item.prompt}
              </h3>
            </div>

          </motion.div>
        ))}
      </motion.div>

    </div>
  )
}

export default Examples
