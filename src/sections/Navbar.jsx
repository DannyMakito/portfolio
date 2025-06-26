import React from 'react'
import  { useState } from 'react'
import { motion } from 'motion/react'


function Navigation(){
    return(
    <ul className="nav-ul">
        <li className="nav-li">
            <a href="#home" className="nav-link">home </a> 
        </li>

        <li className="nav-li">
            <a href="#about" className="nav-link">about</a> 
        </li>

        <li className="nav-li">
            <a href="#work" className="nav-link">work </a> 
        </li>

        <li className="nav-li">
            <a href="#contact" className="nav-link">contact</a> 
        </li>
    </ul>
    )
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);



  return (
    //fixed inset-x-0 z-20 w-full makes nav always hover above everything
    <div className='fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/40'>
        {/*make item epear in the midle*/}
        <div className="flex items-center justify-between py-2 sm:py-0">
            <a className='text-xl font-bold transition-colors text-neutral-400 hover:text-white'>
                Makito
            </a>
            <button 
            onClick={() => setIsOpen(!isOpen)}
            className=' flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden'>
                <img src={isOpen ? "/assets/close.svg": "/assets/menu.svg"} alt="toggle" className='w-6 h-6' />
            </button>

            <nav className="hidden  sm:flex">
                <Navigation />
            </nav>
        </div>

        {/*menu for moble that will only show if toggle*/} 
        {isOpen &&( <motion.div
         className="block overflow-hidden text-center sm:hidden"
         initial={{ opacity: 0,x:-10 }} 
         animate={{ opacity: 1 ,x:0}}
         style={{maxHeight:"100vh"}}
         transition={{duration: 1}}>
    
            <nav className="pb-5">
                <Navigation />
            </nav>
        </motion.div>)}
    </div>
  );
}

export default Navbar