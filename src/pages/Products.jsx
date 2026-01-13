import React, { useContext, useEffect } from 'react'
import DataContext from '../context/DataContext'
import FilterSection from '../components/FilterSection'
import Loading from "../assets/loading4.webm"
import ProductCard from '../components/ProductCard'

const Products = () => {
  const {data, fetchAllProducts} = useContext(DataContext)
  // console.log(data)


  useEffect(()=> {
fetchAllProducts()
  }, [])
  return (
    <div className='max-w-6xl mx-auto px-4 mb-10'>
      {
        data?.length > 0 ? (
          <div className='flex gap-8 '>
            <FilterSection /> 
            <div className='grid grid-cols-4 gap-7 mt-10 '>
              {
                data.map((product, index)=>{
                  return <ProductCard key={index} product={product} />
                })
              }
            </div>
          </div>
        ) : (
          <div className='flex items-center justify-center h-100 '>
            <video muted autoPlay loop>
              <source src={Loading} type='video/webm' /> 
            </video>
          </div>
        )
      }
    </div>
  )
}

export default Products