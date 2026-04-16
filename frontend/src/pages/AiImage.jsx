
import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import { motion } from "motion/react"
import { ImageContext } from '../context/ImageContext'

const AiImage = () => {
  const [image, setImage] = useState(assets.sample_img1)
  const [isImageLoaded, setIsImageLoaded] = useState(false)
  const [loading, setLoading] = useState(false)


  const { generateImage,input,setInput } = useContext(ImageContext)

  const onSubmitHandeller = async (e) => {
    e.preventDefault()
    setLoading(true)
    if (input) {
      setLoading(true)
      const image = await generateImage(input)
      if (image) {
        setIsImageLoaded(true)
        setImage(image)
      }
    }
    setLoading(false)
  }

  // LOGIC: Auto-generate if a prompt was passed from Hero
  useEffect(() => {
    if (input && !isImageLoaded) {
      onSubmitHandeller();
    }
  }, []);

  const handleShare = async () => {
  const shareData = {
    title: "AI Generated Image",
    text: "Check out this AI generated image!",
    url: image
  }

  try {
    if (navigator.share) {
      await navigator.share(shareData)
    } else {
      await navigator.clipboard.writeText(image)
      alert("Image link copied to clipboard!")
    }
  } catch (err) {
    console.log(err)
  }
}

  return (
    <motion.form
      onSubmit={onSubmitHandeller}
      className="flex flex-col min-h-[90vh] justify-center items-center gap-8"
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      {/* image card */}
      <div className="relative bg-white/25 backdrop-blur-md border border-white/70 rounded-3xl p-3
          shadow-[0_16px_48px_rgba(124,58,237,0.18)]">
        <img
          src={image}
          alt="generated"
          className="w-80 h-80 sm:w-96 sm:h-96 object-cover rounded-2xl block"
        />

        {/* loading progress bar */}
        <div className={`absolute bottom-3 left-3 right-3 h-[3px] rounded-full bg-white/30 overflow-hidden
          transition-opacity duration-300 ${loading ? 'opacity-100' : 'opacity-0'}`}>
          <div className="h-full w-3/4 bg-gradient-to-r from-purple-600 to-teal-400 rounded-full
            animate-[progress_2s_ease-in-out_infinite_alternate]" />
        </div>
      </div>

      {/* loading label */}
      {loading && (
        <p className="text-sm font-medium text-gray-600 tracking-wide animate-pulse">
          Generating your image…
        </p>
      )}

      {/* input bar */}
      {!isImageLoaded && (
        <motion.div
          className="w-full max-w-xl flex items-center gap-2 bg-white/25 backdrop-blur-md
            border border-white/65 rounded-2xl p-2
            shadow-[0_8px_32px_rgba(124,58,237,0.12)]
            focus-within:border-purple-400 focus-within:shadow-[0_0_0_4px_rgba(124,58,237,0.1)]
            transition-all duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <input
            onChange={(e) => setInput(e.target.value)}
            value={input}
            type="text"
            placeholder="Describe your thoughts and generate"
            className="flex-1 bg-transparent outline-none border-none text-gray-900
            placeholder-gray-500 text-sm px-3 py-2.5 max-sm:w-20"
          />
          <button
            type="submit"
            className="bg-gradient-to-br from-purple-600 to-purple-800 text-white font-semibold
              text-sm px-7 py-3 rounded-xl flex-shrink-0
              shadow-[0_4px_16px_rgba(124,58,237,0.4)]
              hover:-translate-y-0.5 hover:scale-[1.04] hover:shadow-[0_8px_24px_rgba(124,58,237,0.5)]
              active:scale-[0.97] transition-all duration-150"
          >
            Generate
          </button>
        </motion.div>
      )}

      {/* action buttons after generation */}
      {isImageLoaded && (
        <motion.div
          className="flex flex-wrap gap-3 justify-center"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <button
            type="button"
            onClick={() => setIsImageLoaded(false)}
            className="bg-white/35 backdrop-blur-md border border-purple-400/50 text-purple-900
              font-medium text-sm px-7 py-3 rounded-xl
              hover:bg-white/60 hover:-translate-y-0.5 active:scale-[0.97]
              transition-all duration-150 cursor-pointer"
          >
          Generate Another
          </button>
          <a
            href={image}
            download
            className="bg-gradient-to-br from-teal-600 to-teal-500 text-white font-semibold
              text-sm px-7 py-3 rounded-xl
              shadow-[0_4px_14px_rgba(13,148,136,0.38)]
              hover:-translate-y-0.5 hover:shadow-[0_8px_22px_rgba(13,148,136,0.5)]
              active:scale-[0.97] transition-all duration-150 cursor-pointer"
          >
            Download
          </a>
          <button
            type="button"
            onClick={handleShare}
            className="bg-white/35 backdrop-blur-md border border-purple-400/50 text-purple-900
              font-medium text-sm px-7 py-3 rounded-xl
              hover:bg-white/60 hover:-translate-y-0.5 active:scale-[0.97]
              transition-all duration-150 cursor-pointer"
          >
            Share
          </button>
        </motion.div>
      )}
    </motion.form>
  )
}

export default AiImage
