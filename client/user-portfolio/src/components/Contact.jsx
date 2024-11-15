import React from 'react'

function Contact() {
  return (
    <div className='flex justify-center items-center pb-5 py-7 pt-[120px]'>
      <div className="flex flex-col text-center px-5 py-3">
      <p className='text-xs'>Connect with me</p>
      <h1 className='text-4xl mb-4'>Get in touch</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum consequuntur, ea dolor,<br className='max-md:hidden' />  quas atque aperiam laudantium libero voluptatibus similique, cumque quam ratione velit culpa doloribus iure quaerat fuga.</p>
            <div className="w-full mt-[80px]">
                <form action="">
                   <div className='flex justify-between mb-7'>
                   <input type="text" className='py-3 px-4 border border-black w-[48%] text-sm outline-green-600 bg-transparent rounded-md' placeholder='Enter your name' name="" id="" />
                   <input type="email" className='py-3 px-4 border border-black w-[48%] text-sm outline-green-600 bg-transparent rounded-md' placeholder='Enter your email' name="" id="" />
                   </div>
                    <textarea name="" rows={10} className='py-2.5 px-4 border border-black w-full text-sm outline-green-600 bg-transparent rounded-md' placeholder='Enter your messege...' id=""></textarea>
                    <div class="g-recaptcha" data-sitekey="6LfHsn8qAAAAAGoJ3PjJVZCnVarkUHjB9lUXu3XT"></div>
                   <div className="flex justify-center mt-6">
                    <button type='submit' className='bg-zinc-800 hover:bg-zinc-700 duration-300 text-white flex items-center gap-2 px-4 py-1.5 sm:px-8 sm:py-3 text-sm rounded-full'>Submit now<i class="material-icons">arrow_right_alt</i></button>
                   </div>
                </form>
            </div>
      </div>
    </div>
  )
}

export default Contact
