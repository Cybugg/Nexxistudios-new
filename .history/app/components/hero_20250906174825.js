import Link from 'next/link';
import React from 'react'
import { FaWhatsapp } from 'react-icons/fa6';

function Hero() {
  return (
     <section className="h-full w-full flex items-center justify-center">
    <div className="">
    {/* <div className="text-3xl">
    Re-branding in Progress...
    </div> */}
    <div className="flex flex-col items-center justify-center gap-5 w-full">

{/* Main Text */}
<h1 className=" flex items-center justify-cente  w-full font-bold md:font-normal  text-4xl md:text-9xl ">
Currently Rebranding...
</h1>
{/* Sub-text */}
<p className="">
  Check back soon... we are bringing you something we think you might love ᡣ𐭩
</p> 
{/* CTA Button */}
<button className="py-3 px-5 text-xl rounded-full border cursor-pointer bg-black text-white z-50 flex gap">
  <Link href="https://wa.me/2349117169239?text=Hello%20I%20want%20a%20website%20or%20software%20for%20my%20business" target="_blank"
      rel="noopener noreferrer" >
<FaWhatsapp className='text-2xl' /> Chat on Whatsapp
      </Link> 
</button>
    </div>

    <div>

    </div>
    </div>
      </section>
  )
}

export default Hero;