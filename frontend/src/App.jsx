import { useContext, useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import AiImage from './pages/AiImage'
import ByCredit from './pages/ByCredit'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Login from './pages/Login'
import { ImageContext } from './context/ImageContext'
import Contact from './pages/Contact'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'


function App() {
  const {showLogin} = useContext(ImageContext)

  return (
    <>
      <div className='min-h-screen bg-gradient-to-b from-teal-100 to-violet-300'>
        <Navbar />
        <div className='px-4 sm:px-10 md:px-14 lg:px-28'>
          <ToastContainer position='bottom-right' />
          {showLogin && <Login />}
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/aiimage' element={<AiImage />} />
            <Route path='/buy' element={<ByCredit />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </div>

        {/* Footer outside padded div — full width, flush to bottom */}
        <Footer />
      </div>
    </>
  )
}

export default App
