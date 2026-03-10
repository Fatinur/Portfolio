import React, {  useRef, } from 'react'
import { gsap } from "gsap";

const Line = ({ topPosition = "-10vh" }) => {
  const pathRef = useRef(null);

  const handleMove = (e) => {
    const bounds = e.currentTarget.getBoundingClientRect();
    const y = e.clientY - bounds.top;
    const x = e.clientX - bounds.left;
    gsap.to(pathRef.current, {
      duration: 0.3,
      attr: { d: `M 10 70 Q ${x} ${y} 990 70` },
      ease: "bounce.out(1, 0.3)"
    });
  };

  const handleLeave = () => {
    gsap.to(pathRef.current, {
      duration: 0.8,
      attr: { d: `M 10 70 Q 500 70 990 70` },
      ease: "elastic.out(1.5, 0.2)"
    });
  };

  return (
    <div className="relative w-full h-auto">
    <div 
    style={{top:topPosition}}
      className="bg-transparent absolute "
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      <svg
        viewBox="0 0 1000 140"
        width="100%"
        height="140"
        className="pointer-events-none"
      >
        <path 
          ref={pathRef}
          d="M 10 70 Q 500 70 990 70"
          stroke="white"
          strokeWidth="3"
          fill="transparent"
        />
      </svg>
    </div>
    </div>
  );
};

export default Line