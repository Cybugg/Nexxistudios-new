import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Particles from "./Effects/Particles";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const clashGrotesk = localFont({
  src:"../public/fonts/OTF/ClashGrotesk-Regular.otf",
  variable:"--font-clashGrotesk",
  style:"normal"
})
const clashGroteskMedium = localFont({
  src:"../public/fonts/OTF/ClashGrotesk-Medium.otf",
  variable:"--font-clashGrotesk-medium",
  style:"light"
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Nexxi Studios - If you can think it, we can build it",
  description: "We are a future-focused software development and creative web agency, specializing in custom software solutions, modern website design, SEO optimization, and website redesigns. Our team partners with top designers and developers to build innovative digital platforms, rescue outdated websites, and help brands grow online",
  icons: {
    icon: "/icon.ico",
  },
  openGraph: {
    title: "Nexxi Studios - If you can think it, we can build it",
    description: "We are a future-focused software development and creative web agency, specializing in custom software solutions, modern website design, SEO optimization, and website redesigns. Our team partners with top designers and developers to build innovative digital platforms, rescue outdated websites, and help brands grow online",
    url: "https://www.nexxistudios.com/",
    siteName: "nexxistudios",
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: { 
    card: "summary_large_image",
    title: "Nexxi Studios - If you can think it, we can build it",
    description: "We are a future-focused software development and creative web agency, specializing in custom software solutions, modern website design, SEO optimization, and website redesigns. Our team partners with top designers and developers to build innovative digital platforms, rescue outdated websites, and help brands grow online",
    images: ["/logo.png"],
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable}  antialiased relative ${clashGrotesk.variable} ${clashGroteskMedium.variable}`}>

           <div className="absolute w-full bottom-0 right-0 mb-[40px] h-[250px]  z-[1]">
              <Particles particleColors={['#ffffff', '#ffffff']}
    particleCount={300}
    particleSpread={20}
    speed={0.1}
    particleBaseSize={100}
    moveParticlesOnHover={true}
    alphaParticles={false}
    disableRotation={false}
  />
        </div>
    
        {children}
      </body>
    </html>
  );
}
