import React from 'react'
import { useContext } from 'react'
import Contex from '../Contex/Contex'

export default function Create() {
    const {input_Description,input_name,create}=useContext(Contex)
    return (
    <div>
     
     <span><input type="text" onChange={input_name} maxLength={50} /></span>
     <span><textarea minLength={0} maxLength={200} onChange={input_Description}/></span>
     <button on onClick={create}>Create</button>
    </div>
  )
}
