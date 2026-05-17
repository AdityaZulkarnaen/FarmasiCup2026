import React from 'react'
import Image from 'next/image'
import cupihero from '../../public/webp/cupihero.webp'
import Funronix from '../../public/webp/Funronix.webp'
import frame3 from '../../public/webp/frame3.svg'
import bintang1 from '../../public/webp/bintang1.webp'
import bintang2 from '../../public/webp/bintang2.webp'
import pin from '../../public/webp/pin.webp'
import gununglari from '../../public/webp/gununglari.svg'

const Funrun = () => {
  return (
    <section className='relative mt-[16%] max-sm:mt-0 max-lg:mt-[0%] min-h-screen w-full overflow-x-clip'>
      <div className='absolute left-[15%] top-[24%] z-1 w-[120%] h-[80%] max-sm:h-[60%] max-sm:top-[0%] max-lg:top-[12%] max-lg:h-[70%] max-sm:translate-y-[-4%] bg-[#FFA2D7] rounded-[50%] blur-[150px] max-sm:blur-[100px]' />

      <Image src={bintang1} alt="" aria-hidden className='absolute top-[6%] left-[8%] z-10 scale-75 blur-[1px] max-sm:scale-50' />
      <Image src={bintang2} alt="" aria-hidden className='absolute top-[10%] left-[30%] z-10 scale-[1.6] blur-[2px] max-sm:scale-100' />
      <Image src={bintang1} alt="" aria-hidden className='absolute top-[4%] right-[20%] z-10 scale-[2.1] blur-[1px] max-sm:scale-125' />
      <Image src={bintang2} alt="" aria-hidden className='absolute top-[28%] right-[6%] z-10 scale-90 blur-[3px] max-sm:scale-50' />
      <Image src={bintang1} alt="" aria-hidden className='absolute top-[40%] left-[4%] z-10 scale-[1.2] blur-[1px] max-sm:scale-75' />
      <Image src={bintang2} alt="" aria-hidden className='absolute top-[56%] left-[22%] z-10 scale-[0.6] blur-[2px] max-sm:scale-[0.4]' />
      <Image src={bintang1} alt="" aria-hidden className='absolute top-[50%] right-[22%] z-10 scale-[1.7] blur-[2px] max-sm:scale-100' />
      <Image src={bintang1} alt="" aria-hidden className='absolute bottom-[18%] left-[12%] z-1 scale-[7.5] blur-[1px] max-sm:scale-125' />
      <Image src={bintang1} alt="" aria-hidden className='absolute bottom-[10%] right-[10%] z-10 scale-[0.7] blur-[1px] max-sm:scale-50' />
      <Image src={bintang2} alt="" aria-hidden className='absolute bottom-[30%] right-[2%] z-10 scale-[1.1] blur-[2px] max-sm:scale-75' />


    

      <Image
        src={Funronix}
        alt="Funronix"
        className='absolute right-[-8%] top-[12%] z-10 w-[520px] h-auto max-lg:w-[300px] max-lg:top-[0%] max-sm:w-[200px] max-sm:top-[24%] max-sm:right-[-19%]'
      />

      <Image
        src={cupihero}
        alt="Cupihero"
        className='absolute top-[12%] left-[6%] z-20 w-[320px] h-auto max-lg:w-[200px] max-lg:top-[0%] max-lg:left-[2%] max-sm:w-[140px] max-sm:top-[1%] max-sm:left-[-8%] rotate-345 -scale-x-100'
      />

      <Image
        src={gununglari}
        alt="Gunung Lari"
        className='absolute top-0 translate-y-[-4%] left-[20%] z-0 w-[80%] h-auto max-sm:translate-y-[-40%] max-sm:scale-120 max-lg:translate-y-[-32%]'
      />

      <Image
        src={frame3}
        alt="Frame 3"
        className='absolute top-0 translate-y-[-22%] left-0 z-1 w-screen scale-y-90 h-auto max-sm:translate-y-[-26%] max-sm:scale-120 max-lg:translate-y-[-36%]'
      />

      <div className='relative z-20 flex min-h-screen flex-col items-center justify-start gap-6 px-6 pt-20 max-sm:pt-0 max-lg:pt-0 max-sm:gap-4 max-sm:px-4'>
        <div className='flex w-full max-w-[420px] items-center justify-center rounded-[3.5rem] bg-gradient-to-b from-[#BE3A85]/50 to-[#FFA9FE]/50 px-0 py-3 backdrop-blur-md border-[0.5px] border-[#F2C2FF] max-sm:max-w-[300px] max-sm:rounded-3xl max-sm:px-6 max-sm:py-4'>
          <h2 className='text-center text-5xl font-extrabold leading-tight tracking-wide text-white max-lg:text-4xl max-sm:text-2xl'>
            FUN RUN
          </h2>
        </div>

        <div className='flex w-full max-w-[420px] items-center justify-center gap-2 rounded-full border border-white/30 bg-white/5 px-10 py-4 backdrop-blur-sm max-sm:max-w-[300px] max-sm:py-3'>
          <Image src={pin} alt="Pin" className='h-10 w-auto text-white' />
          <span className='text-3xl font-bold tracking-wide text-white max-lg:text-2xl max-sm:text-lg'>To Be Announced</span>
        </div>

        <div className='flex w-full max-w-[820px] px-20 py-10 rounded-2xl backdrop-blur-xs shadow-lg bg-[#BE3A85]/50 border-[0.5px] border-[#BE3A85] items-start justify-center gap-8 max-sm:max-w-[300px] max-sm:gap-2 max-sm:px-4 max-sm:py-5'>
          {['DAY', 'HOUR', 'MINUTES', 'SECONDS'].map((label) => (
            <div key={label} className='flex flex-1 flex-col items-center gap-2 max-sm:gap-1'>
              <div className='flex aspect-square w-full items-center justify-center rounded-2xl bg-[#F1D6FF] max-sm:rounded-xl'>
                <span className='text-4xl font-extrabold text-[#5C2D68] max-lg:text-3xl max-sm:text-lg'>--</span>
              </div>
              <span className='text-2xl font-bold tracking-wide text-white max-lg:text-sm max-sm:text-[9px] max-sm:whitespace-nowrap max-sm:tracking-tight'>
                {label}
              </span>
            </div>
          ))}
        </div>

        <div className='mt-4 flex w-full max-w-[920px] items-center justify-center'>
          <div className='relative w-full max-w-[720px] rounded-[22px] border border-white/20 bg-linear-to-b from-[#E87BD1] to-[#985C97] p-6 shadow-[0_0_40px_rgba(200,116,222,0.45)] backdrop-blur-md max-sm:max-w-[320px]'>
            <div className='relative h-[600px] overflow-hidden rounded-[18px] flex items-center justify-center max-lg:h-[400px] max-sm:h-[180px]'>
              <span className='text-4xl text-center font-extrabold tracking-[0.2em] text-white/80 max-lg:text-3xl max-sm:text-2xl'>
                Route To Be Announced
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Funrun
