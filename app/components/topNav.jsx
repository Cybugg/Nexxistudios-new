"use client";

import Image from 'next/image';
import React, { useState } from 'react';
import logoLight from "@/assets/images/logo-light.svg";
import logoDark from "@/assets/images/logo-dark.png";
import Link from 'next/link';
import RippleButton from '../Effects/rippleButton';
import list from "@/public/icons/list.svg";
import x from "@/public/icons/x.svg";
import useThemeStore from '@/app/store/useThemeStore';
import { motion, AnimatePresence } from 'framer-motion';

function TopNav() {
  const [openNav, setOpenNav] = useState(false);
  const { darkMode } = useThemeStore();

  return (
    <div
      className={`flex fixed justify-between items-center w-full px-[20px] md:px-[50px] top-0 py-3 md:py-5 xl:px-[120px] z-[999999999] 
        ${darkMode ? "bg-black text-white" : "bg-white text-black"} 
        transition-colors duration-700 ease-in-out`}
    >
      {/* Logo */}
      <div className="w-full z-[600] transition-all duration-700 ease-in-out">
        <AnimatePresence mode="wait">
          <motion.div
            key={darkMode ? "dark" : "light"}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <Image
              src={darkMode ? logoDark : logoLight}
              width={48}
              height={46}
              alt="Nexxi Studios Logo"
              className="w-[48px] h-[46px] object-cover"
              priority
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Desktop Nav Links */}
      <div className="flex gap-12 items-center justify-center z-80 transition-all duration-700 ease-in-out">
        <div className="flex gap-8 items-center justify-center">
          {[
            { href: "/", label: "Home" },
            { href: "/#heading-about", label: "About" },
            { href: "/#heading-services", label: "Services" },
            { href: "/pricing", label: "Pricing" },
          ].map((link, i) => (
            <Link
              key={i}
              href={link.href}
              rel="noopener noreferrer"
              className="hover:border-b h-[60.5px] transition-all duration-300 ease-in-out text-sm md:text-[19px] flex items-center justify-center font-clashGrotesk-Light hover:border-b-black"
            >
              <p className="hidden md:block font-clashGrotesk text-[16px] lg:text-[19px] font-[400] leading-6">
                {link.label}
              </p>
            </Link>
          ))}
        </div>

        {/* Desktop Button */}
        <RippleButton class_="hidden md:block" hrefLink={"/#contactUs"} text={"Contact Us"} />
      </div>

      {/* Mobile Navigation */}
      {openNav && (
        <div className="flex text-black bg-white bottom-0 left-0 right-0 fixed flex-col w-full h-screen gap-12 items-center pt-48 justify-start z-80 transition-all duration-500 ease-in-out">
          <div className="flex flex-col gap-8 items-center justify-center">
            {[
              { href: "/", label: "Home" },
              { href: "/#heading-about", label: "About" },
              { href: "/#heading-services", label: "Services" },
              { href: "/pricing", label: "Pricing" },
            ].map((link, i) => (
              <Link
                key={i}
                href={link.href}
                rel="noopener noreferrer"
                onClick={() => setOpenNav(false)}
                className="hover:border-b h-[60.5px] transition-all duration-300 ease-in-out text-sm text-[19px] flex items-center justify-center font-clashGrotesk-Light hover:border-b-black"
              >
                <p className="md:hidden block font-clashGrotesk text-[16px] lg:text-[19px] font-[400] leading-6">
                  {link.label}
                </p>
              </Link>
            ))}
          </div>

          {/* Mobile Button */}
          <RippleButton class_="md:hidden block" hrefLink={"/#contactUs"} text={"Contact Us"} />
        </div>
      )}

      {/* Mobile Menu Toggle */}
      {openNav ? (
        <button
          className="w-full flex items-center justify-end md:hidden cursor-pointer z-[600] transition-all duration-500"
          onClick={() => setOpenNav(false)}
        >
          <Image src={x} alt="Close menu icon" width={32} height={32} />
        </button>
      ) : (
        <button
          className="w-full flex items-center justify-end md:hidden cursor-pointer transition-all duration-500"
          onClick={() => setOpenNav(true)}
        >
          <Image src={list} alt="Open menu icon" width={32} height={32} />
        </button>
      )}
    </div>
  );
}

export default TopNav;
