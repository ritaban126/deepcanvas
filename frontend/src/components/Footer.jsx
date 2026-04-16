import React from 'react'
import { FaFacebook, FaInstagramSquare, FaTwitter } from "react-icons/fa"
import { motion } from "motion/react"

const Footer = () => {

  return (
     <div className="relative w-full overflow-hidden bg-gradient-to-b from-transparent to-violet-400/40 pt-20">

    {/* blurred orbs */}
    <div className="absolute -top-20 -right-16 w-72 h-72 rounded-full bg-purple-600 opacity-25 blur-[70px] pointer-events-none" />
    <div className="absolute bottom-10 -left-12 w-52 h-52 rounded-full bg-teal-500 opacity-25 blur-[60px] pointer-events-none" />

    <motion.footer
      className="relative max-w-5xl mx-auto px-8"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* top grid */}
      <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr] gap-12 pb-12">

        {/* brand */}
        <div>
          <span className="text-3xl font-extrabold tracking-tight bg-gradient-to-br from-purple-600 to-teal-500 bg-clip-text text-transparent">
            DeepCanvas
          </span>
          <p className="mt-4 text-sm leading-7 text-gray-600 max-w-[260px]">
            Turning imagination into AI-generated visuals with next-gen creativity tools.
            Build, explore, and create without limits.
          </p>
          <div className="flex flex-wrap gap-2 mt-5">
            {["AI-Powered", "Text to Image", "Creative"].map(tag => (
              <span key={tag}
                className="text-[11px] font-semibold tracking-wide px-2.5 py-1 rounded-md
                  bg-purple-100/60 text-purple-800 border border-purple-200/70">
                {tag}
              </span>
            ))}
          </div>
          <div className="flex gap-2.5 mt-5">
            {[
              { Icon: FaFacebook, color: "hover:text-blue-500", label: "Facebook" },
              { Icon: FaInstagramSquare, color: "hover:text-pink-500", label: "Instagram" },
              { Icon: FaTwitter, color: "hover:text-sky-500", label: "Twitter" },
            ].map(({ Icon, color, label }) => (
              <button key={label} aria-label={label}
                className={`w-9 h-9 rounded-xl bg-white/35 backdrop-blur-md
                  border border-purple-200/50 flex items-center justify-center
                  text-gray-500 ${color}
                  hover:-translate-y-0.5 hover:bg-white/60 hover:border-purple-400/50
                  transition-all duration-200 cursor-pointer`}>
                <Icon size={15} />
              </button>
            ))}
          </div>
        </div>

        {/* company */}
        <div>
          <p className="text-[11px] font-bold tracking-[0.12em] uppercase text-purple-600 mb-5">Company</p>
          <ul className="space-y-3">
            {["Home", "About Us", "Features"].map(item => (
              <li key={item}
                className="text-sm text-gray-600 cursor-pointer hover:text-purple-600 hover:pl-1.5 transition-all duration-200">
                {item}
              </li>
            ))}
          </ul>
        </div>
        {/* contact */}
        <div>
          <p className="text-[11px] font-bold tracking-[0.12em] uppercase text-purple-600 mb-5">Get in Touch</p>
          <ul className="space-y-3">
            {["+91 4567812010", "contact@deepcanvas.ai", "Kolkata, India"].map(item => (
              <li key={item} className="flex items-center gap-2.5 text-sm text-gray-600">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-500 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* gradient divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-purple-400/40 to-transparent" />

      {/* bottom bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 py-5">
        <p className="text-sm text-gray-500">© 2025 DeepCanvas. All rights reserved.</p>
        <span className="text-xs font-semibold tracking-wide px-4 py-1.5 rounded-full
          bg-white/40 backdrop-blur-md border border-purple-200/50 text-purple-700">
          Built with AI
        </span>
      </div>
    </motion.footer>
  </div>
  )
}

export default Footer
