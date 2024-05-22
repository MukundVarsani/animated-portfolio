import "./Hero.scss";
import React from "react";
import { motion } from "framer-motion";

const textVarient = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },

  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVarients = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-870%",
    transition: {
      duration: 30,
      repeat: Infinity,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          initial="initial"
          animate="animate"
          className="textContainer"
          variants={textVarient}
        >
          <motion.h2 variants={textVarient}>Mukund Varsani</motion.h2>
          <motion.h1 variants={textVarient}>Web and App Devloper</motion.h1>

          <motion.div varient={textVarient} className="buttons">
            <motion.button variants={textVarient}>
              See the Latest Works
            </motion.button>
            <motion.button variants={textVarient} className="secButton">
              Contact Me
            </motion.button>
          </motion.div>

          <motion.img
            variants={textVarient}
            src="/scroll.png"
            animate="scrollButton"
            alt=""
            srcSet=""
          />
        </motion.div>

        <motion.div
          className="sliderTextContainer"
          variants={sliderVarients}
          initial="initial"
          animate="animate"
        >
          FLutter &nbsp; React &nbsp; Node &nbsp; Python &nbsp; C++ &nbsp;
          C&nbsp; JavaScript
        </motion.div>
      </div>
      <div className="imageContainer">
        <img src="/hero.png" alt="" srcSet="" />
      </div>
    </div>
  );
};

export default Hero;
