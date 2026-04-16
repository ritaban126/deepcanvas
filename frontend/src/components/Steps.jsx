
import React from 'react'
import { stepsData } from '../assets/assets'
import { motion } from "motion/react"

const Steps = () => {
  return (
    <motion.div
      className="my-32 px-4"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >

      {/* Heading */}
      <div className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold 
        bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 
        bg-clip-text text-transparent">
          How it works
        </h1>

        <p className="mt-4 text-lg text-gray-600">
          Turn your ideas into AI-generated visuals in 3 simple steps
        </p>
      </div>

      {/* Steps Container */}
      <div className="relative max-w-4xl mx-auto">

        {/* Vertical line */}
        <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-gradient-to-b from-purple-400 via-pink-400 to-transparent"></div>

        {stepsData.map((item, index) => (
          <motion.div
            key={index}
            className="relative flex items-start gap-6 mb-10"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.15,
              type: "spring",
              stiffness: 120
            }}
            viewport={{ once: true }}
          >

            {/* Step circle */}
            <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full 
            bg-gradient-to-br from-purple-500 to-pink-500 text-white font-bold shadow-lg
            ring-4 ring-white/60">
              {index + 1}
            </div>

            {/* Card */}
            <div className="group flex-1 p-6 rounded-2xl 
            bg-white/30 backdrop-blur-lg border border-white/40 
            shadow-md hover:shadow-2xl transition-all duration-500
            hover:-translate-y-1">

              {/* Glow accent */}
              <div className="absolute inset-0 rounded-2xl opacity-0 
              group-hover:opacity-100 transition duration-500 
              bg-gradient-to-r from-purple-200/30 via-pink-200/20 to-transparent blur-xl"></div>

              <div className="relative">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  {item.title}
                </h2>

                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

            </div>

          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default Steps
