import React, { useEffect } from 'react'

import { useState } from 'react';
import '../Body/Addvehicle.css';



export const Addvehicle = () => {
 
  let arr1 = JSON.parse(localStorage.getItem('vehicles')) || [];

    let arr2=JSON.parse(localStorage.getItem('scenarios')) || []
    let [vid,setvid] = useState(arr1.length)
    let [scenario,setscenario] = useState('')
    let [vname,setvname] = useState('')
    let [direction,setdirection] = useState('')
    let [speed,setspeed] = useState(0)
    let [x,setx]=useState(0)
    let [y,sety]=useState(0)
    const add=()=>{
      console.log(arr1);
     setvid(vid+1) 
     let obj = {vid,scenario,vname,speed,x,y,direction}
     console.log(obj);
     arr1.push(obj)
     localStorage.setItem('vehicles',JSON.stringify(arr1))
  
    }
    const reset=()=>{
  
    }
    return (
      <div className='addvehicle_main' >
        <div><h1>Add Vehicle</h1></div>
        <div>
        <div> <h2>Scenario List</h2> 
       <select onChange={(e)=>{setscenario(scenario=e.target.value)}} >
        { 
          arr1.map((el)=>{return(
            
             <option value={el.name} >{el.name}</option>)})}
       </select>
        </div>
        <div><h2>Vehicle name</h2>
        <input   onChange={(e)=>{setvname(vname=e.target.value)}} />
        </div>
        <div><h2>Speed</h2>
        <input  onChange={(e)=>{setspeed(speed=e.target.value)}} />
        </div>
        <div> <h2>Position X</h2> 
        <input onChange={(e)=>{setx(x=e.target.value)}} />
        </div>
        <div><h2>Position Y</h2>
        <input onChange={(e)=>{sety(y=e.target.value)}}  />
        </div>
        <div><h2>Direction</h2>
        <select onChange={(e)=>{setdirection(direction=e.target.value)}}  >
        m <option value={''} ></option>
          <option value={'Towards'} >Towards</option>
          <option value={'Backwards'} >Backwards</option>
          <option value={'Upwards'} >Upwards</option>
          <option value={'Downwards'} >Downwards</option>
        </select>
        </div>
        </div>
        <div>
          <button onClick={add} >Add</button>
          <button onClick={reset} >Reset</button>
          <button >Go Back</button>
        </div>
      </div>
    )
  
}
