import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import About from './components/About'
import Service from './components/Service'
import Work from './components/Work'
import Contact from './components/Contact'
import Education from './components/Education'
import Experiance from './components/Experiance'
import Current from './components/Current'
import Auth from './components/Auth'
import Dashboard from './components/Dashboard'

function App() {

  return (

    <div className="min-h-screen bg-slate-50 xs:w-fit sm:w-auto md:w-auto lg:w-auto">
    <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/service' element={<Service/>} />
      <Route path='/work' element={<Work/>} />
      <Route path='/contact' element={<Contact/>} />

      <Route path='/education' element={<Education/>} />
      <Route path='/experiance' element={<Experiance/>} />
      <Route path='/current' element={<Current/>} />

      <Route path='/auth' element={<Auth/>} />
      <Route path='/dashboard' element={<Dashboard/>} />
     </Routes>
    </div>
  )
}

export default App
