import React from 'react'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'



function App() {


  return (
  
     <div className='container mx-auto max-w-7xl'>
          <Navbar/>
          <Hero />
          <About />
          <Projects />
          <section className="min-h-screen  overflow-y-scroll no-scrollbar"/>
          <section className="min-h-screen  overflow-x-scroll no-scrollbar"/>
          <section className="min-h-screen  overflow-x-scroll no-scrollbar"/>
         


     
     </div>
    
  )
}

export default App
