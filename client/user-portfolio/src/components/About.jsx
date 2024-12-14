import React from 'react'
import { Link } from 'react-router-dom'

function About() {
  return (
    <div className='flex justify-center items-center pb-5'>
      <div className="flex flex-col text-center px-5 py-3">
        <p className='text-xs'>Introduction</p>
        <h1 className='text-4xl'>About me</h1>
        <div className="mt-[30px] px-5">
            <img src="https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D" className='w-[23rem] h-[27rem] bg-no-repeat object-cover rounded-lg mx-auto overflow-hidden' alt="" />
            <div className="relative w-20 h-20 flex items-center justify-center right-[-66%] bottom-14 ">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-100 via-yellow-300 to-orange-100 animate-spin shadow-inner "></div>
              <p className="text-3xl z-10 m-0">🧑‍💻</p>
          </div>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum consequuntur, ea dolor, quas atque aperiam laudantium <br className='max-md:hidden' /> libero voluptatibus similique, cumque quam ratione velit culpa doloribus iure quaerat fuga? Et, veniam.</p>
        </div>
    
        <div className="flex justify-center mt-8">
        <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-4">
            <div className='bg-slate-200 hover:bg-gray-300 duration-300 w-64 h-49 rounded-md text-start p-4 pt-5 flex flex-col justify-between'>
                <i className='material-icons text-3xl'>school</i>
                <p className='mt-2'>Education</p>
                <p className='mt-4'>B.Tech in computer <br className='max-md:hidden' /> Science</p>
                <Link to='/education' className='text-xs no-underline flex items-center gap-2.5 text-gray-400 mt-2.5 hover:text-gray-500 duration-300'>Read more <i className='material-icons'>arrow_right_alt</i> </Link>                
            </div>
            <div className='bg-slate-200 hover:bg-gray-300 duration-300 w-64 h-49 rounded-md text-start p-4 pt-5 flex flex-col justify-between'>
                <i className='material-icons text-3xl'>manage_accounts</i>
                <p className='mt-2'>Experiance</p>
                <p className='mt-4'>Zidio Development <br className='max-md:hidden' /> company</p>
                <Link to='/experiance' className='text-xs no-underline flex items-center gap-2.5 text-gray-400 mt-2.5 hover:text-gray-500 duration-300'>Read more <i className='material-icons'>arrow_right_alt</i> </Link>
            </div>
            <div className='bg-slate-200 hover:bg-gray-300 duration-300 w-64 h-49 rounded-md text-start p-4 pt-5 flex flex-col justify-between'>
                <i className='material-icons text-3xl'>monitoring</i>
                <p className='mt-2'>Current</p>
                <p className='mt-4'>Freelancer</p>
                <Link to='/current' className='text-xs no-underline flex items-center gap-2.5 text-gray-400 mt-2.5 hover:text-gray-500 duration-300'>Read more <i className='material-icons'>arrow_right_alt</i> </Link>
            </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default About
