import React from 'react'
import { IoIosCheckmark } from "react-icons/io";
import { GoClock } from "react-icons/go";
import { FaHeadphones } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import Link from 'next/link';
import Image from 'next/image';
import { MdCancel } from "react-icons/md";
function FormSubmitesComponent() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50 backdrop-blur-xs text-center">
        <div className="flex flex-col items-center p-8 rounded-lg bg-tertiary w-[35rem] max-sm:w-[30rem] relative">
      <span className="absolute right-4 top-4">
        <a href="/">
        <MdCancel className="text-2xl" />
        </a>
      </span>
        <IoIosCheckmark className="w-20 h-20 border border-primary rounded-full text-primary text-2xl font-light mb-2" />
        <div className="flex flex-col gap-1">
        <h1 className="text-4xl text-secondary font-heading fotn-bold">Thank You!</h1>
        <p className="text-xl font-heading text-primary">Your enquiry has been recieved</p>
        </div>
<div className="flex items-center justify-center w-full py-6">
  <div className="flex-grow h-px bg-primary"></div>

  <div className=" text-primary text-lg leading-none">
    ❖
  </div>

  <div className="flex-grow h-px bg-primary"></div>
</div>
<p className="text-secondary font-light">We appreciate you choosing Arthur PemBroke. <br />A member of our concierge team will be in touch <br />shortly to assist you.</p>
<div className="flex items-center max-md:flex-col py-6 w-full font-light max-sm:gap-8">

<div className="text-primary flex flex-col gap-2 items-center w-full">
    <GoClock className="text-primary text-4xl" />
    <p className="text-secondary">Prompt Response <br />We aim to reply <br />within 1 hour</p>
</div>
<div className="text-primary flex flex-col gap-2 items-center w-full">
<Image src={'/logo.svg'} width={80} height={80} alt='ArthurPembroke_logo' className='max-md:w-20 h-auto '/>
    <p className="text-secondary">Discreet & Professional <br />Your  enquiry is handled<br />with complete discretion</p>
</div>
<div className="text-primary flex flex-col gap-2 items-center w-full">
    <FaHeadphones  className="text-primary text-4xl" />
    <p className="text-secondary">Bespoke Service<br />Tailored solution<br />to your needs</p>
</div>

</div>
<div className="flex flex-col gap-1 items-center">
    <a href="https://wa.me/message/UBG5VSWKWVKNK1" className="flex items-center justify-center gap-4 w-80 border border-primary bg-secondary text-primary py-4 text-center rounded-md uppercase font-heading tracking-widest"><FaPhoneAlt /> Call us directly</a>
</div>
        </div>
      
    </div>
  )
}

export default FormSubmitesComponent
