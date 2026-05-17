"use client"

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import gunung from '../../public/webp/gunungkonser.svg'
import bintang1 from '../../public/webp/bintang1.webp'
import bintang2 from '../../public/webp/bintang2.webp'
import frame4 from '../../public/webp/frame4.svg'
import cupikonser from '../../public/webp/cupikonser.webp'
import fasikonser from '../../public/webp/fasikonser.webp'
import indie from '../../public/webp/indie.webp'
import festrona from '../../public/webp/festrona.webp'
import pin from '../../public/webp/pin.webp'

const TARGET_DATE_UTC_MS = Date.UTC(2026, 9, 30, 17, 0, 0)

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

const Konser = () => {
    const [hasMounted, setHasMounted] = useState(false)
    const [countdown, setCountdown] = useState(getCountdown())

    useEffect(() => {
        setHasMounted(true)
        const timerId = setInterval(() => {
            setCountdown(getCountdown())
        }, 1000)

        return () => clearInterval(timerId)
    }, [])

    const timeBlocks = [
        { label: 'DAY', value: hasMounted ? String(countdown.days) : '00' },
        {
            label: 'HOUR',
            value: hasMounted ? String(countdown.hours).padStart(2, '0') : '00',
        },
        {
            label: 'MINUTES',
            value: hasMounted ? String(countdown.minutes).padStart(2, '0') : '00',
        },
        {
            label: 'SECONDS',
            value: hasMounted ? String(countdown.seconds).padStart(2, '0') : '00',
        },
    ]

    return (
        <section className='relative mt-[16%] flex flex-col min-h-screen w-full items-center justify-start overflow-x-clip bg-[#422351] max-sm:mt-0 max-lg:mt-[0%]'>
            <div className='absolute left-[10%] top-[8%] z-4 w-[80%] h-[80%] max-sm:h-[60%] max-sm:top-[0%] max-lg:top-[12%] max-lg:h-[70%] max-sm:translate-y-[-4%] bg-[#FFC368]/67 rounded-[50%] blur-[150px] max-sm:blur-[100px]' />

            <Image src={bintang1} alt="" aria-hidden className='absolute top-[6%] left-[8%] z-2 scale-75 blur-[1px] max-sm:scale-50' />
            <Image src={bintang1} alt="" aria-hidden className='absolute top-[12%] left-[28%] z-2 scale-[1.6] blur-[2px] max-sm:scale-100' />
            <Image src={bintang1} alt="" aria-hidden className='absolute top-[4%] right-[18%] z-2 scale-[2.1] blur-[1px] max-sm:scale-125' />
            <Image src={bintang1} alt="" aria-hidden className='absolute top-[32%] right-[6%] z-20 scale-90 blur-[3px] max-sm:scale-50' />
            <Image src={bintang1} alt="" aria-hidden className='absolute top-[40%] left-[4%] z-20 scale-[1.2] blur-[1px] max-sm:scale-75' />
            <Image src={bintang1} alt="" aria-hidden className='absolute top-[52%] left-[22%] z-20 scale-[0.7] blur-[2px] max-sm:scale-[0.5]' />
            <Image src={bintang1} alt="" aria-hidden className='absolute top-[48%] right-[22%] z-20 scale-[1.7] blur-[2px] max-sm:scale-100' />
            <Image src={bintang1} alt="" aria-hidden className='absolute bottom-[18%] left-[12%] z-20 scale-[7.2] blur-[1px] max-sm:scale-125' />
            <Image src={bintang1} alt="" aria-hidden className='absolute bottom-[10%] right-[10%] z-20 scale-[0.7] blur-[1px] max-sm:scale-50' />
            <Image src={bintang2} alt="" aria-hidden className='absolute top-[20%] right-[32%] z-20  scale-[0.9] blur-[3px] max-sm:scale-75' />
            <Image src={bintang2} alt="" aria-hidden className='absolute top-[58%] left-[34%] z-20 scale-[0.6] blur-[2px] max-sm:scale-[0.4]' />
            <Image src={bintang2} alt="" aria-hidden className='absolute bottom-[30%] right-[2%] z-20 scale-[1.1] blur-[2px] max-sm:scale-75' />

            <Image src={gunung} alt="Gunung" className='absolute left-0 top-0 translate-y-[-24%] z-1 w-[100%] scale-y-90 max-sm:w-[100%] max-sm:top-[0%] max-lg:top-0 max-lg:translate-y-[-30%] max-lg:scale-y-110 max-lg:h-[70%] max-sm:translate-y-[-45%] max-sm:scale-y-150' />
            <Image src={indie} alt="Indie" className='relative z-20 w-[600px] h-auto max-lg:w-[320px] max-sm:w-[220px]' />
            <Image src={festrona} alt="Festrona" className='relative z-20 w-[480px] h-auto max-lg:w-[320px] max-sm:w-[220px]' />
            <Image src={cupikonser} alt="Cupikonser" className='absolute top-[26%] right-[6%] z-20 w-[300px] h-auto max-lg:w-[200px] max-lg:top-[0%] max-sm:w-[140px] max-sm:top-[1%] max-sm:right-[-8%]' />
            <Image src={fasikonser} alt="Fasikonser" className='absolute top-[26%] left-[6%] z-20 w-[300px] h-auto max-lg:w-[200px] max-lg:top-[0%] max-sm:w-[140px] max-sm:top-[1%] max-sm:left-[-8%]' />
            <Image src={frame4} alt="Frame 4" className='absolute top-[14%] translate-y-[-22%] max-lg:scale-y-110 max-lg:top-[16%] max-sm:scale-y-140 left-0 z-5 w-screen scale-y-80 h-auto max-sm:translate-y-[-26%]  max-lg:translate-y-[-36%]' />

            <div className='relative z-20 flex min-h-screen flex-col items-center justify-start gap-6 px-6 pt-20 max-sm:pt-4 max-lg:pt-4 max-sm:gap-4 max-sm:px-4'>
                <div className='flex w-full max-w-[420px] items-center justify-center rounded-[3.5rem] bg-gradient-to-b from-[#BE3A85]/50 to-[#FFA9FE]/50 px-0 py-3 backdrop-blur-md border-[0.5px] border-[#F2C2FF] max-sm:max-w-[300px] max-sm:rounded-3xl max-sm:px-6 max-sm:py-4'>
                    <h2 className='text-center text-5xl font-extrabold leading-tight tracking-wide text-white max-lg:text-4xl max-sm:text-2xl'>
                        Concert
                    </h2>
                </div>

                <div className='flex w-full max-w-fit items-center justify-center gap-2 rounded-full border border-white/30 bg-white/5 px-10 py-4 backdrop-blur-sm max-sm:max-w-[300px] max-sm:py-3'>
                    <Image src={pin} alt="Pin" className='h-10 w-auto text-white' />
                    <span className='text-3xl font-bold tracking-wide text-white max-lg:text-2xl max-sm:text-lg'>Parking Lot Stadion Mandala Krida</span>
                </div>

                <div className='flex w-[130%] px-20 py-10 rounded-2xl backdrop-blur-xs shadow-lg bg-[#BE3A85]/50 border-[0.5px] border-[#BE3A85] items-start justify-center gap-8 max-sm:max-w-[300px] max-sm:gap-2 max-sm:px-4 max-sm:py-5'>
                    {timeBlocks.map((block) => (
                        <div key={block.label} className='flex flex-1 flex-col items-center gap-2 max-sm:gap-1'>
                            <div className='flex aspect-square w-full items-center justify-center rounded-2xl bg-[#F1D6FF] max-sm:rounded-xl'>
                                <span className='text-4xl font-extrabold text-[#5C2D68] max-lg:text-3xl max-sm:text-xl'>
                                    {block.value}
                                </span>
                            </div>
                            <span className='text-2xl font-bold tracking-wide text-white max-lg:text-sm max-sm:text-[9px] max-sm:whitespace-nowrap max-sm:tracking-tight'>
                                {block.label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Konser