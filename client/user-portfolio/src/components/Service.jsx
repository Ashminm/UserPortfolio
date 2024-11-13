import React from 'react'
import { Link } from 'react-router-dom'

function Service() {
  return (
    <div className='flex justify-center items-center pb-5 py-[140px]'>
      <div className="lex flex-col text-center px-5 py-3">
        <p className='text-xs'>What i offer</p>
        <h1 className='text-4xl mb-5'>Services</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum consequuntur, ea dolor,<br className='max-md:hidden' />  quas atque aperiam laudantium libero voluptatibus similique, cumque quam ratione velit culpa doloribus iure quaerat fuga.</p>

        <div className="flex justify-center">
            <div className='mt-[80px] grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-1 gap-8'>

              <div className='w-72 h-49 rounded-md text-start p-4 pt-5 flex flex-col justify-between bg-gray-200'>
              <i className='material-icons text-3xl'>looks_one</i>
                  <p className='mt-2'>Web application</p>
                  <p className='mt-4'>ipsum dolor sit amet consectetur, adipisicing </p>
                  <Link to='/' className='text-xs flex items-center gap-2.5 text-gray-400 mt-2.5'>Read more <i className='material-icons'>arrow_right_alt</i> </Link>     
              </div>
              <div className='w-72 h-49 rounded-md text-start p-4 pt-5 flex flex-col justify-between bg-gray-200'>
              <i className='material-icons text-3xl'>looks_two</i>
                  <p className='mt-2'>Website</p>
                  <p className='mt-4'>ipsum dolor sit amet consectetur, adipisicing </p>
                  <Link to='/' className='text-xs flex items-center gap-2.5 text-gray-400 mt-2.5'>Read more <i className='material-icons'>arrow_right_alt</i> </Link>     
              </div>
              <div className='w-72 h-49 rounded-md text-start p-4 pt-5 flex flex-col justify-between bg-gray-200'>
              <i className='material-icons text-3xl'>looks_3</i>
                  <p className='mt-2'>UI Design</p>
                  <p className='mt-4'>ipsum dolor sit amet consectetur, adipisicing </p>
                  <Link to='/' className='text-xs flex items-center gap-2.5 text-gray-400 mt-2.5'>Read more <i className='material-icons'>arrow_right_alt</i> </Link>     
              </div>
              <div className='w-72 h-49 rounded-md text-start p-4 pt-5 flex flex-col justify-between bg-gray-200'>
              <i className='material-icons text-3xl'>looks_4</i>
                  <p className='mt-2'>Mobile app</p>
                  <p className='mt-4'>ipsum dolor sit amet consectetur, adipisicing </p>
                  <Link to='/' className='text-xs flex items-center gap-2.5 text-gray-400 mt-2.5'>Read more <i className='material-icons'>arrow_right_alt</i> </Link>     
              </div>
              </div>
            </div>
      </div>
    </div>
  )
}

export default Service
