"use client"
import React from 'react'
import RippleButton from '../Effects/rippleButton';
import TextareaAutosize from 'react-textarea-autosize';
import Link from 'next/link';

import { Facebook, Instagram, Linkedin } from 'lucide-react';
import { FaEnvelope, FaWhatsapp } from 'react-icons/fa6';

function Footer() {
  return (
    <div className='bg-black w-full text-white min-h-[60vh] px-5 z-[50] px-auto md:px-[50px] py-16  xl:px-[120px]' id="contactUs">

      <div className='flex flex-col lg:flex-row gap-[140px] items-start '>

{/* Item 1: Contact field */}
<div className='w-full lg:w-[466px] flex flex-col  justify-center gap-6' id='contactUs'>
     <div className='text-[51px] lg:text-[80px] leading-24 font-clashGrotesk-medium font-medium ' id="heading-footer">Contact Us</div>

     <form className='w-full flex flex-col items-center justify-center gap-3'>
      {/* Name filed */}
      <div className='border border-white w-full py-3 px-4 rounded-xl'>
    <input type='text' placeholder='Name' className='w-full outline-0'/>
      </div>
     {/* Email filed */}
       <div className='border border-white w-full py-3 px-4 rounded-xl'>
    <input type='text' placeholder='Email' className='w-full outline-0'/>
      </div>
        {/* Text Area */}
       <div className='border border-white w-full py-3 px-4 rounded-xl'>
        <TextareaAutosize className='w-full outline-0 min-h-20 max-h-24' placeholder='message' maxLength={500} />
      </div>
      <div className='w-full py-3 '>
 <RippleButton hrefLink={"#ee"} text="Contact Us" style={{border:"none", background:"white", color:"#000000"}} />
      </div>


     </form>

</div>
{/* Nav && socials */}
<div className='flex flex-col gap-12'>
  {/* Links */}
  <div className='flex flex-col gap-4 '>
     <Link href="#heading-about" 
      rel="noopener noreferrer" className=" text-[19px] font-clashGrotesk ">
 <p className='leading-normal'>About</p>
      </Link> 
  <Link href="#heading-services" 
      rel="noopener noreferrer" className=" text-[19px] font-clashGrotesk">
 <p className='leading-normal'>Services</p>
      </Link> 
  <Link href="/pricing" 
      rel="noopener noreferrer" className=" text-[19px] font-clashGrotesk">
 <p className='leading-normal'>Pricing</p>
      </Link> 
    </div>
    <div className='flex gap-2 items-center'>
  <Link href="https://www.instagram.com/nexxistudios/" 
      rel="noopener noreferrer" className=" text-white ">
        <Instagram />
      </Link> 
       <Link href="https://www.facebook.com/share/19pTXbjXML/" 
      rel="noopener noreferrer" className=" text-white ">
        <Facebook />
      </Link> 
       <Link href="https://www.linkedin.com/search/results/all/?heroEntityKey=urn%3Ali%3Aorganization%3A108860947&keywords=Nexxi%20Studios&origin=ENTITY_SEARCH_HOME_HISTORY&sid=8PE" 
      rel="noopener noreferrer" className=" text-white ">
        <Linkedin />
      </Link> 
    </div>

</div>
 <div className='lg:mt-0 mt-[-80px] '>
     <div className=' text-[19px]  cursor-pointer '><span className='text-[19px] font-clashGrotesk-Light font-clashGrotesk-medium font-medium'> Mail: info@nexxistudios.com</span></div>
      </div>
      </div>
      <div className='flex items-center py-24 w-full   my-responsive-text font-clashGrotesk-medium font-medium '>
        Nexxi Studios
      </div>    
    </div>
  )
}

export default Footer;