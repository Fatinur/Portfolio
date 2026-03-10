import React, { useState, useRef, useLayoutEffect, useEffect,  } from "react";
import { TiThMenuOutline } from "react-icons/ti";
import gsap from "gsap";

const Navbar = ({refs}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropRef = useRef(null);
  const tl = useRef();

  const toggleMenu = () => setIsOpen(!isOpen);
  const scrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false); // close menu after click
  };

  // Initialize timeline once
  useLayoutEffect(() => {
    if (!dropRef.current) return;

    tl.current = gsap.timeline({ paused: true })
      .to(dropRef.current, {
        opacity: 1,
        y: 0,
        pointerEvents: "auto",
        duration: 0.4,
        ease: "none",
      })
      .fromTo(
        dropRef.current.children,
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, stagger: 0.1 },
        "-=0.3"
      );

    // Set initial hidden state
    gsap.set(dropRef.current, { opacity: 0, y: -20, pointerEvents: "none" });
  }, []);

  // Play or reverse timeline based on isOpen
  useEffect(() => {
    if (isOpen) tl.current.play();
    else tl.current.reverse();
  }, [isOpen]);

  useEffect(() => {
   //animate in front-end developer text on mount
      const tl = gsap.timeline();
      tl.fromTo('.front-end', { x: -50, opacity: 0 }, { x: 0, opacity: 1, duration: 1.5, ease: "power2.out" })
    tl.fromTo('.hambug', { x: 50, opacity: 0 }, { x: 0, opacity: 1, duration: 1.5, ease: "power2.out" }, "-=0.8")

    },
  []);

  return (
    <>
      {/* Navbar */}
      <div className="navbar flex w-full justify-between items-center px-[5vw] md:h-[10vh] relative z-999 h-auto">
        
            <div className="front-end cursor-pointer text-transparent font-extrabold  md:text-[3vw]  text-[7vw] w-[50vw] trail-text "
            style={{ WebkitTextStroke: "1px white" }}>
              FRONTEND  DEVELOPER
            </div>

            <div className="cursor-pointer text-white trail-text relative  hambug" onClick={toggleMenu}>
              <TiThMenuOutline size={25} />
            </div>
          </div>

          {/* Dropdown */}
          <div className="">
            <div
              ref={dropRef}
              className="flex flex-col items-center justify-center md:h-[30vh] lg:w-[15vw] md:w-[35vw] px-[5vw] absolute  right-[5vw] top-[10vh] font-bold text-[4vh] rounded-lg shadow-lg pointer-events-none border-white border-2 z-70"
            >
              <button className="py-2 transition trail-text z-70 text-transparent" onClick={() => scrollToSection(refs.projectsRef)} style={{ WebkitTextStroke: "1px white" }}>Projects</button>
              <button className="py-2 transition trail-text z-70 text-transparent" onClick={() => scrollToSection(refs.contactRef)} style={{ WebkitTextStroke: "1px white" }}>About</button>
              <a href="/public/Fatin_Arnob_Interpreter_CV.pdf" target="_blank" rel="noopener noreferrer" className="py-2 transition trail-text z-70 text-transparent" style={{ WebkitTextStroke: "1px white" }}>CV</a>
            </div>
      </div>
    </>
  );
};

export default Navbar;