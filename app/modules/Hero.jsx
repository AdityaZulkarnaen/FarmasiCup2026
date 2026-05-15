import React from 'react'
import Title from '../../public/webp/title.webp'
import fasi from '../../public/webp/fasihero.webp'
import cupi from '../../public/webp/cupihero.webp'
import Image from 'next/image'
import gunungl from '../../public/webp/gunungl.webp'
import gunungr from '../../public/webp/gunungr.webp'
import frame2 from '../../public/webp/Frame2.svg'
import bintang1 from '../../public/webp/bintang1.webp'
import bintang2 from '../../public/webp/bintang2.webp'
import roket from '../../public/webp/roket.svg'

const Hero = () => {
  return (
    <div className='relative bg-[#422351] h-screen flex items-center justify-center overflow-x-clip'>
        <div className='w-[75%] h-[88.5%] bg-[#BE3A85] rounded-[50%] absolute top-40 blur-[125px] z-5 max-lg:w-[90%] max-lg:h-[60%] max-lg:blur-[90px] max-sm:blur-[70px] max-sm:w-[90%] max-sm:h-[60%]'></div>
        <Image src={fasi} width={420} alt="Fasi" className='absolute top-25 left-10 z-999 rotate-345 drop-shadow-[0_0_25px_rgba(255,255,255,0.7)] max-lg:h-auto max-lg:w-[260px] max-lg:top-60 max-lg:left-2 max-lg:rotate-30 max-sm:w-[140px] max-sm:top-50 max-sm:rotate-30 max-sm:left-0' />
        <Image src={Title} alt="Title" className='flex z-999 scale-40 max-lg:scale-[60%] max-sm:scale-[80%]' />
        <Image src={cupi} width={420} alt="Cupi" className='absolute top-28 right-[5%] z-999 rotate-15 drop-shadow-[0_0_25px_rgba(255,255,255,0.7)] max-lg:h-auto max-lg:w-[260px] max-lg:top-[42%] max-sm:w-[140px] max-sm:top-32 max-sm:top-90 max-sm:right-0' />
        <Image src={gunungl} width={350} alt="Gunung Kiri" className='absolute bottom-20 left-0 z-1 max-lg:h-auto max-lg:w-[320px] max-sm:w-[180px] max-sm:top-32 max-lg:top-42' />
        <Image src={gunungr} width={350} alt="Gunung Kanan" className='absolute bottom-22 right-0 z-1 max-lg:h-auto max-lg:w-[320px] max-lg:top-42 max-sm:w-[180px] max-sm:top-32' />
        <Image src={frame2} alt="Frame 2" className='absolute bottom-0 translate-y-[77%] z-10 w-screen max-sm:bottom-0 max-sm:translate-y-[77%] max-sm:scale-[200%] max-sm:w-auto max-lg:bottom-0 max-lg:translate-y-[64%]' />
        <Image src={bintang1} alt="Bintang 1" className='absolute top-10 left-10 z-999 blur-[1px] max-sm:scale-75' />
        <Image src={bintang1} alt="Bintang 1" className='absolute top-0 left-[30%] z-999 blur-[1px] scale-[500%] max-lg:scale-[300%] max-sm:scale-[180%]' />
        <Image src={bintang1} alt="Bintang 1" className='absolute top-[29%] left-[1%] z-999 blur-[1px] scale-[300%] max-lg:scale-[200%] max-sm:scale-100' />
        <Image src={bintang2} alt="Bintang 2" className='absolute top-[6%] right-[40%] z-999 blur-[4px] max-sm:scale-75' />
        <Image src={bintang1} alt="Bintang 1" className='absolute top-[14%] right-[4%] z-999 blur-[1px] max-sm:scale-75' />
        <Image src={bintang1} alt="Bintang 1" className='absolute top-[16%] right-[20%] z-999 blur-[2px] max-sm:scale-75' />
        <Image src={bintang2} alt="Bintang 2" className='absolute bottom-[12%] right-[8%] z-999 blur-[2px] max-sm:scale-75' />
        <Image src={bintang2} alt="Bintang 2" className='absolute bottom-[4%] right-[38%] z-999 blur-[5px] scale-40 max-sm:scale-[25%]' />
        <Image src={roket} alt="Roket" className='absolute bottom-[-60%] left-[34%] z-999 max-sm:scale-45 max-sm:left-[2%] max-sm:bottom-[-10%] max-lg:left-[20%] max-lg:bottom-[-15%]' />
    </div>
  )
}

export default Hero