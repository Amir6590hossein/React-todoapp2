import React from 'react'
import { Route, Routes } from 'react-router'
import AllTask from './Component/AllTask'
import Completed from './Component/Completed'
import Nav from './Component/Nav'
import Incomplete from './Component/Incomplete'
import Global from './Contex/Global';

export default function App() {
  return (
    <div>
    <Global>
     <Nav/>



    <Routes>
      <Route  path='/inComplete'   element={<Incomplete/>} />
      <Route path='/'  element={<AllTask/>} />
      <Route path='/Completed'  element={<Completed/>}/>
    </Routes>



    </Global>
    </div>
  )
}
