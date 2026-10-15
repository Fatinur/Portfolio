
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

import preview1 from "../assets/previewHeadphone.mp4";
import headphone from "../assets/audira.png";
import cookie from "../assets/cookie.png";
import preview2 from "../assets/previewCookie.mp4";
import rajshahiRentals from "../assets/rajshahi-rentals.png";

const projects = [
  {
    name: "AUDIRA",
    category: "E-COMMERCE",
    number: "01",
    description:
      "A premium digital storefront designed to showcase products through immersive visuals and create a more engaging shopping experience.",
    image: headphone,
    video: preview1,
    url: "https://audira-nine-eta.vercel.app/",
    imageAlt: "Audira headphone storefront",
  },
  {
    name: "COOKIE.CO",
    category: "FOOD & E-COMMERCE",
    number: "02",
    description:
      "A warm, modern storefront that helps a cookie business present its products beautifully and turn visitors into potential customers.",
    image: cookie,
    video: preview2,
    url: "https://cookie-co.vercel.app/",
    imageAlt: "Cookie.co website",
  },
  {
    name: "RAJSHAHI RENTALS",
    category: "RENTAL PLATFORM",
    number: "03",
    description:
      "A rental platform built for Rajshahi, helping people discover rooms, flats, and hostels through practical filters and accessible listings.",
    image: rajshahiRentals,
    video: null,
    url: "https://rajshahi-rentals.vercel.app/",
    imageAlt: "Rajshahi Rentals website",
  },
];

