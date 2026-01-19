import React from 'react'
import { useParams } from 'react-router-dom'

const CategoryPage = () => {
    const params = useParams()
    const category = params.category
  return (
    <div></div>
  )
}

export default CategoryPage