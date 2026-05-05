import Image from 'next/image'
import React from 'react'

function AboutSection() {
  return (
    <section className='w-screen flex max-lg:flex-col justify-between gap-2 px-24 max-lg:px-12 maxm-md:px-4 py-20'>
        <div className='w-2/5 max-lg:w-full max-lg:h-[32rem] max-sm:h-[20rem] '>
        <div className='relative w-full max-lg:flex max-lg:justify-center'>
            <div className='w-[29rem] max-xl:w-[24rem] h-[29rem] max-xl:h-[24rem] max-sm:h-[20rem] max-sm:w-full max-lg:w-[30rem] max-lg:h-[30rem] bg-[url("/About-Image.jpg")] bg-center bg-cover top-4 max-lg:top-0 left-4 max-lg:left-1/2 max-lg:-translate-x-1/2 absolute'>
            <span className='w-14 h-[1.5px] bg-primary absolute -top-4 -left-4'></span>
            <span className='w-[1.5px] h-14 bg-primary absolute -top-4 -left-4'></span>
            <div className='w-32 h-32 bg-primary absolute -bottom-8 -right-8 flex justify-center items-center flex-col'>
                <span className='text-4xl font-medium font-heading'>EST.</span>
                <span className='text-sm font-heading'>London</span>
            </div>
            </div>
        </div>
        </div>
        <div className='w-3/5 max-xl:w-1/2 max-lg:w-full flex flex-col gap-4'>
        <span className='tracking-widest text-primary text-lg font-medium font-heading flex items-center gap-4 uppercase'><span className='w-12 h-[1.5px] bg-primary'></span> About Us</span>
        <h2 className='text-5xl font-medium font-heading'>Arthur <br className='max-lg:hidden' /> Pembroke <br /> <span className='text-primary'> Luxury <br className='max-lg:hidden' /> Concierge</span></h2>
        <div className='flex flex-col gap-6 '>
            <p>Established with a clear purpose — to provide a level of service defined not by scale, but by consistency, discretion, and attention to detail. In an environment where convenience often replaces quality, we offer a more considered approach.</p>
            <p>Every service is arranged personally, every detail is accounted for, and every client is treated with the level of care expected from a private firm.</p>
        </div>
        <div className='flex w-full items-center'>
            <div className='h-20 w-1/3 max-sm:w-full border border-primary flex flex-col justify-center p-6 max-sm:p-2'>
            <h5 className='text-primary font-heading font-semibold'>01</h5>
            <p className='text-2xl font-semibold font-body'>Discretion</p>
            </div>
            <div className='h-20 w-1/3 max-sm:w-full border border-primary flex flex-col justify-center p-6 max-sm:p-2'>
            <h5 className='text-primary font-heading font-semibold'>02</h5>
            <p className='text-2xl font-semibold font-body'>Precision</p>
            </div>
            <div className='h-20 w-1/3 max-sm:w-full border border-primary flex flex-col justify-center p-6 max-sm:p-2'>
            <h5 className='text-primary font-heading font-semibold'>03</h5>
            <p className='text-2xl font-semibold font-body'>Excellence</p>
            </div>
        </div>
        </div>
      
    </section>
  )
}

export default AboutSection
