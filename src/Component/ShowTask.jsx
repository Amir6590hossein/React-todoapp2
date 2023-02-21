import React from 'react'
import Contex from './../Contex/Contex';
import { useContext } from 'react';

export default function ShowTask({name,Description,checked,id}) {
  const{completed,incomplete,delete_Task}=useContext(Contex)
  return (

  <div>
<span>{name}</span>
<span>........{Description}</span>


<span onClick={()=>{completed(id)}} style={{cursor: "pointer"}}>...??..Completed</span>
 <span onClick={()=>{incomplete(id)}} style={{cursor: "pointer"}} >.:::....incompleted</span>
 <span>,,,,,,,,,<button onClick={()=>delete_Task(id)}>delete</button></span>

</div>

  )
}
