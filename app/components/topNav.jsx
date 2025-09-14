"use client"

import Image from 'next/image';
import React, { useState,useRef,useEffect } from 'react'
import logo from "@/assets/images/logo-light.svg"
import Link from 'next/link';
import RippleButton from '../Effects/rippleButton';


function TopNav() {
  



  return (
    <div className="flex justify-between items-center w-full  ">
    {/* Logo */}
    <div className='w-full z-80'>
      <Image src={logo} width={48} className='w-[48px] h-[46px] object-cover' height={46} alt="nexxistudios's logo" />
    </div>
    <div className="flex gap-12 items-center justify-center z-80">
      
      <div className="flex gap-8 items-center justify-center">
           <Link href="/" 
      rel="noopener noreferrer" className=" hover:border-b h-[60.5px] ease-in-out border-b border-b-white duration-100  transition-all text-sm md:text-[19px] flex items-center font-semibold justify-center font-clashGrotesk-Light hover:border-b-black">
 <p className='hidden md:block leading-normal'>Home</p>
      </Link> 
 <Link href="/#heading-about" 
      rel="noopener noreferrer" className=" hover:border-b h-[60.5px] ease-in-out border-b border-b-white duration-100  transition-all text-sm md:text-[19px] flex items-center font-semibold justify-center font-clashGrotesk-Light hover:border-b-black">
 <p className='hidden md:block leading-normal'>About</p>
      </Link> 
  <Link href="/#heading-services" 
      rel="noopener noreferrer" className=" hover:border-b h-[60.5px] ease-in-out border-b border-b-white  duration-100 0 transition-all text-sm md:text-[19px] flex items-center font-semibold justify-center font-clashGrotesk-Light hover:border-b-black">
 <p className='hidden md:block leading-normal'>Services</p>
      </Link> 
  <Link href="/pricing" 
      rel="noopener noreferrer" className=" hover:border-b h-[60.5px] ease-in-out border-b border-b-white duration-100  transition-all text-sm md:text-[19px] flex items-center font-bold justify-center font-clashGrotesk-Light hover:border-b-black">
 <p className='hidden md:block leading-normal'>Pricing</p>
      </Link> 
      </div>
 

<RippleButton class_="hidden md:block" hrefLink={"https://wa.me/2349117169239?text=Hello%20I%20want%20a%20website%20or%20software%20for%20my%20business"} text={"Contact Us"} />
    </div>
    
  
  </div>
  )
}

export default TopNav;