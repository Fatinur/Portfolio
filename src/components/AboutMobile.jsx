import React, { useEffect, useRef } from 'react';
import ContactForm from './ContactForm';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AboutMobile = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".first-come", {
        y: 50,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".first-come",
          start: "top 80%",
          end: "top 60%",
          scrub: true,
        //  markers: true,
        },
      });

      gsap.from(".second-come", {
        y: 50,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".second-come",
          start: "top 80%",
          end: "top 40%",
          scrub: true,
         // markers: true,
        },
      });

      gsap.from(".third-come", {
        y: 50,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".third-come",
          start: "top 80%",
          end: "top 60%",
          scrub: true,
         // markers: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className='h-[120vh] w-full flex flex-col gap-10 justify-center items-center'>
      <div className='w-[90vw] h-full flex flex-col gap-6'>
        <div className='parapara first-come text-7xl'>
          Hello,<br/>
          I Am<br/> Arnob
        </div>
        <div className='font-pinyon text-xl second-come'> 
         I’m a junior full-stack web developer who enjoys building modern, interactive websites and turning ideas into functional digital experiences.

I work with React, JavaScript, Tailwind CSS, and Supabase to build responsive interfaces and full-stack projects. I’m particularly passionate about creating smooth, engaging animations with GSAP and crafting experiences that look great and feel intuitive to use.

I’m looking for opportunities in freelance work, internships, and entry-level development roles where I can solve real problems, contribute to meaningful projects, and keep growing as a developer.

I believe in persistence, taking action, and continuous learning. As the character played by Will Smith says in *The Pursuit of Happyness*: “If you want something, go get it. Period.”
        </div>
      </div>
      <div className='third-come w-full h-full flex justify-center items-center'>
        <ContactForm/>
      </div>
      
    </div>
  );
};

export default AboutMobile;
