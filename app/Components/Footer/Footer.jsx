import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <footer className="w-screen  flex flex-col justify-center items-center">
       
       <div className='bg-secondary px-24 max-lg:px-12 max-md:px-4 py-12 w-full flex max-lg:flex-col max-md:px-8 max-sm:px-4 gap-4 justify-between items-start max-md:items-center max-md:text-center'>
        <div className='flex flex-col max-md:items-center gap-4'>
          <Image src={'/dark logo.svg'} alt='dark logo' width={200} height={120} />
          <span className="w-24 h-[1.5px] bg-primary my-8"></span>
          <p className='w-60 max-md:w-full text-tertiary/40 tracking-widest leading-relaxed'>Providing bespoke chauffeur and concierge services to private and corporate clients who expect absolute reliability, discretion, and refinement.</p>
          <div className='flex gap-4 items-center my-2'>
            <div className=' w-8 h-8 rounded-lg border border-tertiary/40'></div>
            <div className=' w-8 h-8 rounded-lg border border-tertiary/40'></div>
            <div className=' w-8 h-8 rounded-lg border border-tertiary/40'></div>
          </div>
        </div>
        <div className='flex flex-col gap-4'>
          <h5 className='flex items-center max-md:flex-col-reverse gap-4 uppercase text-primary text-sm font-medium tracking-widest'> <span className="w-12 h-[1.5px] bg-primary my-8 max-md:my-2"></span> <span>navigation</span></h5>
          <div className='w-60 text-tertiary/40 tracking-widest leading-relaxed flex flex-col gap-4 my-2'>
           <Link href={'/'} className='relative hover:text-primary duration-200 before:absolute before:w-0 before:h-0.5 before:bg-primary before:-bottom-2 before:left-0 hover:before:w-12 before:duration-200'>Home</Link>
           <Link href={'/About'} className='relative hover:text-primary duration-200 before:absolute before:w-0 before:h-0.5 before:bg-primary before:-bottom-2 before:left-0 hover:before:w-12 before:duration-200'>About Us</Link>
           <Link href={'/Services'} className='relative hover:text-primary duration-200 before:absolute before:w-0 before:h-0.5 before:bg-primary before:-bottom-2 before:left-0 hover:before:w-12 before:duration-200'>Services</Link>
           <Link href={'/Services'} className='relative hover:text-primary duration-200 before:absolute before:w-0 before:h-0.5 before:bg-primary before:-bottom-2 before:left-0 hover:before:w-12 before:duration-200'>Enquires</Link>
          </div>
       </div>
        <div className='flex flex-col gap-4'>
          <h5 className='flex items-center max-md:flex-col-reverse gap-4 uppercase text-primary text-sm font-medium tracking-widest'> <span className="w-12 h-[1.5px] bg-primary my-8 max-md:my-2"></span> <span>Services</span></h5>
          <div className='w-60 text-tertiary/40 tracking-widest leading-relaxed flex flex-col gap-4 my-2'>
           <Link href={'/'} className='relative hover:text-primary duration-200 before:absolute before:w-0 before:h-0.5 before:bg-primary before:-bottom-2 before:left-0 hover:before:w-12 before:duration-200'>Chauffer & <br className='max-md:hidden' /> Transfer</Link>
           <Link href={'/'} className='relative hover:text-primary duration-200 before:absolute before:w-0 before:h-0.5 before:bg-primary before:-bottom-2 before:left-0 hover:before:w-12 before:duration-200'>Coperate <br className='max-md:hidden' />Concierge </Link>
           <Link href={'/'} className='relative hover:text-primary duration-200 before:absolute before:w-0 before:h-0.5 before:bg-primary before:-bottom-2 before:left-0 hover:before:w-12 before:duration-200'>Private <br className='max-md:hidden' />Events </Link>
           <Link href={'/'} className='relative hover:text-primary duration-200 before:absolute before:w-0 before:h-0.5 before:bg-primary before:-bottom-2 before:left-0 hover:before:w-12 before:duration-200'>Personal <br className='max-md:hidden' />Concierge </Link>
           <Link href={'/'} className='relative hover:text-primary duration-200 before:absolute before:w-0 before:h-0.5 before:bg-primary before:-bottom-2 before:left-0 hover:before:w-12 before:duration-200'>Bespoke <br className='max-md:hidden' />Travel </Link>
          </div>
        </div>
        <div className='flex flex-col gap-4'>
          <h5 className='flex items-center gap-4 max-md:flex-col-reverse uppercase text-primary text-sm font-medium tracking-widest'> <span className="w-12 h-[1.5px] bg-primary my-8 max-md:my-2"></span> <span>Contact</span></h5>
          <div className='w-60 text-tertiary/40 tracking-widest leading-relaxed flex flex-col gap-4 my-2'>
          <div className='flex flex-col gap-1'>
            <span className='text-primary tracking-widest text-sm uppercase'>Telephone</span>
            <span className='text-tertiary/40'>+44 20 0000 0000</span>
          </div>
          <div className='flex flex-col gap-1'>
            <span className='text-primary tracking-widest text-sm uppercase'>Email</span>
            <span className='text-tertiary/40'>enquiries@ArthurPembroke.com</span>
          </div>
          <div className='flex flex-col gap-1'>
            <span className='text-primary tracking-widest text-sm uppercase'>Location</span>
            <span className='text-tertiary/40'>London, United Kingdom</span>
          </div>
          <div className='flex flex-col gap-1'>
            <span className='text-primary tracking-widest text-sm uppercase'>Availability</span>
            <span className='text-tertiary/40'>24 / 7 — 365 days</span>
          </div>
          </div>
        </div>
       </div>
        <div className='bg-secondary text-tertiary/40 border-t max-lg:flex-col items-center border-tertiary/40 w-screen py-8 px-24 max-md:px-4 max-lg:px-12 max-md:px8 flex items-center text-center justify-between gap-4'>
        <div className='w-1/3 max-lg:w-full max-lg:text-center text-start'>&copy;Arthur Pembroke Luxury Concierge. All rights reserved.</div>
        <div className='w-1/3'><span className='font-bold text-primary font-heading'>AP</span> Privacy Policy</div>
        <div className='w-1/3 text-end max-lg:text-center'>Terms of services</div>
        </div>
    </footer>
  )
}

export default Footer
