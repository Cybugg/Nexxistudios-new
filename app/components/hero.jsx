import Link from 'next/link';
import React, {useEffect, useRef} from 'react'
import { FaWhatsapp } from 'react-icons/fa6';
import { TextPlugin } from "gsap/TextPlugin";
import gsap from 'gsap';

function Hero() {

   const textRef = useRef(null);
  const caretRef = useRef(null);
  const masterTlRef = useRef(null);
  const blinkRef = useRef(null);

  useEffect(() => {
   // Config
const texts = [
  { str: "dreams", before: "#C0C0C0", during: "#C0C0C0", after: "#C0C0C0" },
  { str: "visions", before: "#FFD700", during: "#FFD700", after: "#FFD700" },
  { str: "ideas", before: "#00E600", during: "#00E600", after: "#00E600" },
];

const charDuration = 0.06; // seconds per char
const pauseAfter = 1; // hold after typing
const caretThin = "36px";
const caretWide = "105px";

// reset text & caret
if (textRef.current) textRef.current.textContent = "";
if (caretRef.current) {
  Object.assign(caretRef.current.style, {
    display: "inline-block",
    height: "1.2em",
    width: caretThin,
    backgroundColor: "#000000",
    marginLeft: "6px",
    verticalAlign: "text-bottom",
    opacity: "1",
  });
}

// caret blink
const startBlink = () => {
  if (blinkRef.current) blinkRef.current.kill();
  blinkRef.current = gsap.to(caretRef.current, {
    opacity: 0,
    duration: 0.6,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
  });
};
startBlink();

// master timeline
const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.6 });
texts.forEach(({ str, before, during, after }) => {
  // BEFORE
  tl.call(() => {
    if (textRef.current) textRef.current.textContent = "";
    gsap.killTweensOf(caretRef.current);
    gsap.set(caretRef.current, { width: caretThin, backgroundColor: before, opacity: 1 });
    startBlink();
    gsap.to(textRef.current, { color: before, duration: 0.12 });
  });

  // TYPING
tl.to(
  { i: 0 },
  {
    i: str.length,
    duration: 1.1, // always 1.1s typing time
    ease: "none",
    onStart: () => {
      if (blinkRef.current) blinkRef.current.kill();
      gsap.to(caretRef.current, {
        width: caretWide,
        backgroundColor: "#000000",
        duration: 0.12,
        opacity: 1,
      });
      gsap.to(textRef.current, { color: during, duration: 0.12 });
    },
    onUpdate: function () {
      const current = Math.round(this.targets()[0].i);
      if (textRef.current) {
        textRef.current.textContent = str.slice(0, current);
      }
    },
    onComplete: () => {
      gsap.to(caretRef.current, {
        width: caretThin,
        backgroundColor: "#000000",
        duration: 0.12,
        delay: 0.06,
      });
      gsap.to(textRef.current, { color: after, duration: 0.12 });
      startBlink();
    },
  }
);

  // HOLD
  tl.to({}, { duration: pauseAfter });

  // CLEAR
  tl.call(() => {
    if (textRef.current) textRef.current.textContent = "";
  });
  tl.to({}, { duration: 0.08 });
});

masterTlRef.current = tl;

return () => {
  if (masterTlRef.current) masterTlRef.current.kill();
  if (blinkRef.current) blinkRef.current.kill();
  gsap.killTweensOf(textRef.current);
  gsap.killTweensOf(caretRef.current);
};
 }, []);

  return (
     <section className="h-full w-full flex items-center justify-center min-h-screen">
    <div className="w-full">
    <div className="flex flex-col items-start justify-start w-full  ">

{/* Main Text */}
<h1 className=" flex items-center justify-cente  w-full font-bold md:font-normal text-8xl sm:text-9xl  lg:text-[170px] ">
We bring your
</h1>

{/* Main Text */}
<h1 className=" flex items-center justify-cente  w-full font-bold md:font-normal text-8xl sm:text-9xl   lg:text-[170px] typewriter ">
     <span ref={textRef} className="min-h-[96px]" />
     <div className='hidden lg:block '><span ref={caretRef} className=''  aria-hidden="true" /></div> 
</h1>


{/* Main Text */}
<h1 className=" flex items-center justify-cente  w-full font-bold md:font-normal text-8xl sm:text-9xl   lg:text-[170px] ">
to life with code
</h1>


    </div>

    <div>

    </div>
    </div>
      </section>
  )
}

export default Hero;