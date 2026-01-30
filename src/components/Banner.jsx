import React from 'react'
import back from "../assets/back.jpg"
import { useNavigate } from 'react-router-dom'

const MidBanner = () => {
  const navigate = useNavigate()
  return (
    <div className='md:py-24'>
      <div className='relative max-w-7xl mx-auto md:rounded-2xl pt-28 bg-cover bg-center h-137.5  md:h-150 ' style={{backgroundImage: `url(${back})`, backgroundPosition:'center', backgroundAttachment: 'fixed'}}>
        <div className='absolute inset-0 bg-black/60 md:rounded-2xl bg-opacity-50 flex items-center justify-center'>
            <div className='text-center text-white px-4'>
                <h1 className='text-3xl md:text-5xl lg:text-6xl font-bold mb-4'>World Class products at Your Fingertips</h1>
                <p className='text-lg md:text-xl mb-6'>Discover the latest products with unbeatable prices and free shipping on all orders.</p>
                <button className='bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 md:py-3 md:px-6 rounded-lg transition duration-300' onClick={()=>navigate('/products')}>Shop Now</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default MidBanner