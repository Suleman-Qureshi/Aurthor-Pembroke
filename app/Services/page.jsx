"use client";
import React from "react";
import { GoDotFill } from "react-icons/go";
import NavBar from "../Components/Header/NavBar";
import Footer from "../Components/Footer/Footer";
import SwiperSlider from "../Components/Slider/SwiperSlider";
import { HiOutlineDocumentDuplicate } from "react-icons/hi2";
import { FiClock } from "react-icons/fi";
import { GoDot } from "react-icons/go";
import { RiFileList2Line } from "react-icons/ri";
function page() {
  return (
    <>
      <NavBar />
      <section className="w-screen h-screen max-2xl:h-auto px-24 max-lg:px-12 max-lg:flex-col pb-8 max-md:px-4 pt-36 max-md:pt-18 flex max-md:text-center max-md:items-center">
        <div className="flex flex-col justify-between max-md:items-center gap-8 w-full pb-10">
          <div className="font-heading flex gap-6 uppercase tracking-[0.3rem] text-sm text-primary">
            <span>aurthor pembroke</span>
            <GoDotFill className="text-primary" />
            <span>what we offer</span>
          </div>
          <h1 className="flex font-heading flex-col gap-4 text-8xl max-xl:text-7xl font-medium">
            <span>Discretion.</span>

            <span
              className="text-transparent"
              style={{ WebkitTextStroke: "1.5px #C6A75E" }}
            >
              Precision.
            </span>
            <span className="text-primary italic">Excellence.</span>
          </h1>
          <span className=' mt-6 tracking-[0.3rem] text-slate-500 font-medium font-heading flex items-center gap-4 uppercase'><span className='w-12 h-[1.5px] bg-slate-500'></span>Est. London  ·  Private & Corporate</span>
        </div>
        <div className="h-full w-full flex flex-col gap-8 border-l border-primary ml-8 pl-8 max-lg:ml-0 max-md:items-center">
          <span className="font-heading flex gap-12 uppercase tracking-[0.3rem] text-sm text-primary">
            Our Promise
          </span>
          <p className="italic tracking-widest w-96 font-extralight">
            Bespoke Chauffeurur and concierge services for private and corporate
            clients who expect absolute reliability, discretion, and refinement.
          </p>
          <div className="w-full flex flex-col">
            <div className="border border-primary p-4 w-full flex max-md:flex-col items-center  gap-6 bg-white">
              <HiOutlineDocumentDuplicate className=" border border-primary p-2 text-primary w-12 h-12" />
              <div className="flex flex-col">
                <h5 className="font-heading tracking-[0.2rem] text-sm font-medium">
                  Chauffeurur & Transfer
                </h5>
                <p className="text-slate-500 font-light">
                  Executive airports · Corporate travel · Private itineraries
                </p>
              </div>
            </div>
            <div className="border border-primary p-4 w-full flex max-md:flex-col items-center gap-6 bg-white">
              <FiClock  className=" border border-primary p-2 text-primary w-12 h-12" />
              <div className="flex flex-col">
                <h5 className="font-heading tracking-[0.2rem] text-sm font-medium">
                  Same-Day Courier
                </h5>
                <p className="text-slate-500 font-light">
                  UK & Europe · Secure delivery · Hand-to-hand
                </p>
              </div>
            </div>
            <div className="border border-primary p-4 w-full flex max-md:flex-col items-center gap-6 bg-white">
              <RiFileList2Line className=" border border-primary p-2 text-primary w-12 h-12" />
              <div className="flex flex-col">
                <h5 className="font-heading tracking-[0.2rem] text-sm font-medium">
                  Private Concierge
                </h5>
                <p className="text-slate-500 font-light">
                  Reservations · Errands · Lifestyle support
                </p>
              </div>
            </div>
          </div>
          <div className="w-full flex items-center justify-between pt-8 border-t border-primary">
            <div className="flex flex-col">
              <span className="font-heading flex gap-12 uppercase tracking-[0.3rem] text-[0.60rem] text-primary">Availability</span>
              <p className="text-sm font-body">24 / 7 — 365 days</p>
            </div>
            <div className="">
              <button className="w-60 py-3 cursor-pointer bg-secondary font-light text-tertiary uppercase tracking-[0.3rem] text-xs">make an Enquiries</button>
            </div>
          </div>
        </div>
      </section>
      <SwiperSlider />
      <section className="w-screen h-auto flex flex-col max-sm:items-center   pt-12 bg-white">
        <div className="flex items-center justify-between px-24 max-lg:px-12 max-md:px-4 max-md:flex-col max-md:items-start">
          <div className="flex flex-col max-md:items-center max-md:w-full gap-4">
             <span className="font-heading tracking-[0.2rem] text-sm font-medium text-primary">
                What We Provide
                </span>
                <h2 className="text-7xl font-medium text-primary flex max-sm:flex-col items-center gap-2 font-heading">
                  <span className="text-secondary">Our</span>
                  <i>Services</i>
                </h2>
          </div>
                <p className="text-slate-400 tracking-wider w-80 max-md:w-full text-lg font-light max-md:mb-8">Arthur Pembroke provides bespoke Chauffeurur and concierge services to private and corporate clients who expect absolute reliability, discretion, and refinement.</p>
        </div>
        <div className="flex max-sm:flex-col border-t border-primary px-24 max-lg:px-12 max-md:px-0 w-full">
          <div className="w-1/2 max-sm:w-full p-8 border-x-[1px] max-sm:border-x-0 border-primary flex flex-col gap-8">
          <h2 className="text-3xl font-extralight text-primary flex items-center gap-2 font-body">
                  <span className="text-secondary">Chauffeurur</span>
                  <i>& Transfer</i>
                </h2>
                 <p className="text-slate-400 tracking-wider  font-light">Our Chauffeurur services are designed for clients who require more than transport. Each journey is carefully managed to ensure punctuality, comfort, and discretion.</p>
                 <div className="flex w-full flex-col">
                  <div className="flex flex-col gap-1 p-2 border-t-[1px] border-primary">
                    <h5 className="flex items-center gap-4">
                      <span className="text-primary">◆</span>
                      <span className="font-light">Executive Airport Transfers</span>
                    </h5>
                       <p className="text-slate-400 tracking-wider  font-light pl-7">First & Business Class collections, private terminal handling</p>
                  </div>
                  <div className="flex flex-col gap-1 p-2 border-t-[1px] border-primary">
                    <h5 className="flex items-center gap-4">
                      <span className="text-primary">◆</span>
                      <span className="font-light">Airport Coverage</span>
                    </h5>
                       <p className="text-slate-400 tracking-wider  font-light pl-7">Heathrow, Gatwick, Farnborough, Luton & Stansted with flight monitoring</p>
                  </div>
                  <div className="flex flex-col gap-1 p-2 border-y-[1px] border-primary">
                    <h5 className="flex items-center gap-4">
                      <span className="text-primary">◆</span>
                      <span className="font-light">Corporate Travel</span>
                    </h5>
                       <p className="text-slate-400 tracking-wider  font-light pl-7">Scheduled journeys and multi-city roadshow logistics</p>
                  </div>
                  <div className="flex flex-col gap-1 p-2 border-b-[1px] border-primary">
                    <h5 className="flex items-center gap-4">
                      <span className="text-primary">◆</span>
                      <span className="font-light">Private Itineraries</span>
                    </h5>
                       <p className="text-slate-400 tracking-wider  font-light pl-7">Bespoke routes managed entirely around your schedule</p>
                  </div>
                 </div>
          </div>
          <div className="w-1/2 max-sm:w-full p-8 flex flex-col gap-8">
           <span className="font-heading tracking-[0.2rem] text-sm font-medium text-primary">
               FLEET
                </span>
                       <p className="text-slate-400  font-light text-xl tracking-wider leading-relaxed font-heading">"Every journey handled with the care expected from a private firm."</p>
                       <div className=" flex items-center gap-4 flex-wrap">
                        <span className="px-4 py-1 border-[1px] border-primary text-primary text-sm font-light tracking-wider">Executive Vehicles</span>
                       </div>
                        <div className="w-full h-[0.5px] bg-primary"></div>
                       <span className="font-heading tracking-[0.2rem] text-sm font-medium text-primary ">
              Meet & Greet
                </span>
                <p className="text-slate-400  font-light text-xl tracking-wider leading-relaxed font-heading">"Punctual collection, nameboard, direct journey — no waiting, no uncertainty."</p>
                 <div className=" flex items-center gap-4 flex-wrap uppercase text-sm font-light tracking-wider text-primary">
                        <span className="px-4 py-1 border-[1px] border-primary ">Flight Monitored</span>
                        <span className="px-4 py-1 border-[1px] border-primary ">All Terminals</span>
                        <span className="px-4 py-1 border-[1px] border-primary ">All Hours</span>
                       </div>
          </div>
        </div>
        <div className="flex max-sm:flex-col border-t border-primary px-24 max-lg:px-12 max-md:px-4 w-full">
         <div className="w-1/2 max-sm:w-full max-sm:border-x-0 p-8 border-x-[1px] border-primary flex flex-col gap-8">
         <h2 className="text-3xl font-extralight text-primary flex items-center gap-2 font-body">
                  <span className="text-secondary">Same-Day  </span>
                  <i>Courier</i>
                </h2>
                <p className="text-slate-400 tracking-wider  font-light">Discreet same-day courier service for urgent, high-value, or time-sensitive items across the UK and throughout Europe.</p>
                <div className="flex w-full flex-col">
                  <div className="flex flex-col gap-1 p-2 border-t-[1px] border-primary">
                    <h5 className="flex items-center gap-4">
                      <span className="text-primary">◆</span>
                      <span className="font-light">Secure Document Delivery</span>
                    </h5>
                       <p className="text-slate-400 tracking-wider  font-light pl-7">Legal and corporate paperwork, contracts, sensitive materials</p>
                  </div>
                  <div className="flex flex-col gap-1 p-2 border-y-[1px] border-primary">
                    <h5 className="flex items-center gap-4">
                      <span className="text-primary">◆</span>
                      <span className="font-light">Direct Hand-Delivery</span>
                    </h5>
                       <p className="text-slate-400 tracking-wider  font-light pl-7">Hand-to-hand personal delivery with confirmation</p>
                  </div>
                  <div className="flex flex-col gap-1 p-2 border-b-[1px] border-primary">
                    <h5 className="flex items-center gap-4">
                      <span className="text-primary">◆</span>
                      <span className="font-light">Priority Collections</span>
                    </h5>
                       <p className="text-slate-400 tracking-wider  font-light pl-7">Urgent, high-value, or time-critical items</p>
                  </div>
                  <div className="flex flex-col gap-1 p-2 border-b-[1px] border-primary">
                    <h5 className="flex items-center gap-4">
                      <span className="text-primary">◆</span>
                      <span className="font-light">UK & Europe Coverage</span>
                    </h5>
                       <p className="text-slate-400 tracking-wider  font-light pl-7">Nationwide and cross-border delivery solutions</p>
                  </div>
                 </div>
         </div>
          <div className="w-1/2 max-sm:w-full p-8 flex flex-col gap-8">
           <span className="font-heading tracking-[0.2rem] text-sm font-medium text-primary">
               Nationwide and cross-border delivery solutions
                </span>
                       <p className="text-slate-400  font-light text-xl tracking-wider leading-relaxed font-heading">"A trusted presence, arranged personally and delivered with complete discretion."</p>
                       <div className=" flex items-center gap-4 flex-wrap uppercase text-sm font-light tracking-wider text-primary">
                        <span className="px-4 py-1 border-[1px] border-primary ">Private</span>
                        <span className="px-4 py-1 border-[1px] border-primary ">Confidential</span>
                        <span className="px-4 py-1 border-[1px] border-primary ">Personal</span>
                       </div>
                       <div className="w-full h-[0.5px] bg-primary"></div>
                       <span className="font-heading tracking-[0.2rem] text-sm font-medium text-primary ">
              Coverage
                </span>
                <p className="text-slate-400  font-light text-xl tracking-wider leading-relaxed font-heading">"All collections considered, regardless of distance, nature, or time of day."</p>
                 <div className=" flex items-center gap-4 flex-wrap uppercase text-sm font-light tracking-wider text-primary">
                        <span className="px-4 py-1 border-[1px] border-primary ">UK-Wide</span>
                        <span className="px-4 py-1 border-[1px] border-primary ">Europe</span>
                        <span className="px-4 py-1 border-[1px] border-primary ">24 / 7</span>
                       </div>

          </div>
        </div>
        <div className="flex max-sm:flex-col border-t border-primary px-24 max-lg:px-12 max-md:px-4 w-full">
         <div className="w-1/2 max-sm:w-full max-sm:border-x-0 p-8 border-x-[1px] border-primary flex flex-col gap-8">
         <h2 className="text-3xl font-extralight text-primary flex items-center gap-2 font-body">
                  <span className="text-secondary">Private  </span>
                  <i>Concierge</i>
                </h2>Quotation
                <p className="text-slate-400 tracking-wider  font-light">A discreet concierge offering for clients requiring trusted assistance beyond transport. Handled personally, without delegation to third parties.</p>
                <div className="flex w-full flex-col">
                  <div className="flex flex-col gap-1 p-2 border-t-[1px] border-primary">
                    <h5 className="flex items-center gap-4">
                      <span className="text-primary">◆</span>
                      <span className="font-light">Travel Coordination</span>
                    </h5>
                       <p className="text-slate-400 tracking-wider  font-light pl-7">End-to-end itinerary management and private logistics</p>
                  </div>
                  <div className="flex flex-col gap-1 p-2 border-y-[1px] border-primary">
                    <h5 className="flex items-center gap-4">
                      <span className="text-primary">◆</span>
                      <span className="font-light">Reservations</span>
                    </h5>
                       <p className="text-slate-400 tracking-wider  font-light pl-7">Restaurants, venues, and private member arrangements</p>
                  </div>
                  <div className="flex flex-col gap-1 p-2 border-b-[1px] border-primary">
                    <h5 className="flex items-center gap-4">
                      <span className="text-primary">◆</span>
                      <span className="font-light">Secure Deliveries & Errands</span>
                    </h5>
                       <p className="text-slate-400 tracking-wider  font-light pl-7">Discreet handling of personal and sensitive matters</p>
                  </div>
                  <div className="flex flex-col gap-1 p-2 border-b-[1px] border-primary">
                    <h5 className="flex items-center gap-4">
                      <span className="text-primary">◆</span>
                      <span className="font-light">Lifestyle Support</span>
                    </h5>
                       <p className="text-slate-400 tracking-wider  font-light pl-7">Personal assistance handled efficiently and confidentially</p>
                  </div>
                 </div>
         </div>
          <div className="w-1/2 max-sm:w-full p-8 flex flex-col gap-8">
           <span className="font-heading tracking-[0.2rem] text-sm font-medium text-primary">
               Corporate & Executive
                </span>
                       <p className="text-slate-400  font-light text-xl tracking-wider leading-relaxed font-heading">"Executive transport, ongoing arrangements, and discreet handling of sensitive business requirements."</p>
                       <div className=" flex items-center gap-4 flex-wrap uppercase text-sm font-light tracking-wider text-primary">
                        <span className="px-4 py-1 border-[1px] border-primary ">Executives</span>
                        <span className="px-4 py-1 border-[1px] border-primary ">Corporate Teams</span>
                        <span className="px-4 py-1 border-[1px] border-primary ">Events</span>
                       </div>
                       <div className="w-full h-[1px] bg-primary"></div>
                       <span className="font-heading tracking-[0.2rem] text-sm font-medium text-primary ">
              A Bespoke Approach
                </span>
                <p className="text-slate-400  font-light text-xl tracking-wider leading-relaxed font-heading">"No fixed packages or pricing — flexibility and precision for every client, every time."</p>
                 <div className=" flex items-center gap-4 flex-wrap uppercase text-sm font-light tracking-wider text-primary">
                        <span className="px-4 py-1 border-[1px] border-primary ">By Quotation</span>
                        <span className="px-4 py-1 border-[1px] border-primary ">Individually Arranged</span>
                       </div>

          </div>
        </div>
      </section>
      <section className="w-screen px-24 max-lg:px-12 max-md:px-4 py-12 bg-secondary flex-col ">
        <div className="flex justify-between max-md:flex-col max-md:justify-start max-md:items-center max-md:text-center">
          <div className="flex flex-col gap-4">
             <span className="font-heading tracking-[0.2rem] text-sm font-medium text-primary">
                Who We Serve
                </span>
                <h2 className="text-5xl text-primary flex max-lg:flex-col max-lg:items-start items-center gap-2 font-heading">
                  <span className="text-tertiary">Corporate &</span>
                  <i>Private Clients</i>
                </h2>
          </div>
                <p className="text-primary/30 tracking-wider w-96 max-lg:w-full font-light max-lg:mt-4">Many of our relationships are built through recommendation and maintained long term. We work with executives, corporate teams, international visitors, and private households.</p>
        </div>
        <div className="w-full flex items-center py-12 max-lg:flex-wrap">
          <div className="flex flex-col p-8 gap-8 group w-1/4 max-lg:w-1/2 max-md:w-full duration-200 max-lg:border-b max-lg:border-primary/30 max-md:border-t max-md:border-r">
            <span className="w-12 h-0.5 bg-primary rounded-full group-hover:w-full duration-200"></span>
            <div className="text-5xl font-body text-primary/15">01</div>
            <h5 className="text-tertiary font-heading relative before:absolute before:h-0.5 before:w-8 before:bg-primary before:-bottom-2 before:left-0">Executives</h5>
            <p className="text-primary/30">Senior leaders requiring consistent, discreet personal service across all travel and concierge needs.</p>
          </div>
          <div className="flex flex-col p-8 gap-8 group w-1/4 max-lg:w-1/2 max-md:w-full duration-200 border-x-[1px] max-lg:border-r-0 max-lg:border-b border-primary/30">
            <span className="w-12 h-0.5 bg-primary rounded-full group-hover:w-full duration-200"></span>
            <div className="text-5xl font-body text-primary/15">02</div>
            <h5 className="text-tertiary font-heading relative before:absolute before:h-0.5 before:w-8 before:bg-primary before:-bottom-2 before:left-0">Corporate Teams</h5>
            <p className="text-primary/30">Roadshows, client visits, and ongoing corporate travel managed with precision and reliability.</p>
          </div>
          <div className="flex flex-col p-8 gap-8 group w-1/4 max-lg:w-1/2 max-md:w-full duration-200 border-x-[1px] max-lg:border-l-0 border-primary/30">
            <span className="w-12 h-0.5 bg-primary rounded-full group-hover:w-full duration-200"></span>
            <div className="text-5xl font-body text-primary/15">03</div>
            <h5 className="text-tertiary font-heading relative before:absolute before:h-0.5 before:w-8 before:bg-primary before:-bottom-2 before:left-0">International Visitors</h5>
            <p className="text-primary/30">Arriving clients who expect a seamless, discreet welcome to London from first to final point.</p>
          </div>
          <div className="flex flex-col p-8 gap-8 group w-1/4 max-lg:w-1/2 max-md:w-full duration-200 max-lg:border-primary/30 max-md:border-y max-md:border-l">
            <span className="w-12 h-0.5 bg-primary rounded-full group-hover:w-full duration-200"></span>
            <div className="text-5xl font-body text-primary/15">04</div>
            <h5 className="text-tertiary font-heading relative before:absolute before:h-0.5 before:w-8 before:bg-primary before:-bottom-2 before:left-0">Private Households</h5>
            <p className="text-primary/30">Long-term relationships built quietly on trust, recommendation, and consistent delivery.</p>
          </div>
        </div>
      </section>
      <section className="w-screen px-24 py-12 flex gap-12 max-md:flex-col max-lg:px-12 max-md:px-4 max-xl:gap-8 max-md:text-center">
        <div className="w-1/2 max-md:w-full flex flex-col max-md:items-center gap-8">
        <span className="font-heading tracking-[0.2rem] text-sm font-medium text-primary">
                Who We Serve
                </span>
                <h2 className="flex flex-col max-md:flex-row max-sm:flex-col gap-1 text-6xl font-light font-heading"><span>Quiet.</span><i className="text-primary">Consistent.</i></h2>
                <span className="w-24 h-0.5 bg-primary rounded-full"></span>
                <p className="text-slate-400 tracking-wider font-light">We believe true luxury is quiet. There are no apps, no unnecessary processes — only consistent, reliable service delivered personally.</p>
                <p className="text-slate-400 tracking-wider font-light">We are intentionally selective in the work we undertake. This allows us to maintain a calm, unhurried service with direct communication.</p>
                <div className="flex max-lg:flex-col max-md:flex-row max-sm:flex-col max-lg:items-start gap-8 max-md:items-center items-center w-full">
                  <div className="flex flex-col gap-8 max:md:w-full">
                  <div className="w-80 max-xl:w-60  max-lg:w-full flex flex-col gap-2 max-md:items-center">
                    <GoDot className="text-primary" />
                    <h5 className="text-sm tracking-widest uppercase text-secondary">No platforms</h5>
                    <p className="text-slate-400 tracking-wider font-light text-sm">Direct, personal service. No apps or automated processes.</p>
                  </div>
                  <div className="w-80 max-xl:w-60 max-lg:w-full flex flex-col gap-2 max-md:items-center">
                    <GoDot className="text-primary" />
                    <h5 className="text-sm tracking-widest uppercase text-secondary">By arrangement</h5>
                    <p className="text-slate-400 tracking-wider font-light text-sm">Every service provided by quotation and personal agreement.</p>
                  </div>
                  </div>
                  <div className="flex flex-col gap-8">
                  <div className="w-80 max-xl:w-60 max-lg:w-full flex flex-col gap-2 max-md:items-center">
                    <GoDot className="text-primary" />
                    <h5 className="text-sm tracking-widest uppercase text-secondary">Discreet by default</h5>
                    <p className="text-slate-400 tracking-wider font-light text-sm">All work conducted with absolute confidentiality.</p>
                  </div>
                  <div className="w-80 max-xl:w-60 max-lg:w-full flex flex-col gap-2 max-md:items-center">
                    <GoDot className="text-primary" />
                    <h5 className="text-sm tracking-widest uppercase text-secondary">Recommendation basis</h5>
                    <p className="text-slate-400 tracking-wider font-light text-sm">Many relationships maintained without public promotion.</p>
                  </div>
                  </div>
                </div>
        </div>
        <div className="w-1/2 flex flex-col max-md:w-full">
        <div className="bg-secondary p-8 flex flex-col gap-8">
          <div className="text-2xl text-white font-body italic font-light leading-relaxed">"We operate to a standard rather than a volume. Every client is treated individually, every service is bespoke, and every detail matters."</div>
          <span className=' mt-6 tracking-[0.2rem] text-primary text-sm font-medium font-heading flex items-center gap-4 uppercase'><span className='w-12 h-[1.5px] bg-primary'></span> The Arthur Pembroke Standard</span>
        </div>
        <div className="p-8 bg-white flex flex-col gap-4">
          <span className="font-heading tracking-[0.2rem] text-sm font-medium text-primary">
                Independent & Private
                </span>
                    <p className="text-slate-400 tracking-wider font-light text-sm">Arthur Pembroke Luxury Concierge is an independent private concierge service operating without affiliation or endorsement.</p>
        </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default page;
