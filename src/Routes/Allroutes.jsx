import { Route,Routes } from "react-router-dom"; 
import {Home} from '../components/Body/Home.jsx'
import {Addscenario} from '../components/Body/Addscenario.jsx'
import {Addvehicle} from '../components/Body/Addvehicle.jsx'
import {Allscenario} from '../components/Body/Allscenario.jsx'

import React from 'react'

export const Allroutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>} ></Route>
        <Route path="/AddScenario" element={<Addscenario/>} >  </Route>
        <Route path="/Addvehicle" element={<Addvehicle/>}>  </Route>
        <Route path="/Allscenario" element={<Allscenario/>}> </Route>
    </Routes>
  )
}
