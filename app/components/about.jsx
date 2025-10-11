"use client"
import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'
import useThemeStore from '@/app/store/useThemeStore'

gsap.registerPlugin(ScrollTrigger);

function About() {
  const scrollRef = useRef();
      const { darkMode, toggleDarkMode, setDarkMode } = useThemeStore()
    useGSAP(()=>{
        gsap.to("#heading-about",{
            opacity:1,
            ease:'power1.inOut',
            duration:1,
          scrollTrigger:{
        trigger:"#heading-about",
          scrub:true,
          start:"bottom bottom",
          end:"top 20%",
           onLeave:()=>setDarkMode(false),
          onEnter:()=>setDarkMode(false),
          onEnterBack:()=>setDarkMode(false),
          onLeaveBack:()=>setDarkMode(false),
  }
        })
    },[])
  return (
    <div className='flex flex-col py-[40px] px-5 mx-auto md:px-[50px]  xl:px-[120px]'>
        <div className='text-[51px] lg:text-[80px] opacity-0 font-clashGrotesk-medium font-medium ' style={{scrollMarginTop:"120px"}} id="heading-about">About Us</div>
        <div className='break-words whitespace-pre-wrap space-y-1.5'>
              <p className=' font-clashGrotesk text-[16x] lg:text-[19px] font-[400] leading-6'>At Nexxi Studios, we forge digital experiences. We're a team of forward-thinkers dedicated to transforming outdated digital platforms into powerful, future-proof assets. From giving a second life to slow, clunky websites to engineering bespoke software from the ground up, we turn old opportunities into new ones.</p>
        <p className='font-clashGrotesk text-[16x] lg:text-[19px] font-[400] leading-6'>Our goal is to ensure your online presence is both beautifully crafted and incredibly effective.</p>
        </div>
      
    </div>
  )
}

export default About