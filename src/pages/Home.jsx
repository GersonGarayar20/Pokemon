import React, {useState} from 'react'
import { Link, useLocation } from "wouter";
import logo from "../../public/logo.png"
import { motion } from "framer-motion"

export default function Home() {

  const [active, setActive] = useState(false)
  const [location, setLocation] = useLocation()

  const handleClick = ()=>{
    setActive(true)
    setTimeout(() => {
      setLocation("/pokemon/0")
    }, 500);
  }


  return (
    <div className='h-screen flex flex-col bg-[#0E1F40] overflow-hidden'>
      <motion.div
      initial={{y:-1000}}
      animate={active?{y:-1000}:{y:0}}
      transition={{duration:0.5}}
      className='bg-slate-900 h-1/2 flex flex-col justify-center'>
        <figure className='flex justify-center'>
          <img className='w-96' src={logo} alt="" />
        </figure>
      </motion.div>

      <div className='z-10 h-0 flex items-center justify-center'>
        <motion.div 
        className='w-20 h-20 cursor-pointer rounded-full'
        whileHover={{scale:1.2}}
        whileTap={{scale:0.8}}>

          <motion.div
          onClick={handleClick}
          initial={{y:-1000}}
          animate={active?{y:-1000}:{y:0}}
          transition={{duration:0.5}}
          className='h-10 w-20 border-2 border-x-2 border-slate-900 bg-red-600 rounded-t-full'>
          </motion.div>

          <motion.div 
            onClick={handleClick}
            initial={{y:1000}}
            animate={active?{y:1000}:{y:0}}
            transition={{duration:0.5}}
            className='flex justify-center h-10 w-20 bg-slate-50 border-2 border-x-2 border-slate-900 rounded-b-full'>
              <div
              onClick={handleClick}
              className='-translate-y-3 h-5 w-5 border-2 border-slate-900 bg-slate-50 rounded-full'>
              </div>
          </motion.div>

        </motion.div>
      </div>

      <motion.div 
      initial={{y:1000}}
      animate={active?{y:1000}:{y:0}}
      transition={{duration:0.5}}
      className='bg-slate-900 h-1/2'>        
      </motion.div>
      
      
      





    </div>
  )
}
