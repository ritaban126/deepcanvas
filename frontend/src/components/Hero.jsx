
import React, { useContext, useRef } from 'react'
import { assets } from "../assets/assets"
import { useNavigate } from 'react-router-dom'
import { ImageContext } from '../context/ImageContext'
import { motion } from "motion/react"

const Particle = ({ style }) => <div className="absolute rounded-full opacity-20 animate-float pointer-events-none" style={style} />

const Hero = () => {
  const { user, setShowLogin,input,setInput } = useContext(ImageContext)
  const navigate = useNavigate()
  const btnRef = useRef(null)

  const onClickHandler = () => {
    if (user) navigate('/aiimage')
    else setShowLogin(true)
  }

  const handleRipple = (e) => {
    const btn = btnRef.current
    const circle = document.createElement('span')
    const d = Math.max(btn.offsetWidth, btn.offsetHeight)
    const rect = btn.getBoundingClientRect()
    circle.style.cssText = `
      position:absolute;border-radius:50%;background:rgba(255,255,255,0.35);
      width:${d}px;height:${d}px;
      left:${e.clientX - rect.left - d / 2}px;
      top:${e.clientY - rect.top - d / 2}px;
      transform:scale(0);animation:ripple 0.55s linear;pointer-events:none;
    `
    btn.appendChild(circle)
    setTimeout(() => circle.remove(), 600)
    onClickHandler()
  }

  const particles = [
    { width: 90, height: 90, bg: '#7c3aed', top: '8%',  left: '7%',   dur: '6s' },
    { width: 55, height: 55, bg: '#0d9488', top: '15%', right: '10%', dur: '8s', delay: '-2s' },
    { width: 38, height: 38, bg: '#a78bfa', bottom: '18%', left: '14%', dur: '7s', delay: '-1s' },
    { width: 70, height: 70, bg: '#5eead4', bottom: '10%', right: '8%', dur: '9s', delay: '-3s' },
  ]

  return (
    <div className="relative flex flex-col justify-center items-center min-h-[520px] py-16 text-center overflow-hidden">
      
      {/* floating particles */}
      {particles.map((p, i) => (
        <Particle key={i} style={{
          width: p.width, height: p.height,
          background: p.bg, top: p.top, left: p.left,
          right: p.right, bottom: p.bottom,
          animationDuration: p.dur, animationDelay: p.delay || '0s'
        }} />
      ))}

      {/* badge */}
      <motion.div
        className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-md border border-white/90 rounded-full px-5 py-1.5 text-sm font-medium text-stone-700 tracking-wide mb-8"
        initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.7 }}
      >
        <span>UNLEASH YOUR CREATIVITY WITH DEEPCANVAS</span>
        <img src={assets.star_icon} alt="" className="w-4" />
      </motion.div>

      {/* title with gradient */}
      <motion.h1
        className="text-6xl sm:text-8xl font-extrabold tracking-tighter bg-gradient-to-br from-gray-900 via-purple-700 to-teal-600 bg-clip-text text-transparent leading-none mb-4"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 1 }}
      >
        TEXT TO IMAGE
      </motion.h1>

      {/* subtitle */}
      <motion.p
        className="font-dancing text-2xl text-gray-600 mb-10"
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45, duration: 0.7 }}
      >
        A Leap Forward in Ai Image Generations
      </motion.p>

      {/* input bar */}
      <motion.div
        className="w-full max-w-xl flex items-center gap-2 bg-white/25 backdrop-blur-md border border-white/60 rounded-2xl p-2 shadow-[0_8px_32px_rgba(124,58,237,0.15)]
        focus-within:border-purple-400 focus-within:shadow-[0_0_0_4px_rgba(124,58,237,0.12),0_8px_32px_rgba(124,58,237,0.2)] transition-all duration-300"
        initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55, duration: 0.8 }}
      >
        <input
          type="text"
          placeholder="enter your prompt…"
          className="flex-1 bg-transparent outline-none border-none text-gray-900 placeholder-gray-500 text-base px-3 py-2.5"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          ref={btnRef}
          onClick={handleRipple}
          className="relative overflow-hidden bg-gradient-to-br from-purple-600 to-purple-800 text-white font-semibold text-base px-7 py-3 rounded-xl
            shadow-[0_4px_18px_rgba(124,58,237,0.4)] hover:-translate-y-0.5 hover:scale-[1.04] hover:shadow-[0_8px_28px_rgba(124,58,237,0.55)]
            active:scale-[0.97] transition-all duration-150 flex-shrink-0"
        >
          Generate
        </button>
      </motion.div>

      {/* hint line */}
      <motion.p
        className="mt-4 text-xs text-gray-500"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.75, duration: 0.6 }}
      >
        ✦ Try: "a futuristic city at sunset, cinematic, 8k"
      </motion.p>
    </div>
  )
}

export default Hero
