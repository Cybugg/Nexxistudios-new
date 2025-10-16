"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useThemeStore from '@/app/store/useThemeStore'
import InfiniteScroll from './infiniteScroll';
import ChromaGrid from './chromaGrid'
import LogoLoop from './LogoLoop';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiVercel, SiGithub, SiDocker, SiPrisma, SiSupabase, SiStripe } from 'react-icons/si';
import HorizontalProjects from "./showcase";
import { useGSAP } from "@gsap/react";


const techLogos = [
 { node: <SiReact />, title: 'React', href: 'https://react.dev' },
  { node: <SiNextdotjs />, title: 'Next.js', href: 'https://nextjs.org' },
  { node: <SiTypescript />, title: 'TypeScript', href: 'https://www.typescriptlang.org' },
  { node: <SiTailwindcss />, title: 'Tailwind CSS', href: 'https://tailwindcss.com' },
  { node: <SiVercel />, title: 'Vercel', href: 'https://vercel.com' },
  { node: <SiGithub />, title: 'GitHub', href: 'https://github.com' },
  { node: <SiDocker />, title: 'Docker', href: 'https://www.docker.com' },
  { node: <SiPrisma />, title: 'Prisma', href: 'https://www.prisma.io' },
  { node: <SiSupabase />, title: 'Supabase', href: 'https://supabase.com' },
  { node: <SiStripe />, title: 'Stripe', href: 'https://stripe.com' }
];

const items = [
    {
      video: "https://www.w3schools.com/html/mov_bbb.mp4",
      title: "Alex Rivera",
      subtitle: "Full Stack Developer",
      handle: "@alexrivera",
      borderColor: "#4F46E5",
      gradient: "linear-gradient(145deg,#4F46E5,#000)",
      url: "https://github.com/",
    },
    {
      video: "https://www.w3schools.com/html/movie.mp4",
      title: "Jordan Chen",
      subtitle: "DevOps Engineer",
      handle: "@jordanchen",
      borderColor: "#10B981",
      gradient: "linear-gradient(210deg,#10B981,#000)",
      url: "https://linkedin.com/in/",
    },
    {
      video: "https://www.w3schools.com/html/mov_bbb.mp4",
      title: "Morgan Blake",
      subtitle: "UI/UX Designer",
      handle: "@morganblake",
      borderColor: "#F59E0B",
      gradient: "linear-gradient(165deg,#F59E0B,#000)",
      url: "https://dribbble.com/",
    },
    {
      video: "https://www.w3schools.com/html/movie.mp4",
      title: "Casey Park",
      subtitle: "Data Scientist",
      handle: "@caseypark",
      borderColor: "#EF4444",
      gradient: "linear-gradient(195deg,#EF4444,#000)",
      url: "https://kaggle.com/",
    },
    {
      video: "https://www.w3schools.com/html/mov_bbb.mp4",
      title: "Sam Kim",
      subtitle: "Mobile Developer",
      handle: "@thesamkim",
      borderColor: "#8B5CF6",
      gradient: "linear-gradient(225deg,#8B5CF6,#000)",
      url: "https://github.com/",
    },
    {
      video: "https://www.w3schools.com/html/movie.mp4",
      title: "Tyler Rodriguez",
      subtitle: "Cloud Architect",
      handle: "@tylerrod",
      borderColor: "#06B6D4",
      gradient: "linear-gradient(135deg,#06B6D4,#000)",
      url: "https://aws.amazon.com/",
    },
  ];


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
// setDarkMode(true);

  },
  onLeave: () => {
    canvas.style.position = "relative";
    container.style.backgroundColor = "transparent";
        setDarkMode(true);
  },
  onEnterBack: () => {
    canvas.style.position = "fixed";
    container.style.backgroundColor = "black";
    // setDarkMode(true);
  },
  onLeaveBack: () => {
    canvas.style.position = "relative";
    container.style.backgroundColor = "transparent";
    // setDarkMode(true);
  },
},
    });

    tl.to(frame, {
      current: frameCount - 1,
      ease: "none",
      onUpdate: render,
    });

   let resizeTimeout;
const handleResize = () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(() => {
    // reload only if size changes meaningfully
    const widthDiff = Math.abs(window.innerWidth - canvas.width);
    const heightDiff = Math.abs(window.innerHeight - canvas.height);

    if (widthDiff > 100 || heightDiff > 100) {
      window.location.reload();
    }
  }, 400);
};

window.addEventListener("resize", handleResize);


    return () => {
      window.removeEventListener("resize", handleResize);
      tl.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);


   useGSAP(()=>{
          gsap.to("#heading-projects",{
            scrollTrigger:{
          trigger:"#heading-projects",
            scrub:true,
            start:"bottom bottom",
            end:"top 20%",
             onLeave:()=>setDarkMode(true),
            onEnter:()=>setDarkMode(true),
            onEnterBack:()=>setDarkMode(true),
            onLeaveBack:()=>setDarkMode(true),
    }
          })
  
      },[setDarkMode, darkMode])
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

      {/* Logo loop */}
      <section className="w-full  mt-0 pb-56  text-white flex items-center justify-center bg-black">
        <div style={{ height: '200px', position: 'relative', overflow: 'hidden'}}>
      <LogoLoop
        logos={techLogos}
        speed={120}
        direction="left"
        logoHeight={48}
        gap={40}
        pauseOnHover
        scaleOnHover
        fadeOut
        fadeOutColor="#AAAAAA"
        ariaLabel="Technology partners"
      />
    </div>
    
      </section>
         <div className="flex flex-col items-center justify-center text-white z-80 bg-black px-96 w-[70%]" id="heading-projects">
              <div className="text-[51px] lg:text-[80px]  font-clashGrotesk-medium font-medium text-center">Project Reels</div>
        <p className="text-[24px]  lg:text-[32px] font-clashGrotesk-medium font-medium text-center">Featuring categories of projects</p  >
        </div>
    
      <HorizontalProjects />
    </>
  );
}
