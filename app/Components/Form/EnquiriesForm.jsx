"use client";
import { redirect } from "next/navigation";
import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useState } from "react";
function EnquiriesForm() {
  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const dateRef = useRef(null);
  const timeRef = useRef(null);

  const openCalendar = () => {
    if (dateRef.current) {
      dateRef.current.showPicker();
      dateRef.current.focus();
    }
  };
  const openTimePicker = () => {
    if (timeRef.current) {
      timeRef.current.showPicker();
      timeRef.current.focus();
    }
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

const onSubmit = async (data) => {
  try {
    setLoading(true);

    const res = await fetch("/api/enquiry", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await res.json();

    if (!res.ok) {
      throw new Error(result.error || "Something went wrong");
    }

    setShowPopup(true);

  } catch (error) {
    console.log("Submit error:", error);
  } finally {
    setLoading(false);
  }
};
  return (
    <>
    {showPopup && (
  <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50 backdrop-blur-xs">
    <div className="bg-tertiary border border-primary  shadow-primary p-8 rounded-xl shadow-xl text-center max-w-md w-full">
      <h2 className="text-2xl font-semibold mb-4 text-green-600">
        ✅ Enquiry Sent Successfully!
      </h2>

      <p className="text-gray-600 mb-6">
       Thank you for choosing Author Pembroke. We’ll be in touch shortly.⭐
      </p>

      <button
        onClick={() => {
          setShowPopup(false);
          router.replace("/");
        }}
        className="bg-primary text-secondary font-body px-6 py-2 rounded-lg cursor-pointer"
      >
        Go To Home
      </button>
    </div>
  </div>
)}
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <div className="flex gap-2 items-center">
          <span className="text-xs tracking-[0.3rem] uppercase text-primary/70 w-60 max-md:w-80 max-sm:w-96">
            Personal details
          </span>
          <span className="h-[0.5px] w-full bg-primary/70"></span>
        </div>
      </div>
      <div className="flex gap-8 max-md:flex-col items-center">
        <div className="flex flex-col gap-2 w-full">
          <label
            htmlFor="fullname"
            className="uppercase text-primary tracking-widest text-sm"
          >
            Full name{" "}
            <sup className=" text-tertiary tracking-widest font-extralight pl-4">
              {errors.FullName && <span>{errors.FullName.message}</span>}
            </sup>{" "}
          </label>
          <input
            type="text"
            className="text-tertiary border-b border-primary/50 focus:border-primary outline-none p-2 text-sm tracking-widest"
            placeholder="Enter Your Full Name"
            {...register("FullName", { required: "Required" })}
          />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label
            htmlFor="email"
            className="uppercase text-primary tracking-widest text-sm"
          >
            email{" "}
            <sup className=" text-tertiary tracking-widest font-extralight pl-4">
              {errors.Email && <span>{errors.Email.message}</span>}
            </sup>
          </label>
          <input
            type="email"
            className="text-tertiary border-b  outline-none border-primary/50 focus:border-primary p-2 text-sm tracking-widest"
            placeholder="your@emai.com"
            {...register("Email", { required: "Required",pattern: {value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,message:'invalid email address',}, },)}
          />
        </div>
      </div>
      <div className="flex flex-col gap-2 w-full">
        <label
          htmlFor="contact"
          className="uppercase text-primary tracking-widest text-sm"
        >
          Contact Number{" "}
          <sup className=" text-tertiary tracking-widest font-extralight pl-4">
            {errors.PhoneNo && <span>{errors.PhoneNo.message}</span>}
          </sup>
        </label>
        <input
          type="number"
          className="text-tertiary border-b border-primary/50 focus:border-primary outline-none p-2 text-sm tracking-widest [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
          placeholder="+00 123 4567789"
          {...register("PhoneNo", { required: "Required" })}
        />
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex gap-2 items-center">
          <span className="text-xs tracking-[0.3rem] uppercase text-primary/70 w-60 max-md:w-80">
            Service details
          </span>
          <span className="h-[0.5px] w-full bg-primary/70"></span>
        </div>
      </div>
      <div className="flex flex-col gap-8">
        <label
          htmlFor="serviceRequired"
          className="uppercase text-primary tracking-widest text-sm"
        >
          Service Required{" "}
          <sup className=" text-tertiary tracking-widest font-extralight pl-4">
            {errors.Service && <span>{errors.Service.message}</span>}
          </sup>
        </label>
        <select
          name=""
          id=""
          className="border-b bg-secondary border-primary/50 focus:border-primary outline-none cursor-pointer text-tertiary p-2 text-sm tracking-widest"
          {...register("Service", { required: "Required" })}
        >
          <option value="Select service " className="text-tertiary/40">
            Select a Service
          </option>
          <option value="Chauffeur Services">Chauffeur Services</option>
          <option value="Airport Transfer">Airport Transfer</option>
          <option value="Same-Day Courier">Same-Day Courier</option>
          <option value="Private Concierge">Private Concierge</option>
          <option value="Corporate / Excutive Services">
            Corporate / Excutive Services{" "}
          </option>
          <option value="Other">Other </option>
        </select>
        <div className="flex gap-8 max-md:flex-col items-center">
          <div className="flex flex-col gap-4 w-full ">
            <label
              htmlFor="date"
              className="uppercase text-primary tracking-widest text-sm"
            >
              Date Required{" "}
              <sup className=" text-tertiary tracking-widest font-extralight pl-4">
                {errors.Date && <span>{errors.Date.message}</span>}
              </sup>
            </label>
            <div
              onClick={openCalendar}
              className="relative w-full cursor-pointer"
            >
              <input
                type="date"
                {...register("Date", { required: "Required" })}
                ref={(e) => {
                  register("Date").ref(e);
                  dateRef.current = e;
                }}
                className="w-full bg-secondary text-white  border-b border-primary/50 focus:border-primary outline-none p-3 pr-10 appearance-none cursor-pointer"
              />

              {/* Custom Icon */}
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-yellow-500 pointer-events-none"></span>
            </div>
          </div>
          <div className="flex flex-col gap-4 w-full ">
            <label
              htmlFor="time"
              className="uppercase text-primary tracking-widest text-sm"
            >
              Time Required{" "}
              <sup className=" text-tertiary tracking-widest font-extralight pl-4">
                {errors.Time && <span>{errors.Time.message}</span>}
              </sup>
            </label>
            <div
              onClick={openTimePicker}
              className="relative w-full cursor-pointer"
            >
              <input
                type="time"
                {...register("Time", { required: "Required" })}
                ref={(e) => {
                  register("Time").ref(e);
                  timeRef.current = e;
                }}
                className="w-full bg-secondary outline-none text-tertiary border-b border-primary/50 focus:border-primary p-3 pr-10 appearance-none cursor-pointer"
              />

              {/* Custom Clock Icon */}
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-yellow-500 pointer-events-none"></span>
            </div>
          </div>
        </div>
        <div className="flex items-center max-md:flex-col gap-8">
          <div className="flex flex-col gap-4 w-full">
            <label
              htmlFor="collectionAddress"
              className="uppercase text-primary tracking-widest text-sm"
            >
              Collection Address{" "}
              <sup className=" text-tertiary tracking-widest font-extralight pl-4">
                optional
              </sup>
            </label>
            <input
              type="text"
              className="text-tertiary border-b  outline-none border-primary/50 focus:border-primary p-2 text-sm tracking-widest"
              placeholder="Collection point"
              {...register("Collection_Address")}
            />
          </div>
          <div className="flex flex-col gap-4 w-full">
            <label
              htmlFor="destinationAddress"
              className="uppercase text-primary tracking-widest text-sm"
            >
              Destination Address{" "}
              <sup className=" text-tertiary tracking-widest font-extralight pl-4">
                Optional
              </sup>
            </label>
            <input
              type="text"
              placeholder="Destination"
              className="text-tertiary border-b  outline-none border-primary/50 focus:border-primary p-2 text-sm tracking-widest"
              {...register("Destination_Address")}
            />
          </div>
        </div>
        <div className="flex flex-col gap-4 w-full">
          <label
            htmlFor="numberOfPassanger"
            className="uppercase text-primary tracking-widest text-sm"
          >
            Number Of passanger/Items{" "}
          </label>
          <input
            type="text"
            className="text-tertiary border-b  outline-none border-primary/50 focus:border-primary p-2 text-sm tracking-widest"
            placeholder="e.g 2 passanger, 3 items"
            {...register("Number_of_passanger/Items")}
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex gap-2 items-center">
          <span className="text-xs tracking-[0.3rem] uppercase text-primary/70 w-96 max-md:w-[60rem]">
            Additional information
          </span>
          <span className="h-[0.5px] w-full bg-primary/70"></span>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <label
          htmlFor="numberOfPassanger"
          className="uppercase text-primary tracking-widest text-sm"
        >
          Additional Requirements{" "}
        </label>
        <input
          type="text"
          className="p-2 text-tertiary border border-primary/50 focus:border-primary outline-none"
          placeholder="Please include any flight details, waiting time, lauggage requirements, courior instruction, confidentity request, or additional information"
          {...register("Additional_requirements")}
        />
      </div>
      <div className="flex flex-col gap-4">
        <label
          htmlFor="howDidYouHearAboutUs"
          className="uppercase text-primary tracking-widest text-sm"
        >
          How did you hear about us?{" "}
        </label>
        <select
          name=""
          id=""
          className="border-b bg-secondary border-primary/50 focus:border-primary outline-none cursor-pointer text-tertiary p-2 text-sm tracking-widest"
          {...register("How_did_you_hear_about_us")}
        >
          <option value="Select service " className="text-tertiary/40" >
            Select an option
          </option>
          <option value="Recommendation">Recommendation</option>
          <option value="Existing Client">Existing Client</option>
          <option value="Website">Website</option>
          <option value="Corporate Referral">Corporate Referral</option>
          <option value="Other">Other </option>
        </select>
      </div>
      <div className="w-full flex items-center justify-between max-md:flex-col gap-4 max-md:text-center">
        <div className="w-96 text-sm text-tertiary/70 font-light tracking-widest">
          Your enquiry will be reviewed and responded to within the hour during
          office hours.
        </div>
        <button
          type="submit"
          className="bg-primary w-70 uppercase font-heading tracking-[0.2rem] text-sm py-2 text-secondary cursor-pointer"
        >
          Submit Enquiry
        </button>
      </div>
    </form>
    </>
  );
}

export default EnquiriesForm;
