"use client";

import Image from 'next/image';
import React from 'react';
import profile from '@/public/profile.jpeg';
import { TypeAnimation } from 'react-type-animation';
import {motion} from 'framer-motion';
import Link from 'next/link';
import {BsArrowRight, BsLinkedin} from 'react-icons/bs';
import {HiDownload} from 'react-icons/hi';
import { FaGithubSquare } from 'react-icons/fa';


const Intro = () => {
  return (
    <section>
        <motion.div
        initial={{opacity:0 , scale:0}}
        animate={{opacity:1 , scale:1}}
        transition={{
            delay: 0.3,
          }}
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
      style={{ fontSize: '1.8rem', display: 'inline-block' }}
      repeat={Infinity}
      className=' font-bold bg-gradient-to-r from-gray-500 to-gray-950 text-transparent bg-clip-text h-[5rem] px-[3.5rem] sm:p-[initial] sm:h-[initial]'
    />
            </div>
        </motion.div>
        <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.5,
        }}
        className='mt-4 flex justify-center items-center flex-col gap-4 sm:flex-row sm:pt-[initial] sm:flex sm:gap-2
        '>
            <Link href='#contact'
            className='bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full hover:scale-105'
            >Contact Me<BsArrowRight/></Link>
            <a className='bg-gray-500 px-7 py-3 flex items-center gap-2 rounded-full hover:scale-105' href='/CV.pdf' download>Download CV <HiDownload/></a>
            <a className='bg-gray-400 p-4 text-gray-950 flex items-center gap-2 rounded-full hover:scale-105' href='https://www.linkedin.com/in/parag-borkar-34b98724b/' target='_blank'><BsLinkedin/></a>
            <a className='bg-gray-400 p-4 text-gray-950 flex items-center gap-2 rounded-full hover:scale-105 'href='https://github.com/paragborkar' target='_blank'><FaGithubSquare/></a>
        </motion.div>
    </section>
  )
}

export default Intro
