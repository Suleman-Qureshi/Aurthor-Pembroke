import { Resend } from "resend";
import { NextResponse } from "next/server";

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
    } = body;

    const data = await resend.emails.send({
      from: `AuthorPemBroke ${Email} <onboarding@resend.dev>`,
      to: ["demn729999@gmail.com"],
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