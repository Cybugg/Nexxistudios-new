"use client"
import { MinusIcon, PlusIcon } from "lucide-react";
import { useState } from "react";

export default function Accordion({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="font-clashGrotesk-Light">
      {/* Header */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full  flex gap-5 items-center py-3 px-2 text-left focus:outline-none"
      >
        
        <span className="text-5xl flex items-center justify-center ">{isOpen ? <MinusIcon /> : <PlusIcon />}</span>
        <span className="font-clashGrotesk text-[16x] lg:text-[19px] font-[400] leading-6">{title}</span>
      </button>
 
      {/* Content */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="font-clashGrotesk text-[16x] lg:text-[19px] font-[400] leading-6 pl-[52px]">{children}</div>
      </div>
    </div>
  );
}
