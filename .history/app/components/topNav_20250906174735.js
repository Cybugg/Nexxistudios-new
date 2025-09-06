import Image from 'next/image';
import React from 'react'
import logo from "@/assets/images/logo-light.svg"
import Link from 'next/link';
import { FaWhatsapp } from "react-icons/fa6";

function TopNav() {
  return (
    <div className="flex justify-between items-center w-full ">
    {/* Logo */}
    <div>
      <Image src={logo} width={48} height={46} alt="nexxistudios's logo" />
    </div>
    
      <Link href="https://wa.me/2349117169239?text=Hello%20I%20want%20a%20website%20or%20software%20for%20my%20business" target="_blank"
      rel="noopener noreferrer" className="py-3 px-5 text-xl z-80 rounded-full border cursor-pointer flex gap-2 items-center">
<FaWhatsapp className='text-' /> Chat on Whatsapp
      </Link> 
  
  </div>
  )
}

export default TopNav;