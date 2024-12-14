import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='flex justify-center py-2 fixed top-0 left-0 right-0 z-40'>
     <div className="flex justify-around w-[25rem] py-3 md:px-5 lg:px-5 sm:px-2 shadow rounded-lg backdrop-blur-md">
     <Link to='/' className='text-black no-underline hover:text-slate-500 hover:underline hover:underline-offset-4 hover:decoration-slate-400 duration-300'>Home</Link>
     <Link to='/about' className='text-black no-underline hover:text-slate-500 hover:underline hover:underline-offset-4 hover:decoration-slate-400 duration-300'>About</Link>
     <Link to='/service' className='text-black no-underline hover:text-slate-500 hover:underline hover:underline-offset-4 hover:decoration-slate-400 duration-300'>Service</Link>
     <Link to='/work' className='text-black no-underline hover:text-slate-500 hover:underline hover:underline-offset-4 hover:decoration-slate-400 duration-300'>Work</Link>
     <Link to='/contact' className='text-black no-underline hover:text-slate-500 hover:underline hover:underline-offset-4 hover:decoration-slate-400 duration-300'>Contact</Link>
     </div>
    </div>
  )
}

export default Navbar
