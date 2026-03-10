// CursorTrail.jsx
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

// --- CONFIGURATION --- //
const TRAIL_COUNT = 6;         // Number of circles
const MAX_RADIUS = 25;         // Normal largest circle (closest to cursor)
const MIN_RADIUS = 8;          // Normal smallest circle (farthest)
const HOVER_RADIUS = 40;       // Circle size when hovering text
const LAG_SPEED = 0.2;         // How fast the circles follow

const CursorTrail = () => {
  const trailRefs = useRef([]);
  const [isDesktop, setIsDesktop] = useState(false);

  // --- Detect desktop --- //
  useEffect(() => {
    const checkMouse = () => setIsDesktop(window.innerWidth > 1023);
    checkMouse();
    window.addEventListener("resize", checkMouse);
    return () => window.removeEventListener("resize", checkMouse);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    let mousePos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

    // Track mouse
    const onMouseMove = (e) => {
      mousePos.x = e.clientX;
      mousePos.y = e.clientY;
    };
    window.addEventListener("mousemove", onMouseMove);

    // Initialize circle positions
    const positions = Array.from({ length: TRAIL_COUNT }).map(() => ({
      x: mousePos.x,
      y: mousePos.y,
    }));

    const tick = () => {
      trailRefs.current.forEach((circle, i) => {
        if (!circle) return;

        // First circle follows mouse, others follow previous circle
        const target = i === 0 ? mousePos : positions[i - 1];
        positions[i].x += (target.x - positions[i].x) * LAG_SPEED;
        positions[i].y += (target.y - positions[i].y) * LAG_SPEED;

        // Check if hovering over any text
        const elements = document.elementsFromPoint(positions[i].x, positions[i].y);
        const hoveringText = elements.some((el) => el.classList.contains("trail-text"));

        // Calculate target size
        const baseSize = MAX_RADIUS - ((MAX_RADIUS - MIN_RADIUS) / TRAIL_COUNT) * i;
        const targetSize = hoveringText ? HOVER_RADIUS : baseSize;

        // Animate size smoothly
        gsap.to(circle, { width: targetSize, height: targetSize, duration: 0.15, ease: "power2.out" });

        // Position circle (centered)
        gsap.set(circle, {
          x: positions[i].x - targetSize / 2,
          y: positions[i].y - targetSize / 2,
        });

        // Text effect is now handled by mix-blend-difference in CSS
      });
    };

    gsap.ticker.add(tick);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      gsap.ticker.remove(tick);
    };
  }, [isDesktop]);

  if (!isDesktop) return null;

  return (
    <>
      {Array.from({ length: TRAIL_COUNT }).map((_, i) => (
        <div
          key={i}
          ref={(el) => (trailRefs.current[i] = el)}
          className="pointer-events-none fixed rounded-full bg-white z-50 mix-blend-difference"
          style={{
            width: MIN_RADIUS,
            height: MIN_RADIUS,
            top: 0,
            left: 0,
          }}
        />
      ))}
    </>
  );
};

export default CursorTrail;



