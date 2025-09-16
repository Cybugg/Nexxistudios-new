"use client"
import React, {useRef} from 'react'
import gsap from "gsap"
import { ScrollTrigger } from 'gsap/all';
import { useGSAP } from '@gsap/react';


gsap.registerPlugin(ScrollTrigger);

function Page() {
  const scrollRef = useRef();
  const tl = gsap.timeline({
    repeat:-1,repeatDelay:1, yoyo:true
  })

useGSAP(
  ()=>{
    gsap.to("#indigo-box",{
      x:250,
      repeat:-1,
      yoyo:true,
      duration:2,
      ease:"elastic"
    })
      gsap.from("#green-box",{
      x:250,
      // repeat:-1,
      yoyo:true,
      duration:5,
      ease:"elastic"
    })

     gsap.fromTo("#red-box",{
      x:0,
      rotation:0,
      borderRadius:"0%"
    }, {
      x:200,
      rotation:0,
      yoyo:"true",
      duration:2,
      ease:"bounce.out",
      borderRadius:"100%",
      repeat:-1
    })


      tl.to(
        "#yellow-box",{
          x:250,
          background:'red',
          ease:"elastic",
          borderRadius:"100%",
          border:"2px black dotted",
          duration:5
        }
      )
       tl.to(
        "#yellow-box",{
          x:400,
          background:'green',
          ease:"elastic",
          borderRadius:"0%",
          border:"2px black solid",
          duration:1
        }
      )

      gsap.to(
".stagger-box",{
  y:"-500px",
  repeat:-1,
  duration:1,
  ease:"sine.inOut",
  stagger:{
    amount:0.5,
  }
}
)

gsap.to("#scroll-orange",{
  x:"500px",
  scrollTrigger:{
    trigger:"#scroll-orange",
    scrub:true,
          start:"bottom bottom",
          end:"top 20%"
  }
})

 const boxes = gsap.utils.toArray(scrollRef.current.children);

 boxes.forEach(
  (box) =>{
    gsap.to(box, {
        x:50,
        rotation:360,
        repeat:-1,
        borderRadius:"100%",
        scale:2,
        scrollTrigger:{
          trigger:box,
          
        }
      }
    )
  }
 )
  },[]
)

  return (
    <div>
     <div className='flex flex-col text-black bg-white min-h-screen p-5'>

    <h1 className='text-black text-4xl font-clashGrotesk text-center p-5'>GSAP Animations Fundamenatals</h1>
{/* to */}
    <h2 className=' text-2xl font-bold '>GsapTo</h2>
    <p className='text-xl'>{"The gsap.to() method is used to animate elements from their current state to a new state."}</p>
       <p className='text-xl'>{"The gsap.to() method is similar to the gsap.from() method, but the difference is that the gsap.to() method animates elements from their current state to a new state, while the gsap.from() methods animates elements from a new state to their current state. "}</p>
{/* Animation container */}
       <div className='w-full py-12'>
{/* Box: aniamtion items */}
        <div id='indigo-box' className='w-16 h-16 bg-indigo-500 rounded-2xl '>

        </div>

       </div>
       {/* from */}
        <h2 className=' text-2xl font-bold '>GsapFrom</h2>
    <p className='text-xl'>{"The gsap.from() method is used to animate elements from a new state to their current state."}</p>
       <p className='text-xl'>{"The gsap.to() method is similar to the gsap.from() method, but the difference is that the gsap.to() method animates elements from their current state to a new state, while the gsap.from() methods animates elements from a new state to their current state. "}</p>
{/* Animation container */}
       <div className='w-full py-12'>
{/* Box: aniamtion items */}
        <div id='green-box' className='w-16 h-16 bg-green-500 rounded-2xl '>

        </div>
        </div>
{/* fromTo */}
        <h2 className=' text-2xl font-bold '>GsapFromTo</h2>
    <p className='text-xl'>{"The gsap.fromTo() method is used to animate elements from a new state to a new state."}</p>
       <p className='text-xl'>{"The gsap.fromTo() method is similar to the gsap.from() and gsap.to() method, but the difference is that gsap.fromTo() animate elements from a new state to a new state,  the gsap.to() method animates elements from their current state to a new state, while the gsap.from() methods animates elements from a new state to their current state."}</p>
{/* Animation container */}
       <div className='w-full py-12'>
{/* Box: aniamtion items */}
        <div id='red-box' className='w-16 h-16 bg-red-500 rounded-2xl '>

        </div>
        </div>

        {/* Gsap Timeline */}
        <h2 className=' text-2xl font-bold '>Gsap Timeline</h2>
    <p className='text-xl'>{"The gsap.fromTo() method is used to create a timeline instance that can be used to manage multiple animations."}</p>

    <button className='px-4 py-3 my-5 bg-gray-300 border rounded-full w-48 cursor-pointer' onClick={()=>{
      if(tl.paused()){
        tl.play()
      }
     else {tl.pause()}
    }}>Pause/Play</button>
      
{/* Animation container */}
       <div className='w-full py-12'>
{/* Box: aniamtion items */}
        <div id='yellow-box' className='w-16 h-16 bg-yellow-500 rounded-2xl '>

        </div>
        </div>

         {/* Gsap Timeline */}
        <h2 className=' text-2xl font-bold '>Gsap Stagger</h2>
    <p className='text-xl'>{"The GSAP stagger is a feature that allows you to apply animations with a staggered delay to a group of elements"}</p>
     <p className='text-xl'>{"By using the stagger feature in GSAP, you can specify the amount of time to stagger the animations bewteen each element, as well as customize the easing and duration of each individual animation. This enables you to create dynamic and visually appealing effects, such as staggered fades, rotations, movements, and more."}</p>
      
{/* Animation container */}
       <div className='w-full py-12 h-16 overflow-hidden flex space-x-5'>
{/* Box: aniamtion items */}
        <div id='' className='w-16 h-16 stagger-box bg-blue-200 rounded-2xl '>

        </div>
          <div id='' className='w-16 h-16 stagger-box bg-blue-300 rounded-2xl '>

        </div>
          <div id='' className='w-16 h-16 stagger-box bg-blue-400 rounded-2xl '>

        </div>
          <div id='' className='w-16 h-16 stagger-box bg-blue-500 rounded-2xl '>

        </div>
          <div id='' className='w-16 h-16 stagger-box bg-blue-600 rounded-2xl '>

        </div>
          <div id='' className='w-16 h-16 stagger-box bg-blue-700 rounded-2xl '>

        </div>
        </div>

        {/* Scroll Trigger */}
        <h2 className=' text-2xl font-bold '>GSAP Scroll Trigger</h2>
    <p className='text-xl'>{"The GSAP scroll trigger is a plugin that allows you to create animations that are triggered by the scroll position of the page."}</p>
  
{/* Animation container */}
       <div className='w-full flex flex-col items-center justify-center py-12 min-h-screen'>
{/* Box: aniamtion items */}
        <div id='scroll-red' ref={scrollRef} className='w-16 h-16   rounded-2xl bg-red-500'>

        </div>
         <div id='scroll-orange' ref={scrollRef} className='w-16 h-16   rounded-2xl bg-orange-500'>

        </div>
        </div>
    </div>   


     {/* Gsap Timeline */}
        <h2 className=' text-2xl font-bold '>Gsap Text</h2>
  
    </div>
  

  )
}

export default Page;