"use client"
import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger);

function FadeInText({children}) {

    const scrollRef = useRef();
    
    useGSAP(()=>{
        gsap.to("#heading",{
            opacity:1,
            ease:'power1.inOut',
            duration:1,
          scrollTrigger:{
        trigger:"#heading",
          scrub:true,
          start:"bottom bottom",
          end:"top 20%"
  }
        })
    },[])

  return (
    <h1 className='opacity-0' id='heading' ref={scrollRef}>{children}</h1>
  )
}

export default FadeInText