"use clinet"

import React, { useState,useRef,useEffect } from 'react'
import gsap from 'gsap';
import Link from 'next/link';

function RippleButton({text, hrefLink}) {
    
  const containerRef = useRef(null);
  const tlRef = useRef(null);

  useEffect(() => {
  const chars = containerRef.current.querySelectorAll(".char");
  gsap.set(chars, { y: -19 }); // baseline
  return () => {
    if (tlRef.current) tlRef.current.kill();
    gsap.killTweensOf(chars);
  };
}, []);

const handleMouseEnter = () => {
  if (tlRef.current) tlRef.current.kill();
  const chars = containerRef.current.querySelectorAll(".char");

  const tl = gsap.timeline();
  tl.fromTo(
    chars,
    {
      y: (i) => (i % 2 === 0 ? -19 - 21 : -19 + 21), // even: above, odd: below
    },
    {
      y: -19,
      ease: "power2.out",
      stagger: 0.03,
      duration: 0.35,
    }
  );

  tlRef.current = tl;
};

const handleMouseLeave = () => {
  if (tlRef.current) tlRef.current.kill();
  const chars = containerRef.current.querySelectorAll(".char");

  const tl = gsap.timeline();
  tl.to(chars, {
    y: (i) => (i % 2 === 0 ? -19 - 21 : -19 + 21), // even: go back up, odd: go back down
    stagger: 0.03,
    duration: 0.25,
  }).to(
    chars,
    {
      y: -19,
      ease: "power2.out",
      stagger: 0.03,
      duration: 0.25,
    },
    "-=0.15" // overlap return
  );

  tlRef.current = tl;
};


  return (
     <Link
      href={hrefLink}
      target="_blank"
      rel="noopener noreferrer"
      className="py-4 px-5 text-xl font-clashGrotesk leading-4 rounded-[785px] h-[53px] justify-center border cursor-pointer flex items-center"
      
    >
      <div
        ref={containerRef}
        className="flex gap-[2px] flex-nowrap overflow-hidden  h-[19px]" onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      >
        {[...text].map((char, ind) => (
          <div
            key={ind}
            className={`char ${(ind % 2) === 0 ? "char1" : "char2"} flex flex-col items-center justify-start h-[57px]`}
            style={{ transform: "translateY(-19px)" }}
          >
            <span className="text-[19px] leading-none">
              {char === " " ? "\u00A0" : char}
            </span>
            <span className="text-[19px] leading-none">
              {char === " " ? "\u00A0" : char}
            </span>
            <span className="text-[19px] leading-none">
              {char === " " ? "\u00A0" : char}
            </span>
          </div>
        ))}
      </div>
    </Link>
  )
}

export default RippleButton;