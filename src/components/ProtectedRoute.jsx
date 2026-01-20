import { useUser } from '@clerk/clerk-react'
import React, { Children, useEffect, useRef } from 'react'
import { Navigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const ProtectedRoute = ({children}) => {
    const {user, isLoaded} = useUser()
    const toastShown = useRef(false)
    useEffect(()=> {
        if(isLoaded && !user && !toastShown.current){
            toast.error("Please login to continue")
            toastShown.current = true
        }
    }, [isLoaded, user])
    if(!isLoaded) return null
    if(!user) {
         return <Navigate to="/" replace /> 
     }
  return (
   children
  )
}

export default ProtectedRoute