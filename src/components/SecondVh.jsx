
import React, { useState } from "react";
import mgauto from "../assets/mgauto.png";
import headphone from "../assets/audira.png";
import cookie from "../assets/cookie.png";
import rajshahiRentals from "../assets/rajshahi-rentals.png";

const projects = [
  {
  name: "M&G Auto Repair",
  category: "BUSINESS WEBSITE",
  number: "01",
  description:
    "A conversion-focused website designed to help customers explore services, contact the shop, and request auto repairs with ease.",
  image: mgauto,
  imageAlt: "M&G Auto Repair website preview",
  url: "https://mg-auto-repair.vercel.app/",
},
   {
    name: "RAJSHAHI RENTALS",
    category: "RENTAL PLATFORM",
    number: "02",
    description:
      "A rental platform built for Rajshahi, helping people discover rooms, flats, and hostels through practical filters and accessible listings.",
    image: rajshahiRentals,
    imageAlt: "Rajshahi Rentals website",
    url: "https://rajshahi-rentals.vercel.app/",
  },
  {
    name: "AUDIRA",
    category: "E-COMMERCE",
    number: "03",
    description:
      "A premium storefront that helps brands showcase products through immersive visuals and a seamless shopping experience.",
    image: headphone,
    imageAlt: "Audira headphone storefront",
    url: "https://audira-nine-eta.vercel.app/",
  },
  {
    name: "COOKIE.CO",
    category: "FOOD & E-COMMERCE",
    number: "04",
    description:
      "A modern online storefront that helps small businesses present their products beautifully and create a memorable brand experience.",
    image: cookie,
    imageAlt: "Cookie.co website",
    url: "https://cookie-co.vercel.app/",
  },
 
];

const SecondVh = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeProject = projects[activeIndex];

  const goToProject = (direction) => {
    setActiveIndex(
      (current) =>
        (current + direction + projects.length) % projects.length
    );
  };

  return (
    <section className="relative flex h-screen w-full items-center justify-center overflow-hidden text-white">
      <div className="flex h-[94vh] w-[90vw] max-w-[1500px] flex-col">
        {/* Header */}
        <header className="flex shrink-0 items-center justify-between">
          <span className="text-[9px] tracking-[0.2em] text-white/45 md:text-xs md:tracking-[0.28em]">
            PORTFOLIO / SELECTED WORK
          </span>

          <span className="text-[9px] tracking-[0.15em] text-white/45 md:text-xs">
            JUNIOR FULL-STACK DEVELOPER
          </span>
        </header>

        {/* Section title */}
        <div className="flex shrink-0 items-end justify-between pb-[2vh] pt-[3vh] md:pb-[3vh]">
          <div>
            <p className="mb-1 text-[9px] tracking-[0.25em] text-white/40 md:mb-2 md:text-xs">
              THOUGHTFULLY BUILT FOR THE WEB
            </p>

            <h2
              className="text-3xl trail-text font-bold tracking-[-0.06em] text-transparent sm:text-4xl md:text-6xl lg:text-7xl"
              style={{
                WebkitTextStroke: "1px rgba(255,255,255,0.9)",
              }}
            >
              PROJECTS<span className="text-white" style={{ WebkitTextStroke: "1px white" }}>.</span>
            </h2>
          </div>

                     <span className="pb-1 text-xs tracking-widest text-white/70 md:text-sm">
              {activeProject.number}
              <span className="mx-1 text-white/30">/</span>
              {String(projects.length).padStart(2, "0")}
            </span>
        </div>

        {/* Center stage */}
            <div
              key={activeProject.name}
              className="flex min-h-0 flex-1 flex-col items-center justify-center"
            >
          {/* Project image */}
          <a
            href={activeProject.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit ${activeProject.name} website`}
            className="group relative block h-[38vh] min-h-0 w-full overflow-hidden rounded-xl md:h-[48vh] md:w-[82%] lg:w-[76%] lg:rounded-2xl trail-text"
          >
            <img
              src={activeProject.image}
              alt={activeProject.imageAlt}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02] trail-text"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10" />

            <span className="absolute left-3 top-3 rounded-full border border-white/20 bg-black/40 px-3 py-1.5 text-[9px] tracking-[0.15em] backdrop-blur-sm md:left-5 md:top-5 md:text-xs">
              {activeProject.number} — {activeProject.category}
            </span>

            <span className="absolute bottom-3 right-3 rounded-full bg-black/60 px-3 py-2 text-[10px] tracking-wider backdrop-blur-sm md:bottom-5 md:right-5 md:text-xs">
              EXPLORE PROJECT ↗
            </span>
          </a>

          {/* Project details */}
          <div className="mt-[2vh] flex w-full items-start justify-between gap-4 md:w-[82%] lg:w-[76%]">
            <div className="min-w-0 flex-1">
              <h3 className="break-words text-xl font-semibold tracking-[-0.04em] sm:text-2xl md:text-3xl lg:text-4xl"  style={{ WebkitTextStroke: "1px white" }}>
                {activeProject.name}
                <span className="text-white/35"  style={{ WebkitTextStroke: "1px white" }}>.</span>
              </h3>

              <p className="mt-2 max-w-2xl text-xs leading-relaxed text-white/65 sm:text-sm md:mt-3 md:text-base ">
                {activeProject.description}
              </p>

              <a
                href={activeProject.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-2 border-b border-white/40 pb-1.5 text-[10px] tracking-[0.15em] transition-colors hover:border-white hover:text-white/70 md:mt-5 md:text-xs"
              >
                VIEW LIVE SITE
                <span>↗</span>
              </a>
            </div>

            {/* Arrow controls */}
            <div className="flex shrink-0 items-center gap-2 pt-1">
              <button
                type="button"
                onClick={() => goToProject(-1)}
                aria-label="Previous project"
                className="flex trail-text h-9 w-9 items-center justify-center rounded-full border border-white/25 text-white/80 transition-colors hover:border-white hover:bg-white/10 md:h-11 md:w-11"
              >
                <span className="text-lg">←</span>
              </button>

              <button
                type="button"
                onClick={() => goToProject(1)}
                aria-label="Next project"
                className="flex trail-text h-9 w-9 items-center justify-center rounded-full border border-white/25 text-white/80 transition-colors hover:border-white hover:bg-white/10 md:h-11 md:w-11"
              >
                <span className="text-lg">→</span>
              </button>
            </div>
          </div>

          {/* Progress indicators */}
          <div className="mt-[2vh] flex w-full items-center justify-center gap-2 md:w-[82%] lg:w-[76%]">
            {projects.map((project, index) => (
              <button
                key={project.name}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Show ${project.name}`}
                aria-current={index === activeIndex ? "true" : undefined}
                className={`h-[3px] cursor-pointer rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "w-9 bg-white"
                    : "w-4 bg-white/25 hover:bg-white/60"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Footer */}
        <footer className="flex shrink-0 items-center justify-between pt-[1vh]">
          <span className="text-[9px] tracking-[0.12em] text-white/35 md:text-xs md:tracking-[0.2em]">
            DESIGN. DEVELOPMENT. EXPERIENCE.
          </span>

          <span className="text-[9px] tracking-widest text-white/35 md:text-xs">
            2026
          </span>
        </footer>
      </div>
    </section>
  );
};

export default SecondVh;



