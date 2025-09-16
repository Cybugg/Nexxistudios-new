"use client"

import TopNav from "./components/topNav";
import Particles from "./Effects/Particles";
import Hero from "./components/hero";
import About from "./components/about";
import Services from "./components/services";
import Pricing from "./components/pricing";
import Footer from "./components/footer";




export default function Home() {

  return (
    <div className="pt-8 min-h-screen relative  bg-white text-black font-normal font-clashGrotesk">
      
                 <div className="absolute w-full h-screen ">
              <Particles particleColors={['#000000', '#000000']}
    particleCount={300}
    particleSpread={10}
    speed={0.1}
    particleBaseSize={100}
    moveParticlesOnHover={true}
    alphaParticles={false}
    disableRotation={false}
  />

      </div>
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
