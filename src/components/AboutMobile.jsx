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
          I’m a frontend developer who enjoys building modern, interactive websites and bringing designs to life through code. I work with React, JavaScript, Tailwind CSS, and CSS to create responsive and visually engaging interfaces, and I particularly enjoy crafting smooth animations using GSAP.<br/>
          I’m currently seeking internships, freelance opportunities, or entry-level frontend roles where I can grow, contribute, and gain real-world experience. I believe strongly in persistence and continuous learning—because if you want something, go get it. Period.
        </div>
      </div>
      <div className='third-come w-full h-full flex justify-center items-center'>
        <ContactForm/>
      </div>
      
    </div>
  );
};

export default AboutMobile;