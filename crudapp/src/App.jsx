import React from 'react'
import Navbar from './Components/Navbar'
import Create from './Components/Create'
import {BrowserRouter, Route,Routes } from 'react-router-dom'
import Read from './Components/Read'

function App() {

  return (
    <>
  <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route exact path='/' element={<Create/>}/>
    <Route exact path='/read' element={<Read/>}/>
   </Routes>
   </BrowserRouter>
    </>
  )
}

export default App
