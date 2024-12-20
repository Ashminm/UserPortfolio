import React from 'react'

function Experiance() {
  return (
    <div className='flex justify-center items-center pb-5 py-[90px]'>
    <div className="flex flex-col text-center px-5 py-3 w-full">
       <p className='text-xs m-0'>What I earn</p>
       <h1 className='text-4xl mb-5'>Experience</h1>
       <div className='flex justify-center flex-col items-center'>
           <div className="shadow-md border w-full sm:w-4/5 md:w-3/5 lg:w-3/6  flex justify-center flex-col rounded-md mb-4">
                <div className="bg-gray-200 lg:w-[93%] md:w-[88%] sm:w-[84%] xs:w-[80%] m-7 rounded-md p-5 mx-auto">
                    <h3 className='text-xl text-sky-400 mb-2'>2023 - Present</h3>
                    <h3 className='font-semibold text-xl'>Web developer</h3>
                    <h3 className='text-xl my-1'>Zidio development. <span>Internship</span></h3>
                    <p className='italic text-slate-400'>Bangalure. karnataka.</p>
                </div>
                <p className='py-5 px-3 pt-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad a libero enim eius aperiam ipsam quibusdam ex dolor vero. Nobis, blanditiis sed aspernatur pariatur nemo ullam? Minima blanditiis totam ducimus.</p>
           </div>
          

       </div>
       <hr className='my-6' />
       <div className="flex flex-col text-center px-5 py-3 w-full">
       <p className='text-xs m-0'>What I use & earn</p>
       <h1 className='text-4xl mb-5'>Skills</h1>
            <div className='w-full sm:w-4/5 md:w-3/5 lg:w-3/6 rounded mx-auto bg-slate-200'>
                <div className='flex justify-center flex-wrap p-5 py-9 pb-4 gap-3'>
                    <div>
                        <p className='border-2 border-gray-400 bg-gray-300 py-1.5 px-4 rounded-full m-0'>Html</p>
                    </div>
                    <div>
                        <p className='border-2 border-gray-400 bg-gray-300 py-1.5 px-4 rounded-full m-0'>Tailwindcss</p>
                    </div>
                    <div>
                        <p className='border-2 border-gray-400 bg-gray-300 py-1.5 px-4 rounded-full m-0'>Css</p>
                    </div>
                    <div>
                        <p className='border-2 border-gray-400 bg-gray-300 py-1.5 px-4 rounded-full m-0'>JavaScript</p>
                    </div>
                    <div>
                        <p className='border-2 border-gray-400 bg-gray-300 py-1.5 px-4 rounded-full m-0'>Node</p>
                    </div>
                    <div>
                        <p className='border-2 border-gray-400 bg-gray-300 py-1.5 px-4 rounded-full m-0'>React</p>
                    </div>
                    <div>
                        <p className='border-2 border-gray-400 bg-gray-300 py-1.5 px-4 rounded-full m-0'>Angular</p>
                    </div>
                    <div>
                        <p className='border-2 border-gray-400 bg-gray-300 py-1.5 px-4 rounded-full m-0'>MongoDB</p>
                    </div>
                    <div>
                        <p className='border-2 border-gray-400 bg-gray-300 py-1.5 px-4 rounded-full m-0'>Express</p>
                    </div>
                    
                </div>
                <p className='text-red-400 text-[7px] text-start p-2 pt-0'>Note: Some languages not fully know</p>


            </div>
       </div>
       
    </div>
    </div>


  )
}

export default Experiance
