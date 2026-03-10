import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import headphone from "../assets/audira.png";
import cookie from "../assets/cookie.png";

gsap.registerPlugin(ScrollTrigger);

const MobileProjectsFullscreen = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // ===== PROJECT 1 TIMELINE =====
      gsap.from("#project", {

            scrollTrigger: {
                trigger: ".section-1",
                start: "top 80%",
                end: "top 20%",
                scrub: true,
               
            },
          opacity: 0,
        y: -100,
        duration: 1,
        yoyo: true,
        ease: "power3.out",
      });
        gsap.from(".image-1", {
            scrollTrigger: {
                trigger: ".section-1",
                start: "top 60%",
                end: "bottom bottom",
                scrub: true,
            },
            opacity: 0,
            y: 90,
            
            ease: "power3.out",
        });

        gsap.from("#text-1", {
            scrollTrigger: {
                trigger: "#text-1",
                start: "top 80%",
                end: "top 30%",
                 scrub: true,
            },
            opacity: 0,
            y: 60,
            duration: 1,
           
            ease: "power3.out",
        }, );

    



      // ===== PROJECT 2 TIMELINE =====
        gsap.from(".image-2", {
            scrollTrigger: {
                trigger: ".cooky",
                start: "top 95%",
                end: "top 50%",
                scrub: true,
            },
            opacity: 0,
            y: 90,
            ease: "power3.out",
        });

        gsap.from(".text-2", {
            scrollTrigger: {
                trigger: ".text-2",
                start: "top 80%",
                end: "top 30%",
                    scrub: true,
            },
            opacity: 0,
            y: 60,
            duration: 1,
            ease: "power3.out",
        });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="w-full overflow-x-hidden ">

      {/* ================= FIRST SCREEN ================= */}
      <section className="section-1 h-screen flex flex-col justify-center items-center px-8 relative gap-[4vh]">

        <div
          className=" text-transparent text-5xl font-bold"
          style={{ WebkitTextStroke: "1px white" }} id="project"
        >
          PROJECTS
        </div>

        <div className="flex flex-col items-center gap-12">

          <a
            href="https://audira-nine-eta.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="image-1"
          >
            <img
              src={headphone}
              alt="headphone"
              className="w-[85vw] max-w-sm rounded-3xl shadow-2xl"
            />
          </a>

          <div className="text-1 text-[16px] leading-relaxed text-justify max-w-md" id="text-1">
           <div> Audira is a modern, fully responsive e-commerce concept built
                for a fictional premium headphone brand. I designed and
                developed this project with a strong focus on visual hierarchy,
                smooth interactions, and clean component structure. The layout
                adapts seamlessly across devices, ensuring a consistent and
                engaging user experience.</div>

               <div className=""> This project demonstrates my ability to create attractive,
                conversion-focused front-end designs that highlight products
                effectively. From hover interactions to responsive layout
                systems, every detail was intentionally crafted. My portfolio
                itself reflects the same approach — interactive, clean, and
                performance-aware. I am capable of building far more advanced,
                scalable front-end systems tailored to real business needs.</div>
          </div>

        </div>
      </section>


      {/* ================= SECOND SCREEN ================= */}
      <section className="section-2 h-screen flex flex-col justify-center items-center px-8 py-16 gap-[6vh]">

        {/* Upper Portion Image */}
        <a
          href="https://cookie-co.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="image-2 mt-6"
        >
          <img
            src={cookie}
            alt="cookie"
            className="w-[85vw] max-w-sm rounded-3xl shadow-2xl cooky"
          />
        </a>

        {/* Lower Text */}
        <div className="text-2 text-[16px] leading-relaxed text-justify max-w-md mb-10">
        <div className=""> <b> Visit</b> my cookie shop project .It's a responsive product showcasing a
                website designed for a small dessert brand offering three
                signature cookie flavors. The goal was to create a warm,
                inviting interface while maintaining modern UI principles and
                clean structure.</div>

              <div>I developed the layout to be fully responsive and optimized for
                clarity and engagement across all screen sizes. The design
                focuses on presentation, brand personality, and user-friendly
                navigation — elements essential for businesses looking to build
                an online presence. This project further reflects my ability to
                craft visually appealing and strategically structured
                front-end experiences that attract and retain clients.</div> 
        </div>

      </section>

    </div>
  );
};

export default MobileProjectsFullscreen;