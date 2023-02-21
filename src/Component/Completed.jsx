import React from 'react'
import { useContext } from 'react';
import Contex from './../Contex/Contex';
import ShowTask from './ShowTask';

export default function Completed() {
 
 
  const {Alltask}=useContext(Contex)
  let completed =Alltask.filter(task=>task.checked===true)
  return (
    <div>
      <ul>
      {completed.map((p) => (
        <li key={p.id}><ShowTask
          name={p.name}
          Description={p.Description}
          checked={p.checked}
          id={p.id}
        /></li>
      ))}
      </ul>
      
    </div>
  )
}
