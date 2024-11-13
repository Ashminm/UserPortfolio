import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'

function App() {

  return (

    <div className="min-h-screen bg-slate-50">
    <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>} />
     </Routes>
    </div>
  )
}

export default App
