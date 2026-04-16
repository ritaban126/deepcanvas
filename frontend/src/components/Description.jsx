
import React from 'react'
import { assets } from "../assets/assets"
import { motion } from "motion/react"

const Description = () => {
  return (
    <div className="relative my-28 px-6 md:px-24 overflow-hidden">

      {/* Background glow blobs */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-purple-300/30 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 -right-20 w-72 h-72 bg-pink-300/30 blur-3xl rounded-full"></div>

      <motion.div
        className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-14"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >

        {/* Image Section */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
        >
          {/* glow behind image */}
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-400/30 to-pink-400/30 blur-2xl rounded-2xl scale-110"></div>

          <motion.img
            src={assets.sample_img1}
            alt=""
            className="relative w-80 xl:w-[420px] rounded-2xl shadow-2xl"
            whileHover={{ scale: 1.03, rotate: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
          />
        </motion.div>

        {/* Text Section */}
        <div className="flex-1">

          <motion.h1
            className="text-4xl sm:text-5xl font-bold mb-4 
            bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 
            bg-clip-text text-transparent"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            Create AI Images
          </motion.h1>

          <motion.p
            className="text-gray-600 mb-6 text-lg"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            Turn your imagination into stunning AI-generated visuals in seconds.
          </motion.p>

          <motion.div
            className="space-y-4 text-gray-600 leading-relaxed"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <p>
              Generate high-quality images just by typing simple prompts. No design skills needed.
            </p>
            <p>
              Our AI understands your ideas and transforms them into realistic or artistic visuals instantly.
            </p>
          </motion.div>

        </div>
      </motion.div>
    </div>
  )
}

export default Description
