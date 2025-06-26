import { useScroll, useTransform } from 'motion/react'
import { section } from 'motion/react-client'
import React from 'react'




const ParrallaxBackground = () => {

    
const{ scrollYProgress} = useScroll();
const mountain3Y = useTransform(scrollYProgress,[0,0.5],["0%, 70%"]);
const planetsX = useTransform(scrollYProgress,[0,0.5],["0%, 20%"]);
const mountain2Y = useTransform(scrollYProgress,[0,0.5],["0%, 30%"]);
const mountain1Y = useTransform(scrollYProgress,[0,0.5],["0%, 0%"]);




  return (
    <section className='absolute inset-0 bg-black/40'>
        <div className='relative h-screen overflow-y-hidden'>
 {/* background sky*/}
 <div  className='absolute inset-0 w-full h-screen -z-50'
        style={{
            backgroundImage: "url(/assets/sky.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "bottom"

        }}/>
         {/*mountain layer 3*/}
        <motion.div className='absolute inset-0 w-full h-screen -z-40'
        style={{
            backgroundImage: "url(/assets/mountain-3.png)",
            backgroundSize: "cover",
            backgroundPosition: "bottom"

        }}/>
            {/*plannet*/}
        <motion.div className='absolute inset-0 w-full h-screen -z-30'
        style={{
            backgroundImage: "url(/assets/panets.png)",
            backgroundSize: "cover",
            backgroundPosition: "bottom"

        }}/>
       {/*mountainlayer 2*/}
        <motion.div className='absolute inset-0 w-full h-screen -z-20'
        style={{
            backgroundImage: "url(/assets/mountain-2.png)",
            backgroundSize: "cover",
            backgroundPosition: "bottom"

        }} />

           {/*mountainlayer 1*/}
            <motion.div className='absolute inset-0 w-full h-screen -z-10'
        style={{
            backgroundImage: "url(/assets/mountain-1.png)",
            backgroundSize: "cover",
            backgroundPosition: "bottom"

        }} />


        </div>

       
    </section>
  )
}

export default ParrallaxBackground