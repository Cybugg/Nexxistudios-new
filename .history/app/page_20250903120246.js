"use client"
import { useGSAP } from "@gsap/react";
import TopNav from "./components/topNav";
import gsap from 'gsap';
import { useRef } from "react";




export default function Home() {
  const boxRef = useRef(null);
  useGSAP(() => {
  
    gsap.to("#progress", {
      width:"95%",
      duration:3,
      ease: 'power2.out',
      repeat
    });
  },);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] min-h-screen p-3 px-5  sm:p-5 bg-white text-black font-clashGrotesk">
      <main className="flex flex-col gap-[32px] row-start-2 items-center container mx-auto">
      {/* Nav section */}
  <TopNav />
      {/* Hero */}
      <section className="h-full w-full flex items-center justify-center">
    <div className="flex flex-col gap-5">
    {/* <div className="text-3xl">
    Re-branding in Progress...
    </div> */}
    <div className="w-96 border-2  h-36 relative rounded-full overflow-hidden" ref={boxRef}>
<div className="w-0 h-full bg-black progress rounded-s-full rounded-tb-full " id="progress" >

</div>
{/* Text */}
<div className="absolute flex items-center justify-center top-10  w-full h-hull text-white text-4xl">
  Re-Branding...
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
