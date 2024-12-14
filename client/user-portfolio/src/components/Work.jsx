import React from 'react'
import { Link } from 'react-router-dom'

function Work() {
  return (
    <div className='flex justify-center items-center pb-5 py-[140px]'>
      <div className="flex flex-col text-center px-5 py-3">
        <p className='text-xs'>Brows my recent</p>
        <h1 className='text-4xl mb-5'>My latest work</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum consequuntur, ea dolor,<br className='max-md:hidden' />  quas atque aperiam laudantium libero voluptatibus similique, cumque quam ratione velit culpa doloribus iure quaerat fuga.</p>

        <div className="flex justify-center mt-8">
        <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-4">
            <div className=' w-64 h-48 rounded-md text-start p-4 pt-5 flex items-end justify-center ' style={{
                backgroundImage: "url('https://media.istockphoto.com/id/537331500/photo/programming-code-abstract-technology-background-of-software-deve.jpg?s=612x612&w=0&k=20&c=jlYes8ZfnCmD0lLn-vKvzQoKXrWaEcVypHnB5MuO-g8=')",
                backgroundSize: "cover",
            }}>
                <div className="bg-slate-50 hover:bg-slate-200 duration-300 w-56 h-28 rounded-md p-3 px-5 flex  flex-col justify-between">
                    <p className='font-semibold m-0'>Frontend</p>
                    <div className="flex justify-between">
                        <p className='m-0' >project</p>
                        <a href="#" target='_blank' className='border-2  no-underline text-black border-black shadow-md hover:bg-black duration-300 rounded-full w-9 h-9 flex justify-center items-center '><i className='material-icons hover:text-white duration-300'>near_me</i></a>
                    </div>
                    <p className='m-0'>Web Design</p>
                </div>
            </div>
            <div className=' w-64 h-48 rounded-md text-start p-4 pt-5 flex items-end justify-center' style={{
                backgroundImage: "url('https://images.inc.com/uploaded_files/image/1920x1080/code-pano_22148.jpg')",
                backgroundSize: "cover"
            }}>
                <div className="bg-slate-50 hover:bg-slate-200 duration-300 w-56 h-28 rounded-md p-3 px-5 flex  flex-col justify-between">
                    <p className='font-semibold m-0'>Frontend</p>
                    <div className="flex justify-between">
                        <p className='m-0' >project</p>
                        <a href="#" target='_blank' className='border-2 no-underline text-black  border-black shadow-md hover:bg-black duration-300 rounded-full w-9 h-9 flex justify-center items-center '><i className='material-icons  hover:text-white duration-300'>near_me</i></a>
                    </div>
                    <p className='m-0'>Web Design</p>
                </div>
            </div>
            <div className=' w-64 h-48 rounded-md text-start p-4 pt-5 flex items-end justify-center' style={{
                backgroundImage: "url('https://img.freepik.com/free-photo/computer-program-coding-screen_53876-138060.jpg?semt=ais_hybrid')",
                backgroundSize: "cover"
            }}>
                <div className="bg-slate-50 hover:bg-slate-200 duration-300 w-56 h-28 rounded-md p-3 px-5 flex  flex-col justify-between">
                    <p className='font-semibold m-0'>Frontend</p>
                    <div className="flex justify-between">
                        <p className='m-0' >project</p>
                        <a href="#" target='_blank' className='border-2 no-underline text-black  border-black shadow-md hover:bg-black duration-300 rounded-full w-9 h-9 flex justify-center items-center '><i className='material-icons  hover:text-white duration-300'>near_me</i></a>
                    </div>
                    <p className='m-0'>Web Design</p>
                </div>
            </div>
            <div className=' w-64 h-48 rounded-md text-start p-4 pt-5 flex items-end justify-center' style={{
                backgroundImage: "url('https://media.istockphoto.com/id/537331500/photo/programming-code-abstract-technology-background-of-software-deve.jpg?s=612x612&w=0&k=20&c=jlYes8ZfnCmD0lLn-vKvzQoKXrWaEcVypHnB5MuO-g8=')",
                backgroundSize: "cover"
            }}>
                <div className="bg-slate-50 hover:bg-slate-200 duration-300 w-56 h-28 rounded-md p-3 px-5 flex  flex-col justify-between">
                    <p className='font-semibold m-0'>Frontend</p>
                    <div className="flex justify-between">
                        <p className='m-0' >project</p>
                        <a href="#" target='_blank' className='border-2 no-underline text-black  border-black shadow-md hover:bg-black duration-300 rounded-full w-9 h-9 flex justify-center items-center '><i className='material-icons  hover:text-white duration-300'>near_me</i></a>
                    </div>
                    <p className='m-0'>Web Design</p>
                </div>
            </div>
            <div className=' w-64 h-48 rounded-md text-start p-4 pt-5 flex items-end justify-center bg-no-repeat object-cover overflow-hidden' style={{
                backgroundImage: "url('https://media.istockphoto.com/id/537331500/photo/programming-code-abstract-technology-background-of-software-deve.jpg?s=612x612&w=0&k=20&c=jlYes8ZfnCmD0lLn-vKvzQoKXrWaEcVypHnB5MuO-g8=')",
                backgroundSize: "cover"
            }}>
                <div className="bg-slate-50 hover:bg-slate-200 duration-300 w-56 h-28 rounded-md p-3 px-5 flex  flex-col justify-between">
                    <p className='font-semibold m-0'>Frontend</p>
                    <div className="flex justify-between">
                        <p className='m-0' >project</p>
                        <a href="#" target='_blank' className='border-2 no-underline text-black  border-black shadow-md hover:bg-black duration-300 rounded-full w-9 h-9 flex justify-center items-center '><i className='material-icons  hover:text-white duration-300'>near_me</i></a>
                    </div>
                    <p className='m-0'>Web Design</p>
                </div>
            </div>
        </div>
        </div>
        {/* ---------- see more ----------- */}
        <div className="flex justify-center items-center h-40">
            <button className='bg-zinc-800 hover:bg-zinc-700 duration-300 text-white flex items-center gap-2 px-4 py-1.5 sm:px-8 sm:py-3 text-sm rounded-full'>See more<i className="material-icons">arrow_right_alt</i></button>
            </div>
      </div>
    </div>
  )
}

export default Work
