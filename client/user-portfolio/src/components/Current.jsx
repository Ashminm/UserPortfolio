import React from 'react'

function Current() {
  return (
    <div className='flex justify-center items-center pb-5 py-[90px]'>
      <div className="flex flex-col text-center px-5 py-3 w-full">
        <p className='text-xs'>Now i'm</p>
        <h1 className='text-4xl mb-5'>Current</h1>
        <div className='flex justify-center flex-col items-center'>
            <div className="shadow-md border w-full sm:w-4/5 md:w-3/5 lg:w-3/6  flex justify-center flex-col rounded-md mb-4">
                    <div className="bg-slate-200 w-[93%] m-7 rounded-md p-5">
                        <h3 className='text-xl text-sky-400 mb-2'>2023 - Present</h3>
                        <h3 className='font-semibold text-xl'>Web developer</h3>
                        <h3 className='text-xl my-1'>Zidio development. <span>Internship</span></h3>
                        <p className='italic text-gray-400'>Bangalure. karnataka.</p>
                    </div>
                    <p className='py-5 px-3 pt-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad a libero enim eius aperiam ipsam quibusdam ex dolor vero. Nobis, blanditiis sed aspernatur pariatur nemo ullam? Minima blanditiis totam ducimus.</p>
            </div>
            

        </div>
        <hr className='my-6' />
        <div className="flex flex-col text-center px-5 py-3 w-full">
       <p className='text-xs'>What my side</p>
       <h1 className='text-4xl mb-5'>Tools</h1>
            <div className='w-full sm:w-4/5 md:w-3/5 lg:w-3/6 rounded mx-auto bg-gray-200'>
                <div className='flex justify-center flex-wrap p-5 py-9 gap-3'>
                    <div>
                        <p className='border-2 border-slate-400 bg-slate-300 py-1.5 rounded-md px-4'>Git</p>
                    </div>
                    <div>
                        <p className='border-2 border-slate-400 bg-slate-300 py-1.5 rounded-md px-4'>Postman</p>
                    </div>
                    <div>
                        <p className='border-2 border-slate-400 bg-slate-300 py-1.5 rounded-md px-4'>Figma</p>
                    </div>
                    <div>
                        <p className='border-2 border-slate-400 bg-slate-300 py-1.5 rounded-md px-4'>GitHub</p>
                    </div>
                  
                    
                </div>

            </div>
       </div>
      </div>
    </div>
  )
}

export default Current
