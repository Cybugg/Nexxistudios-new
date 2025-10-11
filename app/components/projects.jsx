"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useThemeStore from '@/app/store/useThemeStore'

gsap.registerPlugin(ScrollTrigger);

export default function ScrollVideo() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const { darkMode, toggleDarkMode, setDarkMode } = useThemeStore()
  const frameCount = 134;
  const currentFrame = (index) =>
    `/frames/frame_${index.toString().padStart(4, "0")}.jpg`;

  const images = [];
  const frame = { current: 0 };

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const container = containerRef.current;

    // canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // preload images
    for (let i = 1; i <= frameCount; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      images.push(img);
    }

   const render = () => {
  const img = images[Math.round(frame.current)];
  if (!img) return;

  const canvas = canvasRef.current;
  const context = canvas.getContext("2d");

  // Fit to width, maintain aspect ratio (no side cropping)
  const scale = canvas.width / img.width;
  const scaledHeight = img.height * scale;

  const x = 0;
  const y = (canvas.height - scaledHeight) / 2; // center vertically

  context.clearRect(0, 0, canvas.width, canvas.height);
  context.drawImage(img, x, y, canvas.width, scaledHeight);
};

    images[0].onload = render;

    // Animation
    const tl = gsap.timeline({
      scrollTrigger: {
  trigger: container,
  start: "top top",
  end: `+=${frameCount * 20}`,
  scrub: 1,
  pin: true,
  anticipatePin: 1,
  pinSpacing: false,
  onEnter: () => {
    canvas.style.position = "fixed";
    container.style.backgroundColor = "black";


  },
  onLeave: () => {
    canvas.style.position = "relative";
    container.style.backgroundColor = "transparent";
        setDarkMode(true);
  },
  onEnterBack: () => {
    canvas.style.position = "fixed";
    container.style.backgroundColor = "black";
    setDarkMode(true);
  },
  onLeaveBack: () => {
    canvas.style.position = "relative";
    container.style.backgroundColor = "transparent";
  },
},
    });

    tl.to(frame, {
      current: frameCount - 1,
      ease: "none",
      onUpdate: render,
    });

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      render();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      tl.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <>
      {/* Video Scroll Section */}
      <section
        ref={containerRef}
        className="relative w-full  mb-0 "
        style={{ height: "350vh", backgroundColor: "black" }}
      >
        <canvas
          ref={canvasRef}
         
          className="block w-full object-cover bg-black"
        />
      </section>

      {/* Projects Showcase Section */}
      <section className="w-full h-screen mt-0  text-white flex items-center justify-center bg-black">
        <h1 className="text-4xl font-bold">Next Section</h1>
      </section>
    </>
  );
}
