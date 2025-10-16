"use client"
import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'
import useThemeStore from '@/app/store/useThemeStore'

gsap.registerPlugin(ScrollTrigger);
import { pricingOverview } from '../utils/data';
import Link from 'next/link'

function Pricing() {
  const scrollRef = useRef();
  const { darkMode, toggleDarkMode, setDarkMode } = useThemeStore()
    useGSAP(()=>{
        gsap.to("#heading-pricing",{
            opacity:1,
            ease:'power1.inOut',
            duration:1,
          scrollTrigger:{
        trigger:"#heading-pricing",
          scrub:true,
          start:"bottom bottom",
          end:"top 20%",
           onLeave:()=>setDarkMode(false),
          onEnter:()=>setDarkMode(false),
          onEnterBack:()=>setDarkMode(false),
          onLeaveBack:()=>setDarkMode(false),
  }
        })

    },[setDarkMode,darkMode])
  return (
   <div className='flex flex-col py-[40px] w-full px-5 mx-auto md:px-[50px]  xl:px-[120px]'>
        <div className='text-[51px] lg:text-[80px]  font-clashGrotesk-medium font-medium' id='heading-pricing' style={{scrollMarginTop:"120px"}} ref={scrollRef}>Pricing</div>
        <div className='grid grid-cols-1 md:grid-cols-2  pb-8 gap-8'>
          {/* Elements */}
          {pricingOverview.map((ele,ind)=>(

               <div className='flex flex-col gap-6 rounded-4xl border border-black hover:outline-2 hover:outline-black transition-all ease-in-out p-6' key={ind}>
              <div>
                 <h3 className='text-[24px]  lg:text-[32px] font-clashGrotesk-medium font-medium'>
                {ele.title}
              </h3>
              <p className='font-clashGrotesk text-[16x] lg:text-[19px] font-[400] leading-6'>
             {ele.description} </p>
              </div>
             
              <h4 className='text-[31px] lg:text-[56px] font-clashGrotesk-medium font-medium'>
                From ${ele.price}
              </h4>
              <div className='flex flex-col gap-2'>
  <p className='font-clashGrotesk text-[16x] lg:text-[19px] font-[400] leading-6'>includes:</p>
              {ele.includes.map((text,textInd)=> (<div className='font-clashGrotesk text-[16x] lg:text-[19px] font-[400] leading-6 ' key={textInd}>{text}</div>) )}
              </div>
              
             </div>))}
          
        </div>

      <Link href="/pricing"><button className="hover:border-b h-[60.5px] my-3 ease-in-out border-b border-b-white duration-100  transition-all  flex items-center  justify-center font-clashGrotesk text-[16x] lg:text-[19px] font-[400] leading-6 hover:border-b-black self-start ">See Full Pricing</button></Link>  
      
    </div>
  )
}

export default Pricing;