"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollVideo() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
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
      const scale = Math.max(
        canvas.width / img.width,
        canvas.height / img.height
      );
      const x = canvas.width / 2 - (img.width / 2) * scale;
      const y = canvas.height / 2 - (img.height / 2) * scale;
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(img, x, y, img.width * scale, img.height * scale);
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
        onEnter: () => {
          canvas.style.position = "fixed";
          container.style.backgroundColor = "black";
        },
        onLeave: () => {
          canvas.style.position = "relative";
          container.style.backgroundColor = "transparent";
        },
        onEnterBack: () => {
          canvas.style.position = "fixed";
          container.style.backgroundColor = "black";
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
        className="relative w-full"
        style={{ height: "400vh", backgroundColor: "black" }}
      >
        <canvas
          ref={canvasRef}
          className="block w-full h-screen object-cover"
        />
      </section>

      {/* Next Section */}
      <section className="w-full h-screen bg-white flex items-center justify-center text-black">
        <h1 className="text-4xl font-bold">Next Section</h1>
      </section>
    </>
  );
}
