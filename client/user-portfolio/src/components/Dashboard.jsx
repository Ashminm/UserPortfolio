import React, { useState } from 'react'
import DashAddition from './DashAddition'
import DashContent from './DashContent'

function Dashboard() {
    const [activeTab,setActiveTab]=useState('add')

    const handileChange=(tab)=>{
        setActiveTab(tab)
    }


  return (
    <div className='pb-5 py-[90px]'>
        <div className="px-5 py-3 w-full">
        <div className="flex justify-between items-center mt-2">
            <p className='text-4xl mb-4 font-semibold'>Dashboard</p>
            <p className='text-lg mb-2'>Hi, <span>Ashmin</span></p>
        </div>
        <div className="flex gap-5 items-center mt-1 px-5">
            <button className={activeTab === 'add' ? 'border border-black py-0.5 px-3 bg-green-200 shadow-md' : 'border border-black py-0.5 px-3'}
            onClick={()=> handileChange('add')}
            >Add (7)</button>
            <button className={activeTab === 'edit' ? 'border border-black py-0.5 px-3 bg-green-200 shadow-md' : 'border border-black py-0.5 px-3'}
            onClick={()=> handileChange('edit')}
            >Edit (7)</button>
       
        </div>
            {activeTab === 'add' && (
                <div>
                <DashAddition/>
            </div>
            )}
             {activeTab === 'edit' && (
               <div>
               <DashContent/>
            </div>
            )}
            
            
        </div>
    </div>
  )
}

export default Dashboard
