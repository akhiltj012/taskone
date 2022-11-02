import React from 'react'
import '../Body/Addscenario.css'
import { useState } from 'react'


export const Addscenario = () => {

  let arr = JSON.parse(localStorage.getItem('scenarios')) || [];
  let [id,setid] = useState(arr.length)
  let [name,setname] = useState('')
  let [time,settime] = useState(0)
  const add=()=>{
   setid(id+1) 
   let obj = {id,name,time}
   arr.push(obj)
   localStorage.setItem('scenarios',JSON.stringify(arr))

  }
  const reset=()=>{

  }
  return (
    <div className='addscenario_main' >
      <div><h1>Add scenario</h1></div>
      <div>
      <div> <h2>Scenario Name</h2> 
      <input onChange={(e)=>{setname(name=e.target.value)}} />
      </div>
      <div><h2>Scenario Time(seconds)</h2>
      <input  onChange={(e)=>{settime(time=e.target.value)}} />
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
