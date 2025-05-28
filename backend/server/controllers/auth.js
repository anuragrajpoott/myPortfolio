// server/controllers/contact.js

const Contact = require("../models/contact");
const { contactUsEmail } = require("../mailTemplate/contact");
const { mailSender } = require("../utils/mailSender");

exports.contact = async (req, res) => {
  try {
    const { fullName, email, message } = req.body;

    // Validate input
    if (!fullName || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields (fullName, email, message) are required.",
      });
    }

    // Save to DB
    const contactDetails = await Contact.create({ fullName, email, message });

    // Send confirmation to user
    const senderResponse = await mailSender(
      email,
      "Thanks for contacting me!",
      contactUsEmail(fullName, email, message)
    );

    // Notify owner
    const receiverResponse = await mailSender(
      "anuragrajpoot2468@gmail.com",
      "New Contact Message Received",
      `${fullName} (${email}) sent you a message:\n\n${message}`
    );

    return res.status(201).json({
      success: true,
      message: "Contact form submitted successfully.",
      contact: contactDetails,
      senderResponse,
      receiverResponse,
    });
  } catch (error) {
    console.error("❌ Contact error:", error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong while submitting the contact form.",
    });
  }
};
