"use client";

import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  { id: 1, title: "Business & Corperate", subtitle: "Creative Agency", video: "/videos/lexora.webm" ,poster:"/images/1.png"},
  { id: 2, title: "Creative & Personal", subtitle: "3D Motion Showcase", video: "/videos/port.webm" ,poster:"/images/2.png"},
  { id: 3, title: "E-Commerce", subtitle: "Full Stack Project", video: "/videos/noctura.webm" ,poster:"/images/3.png"},
  { id: 4, title: "Startup", subtitle: "AI Simulation", video: "/videos/ai_build.webm" ,poster:"/images/4.png"},
  { id: 5, title: "SaaS & Web3 Software", subtitle: "AI Simulation", video: "/videos/saas.webm" ,poster:"/images/5.png"},
  { id: 6, title: "Creative Agency", subtitle: "AI Simulation", video: "/videos/creative.webm" ,poster:"/images/6.png"},
];

function ProjectCard({ project }) {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.6, once: false });

  useEffect(() => {
    const video = ref.current?.querySelector("video");
    if (video) {
      if (inView) video.play();
      else video.pause();
    }
  }, [inView]);

  return (
    <motion.div
      ref={ref}
      className="min-w-[70vw] md:min-w-[60vw] lg:min-w-[45vw] flex-shrink-0 relative flex flex-col items-center justify-center p-6"
      animate={{ y: inView ? -40 : 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.video
        src={project.video}
        poster={project.poster}
        loop
        muted
        playsInline
        className="rounded-2xl w-64 lg:w-[600px] h-96 lg:h-96 shadow-lg object-cover lg:object-fill lg:object-fit aspect-video"
        style={{ filter: inView ? "grayscale(0%)" : "grayscale(100%)", transition: "filter 0.8s ease" }}
      />
      <motion.div
        className="absolute bottom-0 bg-gradient-to-t from-black/70 to-transparent text-white text-center w-full py-4 rounded-b-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-2xl font-bold bg-black text-white">{project.title}</h2>
        <p className="text-sm opacity-80 bg-black text-white">{project.subtitle}</p>
      </motion.div>
    </motion.div>
  );
}

export default function HorizontalProjects() {
  const containerRef = useRef(null);
  const scrollerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const scroller = scrollerRef.current;

    const setupScroll = () => {
      const scrollWidth = scroller.scrollWidth - window.innerWidth;
      ScrollTrigger.getAll().forEach((t) => t.kill());

      // make sure the container doesn't clip other elements
      container.style.overflow = "hidden";
      container.style.zIndex = 1;
      container.style.position = "relative";

      // horizontal scroll logic
      gsap.to(scroller, {
        x: () => -scrollWidth,
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: () => `+=${scrollWidth}`,
          scrub: true,
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onLeave: () => {
            // release and ensure next section is visible
            container.style.overflow = "visible";
            container.style.zIndex = 0;
          },
          onEnterBack: () => {
            container.style.overflow = "hidden";
            container.style.zIndex = 1;
          },
        },
      });

      // after setup, refresh all ScrollTriggers (so other gsap animations resume)
      ScrollTrigger.refresh();
    };

    setupScroll();
    window.addEventListener("resize", setupScroll);

    return () => {
      window.removeEventListener("resize", setupScroll);
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <>
      {/* Horizontally Scrolling Projects */}
      <section
        ref={containerRef}
        className="relative w-screen h-screen bg-black text-white flex items-center justify-start"
      >
        <div
          ref={scrollerRef}
          className="flex items-center gap-10 px-20 will-change-transform"
        >
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
     
      </section>
    </>
  );
}



