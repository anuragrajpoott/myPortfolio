const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT || 587,
  secure: process.env.MAIL_SECURE === "true", // true for 465, false for other ports
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

exports.mailSender = async (email, subject, body) => {
  try {
    const info = await transporter.sendMail({
      from: `"Anurag Rajpoot" <${process.env.MAIL_USER}>`, // name and email
      to: email,
      subject,
      html: body,
    });
    return { success: true, info };
  } catch (error) {
    console.error("Mail sending failed:", error);
    return { success: false, error };
  }
};
