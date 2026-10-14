
import React, { useRef, useEffect, useState } from "react";

import preview1 from "../assets/previewHeadphone.mp4";
import headphone from "../assets/audira.png";
import cookie from "../assets/cookie.png";
import preview2 from "../assets/previewCookie.mp4";
import rajshahiRentals from "../assets/rajshahi-rentals.png";

const SecondVh = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  const videoRef = useRef(null);
  const videoRef2 = useRef(null);

  useEffect(() => {
    const checkWidth = () => {
      setIsDesktop(window.innerWidth > 768);
    };

    checkWidth();
    window.addEventListener("resize", checkWidth);

    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  const projects = [
    {
      name: "AUDIRA",
      description:
        "A premium headphone storefront concept featuring immersive product visuals, smooth interactions, and responsive layouts to help brands create a strong first impression.",
      image: headphone,
      video: preview1,
      videoRef: videoRef,
      url: "https://audira-nine-eta.vercel.app/",
      imageAlt: "Audira headphone storefront",
      imageFirst: true,
    },
    {
      name: "COOKIE.CO",
      description:
        "A modern cookie shop concept combining warm branding, appealing product presentation, and intuitive navigation to help small businesses build a memorable online presence.",
      image: cookie,
      video: preview2,
      videoRef: videoRef2,
      url: "https://cookie-co.vercel.app/",
      imageAlt: "Cookie.co website",
      imageFirst: false,
    },
    {
      name: "RAJSHAHI RENTALS",
      description:
        "A rental platform built for Rajshahi, helping people discover rooms, flats, and hostels through property filters and a streamlined listing experience.",
      image: rajshahiRentals,
      url: "https://rajshahi-rentals.vercel.app/",
      imageAlt: "Rajshahi Rentals website",
      imageFirst: true,
    },
  ];

  const renderPreview = (project) => (
    <div
      className="w-full md:w-[42%] h-full min-h-0 relative group overflow-hidden opacity-70 hover:opacity-100 transition-opacity duration-300 trail-text rounded-2xl"
      onMouseEnter={() => {
        if (isDesktop) project.videoRef?.current?.play();
      }}
      onMouseLeave={() => {
        if (isDesktop && project.videoRef?.current) {
          project.videoRef.current.pause();
          project.videoRef.current.currentTime = 0;
        }
      }}
    >
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Visit ${project.name} website`}
        className="block w-full h-full"
      >
        <img
          src={project.image}
          alt={project.imageAlt}
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            project.video && isDesktop
              ? "group-hover:opacity-0"
              : ""
          }`}
        />

        {project.video && isDesktop && (
          <video
            ref={project.videoRef}
            src={project.video}
            muted
            loop
            playsInline
            preload="none"
            className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          />
        )}

        <span className="absolute bottom-3 right-3 z-10 rounded-full bg-black/70 px-3 py-1 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          VIEW PROJECT ↗
        </span>
      </a>
    </div>
  );

  const renderDescription = (project) => (
    <div className="w-full md:w-[54%] h-full min-h-0 flex flex-col justify-center gap-2 md:gap-3 trail-text py-1">
      <h3 className="text-sm md:text-base lg:text-lg tracking-[0.2em] font-semibold">
        {project.name}
      </h3>

      <p className="text-xs md:text-sm lg:text-base leading-relaxed text-justify text-white/80">
        {project.description}
      </p>

      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="w-fit text-xs md:text-sm tracking-wider underline underline-offset-4 hover:text-white/60 transition-colors"
      >
        VIEW PROJECT ↗
      </a>
    </div>
  );

  return (
    <section className="h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="text-white h-[94vh] w-[90vw] flex flex-col items-center min-h-0">
        {/* SECTION HEADING */}
        <div className="h-[10%] shrink-0 flex items-center justify-center">
          <h2
            className="text-transparent trail-text text-3xl md:text-4xl font-bold"
            style={{ WebkitTextStroke: "1px white" }}
          >
            PROJECTS
          </h2>
        </div>

        {/* THREE PROJECT ROWS */}
        <div className="flex-1 min-h-0 w-full grid grid-rows-3 gap-[1.5vh]">
          {projects.map((project) => (
            <div
              key={project.name}
              className="w-full h-full min-h-0 flex flex-col md:flex-row items-center justify-between gap-2 md:gap-[3%]"
            >
              {project.imageFirst ? (
                <>
                  {renderPreview(project)}
                  {renderDescription(project)}
                </>
              ) : (
                <>
                  {renderDescription(project)}
                  {renderPreview(project)}
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecondVh;

