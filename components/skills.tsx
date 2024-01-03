"use client";
import { skillsData } from '@/lib/data';
import React from 'react';
import {motion} from 'framer-motion';

const Skills = () => {

    const fadeInAnimationVariants = {
        initial: {
            opacity: 0,
            y:100,
        },
        animate:{
            opacity:1,
            y:0,
        },
    }

  return (
    <motion.section className='mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-15'
    initial={{opacity:0,y:100}}
    animate={{opacity:1 , y:0}}
    transition={{
        delay: 0.9,
      }}
      id='skills'
    >
        <h2  className='text-3xl font-medium capitalize text-center mb-[5vh] mt-[7vh]'>Skills</h2>
        <ul className='flex flex-wrap justify-center gap-2 text-lg text-gray-800 ' >
            {
                skillsData.map((skills,index) =>(
                    <motion.li className='bg-gray-200 border border-black/0.5 rounded-xl px-5 py-3 '
                    variants={fadeInAnimationVariants}
                    initial="initial"
                    whileInView="animate"
                    viewport={{
                        once:true,
                    }}
                    key={index} >{skills}</motion.li>
                ))
            }
        </ul>
    </motion.section>
  )
}

export default Skills;
