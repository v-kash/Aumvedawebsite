import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    console.log(body);

    const { name, email, phone, subject, message } = body;

    if (!name || !email || !message) {
      return Response.json({ error: "Missing fields" }, { status: 400 });
    }

    // transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // email to YOU (receiver)
    await transporter.sendMail({
      from: `"Aumveda Website" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `🌿 New Inquiry from ${name}`,
      html: `
  <div style="font-family: Arial, sans-serif; background:#f4f7f4; padding:20px;">
    <div style="max-width:600px; margin:auto; background:#ffffff; border-radius:10px; overflow:hidden; box-shadow:0 5px 20px rgba(0,0,0,0.05);">
      
      <!-- Header -->
      <div style="background:#5a7a4a; padding:20px; text-align:center; color:#ffffff;">
        <h2 style="margin:0; font-weight:500;">Aumveda Wellness</h2>
        <p style="margin:5px 0 0; font-size:13px;">New Contact Inquiry</p>
      </div>

      <!-- Content -->
      <div style="padding:25px;">
        <p style="margin-bottom:15px; color:#333;">You have received a new message:</p>

        <table style="width:100%; border-collapse:collapse;">
          <tr>
            <td style="padding:10px; border-bottom:1px solid #eee;"><b>Name</b></td>
            <td style="padding:10px; border-bottom:1px solid #eee;">${name}</td>
          </tr>
          <tr>
            <td style="padding:10px; border-bottom:1px solid #eee;"><b>Email</b></td>
            <td style="padding:10px; border-bottom:1px solid #eee;">${email}</td>
          </tr>
          <tr>
            <td style="padding:10px; border-bottom:1px solid #eee;"><b>Phone</b></td>
            <td style="padding:10px; border-bottom:1px solid #eee;">${phone || "-"}</td>
          </tr>
          <tr>
            <td style="padding:10px;"><b>Message</b></td>
            <td style="padding:10px;">${message}</td>
          </tr>
        </table>
      </div>

      <!-- Footer -->
      <div style="background:#f1f5f1; padding:15px; text-align:center; font-size:12px; color:#777;">
        This message was sent from your website contact form.
      </div>

    </div>
  </div>
  `,
    });

    // auto reply to USER
    await transporter.sendMail({
      from: `"Aumveda Wellness 🌿" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "We’ve received your message | Aumveda Wellness",
      html: `
  <div style="font-family: Arial, sans-serif; background:#eef5ef; padding:20px;">
    <div style="max-width:600px; margin:auto; background:#ffffff; border-radius:10px; overflow:hidden; box-shadow:0 5px 20px rgba(0,0,0,0.05);">

      <!-- Header -->
      <div style="background:#5a7a4a; padding:25px; text-align:center; color:#ffffff;">
        <h2 style="margin:0; font-weight:500;">Aumveda Wellness</h2>
        <p style="margin-top:8px; font-size:13px;">Natural • Herbal • Balanced Living</p>
      </div>

      <!-- Body -->
      <div style="padding:30px; color:#333;">
        <p style="font-size:16px;">Hi <b>${name}</b>,</p>

        <p style="margin-top:15px; line-height:1.6;">
          Thank you for reaching out to <b>Aumveda Wellness</b>.  
          We truly appreciate your interest in our natural and Ayurvedic solutions.
        </p>

        <p style="margin-top:15px; line-height:1.6;">
          Our team has received your message and will get back to you within 
          <b>24 hours</b>.
        </p>

        <div style="margin:25px 0; padding:15px; background:#f4f7f4; border-left:4px solid #5a7a4a;">
          <p style="margin:0; font-size:14px;">
            🌿 We’re committed to helping you achieve a healthier, more balanced lifestyle through nature.
          </p>
        </div>

        <p style="margin-top:20px;">
          Warm regards,<br/>
          <b>Team Aumveda</b>
        </p>
      </div>

      <!-- Footer -->
      <div style="background:#f1f5f1; padding:15px; text-align:center; font-size:12px; color:#777;">
        © ${new Date().getFullYear()} Aumveda Wellness • All rights reserved
      </div>

    </div>
  </div>
  `,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.log(error);
    return Response.json({ error: "Email failed" }, { status: 500 });
  }
}
