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
            <button className={activeTab === 'add' ? 'border-b-2 border-black py-1 px-5 bg-green-200 shadow-md' : 'border-b-2 border-black py-1 px-5'}
            onClick={()=> handileChange('add')}
            >Add</button>
            <button className={activeTab === 'edit' ? 'border-b-2 border-black py-1 px-5 bg-green-200 shadow-md' : 'border-b-2 border-black py-1 px-5'}
            onClick={()=> handileChange('edit')}
            >Edit</button>
       
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
