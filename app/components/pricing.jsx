"use client"
import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger);
import { pricingOverview } from '../utils/data';

function Pricing() {
  const scrollRef = useRef();
    
    useGSAP(()=>{
        gsap.to("#heading-pricing",{
            opacity:1,
            ease:'power1.inOut',
            duration:1,
          scrollTrigger:{
        trigger:"#heading-pricing",
          scrub:true,
          start:"bottom bottom",
          end:"top 20%"
  }
        })
    },[])
  return (
   <div className='flex flex-col py-[40px] w-full'>
        <div className='text-[51px] lg:text-[80px] opacity-0' id='heading-pricing' ref={scrollRef}>Pricing</div>
        <div className='grid grid-cols-1 md:grid-cols-2  pb-8 gap-8'>
          {/* Elements */}
          {pricingOverview.map((ele,ind)=>(

               <div className='flex flex-col gap-6 rounded-4xl border border-black hover:outline-2 hover:outline-black transition-all ease-in-out p-6' key={ind}>
              <div>
                 <h3 className='text-[24px] lg:text-[32px]'>
                {ele.title}
              </h3>
              <p className='text-[16x] lg:text-[19px] leading-6 font-clashGrotesk-Light font-bold'>
             {ele.description} </p>
              </div>
             
              <h4 className='text-[31px] lg:text-[56px]'>
                From ${ele.price}
              </h4>
              <div className='flex flex-col gap-2'>
  <p className='text-[16x] lg:text-[19px] font-clashGrotesk-Light font-bold'>includes:</p>
              {ele.includes.map((text,textInd)=> (<div className='font-clashGrotesk-Light font-bold text-[16x] lg:text-[19px] ' key={textInd}>{text}</div>) )}
              </div>
              
             </div>))}
          
        </div>

        <button className="hover:border-b h-[60.5px] my-3 ease-in-out border-b border-b-white duration-100  transition-all text-[16x] lg:text-[19px] flex items-center font-semibold justify-center font-clashGrotesk-Light hover:border-b-black self-start ">See Full Pricing</button>
      
    </div>
  )
}

export default Pricing;