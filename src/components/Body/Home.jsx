import React from 'react'
import '../Body/Home.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export const Home = () => {
  const navigate=useNavigate();
  let [scenario,setscenario] = useState('')
  let arr1 = JSON.parse(localStorage.getItem('vehicles')) || [];
  let arr2=JSON.parse(localStorage.getItem('scenarios')) || []
  console.log(arr2,'arr2')
  return (
    <div className='home_main' >
             <div> <h2>Scenario List</h2> 
       <select onChange={(e)=>{setscenario(scenario=e.target.value)}} >
        { 
          arr1.map((el)=>{return(
            
             <option value={el.name} >{el.name}</option>)})}
       </select>
        </div>
        <div className='start' >
          <button  >Start Simulation</button>
          <button >Stop Simulation</button>
         
        </div>

        <div>
          <table>
            <thead>
              <td>Vehicle Id  </td>
              <td> Vehicle Name </td>
              <td> Position X </td>
              <td> Position Y </td>
              <td>Speed</td>
              <td>Direction</td>
              <td>Edit</td>
              <td>Delete</td>
            </thead>
            <tbody>
            
            {arr1.map((el)=>{
              
              return(
                  
             <tr>
              <td>{el.vid}</td>
              <td>{el.vname}</td>
              <td>{el.x}</td>
              <td>{el.y}</td>
              <td>{el.speed}</td>
              <td>{el.direction}</td>
              <td><button>edit</button></td>
              <td><button>delete</button></td>
             </tr>
              )

            
          
         })}
            
            </tbody>
          </table>
        </div>
    </div>
  )
}
