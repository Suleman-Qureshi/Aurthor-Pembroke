'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import Link from 'next/link.js'
import { usePathname } from 'next/navigation'
import { HiBars3BottomLeft } from "react-icons/hi2";
import { FaBars } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import { IoIosMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
function NavBar() {
  const pathname=usePathname()
  const [mobileMenu,setMobileMenu]=useState(false)
  return (
    <>
    <nav className='w-12 h-12 left-4  top-4 border border-secondary bg-tertiary fixed flex p-4 items-center justify-between z-50' onClick={()=>setMobileMenu(!mobileMenu)}>
      <FaBars className="text-secondary" />
    </nav>

    <div className='w-screen max-md:hidden px-24 py-4 flex items-center justify-between font-heading fixed top-0 bg-[#FFFFF0] z-50 max-lg:px-20 max-md:px-12 max-sm:px-4'>
      <Image src={'/logo.svg'} width={150} height={120} alt='AuthorPembroke_logo' className='max-md:w-20 h-auto '/>
      <div className='flex gap-12 max-lg:px-4 item-center text-lg text-secondary max-md:hidden'>
        <Link className={`${(pathname==="/")?"text-xl before:w-full font-medium":""} relative before:absolute before:w-0 hover:before:w-full duration-200 before:duration-200 before:h-1 before:rounded-xl before:-bottom-1 before:bg-primary`} href="/">Home</Link>
        <Link className={`${(pathname==="/About")?"text-xl before:w-full font-medium":""} relative before:absolute before:w-0 hover:before:w-full duration-200 before:duration-200 before:h-1 before:rounded-xl before:-bottom-1 before:bg-primary`} href="/About">About</Link>
        <Link className={`${(pathname==="/Services")?"text-xl before:w-full font-medium":""} relative before:absolute before:w-0 hover:before:w-full duration-200 before:duration-200 before:h-1 before:rounded-xl before:-bottom-1 before:bg-primary`} href="/Services">Services</Link>
      </div>
      <div className=''>

      <Link href={'/Enquiries'}>
        <div  className='p-4 content-center w-52 h-14 text-center bg-secondary rounded-xl text-primary text-semibold relative before:absolute before:w-full duration-200 hover:duration-200 before:duration-200 before:h-full before:translate-y-full hover:before:translate-y-0 overflow-hidden before:bg-primary before:bottom-0 before:left-0 z-0 hover:text-secondary cursor-pointer'>
          <span className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full'>
          Enquiries
          </span>
</div>
      </Link>
    </div>
      </div>
    {/* Mobile-Menu */}
<div className={`${mobileMenu?'translate-x-0':'-translate-x-full'} transition-transform duration-300 ease-in-out w-80 h-screen fixed top-0  bg-tertiary border-r-2 border-primary z-50 p-4 flex flex-col gap-8 items-center`}>
  <button className='absolute top-4 right-4 text-2xl'onClick={()=>setMobileMenu(!mobileMenu)} aria-label="Close menu"><MdCancel /></button>
<Image src={'/logo.svg'} alt='authorPembroke_logo' width={1000} height={10000} className='w-44'/>
<div className='flex flex-col gap-8 items-center text-xl'>
   <Link className={`${(pathname==="/")?"text-2xl before:w-full font-medium":""} relative before:absolute before:w-0 hover:before:w-full duration-200 before:duration-200 before:h-1 before:rounded-xl before:-bottom-1 before:bg-primary`} href="/">Home</Link>
        <Link className={`${(pathname==="/About")?"text-2xl before:w-full font-medium":""} relative before:absolute before:w-0 hover:before:w-full duration-200 before:duration-200 before:h-1 before:rounded-xl before:-bottom-1 before:bg-primary`} href="/About">About</Link>
        <Link className={`${(pathname==="/Services")?"text-2xl before:w-full font-medium":""} relative before:absolute before:w-0 hover:before:w-full duration-200 before:duration-200 before:h-1 before:rounded-xl before:-bottom-1 before:bg-primary`} href="/Services">Services</Link>
</div>
   <div className=''>

      <Link href={'/Enquiries'}>
        <div  className='p-4 content-center w-52 h-14 text-center bg-secondary rounded-xl text-primary text-semibold relative before:absolute before:w-full duration-200 hover:duration-200 before:duration-200 before:h-full before:translate-y-full hover:before:translate-y-0 overflow-hidden before:bg-primary before:bottom-0 before:left-0 z-0 hover:text-secondary cursor-pointer'>
          <span className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full'>
          Enquiries
          </span>
</div>
      </Link>
    </div>
    <div className='flex gap-4 items-center'>
            <a href="mailto:enquiries@arthurpembroke.com" className=' w-8 h-8 rounded-lg border border-secondary text-secondary hover:border-primary duration-200 hover:text-primary text-2xl flex justify-center items-center cursor-pointer'><IoIosMail /></a>
            <a href='tel:+442080588959' className=' w-8 h-8 rounded-lg border border-secondary text-secondary hover:border-primary duration-200 hover:text-primary text-lg flex justify-center items-center cursor-pointer'><FaPhone /></a>
            <a href="https://wa.me/message/UBG5VSWKWVKNK1" className=' w-8 h-8 rounded-lg border border-secondary text-secondary hover:border-primary duration-200 hover:text-primary text-2xl flex justify-center items-center cursor-pointer'><FaWhatsapp /></a>
          </div>
          <div className='w-full text-center text-sm font-light'>{new Date().getFullYear()} <span className="text-primary">&copy;</span> Arthur Pembroke Luxury Concierge. All rights reserved. Privacy Policy <b className="text-primary">|</b> Terms of Service</div>
          <div className='w-full text-sm font-light text-center'>Designed and Developed by <a target="_black" href="https://portfolio-zeta-umber-60.vercel.app/" className="text-primary font-body font-bold cursor-pointer">SQ</a></div>
</div>
    </>
  )
}
export default NavBar
