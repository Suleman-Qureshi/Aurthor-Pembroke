'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import Link from 'next/link.js'
import { usePathname } from 'next/navigation'
import { HiBars3BottomLeft } from "react-icons/hi2";
function NavBar() {
  const pathname=usePathname()
  const [mobileMenu,setMobileMenu]=useState(false)
  return (
    <>
    <div className='w-screen max-md:hidden px-24 py-4 flex items-center justify-between font-heading fixed top-0 bg-[#FFFFF0] z-50 max-lg:px-20 max-md:px-12 max-sm:px-4'>
      <Image src={'/logo.svg'} width={150} height={120} alt='logo' className='max-md:w-20 h-auto '/>
      <div className='flex gap-12 max-lg:px-4 item-center text-lg text-secondary max-md:hidden'>
        <Link className={`${(pathname==="/")?"text-xl before:w-full font-medium":""} relative before:absolute before:w-0 hover:before:w-full duration-200 before:duration-200 before:h-1 before:rounded-xl before:-bottom-1 before:bg-primary`} href="/">Home</Link>
        <Link className={`${(pathname==="/About")?"text-xl before:w-full font-medium":""} relative before:absolute before:w-0 hover:before:w-full duration-200 before:duration-200 before:h-1 before:rounded-xl before:-bottom-1 before:bg-primary`} href="/About">About</Link>
        <Link className={`${(pathname==="/Services")?"text-xl before:w-full font-medium":""} relative before:absolute before:w-0 hover:before:w-full duration-200 before:duration-200 before:h-1 before:rounded-xl before:-bottom-1 before:bg-primary`} href="/Services">Services</Link>
      </div>
      <div className=''>
        <button className='p-4 max-md:hidden content-center w-52 h-14 text-center bg-secondary rounded-xl text-primary text-semibold relative before:absolute before:w-full duration-200 hover:duration-200 before:duration-200 before:h-full before:translate-y-full hover:before:translate-y-0 overflow-hidden before:bg-primary before:bottom-0 before:left-0 z-0 hover:text-secondary cursor-pointer '>
          <span className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full'>
          Enquiries
          </span>
          </button>
      </div>
    </div>
      <div>
          <button className='md:hidden fixed top-4 bg-tertiary left-4 z-50 flex text-2xl border border-secondary p-2 rounded-lg hover:bg-primary/70 duration-200 cursor-pointer hover:text-tertiary text-secondary' onClick={()=>setMobileMenu(!mobileMenu)}><HiBars3BottomLeft className='' /></button>
      </div>
    {/* Mobile-Menu */}
<div className={`${mobileMenu?'translate-x-0':'-translate-x-full'} transition-transform duration-300 ease-in-out w-80 h-screen fixed top-0  bg-tertiary border-r-2 border-primary z-50 p-4 flex flex-col gap-12 items-center`}>
  <span className='absolute top-4 right-4 text-2xl'onClick={()=>setMobileMenu(!mobileMenu)}>x</span>
<Image src={'/logo.svg'} alt='' width={1000} height={10000} className='w-44'/>
<div className='flex flex-col gap-8 items-center text-xl'>
   <Link className={`${(pathname==="/")?"text-2xl before:w-full font-medium":""} relative before:absolute before:w-0 hover:before:w-full duration-200 before:duration-200 before:h-1 before:rounded-xl before:-bottom-1 before:bg-primary`} href="/">Home</Link>
        <Link className={`${(pathname==="/About")?"text-2xl before:w-full font-medium":""} relative before:absolute before:w-0 hover:before:w-full duration-200 before:duration-200 before:h-1 before:rounded-xl before:-bottom-1 before:bg-primary`} href="/About">About</Link>
        <Link className={`${(pathname==="/Services")?"text-2xl before:w-full font-medium":""} relative before:absolute before:w-0 hover:before:w-full duration-200 before:duration-200 before:h-1 before:rounded-xl before:-bottom-1 before:bg-primary`} href="/Services">Services</Link>
</div>
<button className='p-4 content-center w-52 h-14 text-center bg-secondary rounded-xl text-primary text-semibold relative before:absolute before:w-full duration-200 hover:duration-200 before:duration-200 before:h-full before:translate-y-full hover:before:translate-y-0 overflow-hidden before:bg-primary before:bottom-0 before:left-0 z-0 hover:text-secondary cursor-pointer '>
          <span className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full'>
          Enquiries
          </span>
          </button>
</div>
    </>
  )
}
export default NavBar
