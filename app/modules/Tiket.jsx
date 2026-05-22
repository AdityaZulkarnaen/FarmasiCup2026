import React from 'react'
import Image from 'next/image'
import festrona from '../../public/webp/festrona.webp'
import bintang1 from '../../public/webp/bintang1.webp'
import bintang2 from '../../public/webp/bintang2.webp'
import fasi from '../../public/webp/fasihero.webp'
import cupi from '../../public/webp/cupihero.webp'
import bgtiket from '../../public/webp/bgtiket.webp'
import gunungtiket from '../../public/webp/gunungtiket.svg'
import footer from '../../public/webp/footer.svg'
import gunungfooter from '../../public/webp/gunungfooter.svg'
import ig from '../../public/webp/ig.svg'
import tiktok from '../../public/webp/tiktok.svg'
import x from '../../public/webp/x.svg'
import yt from '../../public/webp/yt.svg'

const Tiket = () => {
    return (
        <section className='relative bg-linear-to-b from-[#D25A4F] to-[#F56C4A] flex min-h-screen w-full flex-col items-center px-6 pb-[15%] pt-40 max-sm:pt-0 max-sm:px-4 overflow-x-clip '>
            <Image src={bintang1} alt='' aria-hidden className='absolute top-[6%] left-[6%] z-10 scale-[1.1] blur-[1px] max-sm:scale-75' />
            <Image src={bintang1} alt='' aria-hidden className='absolute top-[10%] right-[14%] z-10 scale-[1.6] blur-[1px] max-sm:scale-90' />
            <Image src={bintang1} alt='' aria-hidden className='absolute top-[22%] left-[18%] z-10 scale-[0.9] blur-[2px] max-sm:scale-75' />
            <Image src={bintang1} alt='' aria-hidden className='absolute top-[34%] right-[6%] z-10 scale-[1.3] blur-[1px] max-sm:scale-90' />
            <Image src={bintang1} alt='' aria-hidden className='absolute top-[46%] left-[4%] z-10 scale-[1.8] blur-[1px] max-sm:scale-100' />
            <Image src={bintang1} alt='' aria-hidden className='absolute bottom-[28%] right-[12%] z-10 scale-[1.2] blur-[2px] max-sm:scale-90' />
            <Image src={bintang2} alt='' aria-hidden className='absolute top-[18%] right-[30%] z-10 scale-[0.7] blur-[2px] max-sm:scale-50' />
            <Image src={bintang2} alt='' aria-hidden className='absolute bottom-[18%] left-[22%] z-10 scale-[0.9] blur-[2px] max-sm:scale-60' />
            <Image src={festrona} alt="Festrona" className='absolute top-0 translate-y-[-34%] right-[2%] z-7 w-[600px] h-auto max-lg:w-[320px] max-sm:w-[220px] blur-[4px] max-sm:translate-y-[-55%] max-sm:right-[-5%]' />
            <div className=' rounded-full z-20 bg-[#BE3A7A]/13 border-[2px] border-[#FFFFFF] px-[10%] py-4 backdrop-blur-xs text-center text-8xl font-extrabold tracking-wide max-sm:px-12 max-sm:py-2 text-white shadow-[0_8px_20px_rgba(0,0,0,0.2)] max-sm:text-xl max-lg:text-4xl'>
                CONCERT
                <br />
                TICKET
            </div>
            <Image src={fasi} width={420} alt="Fasi" className='absolute top-[5%] left-[7%] z-21 rotate-345 drop-shadow-[0_0_25px_rgba(255,255,255,0.7)] max-lg:h-auto max-lg:w-[260px] max-lg:top-30 max-lg:left-2 max-lg:rotate-30 max-sm:w-[140px] max-sm:top-0 max-sm:translate-y-[-10%] max-sm:rotate-30 max-sm:left-[-3%]' />
            <Image src={cupi} width={420} alt="Cupi" className='absolute top-[5%] right-[7%] z-21 rotate-15 drop-shadow-[0_0_25px_rgba(255,255,255,0.7)] max-lg:h-auto max-lg:w-[260px] max-lg:top-[56%] max-sm:w-[140px] max-sm:top-[50%] max-sm:right-0' />
            <Image src={bgtiket} alt="Background Tiket" className='absolute top-[12%] scale-y-110 z-1 w-screen h-auto max-sm:top-[50%] max-sm:translate-y-[-50%] max-lg:hidden max-lg:translate-y-[-50%] max-sm:hidden' />
            <Image src={gunungtiket} alt="Gunung Tiket" className='absolute top-0 translate-y-[96%] z-1 w-screen h-auto max-sm:top-[70%] max-sm:scale-y-100 max-sm:left-[0%] max-lg:translate-y-[200%] max-sm:translate-y-[50%] max-lg:scale-y-120' />
            {/* <Image src={gunungfooter} alt="Gunung Footer" className='absolute bottom-[6%] left-0 z-23 opacity-40 scale-y-80 w-screen h-auto max-sm:scale-y-130' /> */}
            <Image
                        src={footer}
                        alt='Footer'
                        className='h-auto w-screen absolute bottom-0 translate-y-[40%] z-22 max-sm:translate-y-[36%] max-sm:scale-y-130 max-sm:left-0 max-lg:translate-y-[23%]'
                        priority
                    />
            <div className='relative z-22 mt-[8%] flex w-full flex-col items-center gap-10 max-sm:mt-6'>
                <div className='flex w-full flex-wrap items-center justify-center gap-8 max-lg:flex-col max-lg:items-stretch max-lg:gap-4 max-sm:flex-col max-sm:items-stretch max-sm:gap-4'>
                    <div className='flex flex-col items-center gap-3 max-lg:w-full max-lg:flex-row max-lg:items-stretch max-lg:gap-2 max-sm:w-full max-sm:flex-row max-sm:items-stretch max-sm:gap-2'>
                        <div className='flex h-[380px] w-[320px] flex-col items-center justify-center rounded-[22px] bg-gradient-to-b from-[#963424] to-[#BE3A85] text-white shadow-[0_10px_24px_rgba(0,0,0,0.25)] max-lg:h-[200px] max-lg:w-[80%] max-sm:h-[140px] max-sm:w-[80%]'>
                            <span className='text-5xl font-extrabold tracking-wide max-sm:text-xl'>PRESALE</span>
                            <span className='text-9xl font-extrabold max-lg:text-5xl max-sm:text-3xl'>1</span>
                        </div>
                        <div className='text-4xl font-extrabold uppercase max-lg:bg-gradient-to-b max-lg:from-[#963424] max-lg:to-[#BE3A85] max-lg:shadow-[0_10px_24px_rgba(0,0,0,0.25)] max-lg:rounded-lg max-lg:text-white/90 max-lg:flex max-lg:w-[20%] max-lg:items-center max-lg:justify-center max-lg:text-xs max-sm:bg-gradient-to-b max-sm:from-[#963424] max-sm:to-[#BE3A85] max-sm:shadow-[0_10px_24px_rgba(0,0,0,0.25)] max-sm:rounded-lg text-white/90 max-sm:flex max-sm:w-[20%] max-sm:items-center max-sm:justify-center max-sm:text-xs'>
                            <span className='max-lg:rotate-90 max-sm:rotate-90 max-sm:text-[14px] max-lg:text-2xl'>ON SALE</span>
                        </div>
                    </div>
                    <div className='flex flex-col items-center gap-3 max-lg:w-full max-lg:flex-row max-lg:items-stretch max-lg:gap-3 max-sm:w-full max-sm:flex-row max-sm:items-stretch max-sm:gap-3'>
                        <div className='flex h-[380px] w-[320px] flex-col items-center justify-center rounded-[22px] bg-gradient-to-b from-[#B9397E] to-[#E7654D] text-white shadow-[0_10px_24px_rgba(0,0,0,0.25)] max-lg:h-[200px] max-lg:w-[80%] max-sm:h-[140px] max-sm:w-[80%]'>
                            <span className='text-5xl font-extrabold tracking-wide max-sm:text-xl'>PRESALE</span>
                            <span className='text-9xl font-extrabold max-lg:text-5xl max-sm:text-3xl'>2</span>
                        </div>
                        <div className='text-4xl font-extrabold uppercase max-lg:bg-gradient-to-b max-lg:from-[#B9397E] max-lg:to-[#E7654D] max-lg:shadow-[0_10px_24px_rgba(0,0,0,0.25)] max-lg:rounded-lg max-lg:text-white/90 max-lg:flex max-lg:w-[20%] max-lg:items-center max-lg:justify-center max-lg:text-xs max-sm:bg-gradient-to-b max-sm:from-[#B9397E] max-sm:to-[#E7654D] max-sm:shadow-[0_10px_24px_rgba(0,0,0,0.25)] max-sm:rounded-lg text-white/90 max-sm:flex max-sm:w-[20%] max-sm:items-center max-sm:justify-center max-sm:text-xs'>
                            <span className='max-lg:rotate-90 max-sm:rotate-90 max-sm:text-[14px] max-lg:text-2xl'>TBA</span>
                        </div>
                    </div>
                    <div className='flex flex-col items-center gap-3 max-lg:w-full max-lg:flex-row max-lg:items-stretch max-lg:gap-3 max-sm:w-full max-sm:flex-row max-sm:items-stretch max-sm:gap-3'>
                        <div className='flex h-[380px] w-[320px] flex-col items-center justify-center rounded-[22px] bg-gradient-to-b from-[#DF604D] to-[#F5B03C] text-white shadow-[0_10px_24px_rgba(0,0,0,0.25)] max-lg:h-[200px] max-lg:w-[80%] max-sm:h-[140px] max-sm:w-[80%]'>
                            <span className='text-5xl font-extrabold tracking-wide max-sm:text-xl'>PRESALE</span>
                            <span className='text-9xl font-extrabold max-lg:text-5xl max-sm:text-3xl'>3</span>
                        </div>
                        <div className='text-4xl font-extrabold uppercase max-lg:bg-gradient-to-b max-lg:from-[#DF604D] max-lg:to-[#F5B03C] max-lg:shadow-[0_10px_24px_rgba(0,0,0,0.25)] max-lg:rounded-lg max-lg:text-white/90 max-lg:flex max-lg:w-[20%] max-lg:items-center max-lg:justify-center max-lg:text-xs max-sm:bg-gradient-to-b max-sm:from-[#DF604D] max-sm:to-[#F5B03C] max-sm:shadow-[0_10px_24px_rgba(0,0,0,0.25)] max-sm:rounded-lg text-white/90 max-sm:flex max-sm:w-[20%] max-sm:items-center max-sm:justify-center max-sm:text-xs'>
                            <span className='max-lg:rotate-90 max-sm:rotate-90 max-sm:text-[14px] max-lg:text-2xl'>TBA</span>
                        </div>                    
                    </div>
                </div>
                <a
                    href='https://artatix.co.id/event/farmasi_cup_2026'
                    className='group relative inline-block overflow-visible rounded-full bg-transparent mt-[4%] px-[16%] py-4 text-center text-7xl font-extrabold text-white shadow-[0_0_50px_rgba(245,158,11,0.5)] drop-shadow-[0_0_22px_rgba(247,200,78,0.8)] max-lg:text-2xl max-sm:px-12 max-sm:py-3 max-sm:text-lg transition-transform duration-300 hover:scale-105'
                >
                    
                    <span className='absolute inset-0 bg-[#F7C84E]  rounded-full opacity-80 transition-all duration-300 group-hover:opacity-100'></span>

                    <span className='relative z-10 block leading-tight'>
                        GET YOUR
                        <br />
                        TICKETS!
                    </span>
                </a>
                <div className='mx-auto w-fit rounded-[26px] border-2 border-white/70 bg-white/15 px-8 py-6 text-center text-white shadow-[0_12px_28px_rgba(0,0,0,0.2)] backdrop-blur-md max-sm:px-4 max-sm:py-4'>
                    <h3 className='text-3xl font-extrabold tracking-wide max-sm:text-lg'>CONTACT PERSON</h3>
                    <div className='mt-4 grid gap-4 text-lg font-semibold max-sm:text-sm'>
                        <div>
                            CP Media Partner Medsos
                            <br />
                            <span className='text-white/95'>081228360047 (Sevin)</span>
                        </div>
                        <div>
                            CP Media Partner TV, Website, Koran, &amp; Radio
                            <br />
                            <span className='text-white/95'>081294293307 (Tika)</span>
                        </div>
                        <div>
                            CP Sponsor
                            <br />
                            <span className='text-white/95'>081218191374 (Kifa)</span>
                        </div>
                        <div>
                            CP Ticketing
                            <br />
                            <span className='text-white/95'>081225819546 (Nadia)</span>
                        </div>
                    </div>
                </div>
                <div className='relative flex w-full justify-center'>
                    
                    <div className='pointer absolute bottom-0 translate-y-[680%] max-sm:translate-y-[320%] max-lg:translate-y-[240%] flex items-center justify-center'>
                        <div className='pointer-events-auto flex items-center gap-6 max-sm:gap-3'>
                            <a
                                href='https://www.instagram.com/farmasicup?igsh=MW0yaXZ6YjlleXFlZA=='
                                target='_blank'
                                rel='noreferrer'
                                aria-label='Instagram'
                                className='flex h-16 w-16 items-center justify-center rounded-full bg-[#FFF4B5] text-[#5A1A65] transition-transform duration-200 hover:scale-105 max-sm:h-10 max-sm:w-10'
                            >
                                <Image src={ig} alt='' className='h-12 w-12 max-sm:h-6 max-sm:w-6' />
                            </a>
                            <a
                                href='https://www.tiktok.com/@farmasicup?_r=1&_t=ZS-96OeEuNTWVB'
                                target='_blank'
                                rel='noreferrer'
                                aria-label='TikTok'
                                className='flex h-16 w-16 items-center justify-center rounded-full bg-[#FFF4B5] text-[#5A1A65] transition-transform duration-200 hover:scale-105 max-sm:h-10 max-sm:w-10'
                            >
                                <Image src={tiktok} alt='' className='h-8 w-8 max-sm:h-5 max-sm:w-5' />
                            </a>
                            <a
                                href=' https://x.com/farmasicup?s=21'
                                target='_blank'
                                rel='noreferrer'
                                aria-label='X'
                                className='flex h-16 w-16 items-center justify-center rounded-full bg-[#FFF4B5] text-[#5A1A65] transition-transform duration-200 hover:scale-105 max-sm:h-10 max-sm:w-10'
                            >
                                <Image src={x} alt='' className='h-8 w-8 max-sm:h-5 max-sm:w-5' />
                            </a>
                            <a
                                href='https://www.youtube.com/@FARMASICUP'
                                target='_blank'
                                rel='noreferrer'
                                aria-label='YouTube'
                                className='flex h-16 w-16 items-center justify-center rounded-full bg-[#FFF4B5] text-[#5A1A65] transition-transform duration-200 hover:scale-105 max-sm:h-10 max-sm:w-10'
                            >   
                                <Image src={yt} alt='' className='h-12 w-12 max-sm:h-7 max-sm:w-7' />
                                
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* <Image src={gunungtiket} alt="Gunung Tiket" className='absolute bottom-0 translate-y-[60%] z-1 w-screen h-auto max-sm:translate-y-[36%] max-sm:scale-y-130 max-sm:left-[10%] max-lg:translate-y-[23%]' /> */}


            {/* <div className='relative z-10 mt-[10%] max-sm:mt-[20%] flex w-full flex-wrap items-center justify-center gap-8 max-sm:gap-3'>
                {[0, 1, 2, 3].map((index) => (
                    <div
                        key={index}
                        className={
                            index === 0
                                ? 'relative h-[55vh] w-[18%] bg-gradient-to-b from-[#FFEE2E] to-[#E7654D] rounded-full shadow-[0_10px_24px_rgba(0,0,0,0.25)] max-lg:h-[40vh] max-lg:w-[35%] max-sm:h-[35vh] max-sm:w-[45%]'
                                : 'relative h-[55vh] w-[18%] bg-gradient-to-b from-[#FFEE2E] to-[#E7654D] rounded-full shadow-[0_10px_24px_rgba(0,0,0,0.25)] max-lg:h-[40vh] max-lg:w-[35%] max-sm:h-[35vh] max-sm:w-[45%] flex justify-center'
                        }
                    >

                        <span className='relative z-10 flex h-full w-full items-center justify-center text-8xl font-extrabold text-white drop-shadow-[0_4px_10px_rgba(0,0,0,0.35)] max-sm:text-3xl'>
                            ?
                        </span>

                    </div>
                ))}
            </div>

            <span className='relative z-10 mt-10 text-4xl max-sm:text-lg max-sm:mt-4 font-semibold italic text-white/80'>
                TO BE ANNOUNCED
            </span>

            <div className='relative z-10 mt-20 max-lg: flex w-full flex-col items-center'>
                <div className='flex justify-center w-full'>
                    <div className='absolute left-1/2 top-0 z-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-b from-[#FBD633] to-[#B94520] px-20 py-3 text-center text-4xl max-sm:text-2xl max-sm:px-6 max-sm:py-2 font-extrabold tracking-wide text-white shadow-[0_6px_18px_rgba(0,0,0,0.25)]'>
                        <span className='block'>CONCERT</span>
                        <span className='hidden max-sm:block max-sm:whitespace-nowrap'>LAYOUT VENUE</span>
                        <span className='block max-sm:hidden'>VENUE LAYOUT</span>
                    </div>
                    <div className='w-full max-w-[760px] aspect-[19/14] rounded-[22px] bg-gradient-to-b from-[#FFEE2E] to-[#E7654D] shadow-[0_12px_28px_rgba(0,0,0,0.25)] max-sm:w-[90%] text-center text-4xl font-extrabold tracking-wide flex justify-center items-center' >
                        TO BE ANNOUNCED
                    </div>
                </div>
            </div> */}
        </section>
    )
}

export default Tiket