import { scale } from 'motion'
import React from 'react'
import { FlipWords } from './FlipWord'
import { motion } from 'motion/react';



const HeroText = () => {

    const words = ["secure","moden","scalable","innovative"];
const varriants = {
    hidden:{opacity: 0 , x :-50},
    visible: {opacity: 1 , x: 0}
}

  return (
    <div className='
    z-10 mt-20 text-center
    md:text-left rounded-3xl bg-clip-text'>
    {/*desktop view*/}
    <div className="flex-col hidden md:flex c-space" >
        <motion.h1 className='text-4xl font-medium'
        variants={varriants}
        initial="hidden" 
        animate="visible"
        transition={{delay: 1}}
        >Hi im   Makito</motion.h1>
        <div className="flex flex-col items-start"> 
            <motion.p className='text-5xl font-medium text-neutral-300'
             variants={varriants}
             initial="hidden" 
             animate="visible"
            transition={{delay: 1.2}}>
                A developer <br />Dedicated to crafting
            </motion.p>

            {/*get clip from acernity ui*/}
                  <motion.div 
                   variants={varriants}
                   initial="hidden" 
                   animate="visible"
                  transition={{delay: 1.5}}> 
                  <FlipWords words={words}
                  className="font-black text-white text-8xl"/>  
                  </motion.div>
                

                <motion.p
                className="text-4xl font-medium text-neutral-300"
                variants={varriants}
                initial="hidden" 
                animate="visible"
               transition={{delay: 1.8}}>Web solutions</motion.p>
        </div>
    </div >

{/*moible view*/}
<div className="flex flex-col space-y-6 md:hidden">
<motion.p className='text-4xl font-medium'
 variants={varriants}
 initial="hidden" 
 animate="visible"
transition={{delay: 1}}>
    Hi,im Makito
</motion.p>
    <div>
        <motion.p className='text-5xl font-black text-neutral-300'
         variants={varriants}
         initial="hidden" 
         animate="visible"
        transition={{delay: 1.2}}>building</motion.p>
        <motion.div 
         variants={varriants}
         initial="hidden" 
         animate="visible"
        transition={{delay: 1.5}}>
            <FlipWords  words={words}
            className="font-black text-7xl" />

        </motion.div>
        <motion.p className='text-4xl text-neutral-300 font-black'
         variants={varriants}
         initial="hidden" 
         animate="visible"
        transition={{delay: 1.8}}>Web Applications</motion.p>
    </div>

</div>

   

    </div>
  )
}

export default HeroText