"use client"

import Image from 'next/image';
import React, { useState,useRef,useEffect } from 'react'
import logo from "@/assets/images/logo-light.svg"
import Link from 'next/link';
import RippleButton from '../Effects/rippleButton';
import list from "@/public/icons/list.svg"
import x from "@/public/icons/x.svg"

function TopNav() {
  
     const [openNav,setOpenNav] = useState(false);



  return (
    <div className="flex fixed justify-between items-center w-full px-[20px] md:px-[50px] bg-white top-0 py-3  xl:px-[120px] z-[999999999]">
    {/* Logo */}
    <div className='w-full z-[600]'>
      <Image src={logo} width={48} className='w-[48px] h-[46px] object-cover' height={46} alt="nexxistudios's logo" />
    </div>
    <div className="flex gap-12 items-center justify-center z-80">
      
      <div className="flex gap-8 items-center justify-center">
           <Link href="/" 
      rel="noopener noreferrer" className=" hover:border-b h-[60.5px] ease-in-out border-b border-b-white duration-100  transition-all text-sm md:text-[19px] flex items-center md:font-semibold justify-center font-clashGrotesk-Light hover:border-b-black">
 <p className='hidden md:block font-clashGrotesk text-[16x] lg:text-[19px] font-[400] leading-6'>Home</p>
      </Link> 
 <Link href="/#heading-about" 
      rel="noopener noreferrer" className=" hover:border-b h-[60.5px] ease-in-out border-b border-b-white duration-100  transition-all text-sm md:text-[19px] flex items-center md:font-semibold justify-center font-clashGrotesk-Light hover:border-b-black">
 <p className='hidden md:block font-clashGrotesk text-[16x] lg:text-[19px] font-[400] leading-6'>About</p>
      </Link> 
  <Link href="/#heading-services" 
      rel="noopener noreferrer" className=" hover:border-b h-[60.5px] ease-in-out border-b border-b-white  duration-100 0 transition-all text-sm md:text-[19px] flex items-center md:font-semibold justify-center font-clashGrotesk-Light hover:border-b-black">
 <p className='hidden md:block font-clashGrotesk text-[16x] lg:text-[19px] font-[400] leading-6'>Services</p>
      </Link> 
  <Link href="/pricing" 
      rel="noopener noreferrer" className=" hover:border-b h-[60.5px] ease-in-out border-b border-b-white duration-100  transition-all text-sm md:text-[19px] flex items-center font-bold justify-center font-clashGrotesk-Light hover:border-b-black">
 <p className='hidden md:block font-clashGrotesk text-[16x] lg:text-[19px] font-[400] leading-6'>Pricing</p>
      </Link> 
      </div>
 



{/* Desktop button */}
<RippleButton class_="hidden md:block" hrefLink={"https://wa.me/2349117169239?text=Hello%20I%20want%20a%20website%20or%20software%20for%20my%20business"} text={"Contact Us"} />
    </div>


     {/* Mobile Navigation */}
    {  openNav && <div className="flex text-black  bg-white bottom-0 left-0 right-0 fixed flex-col w-full h-screen gap-12 items-center pt-64 justify-start z-80">
      
      <div className="flex flex-col gap-8 items-center justify-center">
           <Link href="/" 
      rel="noopener noreferrer" className=" hover:border-b h-[60.5px] ease-in-out border-b border-b-white duration-100  transition-all text-sm text-[19px] flex items-center md:font-semibold justify-center font-clashGrotesk-Light hover:border-b-black" onClick={()=> setOpenNav(false)}>
 <p className='md:hidden block font-clashGrotesk text-[16x] lg:text-[19px] font-[400] leading-6'>Home</p>
      </Link> 
 <Link href="/#heading-about"  onClick={()=> setOpenNav(false)}
      rel="noopener noreferrer" className=" hover:border-b h-[60.5px] ease-in-out border-b border-b-white duration-100  transition-all text-sm text-[19px] flex items-center md:font-semibold justify-center font-clashGrotesk-Light hover:border-b-black">
 <p className='md:hidden block font-clashGrotesk text-[16x] lg:text-[19px] font-[400] leading-6'>About</p>
      </Link> 
  <Link href="/#heading-services"  onClick={()=> setOpenNav(false)}
      rel="noopener noreferrer" className=" hover:border-b h-[60.5px] ease-in-out border-b border-b-white  duration-100 0 transition-all text-sm text-[19px] flex items-center md:font-semibold justify-center font-clashGrotesk-Light hover:border-b-black">
 <p className='md:hidden block font-clashGrotesk text-[16x] lg:text-[19px] font-[400] leading-6'>Services</p>
      </Link> 
  <Link href="/pricing"  onClick={()=> setOpenNav(false)}
      rel="noopener noreferrer" className=" hover:border-b h-[60.5px] ease-in-out border-b border-b-white duration-100  transition-all text-sm text-[19px] flex items-center md:font-semibold justify-center font-clashGrotesk-Light hover:border-b-black">
 <p className='md:hidden block font-clashGrotesk text-[16x] lg:text-[19px] font-[400] leading-6'>Pricing</p>
      </Link> 
      </div>
 

{/* mobile button */}
<span className=''><RippleButton class_="md:hidden block" hrefLink={"/#contactUs"} text={"Contact Us"} /></span>
    </div>}
    {/* Mobile button */}
  {openNav?<button className='w-full flex items-center justify-end  md:hidden cursor-pointer z-[600]' onClick={()=>setOpenNav(false)}><Image class_="" src={x} alt='the image of the menu icon on nexxi studios' width={32} height={32} text={"Contact Us"} /></button>:<button className='w-full flex items-center justify-end  md:hidden cursor-pointer' onClick={()=>setOpenNav(true)}><Image class_="block md:hidden" src={list} alt='the image of the menu icon on nexxi studios' width={32} height={32} text={"Contact Us"} /></button>  }
  
  </div> 
  )
}

export default TopNav;