import React from 'react'
import Image from 'next/image'
import Futarion from '../../public/webp/Futarion.webp'
import boyfutsal from '../../public/webp/boyfutsal.webp'
import gunungfutsal from '../../public/webp/gunungfutsal.webp'
import futsalplatform from '../../public/webp/futsalplatform.svg'
import bintang1 from '../../public/webp/bintang1.webp'
import bintang2 from '../../public/webp/bintang2.webp'

const Futsal = () => {
  return (
    
    <section className='relative mt-[28%] max-sm:mt-[10%] bg-[#422351] min-h-screen w-full overflow-x-clip'>
      {/* center glow, continuing the hero vibe*/}
      <div className='absolute left-[40%] top-0 z-10  w-[70%] h-[100%] bg-[#9442EF]/50 rounded-[50%] blur-[140px] max-sm:blur-[90px]' /> 

      {/* scattered stars (decorative, behind content) */}
      <Image src={bintang1} alt="" aria-hidden className='absolute top-[8%] left-[6%] z-11 scale-75 blur-[1px] max-sm:scale-50' />
      <Image src={bintang2} alt="" aria-hidden className='absolute top-[14%] left-[28%] z-11 scale-[1.6] blur-[2px] max-sm:scale-100' />
      <Image src={bintang1} alt="" aria-hidden className='absolute top-[5%] right-[18%] z-11 scale-[2.2] blur-[1px] max-sm:scale-125' />
      <Image src={bintang2} alt="" aria-hidden className='absolute top-[30%] right-[6%] z-11 scale-90 blur-[3px] max-sm:scale-50' />
      <Image src={bintang1} alt="" aria-hidden className='absolute top-[40%] left-[3%] z-11 scale-[1.3] blur-[1px] max-sm:scale-75' />
      <Image src={bintang2} alt="" aria-hidden className='absolute top-[55%] left-[20%] z-11 scale-[0.6] blur-[2px] max-sm:scale-[0.4]' />
      <Image src={bintang1} alt="" aria-hidden className='absolute top-[48%] right-[24%] z-11 scale-[1.8] blur-[2px] max-sm:scale-100' />
      <Image src={bintang1} alt="" aria-hidden className='absolute bottom-[18%] left-[10%] z-10 scale-[8.4] blur-[1px] max-sm:scale-125' />
      <Image src={bintang1} alt="" aria-hidden className='absolute bottom-[10%] right-[12%] z-11 scale-[0.7] blur-[1px] max-sm:scale-50' />
      <Image src={bintang2} alt="" aria-hidden className='absolute bottom-[30%] right-[2%] z-11 scale-[1.1] blur-[2px] max-sm:scale-75' />

      {/* mountain — sits behind the boy on the right */}
      <Image
        src={gunungfutsal}
        alt="Gunung Futsal"
        className='absolute bottom-0 right-0 z-10 w-[520px] h-auto max-lg:w-[360px] max-sm:w-[230px] max-sm:top-[8%] max-sm:right-[-8%]'
      />

      {/* planet — top left */}
      <Image
        src={Futarion}
        alt="Futarion"
        className='absolute left-[-10%] top-[2%] z-10 w-[600px] h-auto max-sm:w-[200px] max-sm:top-[6%]'
      /> 

      {/* full-width ground the boy stands on */}
      <Image
        src={futsalplatform}
        alt="Futsal Platform"
        className='absolute bottom-[-80%] left-0 z-10 w-screen h-auto max-sm:top-[50%] max-sm:scale-180'
      />

      {/* boy — stands on the platform, in front of the mountain */}
      <Image
        src={boyfutsal}
        alt="Boy Futsal"
        className='absolute bottom-[4%] right-[8%] z-20 w-[320px] h-auto max-lg:w-[210px] max-sm:w-[140px] max-sm:top-[20%] max-sm:right-[-10%] -scale-x-100 '
      />

      {/* center content column */}
      <div className='relative z-20 flex min-h-screen flex-col items-center justify-center max-sm:justify-start gap-6 px-6 max-sm:gap-4 max-sm:px-4'>
        {/* FUTSAL COMPETITION card */}
        <div className='flex w-full max-w-[460px] items-center justify-center rounded-[4rem] bg-gradient-to-b from-[#681F95] to-[#D899FF] px-12 py-8 backdrop-blur-md border-[0.5px] border-[#D899FF] max-sm:max-w-[300px] max-sm:rounded-3xl max-sm:px-6 max-sm:py-5'>
          <h2 className='text-center text-5xl font-extrabold leading-tight tracking-wide text-white max-lg:text-4xl max-sm:text-2xl'>
            FUTSAL<br />COMPETITION
          </h2>
        </div>

        {/* LOKASI pill */}
        <div className='flex w-full max-w-[460px] items-center justify-center gap-2 rounded-full border border-white/30 bg-white/5 px-10 py-4 backdrop-blur-sm max-sm:max-w-[300px] max-sm:py-3'>
          <svg viewBox='0 0 24 24' className='h-7 w-7 text-white max-sm:h-5 max-sm:w-5' fill='currentColor'>
            <path d='M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z' />
          </svg>
          <span className='text-3xl font-bold tracking-wide text-white max-lg:text-2xl max-sm:text-lg'>LOKASI</span>
        </div>

        {/* countdown */}
        <div className='flex w-full max-w-[840px] px-20 py-10 rounded-2xl backdrop-blur-xs shadow-lg bg-[#681F95]/50 items-start border-[0.5px] border-[#7735a0] justify-center gap-8 max-sm:max-w-[300px] max-sm:gap-2 max-sm:px-4 max-sm:py-5'>
          {['DAY', 'HOUR', 'MINUTES', 'SECONDS'].map((label) => (
            <div key={label} className='flex flex-1 flex-col items-center gap-2 max-sm:gap-1'>
              <div className='aspect-square w-full rounded-2xl bg-[#EAD0F2] max-sm:rounded-xl' />
              <span className='text-2xl font-bold tracking-wide text-white max-lg:text-sm max-sm:text-[9px] max-sm:whitespace-nowrap max-sm:tracking-tight'>
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Futsal
