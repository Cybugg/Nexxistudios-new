import Image from 'next/image';
import React from 'react'
import logo from "@/assets/images/logo-light.svg"
import Link from 'next/link';
import { FaWhatsapp } from "react-icons/fa6";




function TopNav() {
  return (
    <div className="flex justify-between items-center w-full  ">
    {/* Logo */}
    <div className='w-full z-80'>
      <Image src={logo} width={48} className='w-[48px] h-[46px] object-cover' height={46} alt="nexxistudios's logo" />
    </div>
    <div className="flex gap-12 items-center justify-center z-80">
      
      <div className="flex gap-8 items-center justify-center">
 <Link href="https://wa.me/2349117169239?text=Hello%20I%20want%20a%20website%20or%20software%20for%20my%20business" target="_blank"
      rel="noopener noreferrer" className=" hover:border-b h-[60.5px] ease-in-out border-b border-b-white duration-100  transition-all text-[19px] flex items-center font-semibold justify-center font-clashGrotesk-Light hover:border-b-black">
 <p className='hidden md:block leading-normal'>About</p>
      </Link> 
  <Link href="https://wa.me/2349117169239?text=Hello%20I%20want%20a%20website%20or%20software%20for%20my%20business" target="_blank"
      rel="noopener noreferrer" className=" hover:border-b h-[60.5px] ease-in-out border-b border-b-white  duration-100 0 transition-all text-[19px] flex items-center font-semibold justify-center font-clashGrotesk-Light hover:border-b-black">
 <p className='hidden md:block leading-normal'>Services</p>
      </Link> 
  <Link href="https://wa.me/2349117169239?text=Hello%20I%20want%20a%20website%20or%20software%20for%20my%20business" target="_blank"
      rel="noopener noreferrer" className=" hover:border-b h-[60.5px] ease-in-out border-b border-b-white duration-100  transition-all text-[19px] flex items-center font-bold justify-center font-clashGrotesk-Light hover:border-b-black">
 <p className='hidden md:block leading-normal'>Pricing</p>
      </Link> 
      </div>
 

  <Link href="https://wa.me/2349117169239?text=Hello%20I%20want%20a%20website%20or%20software%20for%20my%20business" target="_blank"
      rel="noopener noreferrer" className="py-4 px-5 text-xl font-clashGrotesk leading-4 w-full  rounded-[785px] h-[53px] justify-center border cursor-pointer flex gap-[2px] items-center">
          <div className="flex gap-[2px] items-center h-[19px] overflow-hidden">
                <span className='overflow-hidden relative inline-block text-[19px] char'>C</span>
  <span className='overflow-hidden relative inline-block text-[19px] char'>o</span>
   <span className='overflow-hidden relative inline-block text-[19px] char'>n</span>
    <span className='overflow-hidden relative inline-block text-[19px] char'>t</span>
     <span className='overflow-hidden relative inline-block text-[19px] char'>a</span>
      <span className='overflow-hidden relative inline-block text-[19px] char'>c</span>
       <span className='overflow-hidden relative inline-block text-[19px] char'>t</span>
        <span className='overflow-hidden relative inline-block text-[19px] char'></span>
         <span className='overflow-hidden relative inline-block text-[19px] char'>U</span>
          <span className='overflow-hidden relative inline-block text-[19px] char'>s</span>
          </div>

          
      </Link> 
    </div>
    
  
  </div>
  )
}

export default TopNav;