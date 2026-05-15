import React from 'react'
import Title from '../../public/webp/title.webp'
import fasi from '../../public/webp/fasihero.webp'
import cupi from '../../public/webp/cupihero.webp'
import Image from 'next/image'
import gunungl from '../../public/webp/gunungl.webp'
import gunungr from '../../public/webp/gunungr.webp'
import frame2 from '../../public/webp/Frame2.png'
import bintang1 from '../../public/webp/bintang1.webp'
import bintang2 from '../../public/webp/bintang2.webp'

const Hero = () => {
  return (
    <div className='bg-[#422351] h-screen flex items-center justify-center overflow-x-clip'>
        <div className='w-[75%] h-[88.5%] bg-[#BE3A85] rounded-[50%] absolute top-40 blur-[125px] z-5'></div>
        <Image src={fasi} width={420} alt="Fasi" className='absolute top-25 left-10 z-999 rotate-345 drop-shadow-[0_0_25px_rgba(255,255,255,0.7)]' />
        <Image src={Title} alt="Title" className='flex z-999 scale-40' />
        <Image src={cupi} width={420} alt="Cupi" className='absolute top-28 right-[5%] z-999 rotate-15 drop-shadow-[0_0_25px_rgba(255,255,255,0.7)]' />
        <Image src={gunungl} width={350} alt="Gunung Kiri" className='absolute bottom-20 left-0 z-1' />
        <Image src={gunungr} width={350} alt="Gunung Kanan" className='absolute bottom-22 right-0 z-1' />
        <Image src={frame2} alt="Frame 2" className='absolute bottom-[-240%] z-10 w-screen' />
        <Image src={bintang1} alt="Bintang 1" className='absolute top-10 left-10 z-999 blur-[1px]' />
        <Image src={bintang1} alt="Bintang 1" className='absolute top-0 left-[30%] z-999 blur-[1px] scale-[500%]' />
        <Image src={bintang1} alt="Bintang 1" className='absolute top-[29%] left-[1%] z-999 blur-[1px] scale-[300%]' />
        <Image src={bintang2} alt="Bintang 2" className='absolute top-[6%] right-[40%] z-999 blur-[4px]' />
        <Image src={bintang1} alt="Bintang 1" className='absolute top-[14%] right-[4%] z-999 blur-[1px]' />
        <Image src={bintang1} alt="Bintang 1" className='absolute top-[16%] right-[20%] z-999 blur-[2px]' />
        <Image src={bintang2} alt="Bintang 2" className='absolute bottom-[12%] right-[8%] z-999 blur-[2px]' />
        <Image src={bintang2} alt="Bintang 2" className='absolute bottom-[4%] right-[38%] z-999 blur-[5px] scale-40' />
    </div>
  )
}

export default Hero