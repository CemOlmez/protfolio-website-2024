import React from 'react'
import Navbar from './components/navbar'
import Home from './pages/home'
import About from './pages/about'
import SectionDivider from './components/section-divider'
import Project from './pages/projects'
import Skills from './pages/skills'
import Contact from './pages/contact'
import Footer from './components/footer'


function App() {


  return (
 
    <div className="pt-28 sm:pt-36 container mx-auto px-26">
      <Navbar />
      <Home />
      <SectionDivider />
      <About />
      <Skills/>
      <Project/>
      <Contact/>
      <Footer/>
     
    </div>
   
      
  )
}

export default App
