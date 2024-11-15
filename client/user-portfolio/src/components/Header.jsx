import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='flex justify-center items-center min-h-screen'>
      <div className="flex flex-col text-center px-5 py-3">
        <img src="https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D" className='w-32 h-32 bg-no-repeat object-cover rounded-full mx-auto border mb-4 overflow-hidden hover:border-1 hover:border-black hover:p-1 hover:bg-slate-200 duration-300  hover:animate-spin' alt="user profile" />
          <div className="relative">
          <i className='material-icons text-5xl absolute bottom-0 p-1 rounded-full bg-gray-400 cursor-pointer'>account_circle</i>
              <Link to='/auth'><i className='material-icons text-5xl absolute bottom-0 p-1 rounded-full hover:bg-slate-400 hover:text-slate-700 bg-gray-300 text-gray-500 duration-300 cursor-pointer'>account_circle</i></Link>
          </div>
        <h5 className='text-2xl mb-1'>Hi I'm <span>Ashmin</span></h5>
        <h1 className='text-4xl mb-2 font-semibold'>Web developer</h1>
        <p>Lorem ipsum dolor sit amet consectetur,  saepe praesentium Lorem,ipsum dolor sit amet adipisicing elit. Quibusdam itaque <br className='max-md:hidden' /> dolore dolor magnam, eveniet dolorem dolorum dolores, reprehenderit ad, voluptatibus est eius odio.</p>
        <div className="flex justify-center gap-5 mt-8">
            <Link to='/dashboard'><button className='bg-zinc-800 text-white flex items-center gap-2 px-4 py-1.5 sm:px-8 sm:py-3 text-sm rounded-full hover:bg-gray-600 duration-300'>Contact <i className="material-icons">arrow_right_alt</i></button></Link>
            <button className='text-black border border-black flex items-center gap-2 px-4 py-1.5 sm:px-8 sm:py-3 text-sm rounded-full hover:bg-slate-200 duration-300'>My resume <i className="material-icons">download</i></button>  
        </div>
      </div>
    </div>

  )
}

export default Header
