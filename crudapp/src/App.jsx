import React from 'react'
import Navbar from './Components/Navbar'
import Create from './Components/Create'
import {BrowserRouter, Route,Routes } from 'react-router-dom'

function App() {

  return (
    <>
  <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route exact path='/' element={<Create/>}/>
   </Routes>
   </BrowserRouter>
    </>
  )
}

export default App