const SecondVh = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const sectionRef = useRef(null);
  const featuredRef = useRef(null);
  const videoRefs = useRef([]);
  const animationRef = useRef(null);

  useEffect(() => {
    const checkWidth = () => {
      setIsDesktop(window.innerWidth > 768);
    };

    checkWidth();
    window.addEventListener("resize", checkWidth);

    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  const goToProject = (direction) => {
    setActiveIndex((current) => {
      return (
        (current + direction + projects.length) % projects.length
      );
    });
  };

  const selectProject = (index) => {
    setActiveIndex(index);
  };

  // Animate the featured project when the selection changes.
  useEffect(() => {
    if (!featuredRef.current) return;

    animationRef.current?.kill();

    animationRef.current = gsap.fromTo(
      featuredRef.current,
      {
        opacity: 0.45,
        y: 12,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.55,
        ease: "power3.out",
        clearProps: "transform",
      }
    );

    return () => animationRef.current?.kill();
  }, [activeIndex]);

  // Only play the featured project's video on desktop.
  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (!video) return;

      if (
        isDesktop &&
        index === activeIndex &&
        isHovered &&
        projects[index].video
      ) {
        video.play().catch(() => {});
      } else {
        video.pause();
        video.currentTime = 0;
      }
    });
  }, [activeIndex, isDesktop, isHovered]);

  const getRelativeIndex = (offset) =>
    (activeIndex + offset + projects.length) % projects.length;

  const activeProject = projects[activeIndex];

  const renderProjectImage = (project, index, featured = false) => (
    <div
      className={`relative h-full w-full overflow-hidden ${
        featured ? "rounded-xl md:rounded-2xl" : "rounded-xl"
      }`}
    >
      <img
        src={project.image}
        alt={project.imageAlt}
        loading="eager"
        className={`absolute inset-0 h-full w-full object-cover ${
          project.video && isDesktop && featured && isHovered
            ? "opacity-0"
            : "opacity-100"
        } transition-opacity duration-500`}
      />

      {project.video && isDesktop && (
        <video
          ref={(el) => {
            videoRefs.current[index] = el;
          }}
          src={project.video}
          muted
          loop
          playsInline
          preload="none"
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
            featured && isHovered ? "opacity-100" : "opacity-0"
          }`}
        />
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/10 pointer-events-none" />

      {featured && (
        <span className="absolute bottom-3 right-3 rounded-full border border-white/25 bg-black/50 px-3 py-2 text-[10px] tracking-[0.15em] text-white backdrop-blur-sm md:bottom-5 md:right-5 md:text-xs">
          VIEW PROJECT ↗
        </span>
      )}
    </div>
  );

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden bg-[#080808] text-white"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -right-40 top-10 h-96 w-96 rounded-full bg-white/[0.025] blur-3xl" />

      <div className="relative mx-auto flex h-full w-[92vw] max-w-[1600px] flex-col py-[3vh] md:w-[88vw]">
        {/* Header */}
        <header className="flex shrink-0 items-center justify-between">
          <span className="text-[9px] tracking-[0.2em] text-white/45 md:text-xs md:tracking-[0.28em]">
            PORTFOLIO / SELECTED WORK
          </span>

          <span className="text-[9px] tracking-[0.15em] text-white/45 md:text-xs md:tracking-[0.2em]">
            INDEPENDENT WEB DEVELOPER
          </span>
        </header>

        {/* Section title */}
        <div className="flex shrink-0 items-end justify-between pb-[2vh] pt-[3vh] md:pb-[3vh]">
          <div>
            <p className="mb-1 text-[9px] tracking-[0.3em] text-white/40 md:mb-2 md:text-xs">
              THOUGHTFULLY BUILT FOR THE WEB
            </p>

            <h2
              className="text-3xl font-bold tracking-[-0.06em] text-transparent sm:text-4xl md:text-6xl lg:text-7xl"
              style={{ WebkitTextStroke: "1px rgba(255,255,255,0.9)" }}
            >
              PROJECTS<span className="text-white">.</span>
            </h2>
          </div>

          <div className="pb-1 text-right">
            <span className="block text-xs tracking-widest text-white/90 md:text-sm">
              {String(activeIndex + 1).padStart(2, "0")}
              <span className="mx-1 text-white/35">/</span>
              {String(projects.length).padStart(2, "0")}
            </span>
            <span className="mt-1 hidden text-[9px] tracking-[0.2em] text-white/35 sm:block md:text-[10px]">
              SELECTED PROJECT
            </span>
          </div>
        </div>

        {/* Main showcase */}
        <div className="relative flex min-h-0 flex-1 items-center">
          {/* Previous project preview */}
          <button
            type="button"
            onClick={() => goToProject(-1)}
            aria-label="Previous project"
            className="group absolute left-0 z-10 hidden h-[48%] w-[14%] cursor-pointer opacity-45 transition-all duration-500 hover:opacity-80 lg:block"
          >
            {renderProjectImage(
              projects[getRelativeIndex(-1)],
              getRelativeIndex(-1)
            )}

            <span className="absolute bottom-3 left-3 text-[10px] tracking-widest text-white/80">
              {projects[getRelativeIndex(-1)].name}
            </span>
          </button>

          {/* Featured project */}
          <div
            ref={featuredRef}
            className="relative z-20 mx-auto flex h-full w-full min-h-0 flex-col justify-center lg:w-[74%]"
          >
            <div className="flex min-h-0 flex-1 flex-col gap-[2vh] md:flex-row md:items-center md:gap-[4%]">
              {/* Large project preview */}
              <div
                className="relative h-[38vh] min-h-0 w-full shrink-0 md:h-full md:w-[65%]"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <a
                  href={activeProject.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${activeProject.name} website`}
                  className="block h-full w-full"
                >
                  {renderProjectImage(
                    activeProject,
                    activeIndex,
                    true
                  )}
                </a>

                <span className="pointer-events-none absolute left-3 top-3 text-[9px] tracking-[0.2em] text-white/80 md:left-5 md:top-5 md:text-xs">
                  {activeProject.number} — {activeProject.category}
                </span>
              </div>

              {/* Project information */}
              <div className="flex min-h-0 flex-1 flex-col justify-center py-1 md:py-4">
                <span className="mb-2 text-[9px] tracking-[0.25em] text-white/40 md:mb-4 md:text-xs">
                  FEATURED PROJECT
                </span>

                <h3 className="break-words text-2xl font-semibold tracking-[-0.05em] sm:text-3xl md:text-3xl lg:text-5xl">
                  {activeProject.name}
                  <span className="text-white/35">.</span>
                </h3>

                <p className="mt-2 max-w-md text-xs leading-relaxed text-white/65 sm:text-sm md:mt-4 md:text-sm lg:text-base">
                  {activeProject.description}
                </p>

                <a
                  href={activeProject.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-4 flex w-fit items-center gap-3 border-b border-white/35 pb-2 text-[10px] tracking-[0.15em] transition-colors hover:border-white md:mt-7 md:text-xs"
                >
                  VIEW LIVE SITE
                  <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                    ↗
                  </span>
                </a>

                {/* Project selector */}
                <div className="mt-5 flex items-center gap-3 md:mt-10">
                  {projects.map((project, index) => (
                    <button
                      key={project.name}
                      type="button"
                      onClick={() => selectProject(index)}
                      aria-label={`Show ${project.name}`}
                      aria-current={
                        index === activeIndex ? "true" : undefined
                      }
                      className="group flex cursor-pointer items-center gap-2 py-2"
                    >
                      <span
                        className={`h-[2px] transition-all duration-500 ${
                          index === activeIndex
                            ? "w-8 bg-white md:w-10"
                            : "w-4 bg-white/25 group-hover:bg-white/60 md:w-5"
                        }`}
                      />
                    </button>
                  ))}

                  <span className="ml-1 text-[9px] tracking-[0.2em] text-white/40 md:text-[10px]">
                    {activeProject.number} / 03
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Next project preview */}
          <button
            type="button"
            onClick={() => goToProject(1)}
            aria-label="Next project"
            className="group absolute right-0 z-10 hidden h-[48%] w-[14%] cursor-pointer opacity-45 transition-all duration-500 hover:opacity-80 lg:block"
          >
            {renderProjectImage(
              projects[getRelativeIndex(1)],
              getRelativeIndex(1)
            )}

            <span className="absolute bottom-3 right-3 text-[10px] tracking-widest text-white/80">
              {projects[getRelativeIndex(1)].name}
            </span>
          </button>
        </div>

        {/* Footer navigation */}
        <footer className="flex shrink-0 items-center justify-between pt-[2vh]">
          <span className="text-[9px] tracking-[0.15em] text-white/35 md:text-xs md:tracking-[0.2em]">
            DESIGN. DEVELOPMENT. EXPERIENCE.
          </span>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => goToProject(-1)}
              aria-label="Previous project"
              className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-white/20 text-white/70 transition-colors hover:border-white hover:text-white md:h-11 md:w-11"
            >
              <span className="text-lg">←</span>
            </button>

            <button
              type="button"
              onClick={() => goToProject(1)}
              aria-label="Next project"
              className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-white/20 text-white/70 transition-colors hover:border-white hover:text-white md:h-11 md:w-11"
            >
              <span className="text-lg">→</span>
            </button>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default SecondVh;


