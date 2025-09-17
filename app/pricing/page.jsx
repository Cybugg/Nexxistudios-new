"use client"

"use client"
import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger);
import { pricingOverview,addOns,detailedPricing } from '../utils/data';
import TopNav from '../components/topNav'
import Footer from '../components/footer'
import RippleButton from '../Effects/rippleButton'



export default function PricingPage() {
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
         
          gsap.to("#creative-websites",{
              opacity:1,
              ease:"power1.inOut",
               duration:1,
              scrollTrigger:{
                trigger:"#creative-websites",
                scrub:true,
                start:"bottom bottom",
                end:"top 20%"
              }
            })

              gsap.to("#website-redesign-rescue",{
              opacity:1,
              ease:"power1.inOut",
             duration:1,
              scrollTrigger:{
                trigger:"#website-redesign-rescue",
                scrub:true,
                start:"bottom bottom",
                end:"top 20%"
              }
            })

              gsap.to("#software-development",{
              opacity:1,
              ease:"power1.inOut",
             duration:1,
              scrollTrigger:{
                trigger:"#software-development",
                scrub:true,
                start:"bottom bottom",
                end:"top 20%"
              }
            })

              gsap.to("#seo-growth",{
              opacity:1,
              ease:"power1.inOut",
               duration:1,
              scrollTrigger:{
                trigger:"#seo-growth",
                scrub:true,
                start:"bottom bottom",
                end:"top 20%"
              }
            })
            
    },[])


    
  return (
    <div className="pt-12 min-h-screen z-[9999999]  bg-white text-black font-normal font-clashGrotesk">
      <main className="flex flex-col px-5   row-start-2 items-center mx-auto md:px-[50px]  xl:px-[120px]" >
        <TopNav />
         <div className='flex flex-col py-[40px] w-full'>
                <div className='text-[51px] lg:text-[80px] opacity-0  font-clashGrotesk-medium font-medium' id='heading-pricing' ref={scrollRef}>Pricing</div>
                <div className='grid grid-cols-1 md:grid-cols-2  pb-8 gap-8'>
                  {/* Elements */}
                  {pricingOverview.map((ele,ind)=>(
        
                       <div className='flex flex-col gap-6 rounded-4xl  border border-black hover:outline-2 hover:outline-black transition-all ease-in-out p-6' key={ind} >
                      <div>
                         <h3 className='text-[24px] lg:text-[32px] font-clashGrotesk-medium font-medium'>
                        {ele.title}
                      </h3>
                      <p className='font-clashGrotesk text-[16x] lg:text-[19px] font-[400] leading-6'>
                     {ele.description} </p>
                      </div>
                     
                      <h4 className='text-[31px] lg:text-[56px] font-clashGrotesk-medium font-medium'>
                        From ${ele.price}
                      </h4>
                      <span  className='w-full md:w-[165.267px]'>
                    <RippleButton hrefLink={`/pricing/#${ele.id}`} text={"View Details"} class_='text-[12px]'  />
                      </span>
                      
                     </div>))}
                  
                </div>

                <div className="">
                    {/* each detailed pricing */}
           {detailedPricing.map((ele,id)=>  ( <div className="py-10" key={id} >
                    <h4 className="text-[38px] md:text-[56px] font-clashGrotesk-medium font-medium opacity-0" id={ele.id} style={{scrollMarginTop:"120px"}} >
                   {ele.title}
                    </h4>
                    {/* table */}
                    <div className="table w-full">
                      {/*table title */}
                      <div className="table-title flex justify-between border-b py-2">

                    <div className='basis-1/3 w-full font-clashGrotesk text-[16x] lg:text-[19px] font-[400] leading-6 py-4'>
                      Package
                    </div>
                    <div className='basis-1/3 w-full font-clashGrotesk text-[16x] lg:text-[19px] font-[400] leading-6 py-4'>
                      Price
                    </div>
                    <div className='basis-1/3 w-full font-clashGrotesk text-[16x] lg:text-[19px] font-[400] leading-6 py-4'>
                     Features
                    </div>
                      </div>

                      {/* table contents */}
                    { ele.details.map((ele,id_det)=>(<div className="flex justify-between py-2" key={id_det}>

                    <div className='basis-1/3 w-full font-clashGrotesk text-[16x] lg:text-[19px] font-[400] leading-6 py-4'>
                    {ele.package}
                    </div>
                    <div className='basis-1/3 w-full font-clashGrotesk text-[16x] lg:text-[19px] font-[400] leading-6 py-4'>
                {ele.price}
                    </div>
                    <div className='basis-1/3 w-full font-clashGrotesk text-[16x] lg:text-[19px] font-[400] leading-6 py-4'>
                     {ele.features}
                    </div>
                      </div>)) }

                    </div>

                    </div>))}

                </div>
                <div className='py-10'>
                      {/* title */}
                      <h3 className='text-[28px] lg:text-[56px]  font-clashGrotesk-medium font-medium' id='heading-pricing'>
                        Add-Ons
                      </h3>
                      <p className='text-[20px] md:text-[28px] font-medium pb-4'>
                        Optional extras you can pair with any of our services to keep your project running smoothly.
                      </p>
                      {/* Various add-ons */}
                      <div>

                        {/* elements */}
                       {addOns.map((ele,ind_add)=>(<div className='flex flex-col gap-3 py-4' key={ind_add}>
                          {/* title */}
                          <h5 className='font-medium font-clashGrotesk-medium text-[16x] lg:text-[19px] leading-6'>
                            {ele.title}
                          </h5>
                      <p className='font-clashGrotesk text-[16x] lg:text-[19px] font-[400] leading-6'>
                        {ele.details}
                      </p>
                        </div>)) }
                      </div>
                </div>
        
                {/* <button className="hover:border-b h-[60.5px] my-3 ease-in-out border-b border-b-white duration-100  transition-all  flex items-center  justify-center font-clashGrotesk text-[16x] lg:text-[19px] font-[400] leading-6 hover:border-b-black self-start ">See Full Pricing</button> */}
              
            </div>
      </main>
        <Footer />
    </div>
  );
}
