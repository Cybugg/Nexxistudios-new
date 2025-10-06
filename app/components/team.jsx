"use client"
import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'
import Lanyard from './lanyard'
import Link from 'next/link'

gsap.registerPlugin(ScrollTrigger);




const team = [{
name:"Samuel Oguntimehin",
role:"CEO",
link:""
},{
name:"Shammah Adesiyan",
role:"CPO",
link:""
}]

function Team() {
  const scrollRef = useRef();
    
    useGSAP(()=>{
        gsap.to("#heading-team",{
            opacity:1,
            ease:'power1.inOut',
            duration:1,
          scrollTrigger:{
        trigger:"#heading-team",
          scrub:true,
          start:"bottom bottom",
          end:"top 20%"
  }
        })
    },[])
  return (
    <div className='flex flex-col py-[40px] w-full min-h-screen'>

      <div className='text-[51px] lg:text-[80px] opacity-0 font-clashGrotesk-medium font-medium ' id='heading-team' style={{scrollMarginTop:"120px"}} ref={scrollRef}>Meet the Team</div>  
        <div className='space-y-1.5 relative w-full xl:flex-row justify-center items-center flex flex-col gap-12'>
          <div className='absolute hidden xl:flex w-full items-center text-gray-100  top-0 justify-center text-[200px] font-clashGrotesk-medium font-medium'>
            Drag it
          </div>

                    {/* member 1 */}
           
                    <div className='flex flex-col items-center justify-center gap-2 basis-1/3 w-full'>
                        <div className='w-full'>
<Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
                        </div>
             <h3 className='text-[24px]  lg:text-[32px] font-clashGrotesk-medium font-medium'>{team[0].name}</h3>
             <p className='font-clashGrotesk text-[16x] lg:text-[19px] font-[400] leading-6'>{team[0].role}</p>
             <Link href={team[0].link} className='underline' >Read more</Link>
                    </div>
                    {/* member 2 */}
                         <div className='flex flex-col items-center justify-center gap-2 w-full basis-1/3'>
                        <div className='w-full'>
<Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
                        </div>
             <h3 className='text-[24px]  lg:text-[32px] font-clashGrotesk-medium font-medium'>{team[0].name}</h3>
             <p className='font-clashGrotesk text-[16x] lg:text-[19px] font-[400] leading-6'>{team[0].role}</p>
             <Link href={team[0].link} className='underline' >Read more</Link>
                    </div>
                     {/* member 3 */}
                         <div className='flex flex-col items-center justify-center gap-2 w-full basis-1/3'>
                        <div className='w-full'>
<Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
                        </div>
             <h3 className='text-[24px]  lg:text-[32px] font-clashGrotesk-medium font-medium'>{team[0].name}</h3>
             <p className='font-clashGrotesk text-[16x] lg:text-[19px] font-[400] leading-6'>{team[0].role}</p>
             <Link href={team[0].link} className='underline' >Read more</Link>
                    </div>
               

        </div>
   
    </div>
  )
}

export default Team;