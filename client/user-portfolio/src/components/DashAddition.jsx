import React,{useState,useEffect} from 'react'
import {AddAbout, AddCurrent, AddExperiance, AddLang, AddProfile, AddService, AddSkill, AddTool, AddWork} from '../Services/Apicall'
import DatePicker from 'react-datepicker'


function DashAddition() {
    const [preview,setPriview]=useState('')
    const [aboutpreview,setAboutPriview]=useState('')
    const [workpreview,setWorkPriview]=useState('')
    const [token,setToken]=useState('')
    const [allProfile,setAllProfiles]=useState({
        profileimg:'',name:'',position:'',about:'',resume:'',userID:''
    })
    const [allabout,setAllAbout]=useState({
        aboutimg:'',collagename:'',course:'',startyear:null,endyear:null,weblink:'',userID:''
    })
    const [allLang,setAllLang]=useState({
        language:'',preference:'',userID:''
    })
    const [allSkill,setAllSkill]=useState({
        skill:'',userID:''
    })
    const [allTool,setAllTool]=useState({
        tool:'',userID:''
    })
    const [allService,setAllService]=useState({
        service:'',about:'',userID:''
    })
    const [allWork,setAllWork]=useState({
        projectimg:'',project_name:'',work_type:'',project_type:'',projectlink:'',userID:''
    })
    const [allCurrent,setAllCurrent]=useState({
        position:'',name:'',startyear:null,endyear:null,about:'',location:'',userID:''
    })
    const [allExper,setAllExper]=useState({
       startyear:null,endyear:null,position:'',name:'',about:'',location:'',userID:''
    })
    


    useEffect(()=>{
        const CurrentUser=JSON.parse(sessionStorage.getItem('CurrentUser'))
        setAllProfiles({...allProfile,userID:CurrentUser?._id})
        setAllAbout({...allabout,userID:CurrentUser?._id})
        setAllLang({...allLang,userID:CurrentUser?._id})
        setAllSkill({...allSkill,userID:CurrentUser?._id})
        setAllTool({...allTool,userID:CurrentUser?._id})
        setAllService({...allService,userID:CurrentUser?._id})
        setAllWork({...allWork,userID:CurrentUser?._id})
        setAllCurrent({...allCurrent,userID:CurrentUser?._id})
        setAllExper({...allExper,userID:CurrentUser?._id})
        if(sessionStorage.getItem('token')){
            setToken(sessionStorage.getItem('token'))
        }
    },[])
    useEffect(()=>{
        if(allProfile.profileimg){
            setPriview(URL.createObjectURL(allProfile.profileimg))
        }
        if(allabout.aboutimg){
            setAboutPriview(URL.createObjectURL(allabout.aboutimg))
        }
        if(allWork.projectimg){
            setWorkPriview(URL.createObjectURL(allWork.projectimg))
        }
    },[allProfile.profileimg,allabout.aboutimg,allWork.projectimg])

    // console.log(allProfile);
    const handileProfile=async()=>{
        if(!allProfile.profileimg || !allProfile.name || !allProfile.position || !allProfile.about || !allProfile.resume || !allProfile.userID){
            alert('Plese complete all details!!')
        }else{
            const profileD=new FormData()
            profileD.append("profileimg",allProfile.profileimg);
            profileD.append("name",allProfile.name);
            profileD.append("position",allProfile.position);
            profileD.append("about",allProfile.about);
            profileD.append("resume",allProfile.resume);
            profileD.append("userID",allProfile.userID);
            const reqHeader={
                "Content-Type":"multipart/form-data","Authorization":`Bearer ${token}`
            }
            const result=await AddProfile(profileD,reqHeader)
            console.log(result);
            
            if(result.status===200){
                alert("Addedd success: "+result.data.name)
                setPriview('')
                setAllProfiles({profileimg:'',name:'',position:'',about:'',resume:'',userID:allProfile.userID})
            }else{
                alert("Added faild: "+result.response.data)
            }
            
        }
    }

    const handileAbout=async()=>{
        if(!allabout.aboutimg || !allabout.collagename || !allabout.course || !allabout.startyear || !allabout.endyear || !allabout.weblink || !allabout.userID){
            alert('Plese complete all details!!')
        }else{
            const aboutD=new FormData()
            aboutD.append("aboutimg",allabout.aboutimg);
            aboutD.append("collagename",allabout.collagename);
            aboutD.append("course",allabout.course);
            aboutD.append("startyear",allabout.startyear);
            aboutD.append("endyear",allabout.endyear);
            aboutD.append("weblink",allabout.weblink);
            aboutD.append("userID",allabout.userID);
            const reqHeader={
                "Content-Type":"multipart/form-data","Authorization":`Bearer ${token}`
            }
            const result=await AddAbout(aboutD,reqHeader)
            console.log(result);
            if(result.status===200){
                alert("Addedd success")
                setAboutPriview('')
                setAllAbout({aboutimg:'',collagename:'',course:'',startyear:'',endyear:'',weblink:'',userID:allabout.userID})
            }else{
                alert("Added faild: "+result.response.data)
            }
        }
    }

    const handileLang=async()=>{
        if(!allLang.language || !allLang.preference || !allLang.userID){
            alert('Plese complete all details!!')

        }else{
            const LanguageD=new FormData()
            LanguageD.append("language",allLang.language);
            LanguageD.append("preference",allLang.preference);
            LanguageD.append("userID",allLang.userID);
            
            const reqHeader={
                "Content-Type":"application/json","Authorization":`Bearer ${token}`
            }
            const result=await AddLang(LanguageD,reqHeader)
            console.log(result);
            if(result.status===200){
                alert("Addedd success")
                setAllLang({language:'',preference:'',userID:allabout.userID})
            }else{
                alert("Added faild: "+result.response.data)
            }
        }
    }

    const handileSkill=async()=>{
        if(!allSkill.skill || !allSkill.userID){
            alert('Plese complete all details!!')

        }else{
            const SkillD=new FormData()
            SkillD.append("skill",allSkill.skill);
            SkillD.append("userID",allSkill.userID);
            
            const reqHeader={
                "Content-Type":"application/json","Authorization":`Bearer ${token}`
            }
            const result=await AddSkill(SkillD,reqHeader)
            console.log(result);
            if(result.status===200){
                alert("Addedd success")
                setAllSkill({skill:'',userID:allabout.userID})
            }else{
                alert("Added faild: "+result.response.data)
            }
        }
    }

    const handileTool=async()=>{
        if(!allTool.tool || !allTool.userID){
            alert('Plese complete all details!!')

        }else{
            const ToolD=new FormData()
            ToolD.append("tool",allTool.tool);
            ToolD.append("userID",allTool.userID);
            
            const reqHeader={
                "Content-Type":"application/json","Authorization":`Bearer ${token}`
            }
            const result=await AddTool(ToolD,reqHeader)
            console.log(result);
            if(result.status===200){
                alert("Addedd success")
                setAllTool({tool:'',userID:allabout.userID})
            }else{
                alert("Added faild: "+result.response.data)
            }
        }
    }

    const handileService=async()=>{
        if(!allService.service || !allService.about || !allService.userID){
            alert('Plese complete all details!!')

        }else{
            const ServiceD=new FormData()
            ServiceD.append("service",allService.service);
            ServiceD.append("about",allService.about);
            ServiceD.append("userID",allService.userID);
            
            const reqHeader={
                "Content-Type":"application/json","Authorization":`Bearer ${token}`
            }
            
            const result=await AddService(ServiceD,reqHeader)
            console.log(result);
            if(result.status===200){
                alert("Addedd success")
                setAllService({service:'',userID:allService.userID})
            }else{
                alert("Added faild: "+result.response.data)
            }
        }
    }

    const handileWork=async()=>{
        if(!allWork.projectimg || !allWork.project_name || !allWork.work_type || !allWork.project_type || !allWork.projectlink || !allWork.userID){
            alert('Plese complete all details!!')
        }else{
            const WorkD=new FormData()
            WorkD.append("projectimg",allWork.projectimg);
            WorkD.append("project_name",allWork.project_name);
            WorkD.append("work_type",allWork.work_type);
            WorkD.append("project_type",allWork.project_type );
            WorkD.append("projectlink",allWork.projectlink);
            WorkD.append("userID",allWork.userID);
            const reqHeader={
                "Content-Type":"multipart/form-data","Authorization":`Bearer ${token}`
            }
            const result=await AddWork(WorkD,reqHeader)
            console.log(result);
            
            if(result.status===200){
                alert("Addedd success: "+result.data.project_name)
                setAllWork({projectimg:'',project_name:'',work_type:'',project_type:'',projectlink:'',userID:allWork.userID})
            }else{
                alert("Added faild: "+result.response.data)
                console.log(result);
                
            }
            
        }
    }

    const handileCurrent=async()=>{
        if(!allCurrent.position || !allCurrent.name || !allCurrent.startyear || !allCurrent.endyear || !allCurrent.about || !allCurrent.location || !allCurrent.userID){
            alert('Plese complete all details!!')

        }else{
            const CurrentD=new FormData()
            CurrentD.append("position",allCurrent.position);
            CurrentD.append("name",allCurrent.name);
            CurrentD.append("startyear",allCurrent.startyear);
            CurrentD.append("endyear",allCurrent.endyear);
            CurrentD.append("about",allCurrent.about);
            CurrentD.append("location",allCurrent.location);
            CurrentD.append("userID",allCurrent.userID);
            
            const reqHeader={
                "Content-Type":"application/json","Authorization":`Bearer ${token}`
            }
            
            const result=await AddCurrent(CurrentD,reqHeader)
            console.log(result);
            if(result.status===200){
                alert("Addedd success")
                setAllCurrent({position:'',name:'',startyear:'',endyear:'',about:'',location:'',userID:allCurrent.userID})
            }else{
                alert("Added faild: "+result.response.data)
            }
        }
    }

    const handileExperiance=async()=>{
        if(!allExper.startyear || !allExper.endyear || !allExper.position || !allExper.name ||  !allExper.about || !allExper.location || !allExper.userID){
            alert('Plese complete all details!!')

        }else{
            const ExperianceD=new FormData()
            ExperianceD.append("startyear",allExper.startyear);
            ExperianceD.append("endyear",allExper.endyear);
            ExperianceD.append("position",allExper.position);
            ExperianceD.append("name",allExper.name);
            ExperianceD.append("about",allExper.about);
            ExperianceD.append("location",allExper.location);
            ExperianceD.append("userID",allExper.userID);
            
            const reqHeader={
                "Content-Type":"application/json","Authorization":`Bearer ${token}`
            }
            
            const result=await AddExperiance(ExperianceD,reqHeader)
            console.log(result);
            if(result.status===200){
                alert("Addedd success")
                setAllExper({startyear:'',endyear:'',position:'',name:'',about:'',location:'',userID:allExper.userID})
            }else{
                alert("Added faild: "+result.response.data)
            }
        }
    }






  return (
    <div className='pb-5'>
    <div className="px-5 py-3 w-full">
        <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1 gap-5">
            <div className="shadow-md w-full border rounded-md p-3 pt-4">
                <div className="flex justify-between">
                <p className='text-2xl mb-2'>Profile</p>
                <span >NA</span>
                </div>
                    <div className="bg-gray-100 rounded-md p-3 py-5 mb-6">
                        <div className="flex justify-between items-center">
                           <div className='flex flex-col xs:w-auto w-full lg:pe-10 md:pe-7 sm:pe-4 xs:pe-2 '>
                           <input type="file" name="" id="profile" className=' w-full hidden' onChange={(e)=>setAllProfiles({...allProfile,profileimg:e.target.files[0]})} />
                           <label htmlFor="profile" className='w-full mb-4 border-2 border-dashed rounded-md py-3 px-10 cursor-pointer'>Profile pic</label>

                            <input type="text" className='py-2 px-3 border-2 text-sm mb-4' placeholder='Enter your name' onChange={(e)=>setAllProfiles({...allProfile,name:e.target.value})} />
                            <input type="text" className='py-2 px-3 border-2 text-sm mb-4' placeholder='Enter who are you' onChange={(e)=>setAllProfiles({...allProfile,position:e.target.value})} />
                           </div>

                            <div className='w-40 mx-auto'>
                            <img src={preview?preview:"https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"} className='w-32 h-32 bg-no-repeat object-cover rounded-full mx-auto overflow-hidden border-2' alt="user profile" />

                            </div>
                        </div>
                        <div className="w-full">
                        <textarea name="" id="" className='w-full py-2 px-3 border-2 text-sm mb-4' placeholder='About your self...' onChange={(e)=>setAllProfiles({...allProfile,about:e.target.value})}></textarea>
                           <div className="flex items-center justify-center gap-6">
                           <input type="file" name="" id="resume" className=' hidden w-full' onChange={(e)=>setAllProfiles({...allProfile,resume:e.target.files[0]})} />
                            <label htmlFor="resume" className='w-full border-2 border-dashed rounded-md cursor-pointer py-2 px-3 text-center'> Resume</label>
                            <button type='submit' className='py-2 px-3 border-2 border-green-400 text-sm bg-green-300 hover:bg-green-200 w-full' onClick={handileProfile}>ADD</button>
                           </div>

                        </div>
                    </div>
                    <p className='text-2xl mb-2'>About</p>
                    <div className="bg-gray-100 rounded-md p-3 py-4 w-full mb-4">
                    <div className="flex justify-between">
                           <div className='flex flex-col pe-6 '>
                           <input type="file" name="" id="about" className=' w-full hidden ' onChange={(e)=>setAllAbout({...allabout,aboutimg:e.target.files[0]})} />
                           <label htmlFor="about" className='w-full mb-4 border-2 border-dashed rounded-md py-3 px-10 cursor-pointer'>About pic </label>
                            <div className="flex justify-between items-center">
                                <p className='text-2xl mb-2'>Education</p>
                                <p className='text-xs mb-2'>*min - 3</p>
                                </div>
                            <input type="text" name="" id="" className='py-2 px-3 border-2 text-sm mb-4' placeholder='College or institude name' onChange={(e)=>setAllAbout({...allabout,collagename:e.target.value})}  />
                            <input type="text" name="" id="" className='py-2 px-3 border-2 text-sm mb-4' placeholder='Subject or study' onChange={(e)=>setAllAbout({...allabout,course:e.target.value})}  />
                            <div className="flex justify-between w-full gap-4">
                            <DatePicker
                                className="py-2 px-3 border-2 text-sm mb-4 w-full"
                                selected={allabout.startyear}
                                onChange={(date) =>
                                setAllAbout({ ...allabout, startyear: date })
                                }
                                placeholderText="Start year"
                                dateFormat="yyyy"
                                showYearPicker
                            />
                            <DatePicker
                                className="py-2 px-3 border-2 text-sm mb-4 w-full"
                                selected={allabout.endyear}
                                onChange={(date) =>
                                setAllAbout({ ...allabout, endyear: date })
                                }
                                placeholderText="End year"
                                dateFormat="yyyy"
                                showYearPicker
                            />
                            </div>
                            <input type="link" name="" id="" className='py-2 px-3 border-2 text-sm mb-4' placeholder='College or institute link' onChange={(e)=>setAllAbout({...allabout,weblink:e.target.value})}  />
                            <button className='py-2 px-3 border-2 border-green-400 text-sm mb-4 bg-green-300 hover:bg-green-200' onClick={handileAbout}>ADD</button>
                           </div>

                            <div>
                            <img src={aboutpreview?aboutpreview: "https://static.thenounproject.com/png/10314-200.png"}
                             className='w-[23rem] h-[27rem] bg-no-repeat object-cover rounded-lg mx-auto overflow-hidden border-2' alt="user profile" />

                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between items-center">
                                <p className='text-2xl mb-2'>Languages</p>
                                <p className='text-xs mb-2'>*no limit</p>
                            </div>
                            <div className="lg:flex  md:flex sm:flex-none gap-4 bg-gray-100 p-3 py-4 pb-2 rounded-md">
                                <input type="text" name="" id="" className='py-2 px-3 border-2 text-sm mb-4  w-full' placeholder='Language' onChange={(e)=>setAllLang({...allLang,language:e.target.value})}  />
                                <input type="text" name="" id="" className='py-2 px-3 border-2 text-sm mb-4  w-full' placeholder='Preference Eg: good & fair' onChange={(e)=>setAllLang({...allLang,preference:e.target.value})}  />
                                <button className='py-2 px-3 border-2 border-green-400 lg:w-auto md:w-auto sm:w-full xs:w-full text-sm bg-green-300 mb-4 hover:bg-green-200' onClick={handileLang}>ADD</button>
                    </div>
                    <div className="flex justify-between items-center mt-5">
                    <p className='text-2xl mb-2'>Currently doing</p>
                    <p className='text-xs mb-2'>*no limit</p>
                    </div>
                    <div className="bg-gray-100 rounded-md p-3 py-5 pb-2 mb-3">
                    <div className="flex justify-between w-full gap-4">
                            <input type="text" name="" id="" className='py-2 px-3 border-2 text-sm mb-4 w-full' placeholder='Position' onChange={(e)=>setAllCurrent({...allCurrent,position:e.target.value})}/>
                            <input type="text" name="" id="" className='py-2 px-3 border-2 text-sm mb-4 w-full' placeholder='Company name' onChange={(e)=>setAllCurrent({...allCurrent,name:e.target.value})}/>
                        </div>
                    <div className="flex w-full gap-4">
                    <DatePicker
                                className="py-2 px-3 border-2 text-sm mb-4 w-full" 
                                selected={allCurrent.startyear}
                                onChange={(date) =>
                                setAllCurrent({ ...allCurrent, startyear: date })
                                }
                                placeholderText="Start year"
                                dateFormat="yyyy"
                                showYearPicker
                            />
                            <DatePicker
                                className="py-2 px-3 border-2 text-sm mb-4 w-full"
                                selected={allCurrent.endyear}
                                onChange={(date) =>
                                setAllCurrent({ ...allCurrent, endyear: date })
                                }
                                placeholderText="End year"
                                dateFormat="yyyy"
                                showYearPicker
                            />
                        </div>
                        
                        <textarea name="" id="" className='w-full py-2 px-3 border-2 text-sm mb-4' placeholder='About your company...'onChange={(e)=>setAllCurrent({...allCurrent,about:e.target.value})}></textarea>
                            <input type="text" name="" id="" className='py-2 px-3 border-2 text-sm mb-4 w-full' placeholder='Company location' onChange={(e)=>setAllCurrent({...allCurrent,location:e.target.value})}/>
                            <button className='py-2 px-3 border-2 border-green-400 text-sm mb-4 bg-green-300 hover:bg-green-200 w-full' onClick={handileCurrent}>ADD</button>
                    </div>

            </div>
            <div className="shadow-md w-full border rounded-md p-3 pt-4">
            <div className="flex justify-between items-center">
                <p className='text-2xl mb-2'>Experiance</p>
                <p className='text-xs mb-2'>*no limit</p>
                </div>
                <div className="bg-gray-100 rounded-md p-3 py-4 mb-8">
                <div className="flex justify-between w-full gap-4">
                <DatePicker
                                className="py-2 px-3 border-2 text-sm mb-4 w-full" 
                                selected={allExper.startyear}
                                onChange={(date) =>
                                setAllExper({ ...allExper, startyear: date })
                                }
                                placeholderText="Start year"
                                dateFormat="yyyy"
                                showYearPicker
                            />
                            <DatePicker
                                className="py-2 px-3 border-2 text-sm mb-4 w-full"
                                selected={allExper.endyear}
                                onChange={(date) =>
                                setAllExper({ ...allExper, endyear: date })
                                }
                                placeholderText="End year"
                                dateFormat="yyyy"
                                showYearPicker
                            />
                    </div>
                    <div className="flex justify-between w-full gap-4">
                        <input type="text" name="" id="" className='py-2 px-3 border-2 text-sm mb-4 w-full' placeholder='Position' onChange={(e)=>setAllExper({...allExper,position:e.target.value})}/>
                        <input type="text" name="" id="" className='py-2 px-3 border-2 text-sm mb-4 w-full' placeholder='Company name' onChange={(e)=>setAllExper({...allExper,name:e.target.value})}/>
                    </div>
                    <textarea name="" id="" className='w-full py-2 px-3 border-2 text-sm mb-4' placeholder='About your company...' onChange={(e)=>setAllExper({...allExper,about:e.target.value})}></textarea>
                    <div className="flex justify-between w-full gap-4">
                        <input type="text" name="" id="" className='py-2 px-3 border-2 text-sm mb-4 w-full' placeholder='Company location' onChange={(e)=>setAllExper({...allExper,location:e.target.value})} />
                        <button className='py-2 px-3 border-2 border-green-400 text-sm mb-4 bg-green-300 hover:bg-green-200' onClick={handileExperiance}>ADD</button>
                    </div>
                    
                </div>
                <div className="bg-gray-100 rounded-md p-3 py-4 mb-8">
                <div className="flex justify-between items-center">
                <p className='text-2xl mb-2'>Skills</p>
                <p className='text-xs mb-2'>*no limit</p>
                </div>
                <div className="flex justify-between w-full gap-4">
                        <input type="text" name="" id="" className='py-2 px-3 border-2 text-sm mb-4 w-full' placeholder='your skill' onChange={(e)=>setAllSkill({...allSkill,skill:e.target.value})}  />
                        <button className='py-2 px-3 border-2 border-green-400 text-sm mb-4 bg-green-300 hover:bg-green-200'onClick={handileSkill}>ADD</button>
                    </div>
                    
                </div>
                <div className="bg-gray-100 rounded-md p-3 py-4 mb-8">
                <div className="flex justify-between items-center">
                <p className='text-2xl mb-2'>Services</p>
                <p className='text-xs mb-2'>*min - 4</p>
                </div>
                <div className="flex justify-between w-full gap-4">
                        <input type="text" name="" id="" className='py-2 px-3 border-2 text-sm mb-4 w-full' placeholder='your service' onChange={(e)=>setAllService({...allService,service:e.target.value})} />
                        <textarea name="" id="" className='w-full py-2 px-3 border-2 text-sm mb-4' placeholder='About service...' onChange={(e)=>setAllService({...allService,about:e.target.value})}></textarea>
                    </div>
                    <button className='py-2 px-3 border-2 border-green-400 text-sm mb-4 bg-green-300 hover:bg-green-200 w-full' onClick={handileService}>ADD</button>
                    
                </div>
                <div className="bg-gray-100 rounded-md p-3 py-4 mb-8">
                <div className="flex justify-between items-center">
                <p className='text-2xl mb-2'>Tools</p>
                <p className='text-xs mb-2'>*no limit</p>
                </div>
                <div className="flex justify-between w-full gap-4">
                        <input type="text" name="" id="" className='py-2 px-3 border-2 text-sm mb-4 w-full' placeholder='your skill tooll' onChange={(e)=>setAllTool({...allTool,tool:e.target.value})}/>
                        <button className='py-2 px-3 border-2 border-green-400 text-sm mb-4 bg-green-300 hover:bg-green-200'onClick={handileTool} >ADD</button>
                    </div>
                    
                </div>
                <div className="flex justify-between items-center">
                <p className='text-2xl mb-2'>Recent work</p>
                <p className='text-xs mb-2'>*no limit</p>
                </div>
                    <div className="bg-gray-100 rounded-md p-3 py-3">
                        <div className="w-full ">
                            <input type="file" name="" id="project" className=' w-full hidden ' onChange={(e)=>setAllWork({...allWork,projectimg:e.target.files[0]})} />
                            <label htmlFor="project" className='w-full mb-3 border-2 border-dashed rounded-md py-2 px-16 cursor-pointer'> Project front screenshot </label>
                        </div>
                        <div className="mb-3 w-full">
                        <img src={workpreview?workpreview: "https://www.pngitem.com/pimgs/m/3-39925_men-at-work-icon-png-free-download-searchpng.png"} className='w-full h-[20rem] bg-no-repeat object-cover rounded-lg mx-auto overflow-hidden border-2' alt="" />
                        </div>
                    <div className="flex justify-between w-full gap-4">
                            <input type="text" name="" id="" className='py-2 px-3 border-2 text-sm mb-4 w-full' placeholder='Project name' onChange={(e)=>setAllWork({...allWork,project_name:e.target.value})}/>
                            <input type="text" name="" id="" className='py-2 px-3 border-2 text-sm mb-4 w-full' placeholder='Work type'onChange={(e)=>setAllWork({...allWork,work_type:e.target.value})} />
                        </div>
                    <div className="flex justify-between w-full gap-4">
                            <input type="text" name="" id="" className='py-2 px-3 border-2 text-sm mb-4 w-full' placeholder='Project type' onChange={(e)=>setAllWork({...allWork,project_type:e.target.value})}/>
                            <input type="text" name="" id="" className='py-2 px-3 border-2 text-sm mb-4 w-full' placeholder='project link' onChange={(e)=>setAllWork({...allWork,projectlink:e.target.value})}/>
                        </div>
                            <button className='py-2 px-3 border-2 border-green-400 text-sm mb-3 bg-green-300 hover:bg-green-200 w-full' onClick={handileWork}>ADD</button>
                    </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default DashAddition
