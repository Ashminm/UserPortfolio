import React from 'react'
import { Link } from 'react-router-dom'

function About() {
  return (
    <div className='flex justify-center items-center pb-5'>
      <div className="flex flex-col text-center px-5 py-3">
        <p className='text-xs'>Introduction</p>
        <h1 className='text-4xl'>About me</h1>
        <div className="mt-[50px] px-5">
            <img src="https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D" className='w-[23rem] h-[27rem] bg-no-repeat object-cover rounded-lg mx-auto mb-4 overflow-hidden' alt="" />
                <div className="relative">
                    <div className="rounded-full w-20 h-20 absolute right-[24%] bottom-0 bg-slate-100 shadow-md flex justify-center items-center">
                        <p className='text-3xl'>🧑‍💻</p>
                    </div>
                </div>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum consequuntur, ea dolor, quas atque aperiam laudantium <br className='max-md:hidden' /> libero voluptatibus similique, cumque quam ratione velit culpa doloribus iure quaerat fuga? Et, veniam.</p>
        </div>
        <div className="flex justify-center mt-8">
        <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-4">
            <div className='bg-slate-200 w-64 h-49 rounded-md text-start p-4 pt-5 flex flex-col justify-between'>
                <i className='material-icons text-3xl'>school</i>
                <p className='mt-2'>Education</p>
                <p className='mt-4'>B.Tech in computer <br className='max-md:hidden' /> Science</p>
                <Link to='/' className='text-xs flex items-center gap-2.5 text-gray-400 mt-2.5'>Read more <i className='material-icons'>arrow_right_alt</i> </Link>                
            </div>
            <div className='bg-slate-200 w-64 h-49 rounded-md text-start p-4 pt-5 flex flex-col justify-between'>
                <i className='material-icons text-3xl'>manage_accounts</i>
                <p className='mt-2'>Experiance</p>
                <p className='mt-4'>Zidio Development <br className='max-md:hidden' /> company</p>
                <Link to='/' className='text-xs flex items-center gap-2.5 text-gray-400 mt-2.5'>Read more <i className='material-icons'>arrow_right_alt</i> </Link>
            </div>
            <div className='bg-slate-200 w-64 h-49 rounded-md text-start p-4 pt-5 flex flex-col justify-between'>
                <i className='material-icons text-3xl'>monitoring</i>
                <p className='mt-2'>Current</p>
                <p className='mt-4'>Freelancer</p>
                <Link to='/' className='text-xs flex items-center gap-2.5 text-gray-400 mt-2.5'>Read more <i className='material-icons'>arrow_right_alt</i> </Link>
            </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default About
