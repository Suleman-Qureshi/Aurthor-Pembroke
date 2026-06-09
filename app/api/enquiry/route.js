import { Resend } from "resend";
import { NextResponse } from "next/server";
import dns from "dns/promises";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const body = await req.json();
    const {
      FullName,
      Email,
      PhoneNo,
      Service,
      Date,
      Time,
      Collection_Address,
      Destination_Address,
      Additional_requirements,
      How_did_you_hear_about_us
    } = body;
    if (!Email) {
      return NextResponse.json(
        { success: false, error: "Email is required" },
        { status: 400 }
      );
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(Email)) {
      return NextResponse.json(
        { success: false, error: "Invalid email format" },
        { status: 400 }
      );
    }
    const domain = Email.split("@")[1];

    try {
      await dns.resolveMx(domain);
    } catch {
      return NextResponse.json(
        { success: false, error: "Email domain does not exist" },
        { status: 400 }
      );
    }
    await resend.emails.send({
      from: "Enquiries From ArthurPemBroke <onboarding@resend.dev>",
      reply_to: Email,
      to: ["enquiries@arthurpembroke.com"],
      // to: ["demn729999@gmail.com"],
      subject: `New Enquiry from ${FullName}`,
      html: `
        <h2>New Enquiry</h2>
        <p><strong>Name:</strong> ${FullName}</p>
        <p><strong>Email:</strong> ${Email}</p>
        <p><strong>Phone:</strong> ${PhoneNo}</p>
        <p><strong>Service:</strong> ${Service}</p>
        <p><strong>Date:</strong> ${Date}</p>
        <p><strong>Time:</strong> ${Time}</p>
        <p><strong>Collection:</strong> ${Collection_Address || "N/A"}</p>
        <p><strong>Destination:</strong> ${Destination_Address || "N/A"}</p>
        <p><strong>Additional Info:</strong> ${Additional_requirements || "N/A"}</p>
        <p><strong>How did you hear about us Info:</strong> ${How_did_you_hear_about_us || "N/A"}</p>
      `,
    });

    return NextResponse.json({ success: true });

  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { success: false, error: "Email failed" },
      { status: 500 }
    );
  }
}