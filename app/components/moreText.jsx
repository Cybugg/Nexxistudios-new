"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import useThemeStore from "@/app/store/useThemeStore";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

function MoreText() {
  const textRef = useRef(null);
  const { setDarkMode } = useThemeStore();

  useGSAP(() => {
    const el = textRef.current;

    gsap.fromTo(
      el,
      { 
        
      },
      { 
  
        scrollTrigger: {
        
          onEnter: () => setDarkMode(true),
          onEnterBack: () => setDarkMode(true),
        },
      }
    );
  }, [setDarkMode]);

  return (
    <section className="relative w-full  py-12 pb-56 flex flex-col items-center justify-center bg-black ">
      <h1
        id="heading-more"
        ref={textRef}
        className="text-white text-6xl text-center font-clashGrotesk-medium font-medium leading-none select-none"
        style={{
          willChange: "transform, font-size, opacity, letter-spacing",
        }}
      >
        & More ...
      </h1>
      <button className="cursor-pointer bg-white font-bold rounded-4xl text-black px-5 py-3 my-8"><Link href={"/#contactUs"}>Request Case Studies </Link> {">"}</button>
    </section>
  );
}

export default MoreText;
