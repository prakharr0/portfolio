import React, { useRef, useEffect, useState } from 'react';
import {motion} from 'framer-motion'

const Hero = () => {
  return (
    <motion.section id='hero'
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{duration: 0.7 }}
      >
        <h1 id='main-title'>Prakhar Rathi</h1>
        <h2>Software Engineer</h2>
    </motion.section>
  )
}

export default Hero