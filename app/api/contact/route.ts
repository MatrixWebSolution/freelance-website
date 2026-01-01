import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Contact from "@/models/Contact";
import { transporter } from "@/lib/mailer";

export async function POST(req: Request) {
  try {
    // 1. Parse request body
    const { name, email, phone, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // 2. Connect to MongoDB
    await connectDB();

    // 3. Save message to database
    await Contact.create({
      name,
      email,
      phone,
      message,
    });

    // 4. Send email notification
    await transporter.sendMail({
      from: `"Website Contact" <${process.env.EMAIL_USER}>`,
      to: "matrixwebsolutions1@gmail.com",
      subject: "📩 New Contact Form Submission",
      html: `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "N/A"}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    // 5. Success response
    return NextResponse.json(
      { success: true, message: "Message sent successfully" },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("CONTACT API ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Failed to send message",
      },
      { status: 500 }
    );
  }
}
