"use client";
import { projectsData } from '@/lib/data'
import Image from 'next/image'
import React from 'react'
import {motion} from 'framer-motion';

const Projects = () => {
  return (
    <motion.section className='mt-[10vh]'
    initial={{opacity:0,y:100}}
    animate={{opacity:1 , y:0}}
    transition={{
        delay: 0.7,
      }}
    >
        <h2  className='text-3xl font-medium capitalize text-center mb-[5vh]'>Projects</h2>
        <div>
            {
                projectsData.map((project,index)=>(
                    <React.Fragment key={index}>
                        <Project {...project} />
                    </React.Fragment>
                ))
            }
        </div>
    </motion.section>
  )
}

export default Projects

type ProjectProps = (typeof projectsData)[number];

function Project(
    {
        title,
        description,
        tags,
        imageUrl,
    }:ProjectProps) {
    return(
   <section className='group bg-gray-300 max-w-[45rem] border border-black/5 overflow-hidden sm:pr-8 relative h-[35vh] sm:h-[20rem]
   mb-3 sm:mb-8  last:mb-0 sm:even:pl-8 rounded-md
   '>
        <div className='pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 
        sm:max-w-[50%] flex flex-col h-full 
        sm:group-even:ml-[18rem]'>
        <h3 className='text-2xl font-semibold ' >{title}</h3>
        <p className='mt-2 leading-relaxed text-gray-700 ' >{description}</p>
        <ul className='flex flex-wrap mt-4 gap-2 sm:mt-auto '>
            {tags.map((tag,index)=>(
                <li key={index}className='bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white 
                rounded-full 
                ' >{tag}</li>
            ))}
        </ul>
        </div>
        <Image src={imageUrl} alt={title}  quality={90} className='
        hidden sm:block
        group-even:right-[initial] group-even:-left-40 
        absolute top-8 -right-40 opacity-25 sm:opacity-[initial] sm:w-[28.25rem] rounded-t-lg shadow-2xl 
        transition
        group-hover:scale-[1.04]
        group-hover:-translate-x-3
        group-hover:-rotate-2
        group-hover:translate-y-3
        group-even:group-hover:translate-x-3
        group-even:group-hover:rotate-2
        group-even:group-hover:translate-y-3
        '/>
   </section>
    )
}
