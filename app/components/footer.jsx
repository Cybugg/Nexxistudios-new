"use client"
import React from 'react'
import RippleButton from '../Effects/rippleButton';
import TextareaAutosize from 'react-textarea-autosize';
import Link from 'next/link';

function Footer() {
  return (
    <div className='bg-black w-full text-white min-h-[60vh] px-auto md:px-[50px] py-16  xl:px-[120px]'>

      <div className='flex gap-[140px] items-start '>

{/* Item 1: Contact field */}
<div className='w-[466px] flex flex-col  justify-center gap-6'>
     <div className='text-[51px] lg:text-[80px] leading-24' id="heading-footer">Contact Us</div>

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
        <TextareaAutosize className='w-full outline-0 min-h-20 max-h-24' maxLength={500} />
      </div>
      <div className='w-full py-5 '>
 <RippleButton hrefLink={"#ee"} text="Contact Us" style={{border:"none", background:"white", color:"#000000"}} />
      </div>


     </form>

</div>
{/* Nav && socials */}
<div className='flex flex-col'>
  {/* Links */}
  <div className='flex flex-col gap-4 '>
     <Link href="https://wa.me/2349117169239?text=Hello%20I%20want%20a%20website%20or%20software%20for%20my%20business" 
      rel="noopener noreferrer" className=" text-[19px] font-clashGrotesk-Light font-bold ">
 <p className='hidden md:block leading-normal'>About</p>
      </Link> 
  <Link href="https://wa.me/2349117169239?text=Hello%20I%20want%20a%20website%20or%20software%20for%20my%20business" 
      rel="noopener noreferrer" className=" text-[19px] font-clashGrotesk-Light font-bold">
 <p className='hidden md:block leading-normal'>Services</p>
      </Link> 
  <Link href="https://wa.me/2349117169239?text=Hello%20I%20want%20a%20website%20or%20software%20for%20my%20business" 
      rel="noopener noreferrer" className=" text-[19px] font-clashGrotesk-Light font-bold">
 <p className='hidden md:block leading-normal'>Pricing</p>
      </Link> 
    </div>

</div>
      </div>
      <div className='flex items-center py-24 w-full  md:font-normal my-responsive-text'>
        Nexxi Studios
      </div>    
    </div>
  )
}

export default Footer;