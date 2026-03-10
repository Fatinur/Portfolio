import React, { useEffect } from 'react'
import Navbar from './Navbar'
import Line from './Line'
import { gsap } from 'gsap'
//import LineMobile from './LineMobile'
import { FaGithub } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { RiJavascriptLine } from "react-icons/ri";
import { FaCss3Alt } from "react-icons/fa";
const FirstVh = ({ refs }) => {
  const wideth = window.innerWidth;

    useEffect(() => {
    
        const tl = gsap.timeline();
        
        tl.fromTo('.centered-thing', { y: -50, opacity: 0 }, { y: 0, opacity: 1, duration: 1.8, ease: "power2.out" })
         
        tl.fromTo(".wavey",
          { y: -10, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, 
            stagger: 0.2,
            ease: "power2.out" }
        );

        tl.fromTo(
                        ".wavey",
                        {
                            yPercent: 0
                        },
                        {
                            yPercent: -30,          // go up 
                            duration: 0.5,
                            
                            ease: "power2.inOut",
                            stagger: 0.4,        
                            repeat: -1,
                             yoyo: true,
                            
                        }
                        );

    

    }, []);



  return (
    <div className='h-screen flex items-center justify-center overflow-x-hidden '>
        <div className=' w-[90vw] h-[95vh]  flex flex-col  items-center overflow-x-hidden'>
               <Navbar  refs={refs}/>
               {/* {wideth < 768 && <LineMobile />} */}
                {wideth >= 1027 && <Line topPosition={"-4vh"}/>}
                <div className='md:h-full h-full flex flex-col items-center justify-center'>
           <div className='centered-thing flex flex-col items-center justify-center gap-y-[5vh] '>
                     
                        <div className='md:text-[8vw] text-8xl text-center font-bold trail-text text-transparent cursor-default' style={{ WebkitTextStroke: "1px white" }} >
                        FATIN ARNOB
                  
                        </div>
                        {wideth >= 1027 && <Line topPosition={"-10vh"}/>}
                 
              <div className='flex items-center justify-center md:text-4xl text-sm  text-white gap-[3vw]' >

                    <div className='flex flex-col justify-center items-center trail-text wavey'>
                    <FaGithub /> 
                    <div className='text-sm  '>GITHUB</div>
                    </div>
                    <div className='flex flex-col justify-center items-center trail-text wavey' >
                    <FaReact />
                    <div className='text-sm  '>REACT</div>
                    </div>
                    <div className='flex flex-col justify-center items-center trail-text wavey'>
                    <RiTailwindCssFill className='text-white ' />
                    <div className='text-sm '>TAILWIND</div>
                    </div>
                    <div className='flex flex-col justify-center items-center trail-text wavey'>
                    <RiJavascriptLine  />
                    <div className='text-sm  '>JAVASCRIPT</div>
                    </div>

                    <div className='font-bold trail-text wavey'>
                    GSAP
                    </div>


                    <div className='flex flex-col justify-center items-center trail-text wavey'>
                    <FaCss3Alt  />
                    <div className='text-sm  '>CSS</div>
                    </div>

                   

              </div>

            
             
           


             

           </div>
                </div>
               
        </div>
    </div>
  )
}

export default FirstVh