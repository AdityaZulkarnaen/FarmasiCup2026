import React from 'react'
import Image from 'next/image'
import gununggs from '../../public/webp/gununggs.svg'
import fasihead from '../../public/webp/fasihead.webp'
import cupihead from '../../public/webp/cupihead.webp'
import kuning from '../../public/webp/kuning.webp'
import bggs from '../../public/webp/bggs.webp'
import perunggu from '../../public/webp/perunggu.webp'
import festrona from '../../public/webp/festrona.webp'
import bintang1 from '../../public/webp/bintang1.webp'
import bintang2 from '../../public/webp/bintang2.webp'
import rasi1 from '../../public/webp/rasi1.svg'
import venue from '../../public/webp/venue.webp'

const Gueststar = () => {
  return (
    <section className='relative flex min-h-screen w-full flex-col items-center px-6 pb-20 pt-40 max-sm:pt-0 max-sm:px-4 overflow-x-clip '>
        {/* <Image src={rasi1} alt="" aria-hidden className='absolute top-[10%] right-0 z-20 max-sm:scale-50' /> */}
      <Image src={bintang1} alt="" aria-hidden className='absolute top-[6%] left-[8%] z-20 scale-75 blur-[1px] max-sm:scale-50' />
      <Image src={bintang1} alt="" aria-hidden className='absolute top-[19%] left-[8%] z-20 scale-[1.6] blur-[1px] max-sm:scale-100' />
      <Image src={bintang1} alt="" aria-hidden className='absolute top-[4%] right-[18%] z-20 scale-[2.1] blur-[1px] max-sm:scale-125' />
      <Image src={bintang2} alt="" aria-hidden className='absolute top-[24%] right-[6%] z-20 scale-90 blur-[3px] max-sm:scale-50' />
      <Image src={bintang1} alt="" aria-hidden className='absolute top-[40%] left-[4%] z-20 scale-[1.2] blur-[1px] max-sm:scale-75' />
      <Image src={bintang1} alt="" aria-hidden className='absolute top-[52%] left-[26%] z-20 scale-[0.7] blur-[2px] max-sm:scale-[0.5]' />
      <Image src={bintang1} alt="" aria-hidden className='absolute top-[48%] right-[2%] z-20 scale-[1.7] blur-[2px] max-sm:scale-100' />
      {/* <Image src={bintang1} alt="" aria-hidden className='absolute bottom-[18%] left-[12%] z-20 scale-[7.2] blur-[1px] max-sm:scale-125' /> */}
      <Image src={bintang1} alt="" aria-hidden className='absolute bottom-[10%] right-[10%] z-20 scale-[0.7] blur-[1px] max-sm:scale-50' />
      {/* <Image src={bintang2} alt="" aria-hidden className='absolute top-[20%] right-[32%] z-20 scale-[0.9] blur-[3px] max-sm:scale-75' /> */}
      <Image src={bintang2} alt="" aria-hidden className='absolute top-[58%] left-[34%] z-2 scale-[0.6] blur-[2px] max-sm:scale-[0.4]' />
      <Image src={bintang2} alt="" aria-hidden className='absolute bottom-[30%] right-[2%] z-20 scale-[1.1] blur-[2px] max-sm:scale-75' />
      <Image
        src={gununggs}
        alt='Gunung Guest Star'
        className='absolute top-0 translate-y-[-20%] left-0 z-1 w-full h-auto scale-y-80 max-sm:translate-y-[10%] max-sm:scale-y-100 max-lg:scale-y-100 max-lg:translate-y-[-10%]'
      />
      <Image
        src={kuning}
        alt='kuning'
        className='absolute top-[28%] scale-y-105 w-screen z-6 h-auto max-sm:top-0  max-sm:translate-y-[220%] max-sm:scale-y-300 max-sm:scale-x-150 max-lg:scale-y-200 max-lg:translate-y-[-10%] max-lg:scale-x-150 '
      />

      <Image src={bggs} alt='Concert Venue Layout' fill className='absolute bottom-0 translate-y-[32%] scale-y-85 w-screen z-7 h-auto max-sm:translate-y-[36%] max-sm:scale-y-130 max-sm:left-[10%] max-lg:translate-y-[20%] max-lg:scale-y-90' />

      <div className='relative z-10 mt-10 max-sm:mt-30 flex w-full max-w-[520px] items-center justify-center '>
        <Image
          src={fasihead}
          alt='Fasi'
          className='absolute left-0 h-auto z-20 w-[300px] rotate-345 translate-x-[-85%] max-sm:w-[110px] max-sm:translate-x-[10%] max-sm:translate-y-[-20%] max-sm:top-[0%] max-lg:translate-x-[-40%] max-lg:w-[220px]'
        />
        <div className='rounded-full bg-gradient-to-b from-[#F56C4A]/50 to-[#FFEE2E]/50 border-[0.5px] border-[#FFEE2E]/50 px-[25%] py-4 backdrop-blur-xs text-center text-7xl font-extrabold tracking-wide max-sm:px-12 max-sm:py-2 text-white shadow-[0_8px_20px_rgba(0,0,0,0.2)] max-sm:text-xl max-lg:text-4xl'>
          GUEST
          <br />
          STAR
        </div>
        <Image
          src={cupihead}
          alt='Cupi'
          className='absolute right-0 h-auto w-[300px] z-20 rotate-15 translate-x-[85%] max-sm:w-[110px] max-sm:translate-x-[-10%] max-sm:top-[0%] max-sm:translate-y-[-20%] max-lg:translate-x-[40%] max-lg:w-[220px]'
        />
      </div>
      {/* <Image src={festrona} alt="Festrona" className='absolute bottom-0 translate-y-[65%] right-[-3%] z-7 w-[600px] h-auto max-lg:w-[320px] max-sm:w-[220px] blur-[4px]' /> */}
      

      <div className='relative z-10 mt-[10%] max-sm:mt-[20%] flex w-full flex-wrap items-center justify-center gap-8 max-sm:gap-3'>
        {[0, 1, 2, 3].map((index) => (
          <div
            key={index}
            className={
              index === 0
                ? 'relative h-[55vh] w-[18%] bg-gradient-to-b from-[#FFEE2E] to-[#E7654D] rounded-full shadow-[0_10px_24px_rgba(0,0,0,0.25)] max-lg:h-[40vh] max-lg:w-[35%] max-sm:h-[35vh] max-sm:w-[45%]'
                : 'relative h-[55vh] w-[18%] bg-gradient-to-b from-[#FFEE2E] to-[#E7654D] rounded-full shadow-[0_10px_24px_rgba(0,0,0,0.25)] max-lg:h-[40vh] max-lg:w-[35%] max-sm:h-[35vh] max-sm:w-[45%] flex justify-center'
            }
          >
            {index === 0 ? (
              <Image
                src={perunggu}
                alt='Guest Star'
                width={600}
                height={800}
                className='absolute bottom-[14%] left-0 w-full h-auto'
              />
            ) : (
              <span className='relative z-10 flex h-full w-full items-center justify-center text-8xl font-extrabold text-white drop-shadow-[0_4px_10px_rgba(0,0,0,0.35)] max-sm:text-3xl'>
                ?
              </span>
            )}
          </div>
        ))}
      </div>

      <span className='relative z-10 mt-10 text-4xl max-sm:text-lg max-sm:mt-4 font-semibold italic text-white/80'>
        MORE TO BE ANNOUNCED
      </span>

      <div className='relative z-10 mt-20 max-lg: flex w-full flex-col items-center'>
        <div className='flex justify-center w-full'>
          <div className='absolute left-1/2 top-0 z-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-b from-[#FBD633] to-[#B94520] px-20 py-3 text-center text-4xl max-sm:text-2xl max-sm:px-6 max-sm:py-2 font-extrabold tracking-wide text-white shadow-[0_6px_18px_rgba(0,0,0,0.25)]'>
            <span className='block'>CONCERT</span>
            <span className='hidden max-sm:block max-sm:whitespace-nowrap'>LAYOUT VENUE</span>
            <span className='block max-sm:hidden'>VENUE LAYOUT</span>
          </div>
          <div className='w-full max-w-[760px] aspect-[19/14] rounded-[22px] max-sm:w-[90%] flex justify-center items-center overflow-hidden' >
            <Image
              src={venue}
              alt='Concert Venue Layout'
              className='w-full h-auto'
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Gueststar
