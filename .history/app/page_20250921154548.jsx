"use client"

import TopNav from "./components/topNav";
import Particles from "./Effects/Particles";
import Hero from "./components/hero";
import About from "./components/about";
import Services from "./components/services";
import Pricing from "./components/pricing";
import Footer from "./components/footer";
import Loader3D from "./components/Loader3d";




export default function Home() {

  return (
    <div className="pt-12 min-h-screen relative  bg-white text-black font-normal font-clashGrotesk">
      
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
      <main className="flex flex-col px-5  row-start-2 items-center mx-auto md:px-[50px]  xl:px-[120px]" >
        <Loader3D 
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
