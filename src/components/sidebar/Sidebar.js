import React from 'react'
import '../sidebar/sidebar.css'
import { useNavigate } from 'react-router-dom'

export const Sidebar = () => {
  const navigate = useNavigate()
  return (
    <div className='sidebar_main' >
    <div><h3 onClick={()=>navigate('/')} >Home</h3></div>
    <div><h3 onClick={()=>navigate('/Addscenario')} >Add scenario</h3></div>
    <div><h3 onClick={()=>navigate('/Allscenario')} >All scenario</h3></div>
    <div><h3 onClick={()=>navigate('/Addvehicle')} >Add vehicle</h3></div>
    </div>
  )
}
