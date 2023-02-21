import React from 'react'
import { useContext } from 'react';
import Contex from './../Contex/Contex';
import ShowTask from './ShowTask';

export default function Incomplete() {
  const {Alltask}=useContext(Contex)
  let incomplete =Alltask.filter(task=>task.checked===false)
  return (
    <div>
      <ul>
      {incomplete.map((p) => (
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
