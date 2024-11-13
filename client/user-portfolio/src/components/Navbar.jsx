import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='flex justify-center py-2 fixed top-0 left-0 right-0 z-40'>
     <div className="flex justify-around w-[25rem] py-3 md:px-5 lg:px-5 sm:px-2 shadow rounded-lg backdrop-blur-md">
     <Link to='/'>Home</Link>
     <Link to='/'>About</Link>
     <Link to='/'>Service</Link>
     <Link to='/'>Work</Link>
     <Link to='/'>Contact</Link>
     </div>
    </div>
  )
}

export default Navbar
