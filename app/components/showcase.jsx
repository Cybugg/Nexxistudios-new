"use client";

import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  { id: 1, title: "Business & Corporate", subtitle: "Creative website that works", video: "/videos/lexora.webm", poster: "/images/1.png" },
  { id: 2, title: "Creative & Personal", subtitle: "Showcase your portfolio and expand reach", video: "/videos/port.webm", poster: "/images/2.png" },
  { id: 3, title: "E-Commerce", subtitle: "Sell anything, anywhere", video: "/videos/noctura.webm", poster: "/images/3.png" },
  { id: 4, title: "Startup", subtitle: "Your startup deserves the best presence", video: "/videos/ai_build.webm", poster: "/images/4.png" },
  { id: 5, title: "SaaS & Web3 Software", subtitle: "Smart, scalable digital solutions", video: "/videos/saas.webm", poster: "/images/5.png" },
  { id: 6, title: "Creative Agency", subtitle: "Your ideas, beautifully crafted", video: "/videos/creative.webm", poster: "/images/6.png" },
];

function ProjectCard({ project }) {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.5, once: false });

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
      className="min-w-[85vw] sm:min-w-[60vw] md:min-w-[50vw] lg:min-w-[38vw] flex-shrink-0 relative flex flex-col items-center justify-center p-4 md:p-6"
      animate={{ y: inView ? -20 : 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Video container with consistent aspect ratio */}
      <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg border border-white/10 bg-black">
        <motion.video
          src={project.video}
          poster={project.poster}
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
          style={{
            filter: inView ? "grayscale(0%)" : "grayscale(100%)",
            transition: "filter 0.8s ease, transform 0.5s ease",
          }}
        />
        <motion.div
          className="absolute bottom-0 bg-gradient-to-t from-black/80 to-transparent text-white text-center w-full py-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-lg md:text-xl font-semibold">{project.title}</h2>
          <p className="text-xs md:text-sm opacity-80">{project.subtitle}</p>
        </motion.div>
      </div>
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

      container.style.overflow = "hidden";
      container.style.position = "relative";
      container.style.zIndex = 1;

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
        },
      });

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
    <section
      ref={containerRef}
      className="relative w-screen h-screen bg-black text-white flex items-center justify-start overflow-hidden"
    >
      <div
        ref={scrollerRef}
        className="flex items-center gap-12 md:gap-20 px-10 md:px-20 will-change-transform"
      >
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </section>
  );
}
