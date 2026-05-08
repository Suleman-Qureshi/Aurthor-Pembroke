import { GoDotFill } from "react-icons/go";
function HeroSection() {
  return (
    <>
    <section className='w-screen h-screen bg-[url("/heroImg.jpeg")] bg-no-repeat bg-center bg-cover bg-fixed font-heading'>
      <div className="w-full h-full bg-black/60 max-md:bg-black/80 flex flex-col text-center  justify-center  items-center gap-6 px-24 max-lg:px-12 max-md:px-4 pt-18">
      <div className=' text-xl max-sm:text-sm uppercase text-[#FFFFF0] max-md:text-primary tracking-widest flex items-center gap-4 max-sm:gap-1 w-full justify-center'>aurthor pembroke <GoDotFill className='text-[#FFFFF0] max-md:text-primary' /> luxury concierge</div>
         <h1 className='text-8xl max-md:text-7xl max-sm:text-5xl font-extrabold max-md:font-medium text-[#FFFFF0]'>Discretion. Precision.<br/> <i className='text-primary font-medium'>Excellence.</i></h1>
         <p className='text-slate-200 text-2xl max-md:text-xl max-sm:text-lg font-medium tracking-widest w-[60vw] max-sm:w-full font-body'>Bespoke Chauffeurur, concierge and same-day courier services for private and corporate clients.</p>
         <div className=' flex gap-4 items-center max-md:flex-col'>
          <button className='w-60  py-4 text-center bg-primary uppercase text-sm tracking-[0.3rem] text-light text-secondary'>MAKE AN Enquiries</button>
          <button className='w-44 py-4 text-center  uppercase text-sm tracking-[0.2rem] text-light text-primary border border-primary'>our services</button>
         </div>
      </div>
    </section>
    </>
  )
}
export default HeroSection
