import React, { useState } from 'react'
import Links from './links/Links'
import Toggle from './toggleButton/Toggle'
import {delay, motion} from 'framer-motion';
import "./sidebar.scss"


    const variants = {
        open:{
            clipPath : "circle(1200px at 50px 50px)",
            transition : {
                type : "spring",
                stifness : 200,
                damping : 20,
            }

        },
        closed :{
            clipPath : "circle(30px at 50px 50px)",
            transition : {
                type : "spring",
                stifness : 100,
                damping :   20
                
            }
        }
    }
const Sidebar = () => {
    const [open, setOpen] = useState(false);
  return (
    <motion.div className="sidebar" animate = {open ? "open" : "closed"} >

        <motion.div className="bg"  variants={variants} >
            <Links />
        </motion.div>

        <Toggle setOpen = {setOpen}/>


    </motion.div>
  )
}

export default Sidebar
