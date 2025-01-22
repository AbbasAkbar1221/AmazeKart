import React from 'react'
import Carousel from '../components/carousel/Carousel'
import CardComponent from '../components/card_component/CardComponent'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'

export function Auth (){
  const user = useSelector(state => state.auth.currentUser)
  const location = useLocation();
  return(
    user? <Outlet/> : <Navigate to="/login" state={{from: location.pathname}} />
  )
}

const HomePage = () => {
  return (
    <div>
      <Carousel/>
      <CardComponent/>
    </div>
  )
}

export default HomePage
