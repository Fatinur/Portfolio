


import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

import headphone from "../assets/audira.png";
import cookie from "../assets/cookie.png";
import rajshahiRentals from "../assets/rajshahi-rentals.png";

import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    name: "AUDIRA",
    description:
      "A premium headphone storefront concept featuring immersive product visuals and smooth interactions to help brands create a strong first impression.",
    image: headphone,
    url: "https://audira-nine-eta.vercel.app/",
    alt: "Audira headphone storefront",
  },
  {
    name: "COOKIE.CO",
    description:
      "A modern cookie shop concept combining warm branding, appealing product presentation, and intuitive navigation to help small businesses build a memorable online presence.",
    image: cookie,
    url: "https://cookie-co.vercel.app/",
    alt: "Cookie.co website",
  },
  {
    name: "RAJSHAHI RENTALS",
    description:
      "A rental platform built for Rajshahi, helping people discover rooms, flats, and hostels through property filters and a streamlined listing experience.",
    image: rajshahiRentals,
    url: "https://rajshahi-rentals.vercel.app/",
    alt: "Rajshahi Rentals website",
  },
];

const MobileProjectsFullscreen = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const containerRef = useRef(null);
  const cardRef = useRef(null);
  const touchStartX = useRef(null);

  // Animate the section into view and clean up on unmount.
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".mobile-projects-heading",
        { opacity: 0, y: -30 },
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

  // Animate the card when the selected project changes.
  useEffect(() => {
    if (!cardRef.current) return;

    gsap.fromTo(
      cardRef.current,
      { opacity: 0, y: 16 },
      {
        opacity: 1,
        y: 0,
        duration: 0.35,
        ease: "power2.out",
      }
    );
  }, [activeIndex]);

  const goToProject = (index) => {
    setActiveIndex((index + projects.length) % projects.length);
  };

  const handleTouchStart = (event) => {
    touchStartX.current = event.touches[0].clientX;
  };

  const handleTouchEnd = (event) => {
    if (touchStartX.current === null) return;

    const difference =
      event.changedTouches[0].clientX - touchStartX.current;

    if (Math.abs(difference) > 50) {
      if (difference < 0) {
        goToProject(activeIndex + 1);
      } else {
        goToProject(activeIndex - 1);
      }
    }

    touchStartX.current = null;
  };

  const project = projects[activeIndex];

  return (
    <section
      ref={containerRef}
      className="h-screen w-full overflow-hidden flex flex-col items-center justify-center px-5 text-white"
    >
      {/* Heading */}
      <h2
        className="mobile-projects-heading shrink-0 mb-5 text-4xl font-bold text-transparent"
        style={{ WebkitTextStroke: "1px white" }}
      >
        PROJECTS
      </h2>

      {/* Carousel card */}
      <div
        ref={cardRef}
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
          className="block overflow-hidden rounded-2xl"
        >
          <img
            src={project.image}
            alt={project.alt}
            draggable="false"
            className="aspect-[5/3] w-full object-cover"
          />
        </a>

        {/* Project details */}
        <div className="flex flex-col gap-3 pt-4">
          <div className="flex items-center justify-between gap-3">
            <h3 className="text-lg font-semibold tracking-[0.15em]">
              {project.name}
            </h3>

            <span className="shrink-0 text-xs text-white/50">
              {String(activeIndex + 1).padStart(2, "0")} /{" "}
              {String(projects.length).padStart(2, "0")}
            </span>
          </div>

          <p className="text-sm leading-relaxed text-white/75">
            {project.description}
          </p>

          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 w-fit text-xs font-medium tracking-wider underline underline-offset-4 transition-colors hover:text-white/60"
          >
            VISIT PROJECT ↗
          </a>
        </div>
      </div>

      {/* Carousel controls */}
      <div className="mt-5 flex items-center justify-center gap-6">
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

        <div className="flex items-center gap-2" aria-label="Choose project">
          {projects.map((item, index) => (
            <button
              key={item.name}
              type="button"
              onClick={() => goToProject(index)}
              aria-label={`Show ${item.name}`}
              aria-current={activeIndex === index ? "step" : undefined}
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
    </section>
  );
};

export default MobileProjectsFullscreen;
