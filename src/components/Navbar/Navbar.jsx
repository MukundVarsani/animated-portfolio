import React from 'react'
import Sidebar from "../sidebar/sidebar";
import "./Navbar.scss"
import {motion} from 'framer-motion';

const Navbar = () =>{
  return (
    <div>
        <div className="navbar">
            <Sidebar />
            <div className="wrapper">
                <motion.span
                initial = {{opacity : 0, scale :0.5}}
                animate = {{opacity : 1, scale :1}}
                transition = {{duration : 0.5}}

                >Mukund</motion.span>
                <div className="social">
                    <a href="#"><img src="/facebook.png" alt="IMAGE" srcSet="" /></a>
                    <a href="#"><img src="/instagram.png" alt="IMAGE" srcSet="" /></a>
                    <a href="#"><img src="/youtube.png" alt="IMAGE" srcSet="" /></a>
                    <a href="#"><img src="/dribbble.png" alt="IMAGE" srcSet="" /></a>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Navbar;