import nodemailer from "nodemailer";

export const handler = async (event, context) => {
  const { name, email, company, phone, solutions, message } = JSON.parse(
    event.body
  );

  const transporter = nodemailer.createTransport({
    host: "smtppro.zoho.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const emailContent = `
    Name: ${name}
    Email: ${email}
    Company: ${company}
    Phone: ${phone || "N/A"}
    Solutions Interested In: ${
      solutions.length > 0 ? solutions.join(", ") : "None"
    }
    Message: ${message || "None"}
  `;

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: "New Contact Form Submission",
      text: emailContent,
    });

    return { statusCode: 200, body: JSON.stringify({ success: true }) };
  } catch (err) {
    console.error("Error sending email:", err);
    return { statusCode: 500, body: JSON.stringify({ success: false }) };
  }
};
