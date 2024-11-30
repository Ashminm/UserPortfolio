import React from 'react'

function DashContent() {
  return (
    <div className='pb-5'>
      <div className="px-5 py-3 w-full">
        <div className="border w-full shadow-md rounded-md p-3">
            <h2 className='text-xl'>Profile</h2>
            <div className="grid xl:grid-cols-5 lg:grid-cols-5 md:grid-cols-5 sm:grid-cols-4 xs:grid-cols-2 gap-2">
                <p>Profile Pic</p>
                <p>Name</p>
                <p>Position</p>
                <p>About</p>
                <p>Resume</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default DashContent
