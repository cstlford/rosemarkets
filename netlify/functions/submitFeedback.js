import nodemailer from "nodemailer";

export const handler = async (event, context) => {
  const { name, email, location, preferences, rating } = JSON.parse(event.body);

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
    New Feedback Form Submission

    Name: ${name}
    Email: ${email}
    Location: ${location}
    Message: ${preferences}
    Rating: ${rating}
    `;

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: "New Feedback Form Submission",
      text: emailContent,
    });

    return { statusCode: 200, body: JSON.stringify({ success: true }) };
  } catch (err) {
    console.error("Error sending email:", err);
    return { statusCode: 500, body: JSON.stringify({ success: false }) };
  }
};
