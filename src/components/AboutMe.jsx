import React from 'react'
import ContactForm from './ContactForm'

const AboutMe = () => {
  return (
   <div className="h-screen relative flex justify-center items-center overflow-x-hidden">
    <div className='w-[90vw]  h-full flex  flex-col gap-3 '>

           <div className=' w-full h-full flex justify-between'>
            <div>
            <div className='parapara  trail-text text-[20vh] font-sans cursor-none font-extrabold'>
                 HELLO,
               <p className='text-[10vh]'>  I_AM_ARNOB </p>

            </div>
            </div>
            <div className='w-[30vw] mt-6'>
           <ContactForm/>

            </div>
           </div>
           <div className=' w-full h-full flex flex-col gap-4'>
            <div className=' h-full w-full text-xl text-center font-pinyon  trail-text cursor-none '>
                I’m a junior full-stack web developer who enjoys building modern, interactive websites and turning ideas into functional digital experiences.

I work with React, JavaScript, Tailwind CSS, and Supabase to build responsive interfaces and full-stack projects. I’m particularly passionate about creating smooth, engaging animations with GSAP and crafting experiences that look great and feel intuitive to use.

I’m looking for opportunities in freelance work, internships, and entry-level development roles where I can solve real problems, contribute to meaningful projects, and keep growing as a developer.

I believe in persistence, taking action, and continuous learning. As the character played by Will Smith says in *The Pursuit of Happyness*: “If you want something, go get it. Period.”
            </div>
            <div className=' h-[10vh] w-full flex justify-center items-center'>
                 <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className='border-2 border-white w-[10vw] rounded-lg h-full hover:text-black hover:bg-white'>   <button className=' w-[10vw] rounded-lg h-full hover:text-black hover:bg-white' >CV</button></a>
            </div>

           </div>
    </div>
         
</div>
  )
}

export default AboutMe
