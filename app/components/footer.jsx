"use client"
import React, { useState,useRef,useEffect } from 'react'
import RippleButton from '../Effects/rippleButton';
import TextareaAutosize from 'react-textarea-autosize';
import Link from 'next/link';
import gsap from 'gsap';
import { useToasts } from './useToast'; 

import { Facebook, Instagram, Linkedin } from 'lucide-react';


function Footer() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
 const { show, ToastElement } = useToasts();
  const [loading, setLoading] = useState(false);

    const text = "Contact Us"
    const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

   const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("https://nexxis-studios-tg-api.onrender.com/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("✅ Sent to Telegram!");
         show("success", "✅ Message sent! We will get back shortly.");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("❌ Failed to send");
          show("error", "⚠️ Failed to deliver. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setStatus("⚠️ Error sending message");
       show("error", "⚠️ Network error. Message not sent.");
    }
  };
  const containerRef = useRef(null);
    const tlRef = useRef(null);
  
    useEffect(() => {
    const chars = containerRef.current.querySelectorAll(".char");
    gsap.set(chars, { y: -19 }); // baseline
    return () => {
      if (tlRef.current) tlRef.current.kill();
      gsap.killTweensOf(chars);
    };
  }, []);
  
  const handleMouseEnter = () => {
    if (tlRef.current) tlRef.current.kill();
    const chars = containerRef.current.querySelectorAll(".char");
  
    const tl = gsap.timeline();
    tl.fromTo(
      chars,
      {
        y: (i) => (i % 2 === 0 ? -19 - 21 : -19 + 21), // even: above, odd: below
      },
      {
        y: -19,
        ease: "power2.out",
        stagger: 0.03,
        duration: 0.35,
      }
    );
  
    tlRef.current = tl;
  };
  
  const handleMouseLeave = () => {
    if (tlRef.current) tlRef.current.kill();
    const chars = containerRef.current.querySelectorAll(".char");
  
    const tl = gsap.timeline();
    tl.to(chars, {
      y: (i) => (i % 2 === 0 ? -19 - 21 : -19 + 21), // even: go back up, odd: go back down
      stagger: 0.03,
      duration: 0.25,
    }).to(
      chars,
      {
        y: -19,
        ease: "power2.out",
        stagger: 0.03,
        duration: 0.25,
      },
      "-=0.15" // overlap return
    );
  
    tlRef.current = tl;
  };
  

  return (
    <div className='bg-black w-full text-white min-h-[60vh] px-5 z-[50] px-auto md:px-[50px] py-16  xl:px-[120px]' id="contactUs">

      <div className='flex flex-col lg:flex-row gap-[140px] items-start '>

{/* Item 1: Contact field */}
<div className='w-full lg:w-[466px] flex flex-col  justify-center gap-6' id='contactUs'>
     <div className='text-[51px] lg:text-[80px] leading-24 font-clashGrotesk-medium font-medium ' id="heading-footer">Contact Us</div>
  {ToastElement}
     <form className='w-full flex flex-col items-center justify-center gap-3' onSubmit={handleSubmit}>
      {/* Name filed */}
      <div className='border border-white w-full py-3 px-4 rounded-xl'> 
    <input type='text' placeholder='Name' className='w-full outline-0' name='name'  value={form.name} onChange={handleChange}/>
      </div>
     {/* Email filed */}
       <div className='border border-white w-full py-3 px-4 rounded-xl'>
    <input type='email' placeholder='Email' className='w-full outline-0'  name='email'  value={form.email} onChange={handleChange}      />
      </div>
        {/* Text Area */}
       <div className='border border-white w-full py-3 px-4 rounded-xl'>
        <TextareaAutosize className='w-full outline-0 min-h-20 max-h-24' name='message' value={form.message} onChange={handleChange}  placeholder='message' maxLength={500} />
      </div>
      <button className='py-4  px-5 text-xl  font-clashGrotesk font-semibold  text-[16px] lg:text-[19px]  rounded-[785px] h-[53px] justify-center border cursor-pointer flex items-center w-full bg-white text-black ' type='submit'>
   <div
        ref={containerRef}
        className="flex gap-[2px] flex-nowrap overflow-hidden w-full items-center justify-center  h-[19px]" onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave} 
      >
        {[...text].map((char, ind) => (
          <div
            key={ind}
            className={`char ${(ind % 2) === 0 ? "char1" : "char2"} flex flex-col items-center justify-start h-[57px]`}
            style={{ transform: "translateY(-19px)" }}
          >
            <span className="text-[19px] leading-none">
              {char === " " ? "\u00A0" : char}
            </span>
            <span className="text-[19px] leading-none">
              {char === " " ? "\u00A0" : char}
            </span>
            <span className="text-[19px] leading-none">
              {char === " " ? "\u00A0" : char}
            </span>
          </div>
        ))}
      </div>
      </button>


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