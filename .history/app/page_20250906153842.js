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
      <main className="flex flex-col  row-start-2 items-center mx-auto container" >
      
      {/* Nav section */}
  <TopNav />
      {/* Hero */}
      <section className="h-full w-full flex items-center justify-center">
    <div className="">
    {/* <div className="text-3xl">
    Re-branding in Progress...
    </div> */}
    <div className="flex items-center justify-center w-full">

{/* Main Text */}
<h1 className=" text-black flex items-center justify-center  w-full font-bold  text-8xl">
Currently Rebranding
</h1>
{/* Sub-text */}
<p>
  Check back s
</p>
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
