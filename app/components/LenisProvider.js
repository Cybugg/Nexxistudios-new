"use client";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);
export default function LenisProvider({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
       duration: 1.2,             // how long the scroll animation lasts (higher = smoother, but slower)
  smooth: true,              // enable smoothing globally
  smoothWheel: true,         // smooth out mouse wheel scrolling
  smoothTouch: true,         // smooth out touch scrolling (mobile)
  wheelMultiplier: 1.1,      // tweak sensitivity of mouse wheel
  touchMultiplier: 1.3,      // tweak sensitivity for touch input
  gestureOrientation: "vertical", // scroll direction
  easing: (t) => 1 - Math.pow(2, -10 * t), 
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
       ScrollTrigger.update();
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
