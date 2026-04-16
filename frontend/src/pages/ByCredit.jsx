import React, { useContext, useState } from 'react'
import { plans } from '../assets/assets'
import { ImageContext } from '../context/ImageContext'
import { motion } from "motion/react"
import { toast } from 'react-toastify'
import axios from 'axios'

const BuyCredit = () => {
  const { user, backendUrl, token, setShowLogin } = useContext(ImageContext);
  const [loading, setLoading] = useState(false); // ✅ loading state

  const paymentStripe = async (planId) => {
    try {
      if (!user) return setShowLogin(true);

      setLoading(planId); // ✅ track which plan button is loading

      const { data } = await axios.post(
        backendUrl + "/api/user/pay-stripe",
        { planId },
        { headers: { token } }
      );

      if (!data.success) return toast.error(data.message);

      window.location.href = data.url; // ✅ redirect to Stripe

    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false); // ✅ reset loading
    }
  }

  return (
    <motion.div
      className="min-h-[80vh] text-center pt-14 mb-10"
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <button className="border border-gray-400 px-10 py-2 rounded-full mb-6">
        Our Plans
      </button>

      <div className='flex items-center justify-center gap-4 mb-6'>
        <span className="flex-1 max-w-12 w-10 h-[2px] bg-gradient-to-r from-purple-500 to-pink-500" />
        <h1 className="text-center text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 bg-clip-text text-transparent">
          Choose Our Plans
        </h1>
        <span className="flex-1 max-w-12 w-10 h-[2px] bg-gradient-to-r from-pink-500 to-purple-500" />
      </div>

      <p className="text-gray-500 mb-6 max-w-xl mx-auto text-center">
        Choose a plan that fits your needs. Upgrade or cancel anytime.
      </p>

      <div className="flex flex-wrap justify-center gap-6 text-left">
        {plans.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="bg-white drop-shadow-sm border rounded-lg py-12 px-8
              text-gray-600 hover:scale-105 transition-all duration-500"
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-md bg-gray-100 mb-3">
                <Icon size={24} className="text-gray-800" />
              </div>

              <p className="mt-3 mb-1 font-semibold capitalize">{item.id}</p>
              <p className="text-sm">{item.desc}</p>

              <p className="mt-6">
                <span className="text-3xl font-medium">
                  {item.price === 0 ? "Free" : `$${item.price}`} / {item.credits}
                </span>
              </p>

              {/* ✅ loading + disabled state on button */}
              <button
                onClick={() => paymentStripe(item.id)}
                disabled={loading === item.id}
                className="w-full bg-gray-800 text-white mt-8 text-sm rounded-md py-2.5 
                min-w-52 hover:bg-gray-700 transition disabled:opacity-60 
                disabled:cursor-not-allowed"
              >
                {loading === item.id
                  ? "Processing..."
                  : user ? "Purchase" : "Get Started"}
              </button>
            </div>
          )
        })}
      </div>
    </motion.div>
  )
}

export default BuyCredit
