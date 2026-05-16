'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Futarion from '../../public/webp/Futarion.webp'
import boyfutsal from '../../public/webp/boyfutsal.webp'
import gunungfutsal from '../../public/webp/gunungfutsal.webp'
import futsalplatform from '../../public/webp/futsalplatform.svg'
import bintang1 from '../../public/webp/bintang1.webp'
import bintang2 from '../../public/webp/bintang2.webp'
import pin from '../../public/webp/pin.webp'

const TARGET_DATE_UTC_MS = Date.UTC(2026, 5, 28, 17, 0, 0)

const getCountdown = () => {
  const nowMs = Date.now()
  const diffMs = Math.max(TARGET_DATE_UTC_MS - nowMs, 0)
  const totalSeconds = Math.floor(diffMs / 1000)

  const days = Math.floor(totalSeconds / 86400)
  const hours = Math.floor((totalSeconds % 86400) / 3600)
  const minutes = Math.floor((totalSeconds % 3600) / 60)
  const seconds = totalSeconds % 60

  return { days, hours, minutes, seconds }
}

const Futsal = () => {
  const [countdown, setCountdown] = useState(getCountdown())

  useEffect(() => {
    const timerId = setInterval(() => {
      setCountdown(getCountdown())
    }, 1000)

    return () => clearInterval(timerId)
  }, [])

  const timeBlocks = [
    { label: 'DAY', value: String(countdown.days) },
    { label: 'HOUR', value: String(countdown.hours).padStart(2, '0') },
    { label: 'MINUTES', value: String(countdown.minutes).padStart(2, '0') },
    { label: 'SECONDS', value: String(countdown.seconds).padStart(2, '0') },
  ]

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
        className='absolute bottom-[38%] right-0 z-10 w-[520px] h-auto max-lg:w-[360px] max-lg:top-[6%] max-lg:right-[-2%] max-sm:w-[230px] max-sm:top-[10%] max-sm:right-[-4%] max-lg:scale-110'
      />

      {/* planet — top left */}
      <Image
        src={Futarion}
        alt="Futarion"
        className='absolute left-[-10%] top-[2%] z-10 w-[600px] h-auto max-lg:w-[320px] max-lg:left-[-6%] max-lg:top-[2%] max-sm:w-[200px] max-sm:left-[-10%] max-sm:top-[6%]'
      /> 

      {/* full-width ground the boy stands on */}
      <Image
        src={futsalplatform}
        alt="Futsal Platform"
        className='absolute bottom-[34%] translate-y-[70%] left-0 z-10 w-screen h-auto max-sm:top-[30%] max-sm:scale-180 max-lg:top-[16%] max-lg:scale-120'
      />

      {/* boy */}
      <Image
        src={boyfutsal}
        alt="Boy Futsal"
        className='absolute bottom-[38%] right-[8%] z-20 w-[320px] h-auto max-lg:w-[210px] max-lg:top-[12%] max-lg:right-[2%] max-sm:w-[140px] max-sm:top-[20%] max-sm:right-[-10%] -scale-x-100 '
      />

      {/* center content column */}
      <div className='relative z-20 flex min-h-screen flex-col items-center justify-start gap-6 px-6 pt-20 max-sm:gap-4 max-sm:px-4 max-sm:pt-12'>
        {/* FUTSAL COMPETITION card */}
        <div className='flex w-full max-w-[460px] items-center justify-center rounded-[4rem] bg-gradient-to-b from-[#681F95] to-[#D899FF] px-12 py-8 backdrop-blur-md border-[0.5px] border-[#D899FF] max-sm:max-w-[300px] max-sm:rounded-3xl max-sm:px-6 max-sm:py-5'>
          <h2 className='text-center text-5xl font-extrabold leading-tight tracking-wide text-white max-lg:text-4xl max-sm:text-2xl'>
            FUTSAL<br />COMPETITION
          </h2>
        </div>

        {/* LOKASI pill */}
        <div className='flex w-full max-w-[460px] items-center justify-center gap-2 rounded-full border border-white/30 bg-white/5 px-10 py-4 backdrop-blur-sm max-sm:max-w-[300px] max-sm:py-3'>
          <Image src={pin} alt="Pin" className='h-10 w-auto text-white' />
          <span className='text-3xl font-bold tracking-wide text-white max-lg:text-2xl max-sm:text-lg'>Gor Nusantara UGM</span>
        </div>

        {/* countdown */}
        <div className='flex w-full max-w-[840px] px-20 py-10 rounded-2xl backdrop-blur-xs shadow-lg bg-[#681F95]/50 items-start border-[0.5px] border-[#7735a0] justify-center gap-8 max-sm:max-w-[300px] max-sm:gap-2 max-sm:px-4 max-sm:py-5'>
          {timeBlocks.map((block) => (
            <div key={block.label} className='flex flex-1 flex-col items-center gap-2 max-sm:gap-1'>
              <div className='aspect-square w-full rounded-2xl bg-[#EAD0F2] max-sm:rounded-xl flex items-center justify-center'>
                <span className='text-4xl font-extrabold text-[#4C1D67] max-lg:text-3xl max-sm:text-xl'>
                  {block.value}
                </span>
              </div>
              <span className='text-2xl font-bold tracking-wide text-white max-lg:text-sm max-sm:text-[9px] max-sm:whitespace-nowrap max-sm:tracking-tight'>
                {block.label}
              </span>
            </div>
          ))}
        </div>

        {/* guidebook + register */}
        <div className='mt-4 flex w-full max-w-[920px] items-center justify-center gap-10 max-sm:flex-col max-sm:gap-6'>
          <div className='relative w-full max-w-[520px] rounded-[22px] border border-white/20 bg-[#B96ACF]/30 p-4 shadow-[0_0_40px_rgba(185,106,207,0.45)] backdrop-blur-md max-sm:max-w-[300px]'>
            <div className='relative h-[400px] overflow-hidden rounded-[16px] bg-white/20 max-lg:h-[320px] max-sm:h-[160px]'>
              <iframe
                title='Guidebook Futsal'
                src='https://drive.google.com/file/d/1b_zmhn-x_OLlnNsftM5npZLtkueJhfEp/preview'
                className='h-full w-full max-sm:h-[118%] max-sm:w-[118%] max-sm:origin-top-left max-sm:scale-[0.85]'
                allow='autoplay'
              />
            </div>
          </div>

          <a
            href='https://bit.ly/REGISTRASI-FARMASICUP-2026'
            target='_blank'
            rel='noreferrer'
            className='relative rounded-[16px] border border-white/20 bg-gradient-to-b from-[#D991FF] via-[#FE9AFC]/75 to-[#FF4FFB]/75 px-10 py-6 text-2xl font-extrabold tracking-wide text-white shadow-[0_0_30px_rgba(217,145,255,0.8)] transition-transform duration-200 hover:scale-[1.03] max-sm:px-6 max-sm:py-4 max-sm:text-base text-center'
          >
            REGISTER
            <br />
            HERE
          </a>
        </div>
      </div>
    </section>
  )
}

export default Futsal
