import Image from 'next/image';
import React from 'react'
import logo from "@/assets/images/logo-light.svg"
import Link from 'next/link';

function TopNav() {
  return (
    <div className="flex justify-between items-center w-full ">
    {/* Logo */}
    <div>
      <Image src={logo} width={48} height={46} alt="nexxistudios's logo" />
    </div>
    <ul>
      <Link href="https://wa.me/2348012345678?text=Hello%20I%20want%20a%20website%20or%20software%20for%20my%20business" className="py-3 px-5 text-xl rounded-full border cursor-pointer">
Chat on Whatsapp
      </Link> 
    </ul>
  </div>
  )
}

export default TopNav;