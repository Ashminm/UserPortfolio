import React from 'react'
import Footer from './Footer'

function Education() {
  return (
    <div className='pb-5 px-10 py-[120px]'>
         <div className="flex justify-between items-end ps-0 px-16">
        <p className='m-0 text-sm'>Background</p>
        <i className='material-icons text-3xl border border-black cursor-pointer hover:bg-black hover:text-white duration-300 text-black rounded-full w-10 h-10 flex items-center justify-center'>swap_vert</i>
        </div>
        <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-1'>
      <div>
        <p className='text-4xl mb-5'>Education</p>
      </div>

      <div>
        <div className='mb-[75px]'>
            <hr className='mb-2  w-3/5 bg-black h-1'  />
                <div>
                <h2 className='lg:text-2xl md:text-2xl sm:text-lg xs:text-md mb-2'>Luminar Technolab</h2>
                <h4 className='lg:text-2xl md:text-2xl sm:text-lg xs:text-md font-semibold mb-2 mb-2'>Web development</h4>
                <div className="flex justify-between w-3/5">
                <h4 className='lg:text-lg md:text-xl sm:text-lg xs:text-md text-red-400'>2023 - 2024</h4> <a className='lg:text-md md:text-md sm:text-sm xs:text-sm' href="">Link</a>
                </div>
                </div>
        </div>
        <div className='mb-[75px]'>
            <hr className='mb-2  w-3/5 bg-black h-1'  />
                <div>
                <h2 className='lg:text-2xl md:text-2xl sm:text-lg xs:text-md mb-2'>Luminar Technolab</h2>
                <h4 className='lg:text-2xl md:text-2xl sm:text-lg xs:text-md font-semibold mb-2 mb-2'>Web development</h4>
                <div className="flex justify-between w-3/5">
                <h4 className='lg:text-lg md:text-xl sm:text-lg xs:text-md text-red-400'>2023 - 2024</h4> <a className='lg:text-md md:text-md sm:text-sm xs:text-sm' href="">Link</a>
                </div>
                </div>
        </div>
        <div className='mb-[75px]'>
            <hr className='mb-2  w-3/5 bg-black h-1'  />
                <div>
                <h2 className='lg:text-2xl md:text-2xl sm:text-lg xs:text-md mb-2'>Luminar Technolab</h2>
                <h4 className='lg:text-2xl md:text-2xl sm:text-lg xs:text-md font-semibold mb-2 mb-2'>Web development</h4>
                <div className="flex justify-between w-3/5">
                <h4 className='lg:text-lg md:text-xl sm:text-lg xs:text-md text-red-400'>2023 - 2024</h4> <a className='lg:text-md md:text-md sm:text-sm xs:text-sm' href="">Link</a>
                </div>
                </div>
        </div>
       
        
      </div>
    
    </div>
    <hr className='my-10 mt-0  w-4/4 mx-auto bg-black h-0.5'  />

    <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-1">
        <div>
            <p className='text-xs'>Knows</p>
            <p className='text-4xl mb-5'>Languages</p>
        </div>
        <div className='grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1 gap-4'>
               <div className="bg-gray-200 shadow-md hover:bg-slate-300 duration-300 w-52 flex gap-4 p-4">
                    <div>
                    <i className='material-icons text-3xl'>looks_one</i>
                    </div>
                    <div>
                        <h1 className='text-lg'>English</h1>
                        <p className='text-sm text-slate-500 italic'>Good</p>
                    </div>
               </div>
               <div className="bg-gray-200 shadow-md hover:bg-slate-300 duration-300 w-52 flex gap-4 p-4">
                    <div>
                    <i className='material-icons text-3xl'>looks_two</i>
                    </div>
                    <div>
                        <h1 className='text-lg'>Malayalam</h1>
                        <p className='text-sm text-slate-500 italic'>Perfect</p>
                    </div>
               </div>
               <div className="bg-gray-200 shadow-md hover:bg-slate-300 duration-300 w-52 flex gap-4 p-4">
                    <div>
                    <i className='material-icons text-3xl'>looks_3</i>
                    </div>
                    <div>
                        <h1 className='text-lg'>Tamil</h1>
                        <p className='text-sm text-slate-500 italic'>Good</p>
                    </div>
               </div>
               <div className="bg-gray-200 shadow-md hover:bg-slate-300 duration-300 w-52 flex gap-4 p-4">
                    <div>
                    <i className='material-icons text-3xl'>looks_4</i>
                    </div>
                    <div>
                        <h1 className='text-lg'>Hindi</h1>
                        <p className='text-sm text-slate-500 italic'>Fair</p>
                    </div>
               </div>
        </div>
           
        </div>
        {/* <Footer/> */}
    </div>
  )
}

export default Education
