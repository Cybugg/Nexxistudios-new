"use client"
import { useGSAP } from "@gsap/react";
import TopNav from "./components/topNav";
import gsap from 'gsap';
import { useRef } from "react";
import Particles from "./Effects/Particles";
import Hero from "./components/hero";




export default function Home() {
  const boxRef = useRef(null);
  useGSAP(() => {
  
    gsap.to("#progress", {
      width:"95%",
      duration:3,
      ease: 'power2.out',
    });
  },);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] min-h-screen p-3 px-5  sm:p-5 bg-white text-black font-clashGrotesk">
      <main className="flex flex-col  row-start-2 items-center mx-auto container" >
  <TopNav />
    <Hero />
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
       
      </footer>
    </div>
  );
}
