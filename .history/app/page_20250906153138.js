"use client"
import { useGSAP } from "@gsap/react";
import TopNav from "./components/topNav";
import gsap from 'gsap';
import { useRef } from "react";
import Particles from "./Effects/Particles";




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
      <main className="flex flex-col gap-[32px] row-start-2 items-center container mx-auto" style={{ width: '100%',height: '600px', position: 'relative' }}>
        <div className="absolute w-full h-full">
              <Particles particleColors={['#000000', '#000000']}
    particleCount={200}
    particleSpread={10}
    speed={0.1}
    particleBaseSize={100}
    moveParticlesOnHover={true}
    alphaParticles={false}
    disableRotation={false}
  />
        </div>
    
      {/* Nav section */}
  <TopNav />
      {/* Hero */}
      <section className="h-full w-full flex items-center justify-center">
    <div className="flex flex-col gap-5">
    {/* <div className="text-3xl">
    Re-branding in Progress...
    </div> */}
    <div className=">

{/* Text */}
<div className="absolute text-black flex items-center justify-center top-10  w-full fontbold  text-8xl">
Currently Rebranding
</div>
    </div>

    <div>

    </div>
    </div>
      </section>
    
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
       
      </footer>
    </div>
  );
}
