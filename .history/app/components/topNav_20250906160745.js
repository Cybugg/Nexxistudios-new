import Image from 'next/image';
import React from 'react'
import logo from "@/assets/images/logo-light.svg"

function TopNav() {
  return (
    <div className="flex justify-between items-center w-full font-clashGrotesk">
    {/* Logo */}
    <div>
      <Image src={logo} width={48} height={46} alt="nexxistudios's logo" />
    </div>
    <ul>
      <li className="py-3 px-5 text-xl rounded-full border cursor-pointer">
Contact Us
      </li> 
    </ul>
  </div>
  )
}

export default TopNav;