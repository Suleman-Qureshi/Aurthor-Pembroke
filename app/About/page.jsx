import React from 'react'
import NavBar from '../Components/Header/NavBar.jsx'
import Footer from '../Components/Footer/Footer.jsx'
import { ImQuotesLeft } from "react-icons/im";
function page() {
  return (
    <div>
        <NavBar/>
           <section className="relative px-24 max-lg:px-12 max-sm:px-4 min-h-screen flex items-center justify-center bg-[#0B0B0D] overflow-hidden">
      
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#2A1F12,transparent_60%)] opacity-70"></div>

      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      ></div>

      <div className="relative z-10 text-center px-6">
        <p className="text-[#C6A45C] tracking-[0.3em] text-sm mb-6 font-heading">
          ABOUT US
        </p>

        <h1 className="text-white text-5xl md:text-8xl font-serif leading-tight font-heading">
          A Firm Built on{" "}
          <span className="text-[#B8924A] italic">Principle.</span>
        </h1>

        <p className="text-gray-400 mt-6 tracking-widest text-sm font-body">
          ARTHUR PEMBROKE • LUXURY CONCIERGE • EST. LONDON
        </p>
      </div>
    </section>
    <section className='w-screen px-24 max-lg:px-12 max-md:px-4 py-12 flex flex-col items-center text-center gap-4'>
      <span className='tracking-[0.3rem] text-heading text-primary'>The Arthur Pembroke Philosophy</span>
      <h2 className='text-7xl max-sm:text-6xl font-semibold font-heading my-4'>
        <span className='text-secondary'>Luxury Is</span>
        <span className='text-primary'>&nbsp;Knowing.</span>
      </h2>
      <div className='py-4 border-y border-primary/50 w-full text-secondary font-body text-4xl font-medium'>Luxury is not loud. </div>
      <div className='py-4 border-b border-primary/50 w-full text-secondary font-body text-4xl font-medium'>Luxury is not rushed. </div>
      <div className='py-4 border-b border-primary/50 w-full text-gray-400 font-body text-2xl font-medium text-center'>Luxury is knowing that everything will be handled properly — <br />without needing to ask twice. </div>
      <div className='py-4 font-body tracking-wider text-gray-400 font-medium'>Every service arranged personally. Every Detail, Accounted For. <br />Every client treated with the care expected from a private firm.</div>
    </section>
    <section className='px-24 max-lg:px-12 max-md:px-4 max-md:flex-col-reverse py-12 max-md:text-center bg-secondary flex gap-8 items-center'>
      <div className='w-1/3 max-md:w-full flex items-center'>
      <div className='w-80 max-md:w-full bg-primary/20 relative before:absolute before:top-0 before:left-0 before:w-1 before:h-24 before:bg-primary before:rounded-2xl p-8 font-body flex flex-col max-md:items-center gap-8'>
      <ImQuotesLeft className='text-8xl text-primary/60' />
      <p className='text-white text-2xl leading-relaxed'>"If something is worth doing, it should be done to the highest standard, every time."</p>
      <span className='text-primary tracking-widest uppercase font-heading'>— AJ, Founder</span>
      </div>
      </div>
      <div className='w-2/3 max-md:w-full max-md:items-center flex flex-col gap-8 font-body'>
       <span className='tracking-widest text-primary text-lg font-medium font-heading flex max-md:flex-col-reverse items-center gap-4 uppercase'><span className='w-12 h-[1.5px] bg-primary'></span>Our Founder</span>
       <h5 className='text-6xl font-semibold text-primary flex flex-col gap-2 text-heading tracking-wide'>
        <span className='text-white'>Founded on</span>
        <i>Values</i>
       </h5>
        <span className='w-24 h-[1.5px] bg-primary'></span>
        <div className='flex flex-col gap-4 text-gray-200 tracking-wide'>
          <p>Arthur Pembroke Luxury Concierge was founded by AJ, a man whose approach to both business and life is grounded in principle, discipline, and an appreciation for refinement.</p>
          <p>AJ believes that true luxury is not defined by excess, but by standards maintained consistently, without exception. With a focus on daily excellence, he has built Arthur Pembroke on values that are increasingly rare — reliability, discretion, and a commitment to doing things properly, regardless of scale.</p>
        </div>
      </div>
    </section>
    <section className='flex max-md:flex-col px-24 max-lg:px-12 max-md:px-4 py-12 gap-8 items-center max-md:text-center'>
      <div className='flex flex-col w-full gap-8 text-lg tracking-wide'>
        <span className='tracking-widest text-primary font-medium font-heading flex max-md:flex-col-reverse items-center gap-4 uppercase'><span className='w-12 h-[1.5px] bg-primary'></span>who we are</span>
        <p>Arthur Pembroke Luxury Concierge was established with a clear purpose — to provide a level of service defined not by scale, but by consistency, discretion, and attention to detail.</p>
        <p>In an environment where convenience often replaces quality, we offer a more considered approach. Every service is arranged personally, every detail is accounted for, and every client is treated with the level of care expected from a private firm.</p>
      </div>
      <div className='flex flex-col w-full gap-8 pl-8 max-md:pl-0'>
        <h5 className='text-6xl text-primary flex flex-col font-heading leading-tight tracking-wide'>
        <span className='text-secondary'>Arthur <br className='max-md:hidden' /> Pembroke</span>
        <p>Luxury <br className='max-md:hidden' /> Concierge</p>
       </h5>
       <span className='w-24 h-[1.5px] bg-primary'></span>
       <div className='flex flex-col bg-white w-96 font-body'>
       <div className='flex'>
         <div className='w-48 h-40 border border-primary text-primary flex flex-col gap-2 justify-center text-center items-center'>
          <span className='text-2xl font-heading'>Private & Corporate Clients</span>
         </div>
         <div className='w-48 h-40 border border-primary text-primary flex flex-col gap-2 justify-center text-center items-center'>
          <span className='text-2xl font-heading'>London & Surrounding Areas</span>
         </div>
       </div>
       <div className='flex'>
         <div className='w-48 h-40 border border-primary text-primary flex flex-col gap-2 justify-center text-center items-center'>
          <span className='text-2xl font-heading'>By Arrangement</span>
         </div>
         <div className='w-48 h-40 border border-primary text-primary flex flex-col gap-2 justify-center text-center items-center'>
          <span className='text-2xl font-heading'>Discreet Service</span>
         </div>
       </div>
       </div>
      </div>
    </section>
    <section className='px-24 max-lg:px-12 max-md:px-4 py-12 flex flex-col gap-8 bg-secondary max-md:text-center'>
      <span className='tracking-widest text-primary font-medium font-heading flex max-md:flex-col-reverse items-center gap-4 uppercase'><span className='w-12 h-[1.5px] bg-primary'></span>What Sets Us Apart</span>
      <h5 className='text-6xl text-primary font-medium flex flex-col font-heading leading-tight tracking-wide'>
        <span className='text-white'>The Arthur Pembroke</span>
        <i>Standard</i>
       </h5>
       <div className='flex max-md:flex-col gap-2 '>
       <div className='bg-tertiary/10 p-4 py-8 flex flex-col gap-8 w-full max-md:items-center'>
       <span className='font-heading text-6xl font-medium text-primary'>01</span>
       <h5 className='text-tertiary text-3xl font-semibold font-heading'>Our Standard</h5>
       <span className='w-24 h-[1.5px] bg-primary'></span>
       <p className='text-gray-400 text-body text-lg'>We operate to a standard rather than a volume. Every client is treated individually, every service is bespoke, and every detail matters. We do not offer pre-defined packages or automated processes — only a tailored service that adapts to each client.</p>
       </div>
       <div className='bg-tertiary/10 p-4 py-8 flex flex-col gap-8 w-full max-md:items-center'>
       <span className='font-heading text-6xl font-medium text-primary'>02</span>
       <h5 className='text-tertiary text-3xl font-semibold font-heading'>Discretion & Trust</h5>
       <span className='w-24 h-[1.5px] bg-primary'></span>
       <p className='text-gray-400 text-body text-lg'>Our clients place a high value on privacy, and so do we. Arthur Pembroke conducts all work with complete discretion. Many of our relationships are built through recommendation and maintained over time. Trust is earned through consistency.</p>
       </div>
       <div className='bg-tertiary/10 p-4 py-8 flex flex-col gap-8 w-full max-md:items-center'>
       <span className='font-heading text-6xl font-medium text-primary'>03</span>
       <h5 className='text-tertiary text-3xl font-semibold font-heading'>A Considered Approach</h5>
       <span className='w-24 h-[1.5px] bg-primary'></span>
       <p className='text-gray-400 text-body text-lg'>We are intentionally selective in the work we undertake. This allows us to maintain a calm, unhurried service, direct communication, and consistent delivery at a high standard — every time, without exception.</p>
       </div>
       </div>
    </section>
    <div className='px-24 max-lg:px-12 max-md:px-4 py-12 bg-primary flex max-md:flex-col max-md:text-center items-center justify-between text-white'>
      <h5 className='text-6xl font-medium flex flex-col font-heading leading-tight tracking-wide'>
        <span>Every Detail,</span>
        <i className='text-white/80'>Accounted For.</i>
       </h5>
       <button className='w-60 py-2 border text-lg border-white/80 rounded-xl uppercase cursor-pointer hover:bg-secondary/80 duration-200'>make an Enquiries</button>
    </div>
    <Footer/>
    </div>
  )
}

export default page
