import React from 'react'
import { Route, Routes } from 'react-router'
import AllTask from './Component/AllTask'
import Completed from './Component/Completed'
import Nav from './Component/Nav'
import Incomplete from './Component/Incomplete'
import Global from './Contex/Global';
import Create from './Component/Create';
import { useContext } from 'react'
import Contex from './Contex/Contex';

export default function App() {
  const{Create_Button,Create_Boolean}=useContext(Contex)
  return (
    <div style={{textAlign:'center' ,listStyleType:'none'}} className="All">
    <Global>
     <Nav/>



    <Routes>
      <Route  path='/inComplete'   element={<Incomplete/>} />
      <Route path='/'  element={<AllTask/>} />
      <Route path='/Completed'  element={<Completed/>}/>
    </Routes>
  
    {Create_Boolean ?  <Create/> : null}
    <button on onClick={Create_Button}>New Task</button>
    </Global>
    </div>
  )
}
