"use client";

import {motion} from 'framer-motion';
import { links } from '@/lib/data';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="z-[999] relative " >
        <motion.div className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0" initial={{y:-100 ,x:"-50%" , opacity:0}}
        animate={{y:0,x:"-50%" , opacity:1}}
        transition={{
            delay: 0.1,
          }}
        >
            <nav className='flex fixed top-[0.15rem] left-1/2 h-12 -translate-y-1/2 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0'>
                <ul className=' flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5 '>
                    {
                        links.map(link =>(
                            <motion.li className='h-3/4 flex items-center justify-center'  key={link.hash}> 
                                <Link className='flex w-full items-center justify-center px-3 py-3  hover:text-gray-950 transition' href={link.hash}>{link.name}</Link>
                            </motion.li>
                        ))
                    }
                </ul>
            </nav>
        </motion.div>
    </header>
  )
}

export default Header;
