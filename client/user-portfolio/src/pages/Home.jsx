import React from 'react'
import Header from '../components/Header'
import About from '../components/About'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Service from '../components/Service'


function Home() {
  return (
    <div>
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
            <Contact/>
        </div>
        <div>
            <Footer/>
        </div>
      
    </div>
  )
}

export default Home