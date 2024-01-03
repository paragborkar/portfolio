import React from 'react'
import { FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id='contact'
    className='w-[min(100%,38rem)] max-w-[53rem] scroll-mt-28 text-center sm:mb-15'
    >
        <h2  className='text-3xl font-medium capitalize text-center mb-[5vh]'>Contact</h2>
        <p>Please contact me directly at <a className='underline' href='mailto:paragborkar200@gmail.com' >paragborkar200@gmail.com</a> or through this form.</p>
        <form className='mt-10 flex flex-col ' action="mailto:paragborkar200@gmail.com" >
          <input type='email' className='h-14 rounded-lg border border-black/50  ' name='Email' />
          <textarea className='h-52 my-3 rounded-lg border border-black/50 p-4 ' name='Message' />
          <button type='submit' className='h-[3rem] w-[8rem] bg-gray-900 text-white
           rounded-full outline-none transition-all flex items-center justify-center gap-2 
            hover:translate-x-1 hover:-translate-y-1 
            ' >Submit 
            <FaPaperPlane className="text-xs opacity-70 transition-all " /> </button>
        </form>
    </section>
  )
}

export default Contact;
