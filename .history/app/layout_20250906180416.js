import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Particles from "./Effects/Particles";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const clashGrotesk = localFont({
  src:"../public/fonts/OTF/ClashGrotesk-Medium.otf",
  variable:"--font-clashGrotesk",
  style:"normal"
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Nexxi Studios: Say Bye to All Mid Websites and Softwares",
  description: "We are a future-focused software development and creative web agency, specializing in custom software solutions, modern website design, SEO optimization, and website redesigns. Our team partners with top designers and developers to build innovative digital platforms, rescue outdated websites, and help brands grow online",
  icons: {
    icon: "/icon.ico",
  },
  openGraph: {
    title: "ProficioHQ",
    description: "The digital operating system for freelancers, entrepreneurs and digital professionals in Africa and beyond.",
    url: "https://www.proficiohq.com/",
    siteName: "proficiohq",
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
    title: "ProficioHQ",
    description: "The digital operating system for freelancers, entrepreneurs and digital professionals in Africa and beyond.",
    images: ["/logo.png"],
  },
};
export const metadata: Metadata = {
  metadataBase: new URL("https://www.proficiohq.com/"),
  title: "ProficioHQ",
  description: "The all-in-one operating system for digital professionals",
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative ${clashGrotesk.variable} `}>
            <div className="absolute w-full h-screen">
              <Particles particleColors={['#000000', '#000000']}
    particleCount={300}
    particleSpread={10}
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
