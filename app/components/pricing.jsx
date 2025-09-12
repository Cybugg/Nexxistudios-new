import React from 'react'
import FadeInText from '../Effects/fadeInText';
import { pricingOverview } from '../utils/data';
function Pricing() {
  return (
   <div className='flex flex-col py-[40px] w-full'>

        <div className='text-[80px] '><FadeInText>Pricing</FadeInText> </div>
        <div className='grid grid-cols-2 pb-8 gap-8'>
          {/* Elements */}
          {pricingOverview.map((ele,ind)=>(

               <div className='flex flex-col gap-6 rounded-4xl border border-black hover:outline-2 hover:outline-black transition-all ease-in-out p-6' key={ind}>
              <div>
                 <h3 className='text-[32px]'>
                {ele.title}
              </h3>
              <p className='text-[19px] leading-6 font-clashGrotesk-Light font-bold'>
             {ele.description} </p>
              </div>
             
              <h4 className='text-[56px]'>
                From ${ele.price}
              </h4>
              <div className='flex flex-col gap-2'>
  <p className='text-[19px] font-clashGrotesk-Light font-bold'>includes:</p>
              {ele.includes.map((text)=> (<div className='font-clashGrotesk-Light font-bold text-[19px] '>{text}</div>) )}
              </div>
              
             </div>))}
          
        </div>

        <button className="hover:border-b h-[60.5px] ease-in-out border-b border-b-white duration-100  transition-all text-sm md:text-[19px] flex items-center font-semibold justify-center font-clashGrotesk-Light hover:border-b-black self-start ">See Full Pricing</button>
      
    </div>
  )
}

export default Pricing;