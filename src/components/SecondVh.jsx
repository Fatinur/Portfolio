import React, { useRef, useEffect, useState } from "react";

import preview1 from "../assets/previewHeadphone.mp4";
import headphone from "../assets/audira.png";
import cookie from "../assets/cookie.png";
import preview2 from "../assets/previewCookie.mp4";


const SecondVh = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  const videoRef = useRef(null);
  const videoRef2 = useRef(null);

  useEffect(() => {
    const checkWidth = () => {
      setIsDesktop(window.innerWidth > 768);
    };

    checkWidth(); // run on mount
    window.addEventListener("resize", checkWidth);

    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  return (
    <div className="h-screen flex items-center justify-center overflow-hidden">
      <div className="text-white h-[90vh] w-[90vw] flex flex-col items-center justify-center gap-[2vh] md:gap-[4vh] lg:gap-[5vh]">
        
        <div className="h-[10%]">
          <div
            className="text-transparent trail-text text-4xl md:font-bold transform translate-y-1.5"
            style={{ WebkitTextStroke: "1px white" }}
          >
            PROJECTS
          </div>
        </div>

        <div className="h-full w-full flex flex-col lg:gap-[1vh] md:gap-[2vh] gap-[3vh] items-center justify-center">
          
          {/* ===== FIRST PROJECT ===== */}
          <div className="w-full h-full flex flex-col md:flex-row items-center justify-between">

            {/* Image + Video */}
            <div
              className="w-full md:w-[45%] h-full relative group overflow-hidden opacity-50 trail-text"
              onMouseEnter={() => isDesktop && videoRef.current?.play()}
              onMouseLeave={() => isDesktop && videoRef.current?.pause()}
            >
              <a
                href="https://audira-nine-eta.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full h-full"
              >
                <img
                  src={headphone}
                  alt="headphone"
                  className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0 rounded-3xl"
                />

                {isDesktop && (
                  <video
                    ref={videoRef}
                    src={preview1}
                    muted
                    loop
                    playsInline
                    className="absolute top-0 left-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-3xl"
                  />
                )}
         
              </a>
            </div>

            {/* Text */}
            <div className="w-full md:w-[45%] h-full flex items-center justify-center text-justify trail-text">
              <div className="text-l cursor-none">
                Audira is a modern, fully responsive e-commerce concept built
                for a fictional premium headphone brand. I designed and
                developed this project with a strong focus on visual hierarchy,
                smooth interactions, and clean component structure. The layout
                adapts seamlessly across devices, ensuring a consistent and
                engaging user experience.

                This project demonstrates my ability to create attractive,
                conversion-focused front-end designs that highlight products
                effectively. From hover interactions to responsive layout
                systems, every detail was intentionally crafted. My portfolio
                itself reflects the same approach — interactive, clean, and
                performance-aware. I am capable of building far more advanced,
                scalable front-end systems tailored to real business needs.
              </div>
            </div>
          </div>

          {/* ===== SECOND PROJECT ===== */}
          <div className="w-full h-full flex flex-col md:flex-row items-center justify-between">

            {/* Text */}
            <div className="w-full md:w-[45%] h-full flex items-center justify-center text-justify trail-text">
              <div className="text-l cursor-none">
                This cookie shop project is a responsive product showcase
                website designed for a small dessert brand offering three
                signature cookie flavors. The goal was to create a warm,
                inviting interface while maintaining modern UI principles and
                clean structure.

                I developed the layout to be fully responsive and optimized for
                clarity and engagement across all screen sizes. The design
                focuses on presentation, brand personality, and user-friendly
                navigation — elements essential for businesses looking to build
                an online presence. This project further reflects my ability to
                craft visually appealing and strategically structured
                front-end experiences that attract and retain clients.
              </div>
            </div>

            {/* Image + Video */}
            <div
              className="w-full md:w-[45%] h-full relative group overflow-hidden opacity-50 trail-text"
              onMouseEnter={() => isDesktop && videoRef2.current?.play()}
              onMouseLeave={() => isDesktop && videoRef2.current?.pause()}
            >
              <a
                href="https://cookie-co.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full h-full"
              >
                <img
                  src={cookie}
                  alt="cookie"
                  className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0 rounded-3xl"
                />

                {isDesktop && (
                  <video
                    ref={videoRef2}
                    src={preview2}
                    muted
                    loop
                    playsInline
                    className="absolute top-0 left-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-3xl"
                  />
                )}
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SecondVh;