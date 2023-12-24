"use client";

import Image from 'next/image';
import React from 'react';
import profile from '@/public/profile.jpeg';
import { TypeAnimation } from 'react-type-animation';
import {motion} from 'framer-motion';


const Intro = () => {
  return (
    <section>
        <motion.div
        initial={{opacity:0 , scale:0}}
        animate={{opacity:1 , scale:1}}
        className='flex items-center justify-center w-full'>
            <div className='flex items-center justify-center flex-col pt-[6rem]'>
                <Image  src={profile} alt='Profile' width={192} height={192} quality={100} priority={true} 
                className='h-28 w-28 rounded-full border-[0.10rem] border-black shadow-xl'
                />
                <h1 className='pt-2 mt-2 font-bold text-[1.5rem] bg-gradient-to-r from-blue-500 to-green-500 text-transparent bg-clip-text'>
                    Hello, I'm
                </h1>
                <TypeAnimation
      sequence={[
        'Parag Borkar',
        1000, 
        'Full Stack Developer',
        1000,
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
      className=' font-bold text-gray-700'
    />
            </div>
        </motion.div>
    </section>
  )
}

export default Intro
