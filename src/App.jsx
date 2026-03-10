import React, { useEffect, useState, useRef, useLayoutEffect } from "react";
import CursorTrail from "./components/CursorTrail.jsx";
import FirstVh from "./components/FirstVh.jsx";
import SecondVh from "./components/SecondVh.jsx";
import AboutMe from "./components/AboutMe.jsx";
import Footer from "./components/Footer.jsx";
import MobileProjectsFullScreen from "./components/MobileProjects.jsx";
import AboutMobile from "./components/AboutMobile.jsx";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const pathRef = useRef(null);
  const firstVhRef = useRef(null);
  const endRef = useRef(null);


   const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const hireMeRef = useRef(null);

 

  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth > 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // GSAP line animation, only when path exists
  useLayoutEffect(() => {
    if (!isDesktop) return; // skip on mobile
    if (!pathRef.current) return; // wait for DOM

    const path = pathRef.current;
    const length = path.getTotalLength();

    gsap.set(path, {
      strokeDasharray: length,
      strokeDashoffset: length,
    });

    gsap.to(path, {
      strokeDashoffset: 0,
      scrollTrigger: {
        trigger: firstVhRef.current,
        start: "bottom 40%",
        endTrigger: endRef.current,
        end: "top bottom",
        scrub: true,
      },
    });
  }, [isDesktop]);

  return (
    <div className="relative overflow-x-hidden">

      {/* First section */}
      <div ref={firstVhRef}>
        <FirstVh  refs={{ projectsRef, contactRef, hireMeRef }} />
      </div>

      {/* Projects */}
      <div ref={projectsRef}>
      {isDesktop ? <SecondVh /> : <MobileProjectsFullScreen />}
       </div>
      <CursorTrail />

      {/* About */}
      <div ref={contactRef}>
        {isDesktop ? <AboutMe /> : <AboutMobile />}
      </div>
      <div  ref={endRef}>
      <Footer />
       </div>

      {/* SVG line only on desktop */}
      {isDesktop && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -z-30 w-[90%] md:h-full flex justify-center pointer-events-none">
          <svg
            width="286"
            height="639"
            viewBox="0 0 286 639"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="md:w-full md:h-full w-[300vw]"
          >
            <g filter="url(#filter0_d_7_35)">
              <path
                d="M204.962 411.277L170.92 377.232L214.843 357.516C236.809 347.655 261.637 363.726 261.637 387.803C261.637 417.382 225.875 432.194 204.962 411.277Z"
                fill="black"
                fillOpacity="0.1"
              />
              <path
                ref={pathRef}
                d="M66.2115 19.504L126.803 51.082C166.713 71.8819 186.668 82.2818 193.957 95.3946C202.614 110.967 202.329 129.97 193.211 145.277C185.533 158.166 165.276 167.964 124.761 187.561C94.7936 202.057 79.8096 209.305 72.3758 219.769C63.5339 232.214 60.8624 248.017 65.1221 262.678C68.7035 275.003 80.4725 286.774 104.01 310.315L204.962 411.277C225.875 432.194 261.637 417.382 261.637 387.803C261.637 363.726 236.809 347.655 214.843 357.516L61.4843 426.355C54.5549 429.466 51.0902 431.021 49.2335 432.052C12.5399 452.424 15.757 506.21 54.6173 522.062C56.5837 522.865 60.2091 523.996 67.4598 526.258C69.8128 526.992 70.9892 527.359 72.0367 527.738C91.0745 534.622 104.082 552.307 104.984 572.532C105.033 573.644 105.033 574.877 105.033 577.341V611.504"
                stroke="#4b7322"
                strokeWidth="39"
                strokeLinecap="round"
              />
            </g>
          </svg>
        </div>
      )}
    </div>
  );
};

export default App;