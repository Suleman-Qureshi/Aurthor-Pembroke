import React from "react";
import { IoCarOutline } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { CiStar } from "react-icons/ci";
import { FiUserCheck } from "react-icons/fi";
import { SlTarget } from "react-icons/sl";
import { LuPackageOpen } from "react-icons/lu";
function OurServices() {
  return (
    <>
      <section className="w-screen px-24 max-lg:px-12 max-md:px-4 py-20 flex flex-col gap-8 bg-secondary before:bg-radial before:from-30% before:from-primary/10 before:to-secondary before:to-100% relative before:absolute before before:w-[40rem] before:h-[40rem] max-sm:before:w-[20rem] max-sm:before:h-[20rem] before:rounded-full before:left-1/2 before:-translate-x-1/2 before:z-0">
        <span className="tracking-widest text-primary text-sm font-medium font-heading flex items-center gap-4 uppercase">
          <span className="w-12 h-[1.5px] bg-primary relative z-10"></span> What we offer
        </span>
        <div className="w-full flex max-lg:flex-col justify-between text-tertiary before:z-10 relative items-center border-b border-primary/50 pb-12 mb-12 max-lg:gap-4">
          <h2 className="text-8xl max-lg:text-5xl w-full font-medium font-heading flex flex-col max-lg:flex-row max-lg:gap-4 gap-0">
            <span>
            Our
            </span>
             <span className="text-primary"> Services</span>
          </h2>
          <p className="text-right w-4/5 max-lg:w-full h-full text-2xl max-lg:text-left">
            We operate quietly, efficiently, and without compromise — delivering
            tailored solutions for those who value consistency and
            professionalism.
          </p>
        </div>
        <div className="flex w-full max-md:flex-col">
          <div className="p-8  bg-primary/25 relative flex flex-col gap-8 w-1/3 max-md:w-full before:absolute before:w-0 before:h-0.5 before:bg-primary before:top-0 before:left-0 before:duration-400 hover:before:w-full">
            <span className=" font-heading text-primary">01</span>
            <IoCarOutline className="text-primary text-5xl" />
            <h5 className="text-tertiary font-heading font-semibold text-4xl tracking-wide leading-relaxed">
              Chauffeurur & Transfer
            </h5>
            <p className="text-lg tracking-wider font-body text-tertiary/50 leading-loose">
              Door-to-door ground transport in our fleet of Rolls-Royce,
              Bentley, and Mercedes S-Class vehicles. Every journey is arranged
              with absolute care — from airport arrivals to private evenings,
              roadshows to long-distance transfers.
            </p>
            <div>
              <button className="flex gap-4 items-center p-4 border border-primary/50 rounded-xl hover:bg-secondary/25 cursor-pointer curation-200 group">
                <span className="w-12 h-[1.5px] bg-primary rounded-full group-hover:w-20 duration-200"></span>
                <span className=" font-heading uppercase text-tertiary text-lg font-semibold tracking-widest">
                  Enquiries
                </span>
              </button>
            </div>
          </div>
          <div className="flex flex-wrap w-2/3 max-md:w-full">
            <div className="p-8 border border-primary/50 hover:bg-primary/25 relative flex flex-col gap-4 w-1/2  max-md:w-full max-md:w-full before:absolute before:w-0 before:h-0.5 before:bg-primary before:top-0 before:left-0 before:duration-400 hover:before:w-full">
              <span className=" font-heading text-primary">02</span>
              <SlCalender className="text-primary text-3xl" />
              <h5 className="text-tertiary font-heading font-semibold text-3xl tracking-wide leading-normal">
                Corporate <br /> Concierge
              </h5>
              <p className="tracking-wider font-body text-tertiary/50 leading-loose">
                Seamless logistics for executives — airport meet-and-greet,
                roadshows, and multi-city coordination handled discreetly.
              </p>
            </div>
            <div className="p-8 border border-primary/50 hover:bg-primary/25 relative flex flex-col gap-4 w-1/2  max-md:w-full before:absolute before:w-0 before:h-0.5 before:bg-primary before:top-0 before:left-0 before:duration-400 hover:before:w-full">
              <span className=" font-heading text-primary">03</span>
              <CiStar className="text-primary text-3xl" />
              <h5 className="text-tertiary font-heading font-semibold text-4xl tracking-wide leading-normal">
                Private <br /> Events
              </h5>
              <p className="tracking-wider font-body text-tertiary/50 leading-loose">
                Discreet coordination for premieres, private dinners, and
                high-profile social occasions from start to finish.
              </p>
            </div>
            <div className="p-8 border border-primary/50 hover:bg-primary/25 relative flex flex-col gap-4 w-1/2  max-md:w-full before:absolute before:w-0 before:h-0.5 before:bg-primary before:top-0 before:left-0 before:duration-400 hover:before:w-full">
              <span className=" font-heading text-primary">04</span>
              <FiUserCheck className="text-primary text-3xl" />
              <h5 className="text-tertiary font-heading font-semibold text-4xl tracking-wide leading-normal">
                Personal Concierge
              </h5>
              <p className="tracking-wider font-body text-tertiary/50 leading-loose">
                A dedicated point of contact for lifestyle management — reservations, arrangements, and requests handled personally.
              </p>
            </div>
            <div className="p-8 border border-primary/50 hover:bg-primary/25 relative flex flex-col gap-4 w-1/2  max-md:w-full before:absolute before:w-0 before:h-0.5 before:bg-primary before:top-0 before:left-0 before:duration-400 hover:before:w-full">
              <span className=" font-heading text-primary">05</span>
              <SlTarget className="text-primary text-3xl" />
              <h5 className="text-tertiary font-heading font-semibold text-4xl tracking-wide leading-normal">
                Bespoke <br /> Travel
              </h5>
              <p className="tracking-wider font-body text-tertiary/50 leading-loose">
                Curated itineraries and ground arrangements for international travel — built around your schedule, not ours.
              </p>
            </div>
          </div>
        </div>
<div className="p-8  bg-primary/25 relative flex flex-col gap-4 w-full before:absolute before:w-0 before:h-0.5 before:bg-primary before:top-0 before:left-0 before:duration-400 hover:before:w-full">
            <span className=" font-heading text-primary">06</span>
            <LuPackageOpen  className="text-primary text-5xl" />
            <h5 className="text-tertiary font-heading font-semibold text-4xl tracking-wide leading-relaxed">
              Same‑Day Courier
            </h5>
            <p className="text-lg tracking-wider font-body text-tertiary/50 leading-loose">
              Time‑critical and confidential delivery across the UK and Europe. Secure documents and high‑value consignments handled with discretion, precision, and direct hand confirmation.
            </p>
            <div>
              <button className="flex gap-4 items-center p-4 border border-primary/50 rounded-xl hover:bg-secondary/25 cursor-pointer curation-200 group">
                <span className="w-12 h-[1.5px] bg-primary rounded-full group-hover:w-20 duration-200"></span>
                <span className=" font-heading uppercase text-tertiary text-lg font-semibold tracking-widest">
                  Enquiries
                </span>
              </button>
            </div>
          </div>


        <div className="w-full flex max-sm:flex-wrap text-center">
          <div className="items-center w-1/4 max-sm:w-1/2 border border-primary/50 p-8 content-center">
            <h5 className="text-2xl font-bold font-heading text-primary">
              Private & Corporate Clients
            </h5> 
          </div>
          <div className="items-center w-1/4 max-sm:w-1/2 border border-primary/50 p-8 content-center">
            <h5 className="text-2xl font-bold font-heading text-primary">
             London & Surrounding Areas
            </h5>
          </div>
          <div className="items-center w-1/4 max-sm:w-1/2 border border-primary/50 p-8 content-center">
            <h5 className="text-2xl font-bold font-heading text-primary">
              By Arrangement
            </h5>
          </div>
          <div className="items-center w-1/4 max-sm:w-1/2 border border-primary/50 p-8 content-center">
            <h5 className="text-2xl font-bold font-heading text-primary">By Arrangement </h5>
          </div>
        </div>
      </section>
      <div className="w-screen flex max-lg:flex-col max-lg:text-center  gap-4 px-24 py-12 items-center font-extrabold text-6xl font-heading bg-tertiary justify-center">
        <span className="text-primary/50">Every Detail,</span>
        <span className="text-primary">Accounted For.</span>
        <div className="h-full flex items-center ml-8 border border-secondary rounded-xl">
          <button className="p-4 content-center w-56 h-14 text-center text-xl bg-transparent rounded-xl text-secondary text-semibold relative before:absolute before:w-full duration-200 hover:duration-200 before:duration-200 before:h-full before:translate-y-full hover:before:translate-y-0 overflow-hidden before:bg-secondary before:bottom-0 before:left-0 z-0 hover:text-primary cursor-pointer ">
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
              Make an enquiry
            </span>
          </button>
        </div>
      </div>
    </>
  );
}

export default OurServices;
