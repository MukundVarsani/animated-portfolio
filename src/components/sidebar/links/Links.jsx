import React from 'react'
import {motion, transform} from 'framer-motion';

const variants = {
    open :{
        transition : {
            staggerChildren : 0.1,
        },

    },
    closed : {
        transition : {
            staggerChildren : 0.05,
            staggerDirection : -1,
        },
    }
}
const itemVariants = {
    open :{
        y:0,
        opacity : 1


    },
    closed : {
        y: 50,
        opacity : 0
    }
}
const Links = () => {

    const links = ["Homepage" , "Services" , "Portfolio" , "Contact" , "About"]
  return (
    <motion.div className='links' variants={variants}>
        {links.map((link)=>(

            <motion.a  variants={itemVariants} href={`#${link}`} key={link}
            whileHover={{scale:1.1}}
            whileTap={{scale:0.95}}
            >{link}
            
            </motion.a>
        ))

        }
    </motion.div>
  )
}

export default Links
