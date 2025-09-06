import Image from 'next/image';
import React from 'react'
import logo from "@/assets/images/logo-light.svg"

function TopNav() {
  return (
    <div className="flex justify-between items-center w-full ">
    {/* Logo */}
    <div>
      <Image src={logo} width={48} height={46} alt="nexxistudios's logo" />
    </div>
    <ul>
      <li className="py-3 px-5 text-xl rounded-full border cursor-pointer">
Chat on Whatsapp
      </li> 
    </ul>
  </div>
  )
}

export default TopNav;