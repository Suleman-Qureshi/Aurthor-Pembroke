import React from "react";
import EnquiriesForm from "../Components/Form/EnquiriesForm";
import NavBar from "../Components/Header/NavBar";
function page() {
  return (
    <>
      <NavBar />
      <section className="w-screen bg-secondary min-h-screen flex flex-col p-24 pt-32 max-md:p-4">
        <div className="flex flex-col gap-4">
          <span className="text-primary uppercase tracking-[0.3rem] text-xs max-sm:text-[10px]">
            Arthur Pembroke · Luxury Concierge
          </span>
          <h1 className="flex gap-2 max-md:flex-col text-5xl text-white font-heading">
            <span>Make an</span>
            <i className="text-primary">Enquiry</i>
          </h1>
          <p className="text-tertiary font-body tracking-wide font-light">
            All enquiries are handled with the utmost discretion and
            confidentiality.
          </p>
          <span className="h-0.5 w-24 bg-primary my-8"></span>
        </div>
        <EnquiriesForm />
      </section>
    </>
  );
}

export default page;
