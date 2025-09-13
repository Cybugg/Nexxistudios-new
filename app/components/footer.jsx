"use client"
import React from 'react'
import RippleButton from '../Effects/rippleButton';

function Footer() {
  return (
    <div className='bg-black w-full text-white min-h-[60vh] px-auto md:px-[50px]  xl:px-[120px]'>

      <div className='flex'>

{/* Item 1: Contact field */}
<div>
     <div className='text-[51px] lg:text-[80px] ' id="heading-footer">Contact Us</div>

     <form>
      {/* Name filed */}
      <div>

      </div>
     {/* email filed */}
     <div>

     </div>
 <RippleButton hrefLink={"#ee"} text="Contact Us" style={{border:"none", background:"white", color:"#000000"}} />

     </form>

</div>
{/* Nav && socials */}
<div>

</div>
      </div>
        
    </div>
  )
}

export default Footer;