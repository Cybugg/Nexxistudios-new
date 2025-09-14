"use client"
import { useGSAP } from "@gsap/react";
import TopNav from "./components/topNav";
import gsap from 'gsap';
import { useRef } from "react";
import Particles from "./Effects/Particles";
import Hero from "./components/hero";
import About from "./components/about";
import Services from "./components/services";
import Pricing from "./components/pricing";
import Footer from "./components/footer";




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
    <div className="pt-8 min-h-screen  bg-white text-black font-normal font-clashGrotesk">
      <main className="flex flex-col px-5  md:px-0  row-start-2 items-center mx-auto md:mx-[50px]  xl:mx-[120px]" >
        <TopNav />
        <Hero />
        <About />
        <Services />
        <Pricing />
      </main>
        <Footer />
    </div>
  );
}
