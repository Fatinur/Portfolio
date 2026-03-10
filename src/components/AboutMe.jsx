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
                 a frontend developer who enjoys building modern, interactive websites and bringing designs to life through code.<br/> I’m particularly passionate about creating smooth and engaging animations, and I have experience using tools like React, JavaScript, Tailwind CSS, and CSS to craft responsive and visually appealing interfaces. I’m especially comfortable working with animation libraries like GSAP, which I often use to create dynamic user experiences—something you can see throughout my portfolio.<br/> I’m actively looking for opportunities including internships, freelance work, or entry-level frontend roles where I can contribute, grow, and gain real-world experience. I strongly believe in persistence and continuous learning, and <br/>as Will Smith’s character says in The Pursuit of Happyness, “If you want something, go get it. Period.”
            </div>
            <div className=' h-[10vh] w-full flex justify-center items-center'>
                 <a href="/public/Fatin_Arnob_Interpreter_CV.pdf" target="_blank" rel="noopener noreferrer" className='border-2 border-white w-[10vw] rounded-lg h-full hover:text-black hover:bg-white'>   <button className=' w-[10vw] rounded-lg h-full hover:text-black hover:bg-white' >CV</button></a>
            </div>

           </div>
    </div>
         
</div>
  )
}

export default AboutMe