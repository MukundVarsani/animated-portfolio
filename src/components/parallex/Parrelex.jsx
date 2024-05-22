import React, { useRef } from "react";
import {motion , useScroll , useTransform} from "framer-motion";
import "./parrelex.scss";
const Parrelex = ({ type }) => {

    const ref = useRef();
    const {scrollYProgress} = useScroll({
        target : ref,
        offset : ["start start","end start"]
    })
    
    const yBg = useTransform(scrollYProgress , [0,1] , ['0%' , "100%"])
    const yText = useTransform(scrollYProgress , [0,1] , ['0%' , "200%"])
    
    console.log(yBg);
  return (
    <div
      className="parrelex"
      ref={ref}
      style={{
        background:
          type === "Services"
            ? "linear-gradient(180deg , #111132 , #0c0c1d)"
            : "linear-gradient(180deg , #111132 , #173EAC)",
      }}
    >
      <motion.h1 style={{y : yText}}>{type === "Services" ? "What We Do?" : "What We Did?"} </motion.h1>
      <motion.div className="mountains"></motion.div>
      <motion.div style={
        {
            y :yBg,
            backgroundImage : `url(${type === "Services" ? "/planets.png" : '/sun.png'})`

        }
      } className="planets"></motion.div>
      <motion.div style={{x:yText}} className="stars"></motion.div>
    </div>
  );
};

export default Parrelex;
