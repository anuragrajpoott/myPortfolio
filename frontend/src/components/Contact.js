import React, { useState } from "react";
import { FaPhoneVolume, FaGithub, FaLinkedin } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { toast } from "react-hot-toast";
import { apiConnector } from "../services/apiConnecter";

const BASE_URL = "https://myportfolio-h5ry.onrender.com/api/v1";

const authEndPoints = {
  CONTACT_API: BASE_URL + "/auth/contact",
};

const contactData = [
  {
    icon: <FaPhoneVolume className="text-pink-500" />,
    title: "+91 7970233595",
  },
  {
    icon: <SiGmail className="text-pink-500" />,
    title: "anuragrajpoot2468@gmail.com",
  },
  {
    icon: <FaGithub className="text-pink-500" />,
    title: "github.com/anuragrajpoott",
    url: "https://github.com/anuragrajpoott",
  },
  {
    icon: <FaLinkedin className="text-pink-500" />,
    title: "linkedin.com/in/anuragrajpoott",
    url: "https://www.linkedin.com/in/anuragrajpoott",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const { fullName, email, message } = formData;

  const changeHandler = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const toastId = toast.loading("Sending message...");
    try {
      const response = await apiConnector(
        "POST",
        authEndPoints.CONTACT_API,
        formData
      );

      if (!response.data.success) {
        throw new Error(response.data.message);
      }

      toast.success("Message sent successfully!");
      setFormData({ fullName: "", email: "", message: "" });
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    }
    toast.dismiss(toastId);
  };

  return (
    <section
      id="contact"
      className="max-w-5xl mx-auto px-6 py-16 flex flex-col items-center gap-12"
    >
      <h2 className="text-5xl font-bold text-center mb-10">Get in Touch...</h2>

      <div className="flex flex-col md:flex-row gap-16 w-full justify-center items-start">
        {/* Contact Info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full md:w-1/2">
          {contactData.map(({ icon, title, url }, idx) => (
            <a
              key={idx}
              href={url || "#"}
              target={url ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 border-2 border-pink-500 rounded-md bg-black hover:bg-pink-900 transition-colors duration-300"
            >
              <div className="text-3xl">{icon}</div>
              <span className="text-lg break-all text-white">{title}</span>
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="hidden md:block w-px bg-pink-500 h-56 mx-6"></div>

        {/* Contact Form */}
        <form
          onSubmit={submitHandler}
          className="flex flex-col gap-6 w-full max-w-md border-2 border-pink-500 rounded-md p-8 bg-black"
        >
          <label className="flex flex-col gap-2">
            <span className="text-white font-semibold">Your Name</span>
            <input
              type="text"
              name="fullName"
              value={fullName}
              onChange={changeHandler}
              required
              placeholder="Enter your full name"
              className="form-style text-black p-3 rounded"
            />
          </label>

          <label className="flex flex-col gap-2">
            <span className="text-white font-semibold">Email</span>
            <input
              type="email"
              name="email"
              value={email}
              onChange={changeHandler}
              required
              placeholder="Enter your email"
              className="form-style text-black p-3 rounded"
            />
          </label>

          <label className="flex flex-col gap-2">
            <span className="text-white font-semibold">Message</span>
            <textarea
              name="message"
              value={message}
              onChange={changeHandler}
              required
              rows={5}
              placeholder="Write your message here..."
              className="form-style text-black p-3 rounded resize-none"
            />
          </label>

          <button
            type="submit"
            className="bg-pink-500 text-white font-semibold py-3 rounded-md hover:bg-pink-600 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
