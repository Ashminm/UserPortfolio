import React,{useState,useEffect} from 'react'
import {AddProfile} from '../Services/Apicall'


function DashAddition() {
    const [preview,setPriview]=useState('')
    const [allProfile,setAllProfiles]=useState({
        profileimg:'',name:'',position:'',about:'',resume:'',userID:''
    })
    useEffect(()=>{
        const CurrentUser=JSON.parse(sessionStorage.getItem('CurrentUser'))
        setAllProfiles({...allProfile,userID:CurrentUser._id})
    },[])
    useEffect(()=>{
        if(allProfile.profileimg){
            setPriview(URL.createObjectURL(allProfile.profileimg))
        }
    },[allProfile.profileimg])

    // console.log(allProfile);
    const handileProfile=async()=>{
        if(!allProfile.profileimg || !allProfile.name || !allProfile.position || !allProfile.about || !allProfile.resume || !allProfile.userID){
            alert('Plese complete detailse!')
        }else{
            const profileD=new FormData()
            profileD.append("profileimg",allProfile.profileimg);
            profileD.append("name",allProfile.name);
            profileD.append("position",allProfile.position);
            profileD.append("about",allProfile.about);
            profileD.append("resume",allProfile.resume);
            profileD.append("userID",allProfile.userID);
            console.log(profileD);
            
        }
    }




  return (
    <div className='pb-5'>
    <div className="px-5 py-3 w-full">
        <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1 gap-5">
            <div className="shadow-md w-full border rounded-md p-3 pt-5">
                <p className='text-2xl mb-2'>Profile</p>
                    <div className="bg-gray-100 rounded-md p-3 py-5 mb-6">
                        <div className="flex justify-between items-center">
                           <div className='flex flex-col xs:w-auto w-full lg:pe-10 md:pe-7 sm:pe-4 xs:pe-2 '>
                           <input type="file" name="" id="profile" className=' w-full hidden' onChange={(e)=>setAllProfiles({...allProfile,profileimg:e.target.files[0]})} />
                           <label htmlFor="profile" className='w-full mb-4 border-2 border-dashed rounded-md py-3 px-10 cursor-pointer'>Profile pic </label>

                            <input type="text" name="" id="" className='py-2 px-3 border-2 text-sm mb-4' placeholder='Enter your name' onChange={(e)=>setAllProfiles({...allProfile,name:e.target.value})} />
                            <input type="text" name="" id="" className='py-2 px-3 border-2 text-sm mb-4' placeholder='Enter who are you' onChange={(e)=>setAllProfiles({...allProfile,position:e.target.value})} />
                           </div>

                            <div className='w-40 mx-auto'>
                            <img src={preview?preview:"https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D"} className='w-32 h-32 bg-no-repeat object-cover rounded-full mx-auto overflow-hidden border-2' alt="user profile" />

                            </div>
                        </div>
                        <div className="w-full">
                        <textarea name="" id="" className='w-full py-2 px-3 border-2 text-sm mb-4' placeholder='About your self...' onChange={(e)=>setAllProfiles({...allProfile,about:e.target.value})}></textarea>
                           <div className="flex items-center justify-center gap-6">
                           <input type="file" name="" id="resume" className=' hidden w-full' onChange={(e)=>setAllProfiles({...allProfile,resume:e.target.files[0]})} />
                            <label htmlFor="resume" className='w-full border-2 border-dashed rounded-md cursor-pointer py-2 px-3 text-center'> Resume</label>
                            <button type='submit' className='py-2 px-3 border-2 border-green-400 text-sm bg-green-300 w-full' onClick={handileProfile}>ADD</button>
                           </div>

                        </div>
                    </div>
                    <p className='text-2xl mb-2'>About</p>
                    <div className="bg-gray-100 rounded-md p-3 py-4 w-full mb-5">
                    <div className="flex justify-between">
                           <div className='flex flex-col pe-6 '>
                           <input type="file" name="" id="about" className=' w-full hidden ' />
                           <label htmlFor="about" className='w-full mb-4 border-2 border-dashed rounded-md py-3 px-10 cursor-pointer'>About pic </label>
                            <div className="flex justify-between items-center">
                                <p className='text-2xl mb-2'>Education</p>
                                <p className='text-xs mb-2'>*min - 3</p>
                                </div>
                            <input type="text" name="" id="" className='py-2 px-3 border-2 text-sm mb-4' placeholder='College or institude name' />
                            <input type="text" name="" id="" className='py-2 px-3 border-2 text-sm mb-4' placeholder='Subject or study' />
                            <div className="flex justify-between w-full gap-4">
                            <input type="text" name="" id="" className='py-2 px-3 border-2 text-sm mb-4 w-full' placeholder='Year start' />
                            <input type="text" name="" id="" className='py-2 px-3 border-2 text-sm mb-4 w-full' placeholder='Year end' />
                            </div>
                            <input type="link" name="" id="" className='py-2 px-3 border-2 text-sm mb-4' placeholder='College or institute link' />
                            <button className='py-2 px-3 border-2 border-green-400 text-sm mb-4 bg-green-300'>ADD</button>

                            <div className="flex justify-between items-center mt-2">
                            <p className='text-2xl mb-2'>Languages</p>
                            <p className='text-xs mb-2'>*no limit</p>
                            </div>
                            <div className="lg:flex  md:flex sm:flex-none gap-4">
                            <input type="text" name="" id="" className='py-2 px-3 border-2 text-sm mb-4 w-full' placeholder='Language' />
                            <input type="text" name="" id="" className='py-2 px-3 border-2 text-sm mb-4 w-full' placeholder='Preference Eg: good & fair' />
                            <button className='py-2 px-3 border-2 border-green-400 text-sm mb-4 bg-green-300 '>ADD</button>
                            </div>

                           </div>

                            <div>
                            <img src="https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D" className='w-[23rem] h-[27rem] bg-no-repeat object-cover rounded-lg mx-auto overflow-hidden border-2' alt="user profile" />

                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between items-center">
                    <p className='text-2xl mb-2'>Currently doing</p>
                    <p className='text-xs mb-2'>*no limit</p>
                    </div>
                    <div className="bg-gray-100 rounded-md p-3 py-5 pb-2 mb-3">
                    <div className="flex justify-between w-full gap-4">
                            <input type="text" name="" id="" className='py-2 px-3 border-2 text-sm mb-4 w-full' placeholder='Position' />
                            <input type="text" name="" id="" className='py-2 px-3 border-2 text-sm mb-4 w-full' placeholder='Company name' />
                        </div>
                    <div className="flex justify-between w-full gap-4">
                            <input type="text" name="" id="" className='py-2 px-3 border-2 text-sm mb-4 w-full' placeholder='Year start' />
                            <input type="text" name="" id="" className='py-2 px-3 border-2 text-sm mb-4 w-full' placeholder='Year end' />
                        </div>
                        
                        <textarea name="" id="" className='w-full py-2 px-3 border-2 text-sm mb-4' placeholder='About your company...'></textarea>
                            <input type="text" name="" id="" className='py-2 px-3 border-2 text-sm mb-4 w-full' placeholder='Company location' />
                            <button className='py-2 px-3 border-2 border-green-400 text-sm mb-4 bg-green-300 w-full'>ADD</button>
                    </div>

            </div>
            <div className="shadow-md w-full border rounded-md p-3 pt-5">
            <div className="flex justify-between items-center">
                <p className='text-2xl mb-2'>Experiance</p>
                <p className='text-xs mb-2'>*no limit</p>
                </div>
                <div className="bg-gray-100 rounded-md p-3 py-5 mb-8">
                <div className="flex justify-between w-full gap-4">
                        <input type="text" name="" id="" className='py-2 px-3 border-2 text-sm mb-4 w-full' placeholder='Year start' />
                        <input type="text" name="" id="" className='py-2 px-3 border-2 text-sm mb-4 w-full' placeholder='Year end' />
                    </div>
                    <div className="flex justify-between w-full gap-4">
                        <input type="text" name="" id="" className='py-2 px-3 border-2 text-sm mb-4 w-full' placeholder='Position' />
                        <input type="text" name="" id="" className='py-2 px-3 border-2 text-sm mb-4 w-full' placeholder='Company name' />
                    </div>
                    <textarea name="" id="" className='w-full py-2 px-3 border-2 text-sm mb-4' placeholder='About your company...'></textarea>
                    <div className="flex justify-between w-full gap-4">
                        <input type="text" name="" id="" className='py-2 px-3 border-2 text-sm mb-4 w-full' placeholder='Company location' />
                        <button className='py-2 px-3 border-2 border-green-400 text-sm mb-4 bg-green-300'>ADD</button>
                    </div>
                    
                </div>
                <div className="bg-gray-100 rounded-md p-3 py-5 mb-8">
                <div className="flex justify-between items-center">
                <p className='text-2xl mb-2'>Skills</p>
                <p className='text-xs mb-2'>*no limit</p>
                </div>
                <div className="flex justify-between w-full gap-4">
                        <input type="text" name="" id="" className='py-2 px-3 border-2 text-sm mb-4 w-full' placeholder='your skill' />
                        <button className='py-2 px-3 border-2 border-green-400 text-sm mb-4 bg-green-300'>ADD</button>
                    </div>
                    
                </div>
                <div className="bg-gray-100 rounded-md p-3 py-5 mb-8">
                <div className="flex justify-between items-center">
                <p className='text-2xl mb-2'>Services</p>
                <p className='text-xs mb-2'>*min - 4</p>
                </div>
                <div className="flex justify-between w-full gap-4">
                        <input type="text" name="" id="" className='py-2 px-3 border-2 text-sm mb-4 w-full' placeholder='your service' />
                        <textarea name="" id="" className='w-full py-2 px-3 border-2 text-sm mb-4' placeholder='About service...'></textarea>
                    </div>
                    <button className='py-2 px-3 border-2 border-green-400 text-sm mb-4 bg-green-300 w-full'>ADD</button>
                    
                </div>
                <div className="bg-gray-100 rounded-md p-3 py-5 mb-8">
                <div className="flex justify-between items-center">
                <p className='text-2xl mb-2'>Tools</p>
                <p className='text-xs mb-2'>*no limit</p>
                </div>
                <div className="flex justify-between w-full gap-4">
                        <input type="text" name="" id="" className='py-2 px-3 border-2 text-sm mb-4 w-full' placeholder='your skill tooll' />
                        <button className='py-2 px-3 border-2 border-green-400 text-sm mb-4 bg-green-300'>ADD</button>
                    </div>
                    
                </div>
                <div className="flex justify-between items-center">
                <p className='text-2xl mb-2'>Recent work</p>
                <p className='text-xs mb-2'>*no limit</p>
                </div>
                    <div className="bg-gray-100 rounded-md p-3 py-5 mb-5">
                        <div className="w-full mb-5 ">
                            <input type="file" name="" id="project" className=' w-full hidden ' />
                            <label htmlFor="project" className='w-full mb-4 border-2 border-dashed rounded-md py-3 px-16 cursor-pointer'> Project front screenshot </label>
                        </div>
                    <div className="flex justify-between w-full gap-4">
                            <input type="text" name="" id="" className='py-2 px-3 border-2 text-sm mb-4 w-full' placeholder='Project name' />
                            <input type="text" name="" id="" className='py-2 px-3 border-2 text-sm mb-4 w-full' placeholder='Work type' />
                        </div>
                    <div className="flex justify-between w-full gap-4">
                            <input type="text" name="" id="" className='py-2 px-3 border-2 text-sm mb-4 w-full' placeholder='Project type' />
                            <input type="text" name="" id="" className='py-2 px-3 border-2 text-sm mb-4 w-full' placeholder='project link' />
                        </div>
                            <button className='py-2 px-3 border-2 border-green-400 text-sm mb-4 bg-green-300 w-full'>ADD</button>
                    </div>
                    <div className="bg-gray-100 rounded-md p-3 py-5 ">
                    <h4 className='text-2xl'>Submit </h4>
                    <button type='submit' className='py-2 px-3 border-2 border-blue-400 text-sm mb-1 bg-blue-300 w-full uppercase rounded-md'>Submit your all details</button>    
                </div>
                
            </div>
        </div>
    </div>
</div>
  )
}

export default DashAddition
