import React from 'react'
import Accordion from './accordion';
import FadeInText from '../Effects/fadeInText';

function Services() {
  return (
    <div className='flex flex-col py-[40px] w-full'>

      <div className='text-[80px]'><FadeInText>Our Services</FadeInText></div>  
        <div className='space-y-1.5'>
            <Accordion title={"Website Rescue & Redesign"} >We specialize in reviving outdated, slow, or broken websites, optimizing them for performance, and giving them a modern, user-friendly interface. We'll migrate your site to a modern, reliable stack, ensuring it's not just functional, but future-proof.
</Accordion>
             <Accordion title={"Custom Software Development"} >   We build robust, scalable software solutions that are tailored to your business. Our expertise includes crafting custom web applications, SaaS platforms, and enterprise tools, as well as seamless API integrations. If you can imagine it, we can build it.</Accordion>
               <Accordion title={"Creative Websites"} >   We craft modern, responsive websites that tell your story and captivate your audience. Whether you need a simple portfolio site or a high-converting landing page, we ensure your site is a true reflection of your vision..</Accordion>
                 <Accordion title={"SEO & Growth"} >   We optimize your website from the inside out, ensuring search engines. From on-page and technical SEO to a clean, logical site structure and improved Core Web Vitals, we make your site fast, visible, and built for conversions. Whether it’s a fresh build or a redesign, we help you climb the rankings and stay there.</Accordion>
        </div>
   
    </div>
  )
}

export default Services;