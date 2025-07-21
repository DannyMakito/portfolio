import React from 'react'
import { AnimatePresence, motion } from "framer-motion";


const Alert = ({type,text}) => {

const alertVerients = {
    hidden: {opacity:0 ,y:50, scale:0.8},
    visible:{opacity:1 ,y:0, scale:1},
    exit:{opacity:0 ,y:-50, scale:0.8},
}



  return (
    <AnimatePresence>
        <motion.div
    className='fixed z-50 flex items-center justify-center bottom-5 right-5'
    initial="hidden"
    exit="exit"
    variants={alertVerients}
    transition={{duration:0.3,ease:"easeInOut"}}>

        <div className={`p-2 ${type==="danger" ?"bg-red-500": "bg-royal"} items-center text-center text-indigo-100
         leading-none lg:rounded-full flex lg:inline-flex rounded-md`}>
            <p className={`flex rounded-full ${type === "danger" ?"bg-red-500": "bg-lavender"}`}>
                {type === "danger" ? "failed": "success"}
            </p>
            <p className="mr-2 text-left ">{text}</p>
        </div>
    </motion.div>
    </AnimatePresence>
  )
}

export default Alert