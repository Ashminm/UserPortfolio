import React from 'react'
import Header from '../components/Header'
import About from '../components/About'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Service from '../components/Service'
import Work from '../components/Work'
import {useNavigate } from 'react-router-dom'

function Home() {

    const dashboard=()=>{
        if(sessionStorage.getItem("CurrentUser")){
            navigate('/dashboard')
        }else{
            alert('Your not login. Please try to login after access your Dashboiard!!')
        }
    }
    const logout=()=>{
        if(sessionStorage.getItem("CurrentUser")){
            sessionStorage.removeItem("CurrentUser")
            sessionStorage.removeItem("token")
            sessionStorage.removeItem("role")
            alert("Your logout")
        }else{
            alert('Your not login. Please try to login after Logout!')
        }
    }

    const navigate=useNavigate()
    
  return (
    <div>
       <div className="relative">
            <div>
            <i title='Dashboard' onClick={dashboard} className="material-icons lg:text-2xl md:text-2xl sm:text-xl xs:text-lg fixed right-5 bottom-[75px] py-2 px-3 rounded-full 
                bg-black text-white hover:bg-slate-300 hover:text-black
                duration-300 cursor-pointer shadow-lg">dashboard</i>
            </div>
            <div>
            <i title='Logout' onClick={logout} className="material-icons text-2xl fixed right-5 bottom-5 py-2 px-3 rounded-full 
                bg-black text-white hover:bg-slate-300 hover:text-black
                duration-300 cursor-pointer shadow-lg">logout</i>
            </div>
           
        </div>
        <div>
            <Header/>
        </div>
        <div>
            <About/>
        </div>
        <div>
            <Service/>
        </div>
        <div>
            <Work/>
        </div>
        <div>
            <Contact/>
        </div>
        <div>
            <Footer/>
        </div>
      
    </div>
  )
}

export default Home
