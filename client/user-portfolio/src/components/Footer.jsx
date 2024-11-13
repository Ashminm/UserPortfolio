import React from 'react'

function Footer() {
  return (
    <div className='py-5 px-4'>
        <hr className='mb-5 w-4/6 mx-auto bg-black h-0.5' />
      <div className="flex justify-around">
        <div>
            <p>2024 Ashmin. All right reserved.</p>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-3 xs:grid-cols-1">
            <a href="">GitHub</a>
            <a href="">LinkedIn</a>
            <a href="">Instagram</a>
        </div>
      </div>
    </div>
  )
}

export default Footer
