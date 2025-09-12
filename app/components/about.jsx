import React, { useRef } from 'react'

import FadeInText from '../Effects/fadeInText';

function About() {
  return (
    <div className='flex flex-col py-[40px]'>
        <div className='text-[80px]'><FadeInText>About Us</FadeInText></div>
        <div className='break-words whitespace-pre-wrap space-y-1.5'>
              <p className=' font-clashGrotesk-Light text-[19px] font-bold leading-6'>At Nexxi Studios, we forge digital experiences. We're a team of forward-thinkers dedicated to transforming outdated digital platforms into powerful, future-proof assets. From giving a second life to slow, clunky websites to engineering bespoke software from the ground up, we turn old opportunities into new ones.</p>
        <p className='font-clashGrotesk-Light text-[19px] font-bold leading-6'>Our goal is to ensure your online presence is both beautifully crafted and incredibly effective.</p>
        </div>
      
    </div>
  )
}

export default About