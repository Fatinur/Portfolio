
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import mgauto from "../assets/mgauto.png";
import headphone from "../assets/audira.png";
import cookie from "../assets/cookie.png";
import rajshahiRentals from "../assets/rajshahi-rentals.png";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    name: "M&G AUTO REPAIR",
    category: "BUSINESS WEBSITE",
    description:
      "A conversion-focused website designed to help customers explore auto repair services, contact the shop, and request repairs with ease.",
    image: mgauto,
    url: "https://mg-auto-repair.vercel.app/",
    alt: "M&G Auto Repair website preview",
  },
  {
    name: "RAJSHAHI RENTALS",
    category: "FULL-STACK PLATFORM",
    description:
      "A rental platform built for Rajshahi, helping people discover rooms, flats, and hostels through practical filters and accessible listings.",
    image: rajshahiRentals,
    url: "https://rajshahi-rentals.vercel.app/",
    alt: "Rajshahi Rentals website preview",
  },
  {
    name: "AUDIRA",
    category: "E-COMMERCE",
    description:
      "A premium headphone storefront concept featuring immersive product visuals and smooth interactions to create a strong first impression.",
    image: headphone,
    url: "https://audira-nine-eta.vercel.app/",
    alt: "Audira headphone storefront",
  },
  {
    name: "COOKIE.CO",
    category: "FOOD & E-COMMERCE",
    description:
      "A modern cookie shop concept combining warm branding, appealing product presentation, and intuitive navigation for a memorable online presence.",
    image: cookie,
    url: "https://cookie-co.vercel.app/",
    alt: "Cookie.co website preview",
  },
];

const MobileProjectsFullscreen = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const containerRef = useRef(null);
  const cardRef = useRef(null);
  const touchStartX = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".mobile-projects-heading",
        { opacity: 0, y: -25 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (!cardRef.current) return;

    gsap.fromTo(
      cardRef.current,
      { opacity: 0, y: 14 },
      {
        opacity: 1,
        y: 0,
        duration: 0.35,
        ease: "power2.out",
      }
    );
  }, [activeIndex]);

  const goToProject = (index) => {
    setActiveIndex(
      (index + projects.length) % projects.length
    );
  };

  const handleTouchStart = (event) => {
    touchStartX.current = event.touches[0].clientX;
  };

  const handleTouchEnd = (event) => {
    if (touchStartX.current === null) return;

    const difference =
      event.changedTouches[0].clientX -
      touchStartX.current;

    if (Math.abs(difference) > 50) {
      goToProject(
        difference < 0 ? activeIndex + 1 : activeIndex - 1
      );
    }

    touchStartX.current = null;
  };

  const project = projects[activeIndex];

  return (
    <section
      ref={containerRef}
      className="flex h-screen min-h-[620px] w-full flex-col items-center justify-center overflow-hidden px-5 py-5 text-white"
    >
      {/* Developer identity and heading */}
      <div className="mobile-projects-heading mb-5 flex w-full max-w-md shrink-0 flex-col items-center">
        <span className="mb-3 text-center text-[9px] font-medium uppercase tracking-[0.22em] text-white/50">
          JUNIOR FULL-STACK WEB DEVELOPER
        </span>

        <h2
          className="text-4xl font-bold tracking-[-0.05em] text-transparent sm:text-5xl"
          style={{ WebkitTextStroke: "1px white" }}
        >
          PROJECTS
          <span
            className="text-white"
            style={{ WebkitTextStroke: "1px white" }}
          >
            .
          </span>
        </h2>

        <p className="mt-2 text-[9px] uppercase tracking-[0.2em] text-white/35">
          SELECTED WORK / 2026
        </p>
      </div>

      {/* Project card */}
      <div
        ref={cardRef}
        key={project.name}
        className="w-full max-w-md rounded-3xl border border-white/10 bg-white/[0.04] p-4 shadow-2xl"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Project preview */}
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit ${project.name} website`}
          className="group relative block overflow-hidden rounded-2xl"
        >
          <img
            src={project.image}
            alt={project.alt}
            draggable="false"
            className="aspect-[5/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          />

          <span className="absolute left-3 top-3 rounded-full border border-white/15 bg-black/50 px-3 py-1.5 text-[9px] tracking-wider text-white/90 backdrop-blur-sm">
            {project.category}
          </span>

          <span className="absolute bottom-3 right-3 rounded-full bg-black/60 px-3 py-2 text-[9px] tracking-wider backdrop-blur-sm">
            EXPLORE ↗
          </span>
        </a>

        {/* Project details */}
        <div className="flex flex-col gap-3 pt-4">
          <div className="flex items-start justify-between gap-3">
            <h3 className="min-w-0 text-lg font-semibold tracking-[0.08em]">
              {project.name}
            </h3>

            <span className="shrink-0 pt-1 text-xs tabular-nums text-white/45">
              {String(activeIndex + 1).padStart(2, "0")} /{" "}
              {String(projects.length).padStart(2, "0")}
            </span>
          </div>

          <p className="text-sm leading-relaxed text-white/65">
            {project.description}
          </p>

          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 inline-flex w-fit items-center gap-2 border-b border-white/40 pb-1.5 text-[10px] font-medium tracking-[0.15em] transition-colors hover:border-white hover:text-white/65"
          >
            VIEW LIVE PROJECT
            <span>↗</span>
          </a>
        </div>
      </div>

      {/* Carousel controls */}
      <div className="mt-5 flex shrink-0 items-center justify-center gap-5">
        <button
          type="button"
          onClick={() => goToProject(activeIndex - 1)}
          aria-label="Previous project"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition-colors hover:bg-white/10"
        >
          <svg
            viewBox="0 0 24 24"
            width="20"
            height="20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
        </button>

        <div
          className="flex items-center gap-2"
          aria-label="Choose project"
        >
          {projects.map((item, index) => (
            <button
              key={item.name}
              type="button"
              onClick={() => goToProject(index)}
              aria-label={`Show ${item.name}`}
              aria-current={
                activeIndex === index ? "step" : undefined
              }
              className={`h-2 rounded-full transition-all duration-300 ${
                activeIndex === index
                  ? "w-6 bg-white"
                  : "w-2 bg-white/30 hover:bg-white/60"
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={() => goToProject(activeIndex + 1)}
          aria-label="Next project"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition-colors hover:bg-white/10"
        >
          <svg
            viewBox="0 0 24 24"
            width="20"
            height="20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>
      </div>

      {/* Footer */}
      <p className="mt-5 shrink-0 text-[9px] tracking-[0.18em] text-white/30">
        DESIGN. DEVELOPMENT. EXPERIENCE.
      </p>
    </section>
  );
};

export default MobileProjectsFullscreen;

