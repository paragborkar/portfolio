"use client"
import React from 'react'
import {motion} from 'framer-motion';

const About = () => {
  return (
    <motion.section className='mt-[10vh] text-center leading-8'
    initial={{opacity:0,y:100}}
    animate={{opacity:1 , y:0}}
    transition={{
        delay: 0.5,
      }}
    >
    <h2  className='text-3xl font-medium capitalize'>About Me</h2>
    <p className='font-medium max-w-[45rem]  mt-6'>Hello, I'm Parag Borkar, a passionate Full Stack Developer specializing
         in the MERN (MongoDB, Express.js, React, Node.js) stack. With one year
          of hands-on experience in the field, I bring a wealth of knowledge in 
          building robust and scalable web applications.</p>
   </motion.section>
  )
}

export default About
