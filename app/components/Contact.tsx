"use client";

import DecorativeShapes from "./DecorativeShapes"
import ScrollReveal from "./ScrollReveal"
import { FormEvent, useState } from "react";
import { CheckCircle, Mail, Send } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setErrors({
      ...errors,
      [e.target.name]: "",
    });

    setSubmitted(false);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newErrors = {
      name: "",
      email: "",
      message: "",
    };

    if (formData.name.trim().length < 2) {
      newErrors.name = "Please enter your name.";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (formData.message.trim().length < 10) {
      newErrors.message = "Message should be at least 10 characters.";
    }

    setErrors(newErrors);

    if (newErrors.name || newErrors.email || newErrors.message) {
      return;
    }

    const subject = encodeURIComponent(
      `Portfolio Contact from ${formData.name}`
    );

    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    window.location.href = `mailto:muntaha.0136@gmail.com?subject=${subject}&body=${body}`;

setSubmitted(true);

setFormData({
  name: "",
  email: "",
  message: "",
});
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#FFF9F7] px-4 py-14 sm:px-6 sm:py-16 md:px-16 md:py-20"
    >
        <DecorativeShapes />
        <ScrollReveal>
      <div className="mx-auto max-w-4xl">
        {/* Section Heading */}
        <h2 className="text-center text-3xl font-serif text-[#29262A] sm:text-4xl md:text-5xl">
          Get In Touch
        </h2>

        {/* Decorative Line */}
        <div className="mx-auto mt-4 flex items-center justify-center gap-2 sm:gap-3">
          <span className="h-px w-12 bg-[#7F9477] sm:w-16"></span>
          <span className="text-[#E8A0B8]">✦</span>
          <span className="h-px w-12 bg-[#7F9477] sm:w-16"></span>
        </div>

        {/* Intro */}
        <p className="mx-auto mt-5 max-w-2xl text-center text-sm leading-7 text-[#29262A]/70 sm:text-base">
          Have a project in mind or want to connect? I&apos;d love to hear
          from you.
        </p>

        {/* Social Icons */}
        <div className="mt-7 flex items-center justify-center gap-4">
          {/* Email */}
          <a
            href="mailto:muntaha.0136@gmail.com"
            aria-label="Send me an email"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#7F9477]/30 bg-[#FFF9F7] text-[#29262A] transition duration-300 hover:-translate-y-1 hover:border-[#E8A0B8] hover:bg-[#F7DDE5]"
          >
            <Mail size={19} strokeWidth={1.8} />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/Sidra-0136"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit my GitHub profile"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#7F9477]/30 bg-[#FFF9F7] text-[#29262A] transition duration-300 hover:-translate-y-1 hover:border-[#E8A0B8] hover:bg-[#F7DDE5]"
          >
            <FaGithub size={19} />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/sidra-tul-muntaha-35853a421/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit my LinkedIn profile"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#7F9477]/30 bg-[#FFF9F7] text-[#29262A] transition duration-300 hover:-translate-y-1 hover:border-[#E8A0B8] hover:bg-[#F7DDE5]"
          >
            <FaLinkedinIn size={19} />
          </a>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-10 max-w-2xl rounded-2xl border border-[#7F9477]/30 bg-[#FBECEF] p-6 shadow-sm sm:p-8"
        >
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-sm font-medium text-[#29262A]"
            >
              Name
            </label>

            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              className="w-full rounded-xl border border-[#7F9477]/30 bg-white px-4 py-3 text-sm text-[#29262A] outline-none transition placeholder:text-[#29262A]/40 focus:border-[#7F9477] focus:ring-2 focus:ring-[#7F9477]/10"
            />

            {errors.name && (
              <p className="mt-1.5 text-xs text-red-500">{errors.name}</p>
            )}
          </div>

          {/* Email */}
          <div className="mt-5">
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-[#29262A]"
            >
              Email
            </label>

            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your@email.com"
              className="w-full rounded-xl border border-[#7F9477]/30 bg-white px-4 py-3 text-sm text-[#29262A] outline-none transition placeholder:text-[#29262A]/40 focus:border-[#7F9477] focus:ring-2 focus:ring-[#7F9477]/10"
            />

            {errors.email && (
              <p className="mt-1.5 text-xs text-red-500">{errors.email}</p>
            )}
          </div>

          {/* Message */}
          <div className="mt-5">
            <label
              htmlFor="message"
              className="mb-2 block text-sm font-medium text-[#29262A]"
            >
              Message
            </label>

            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me a little about your project..."
              rows={5}
              className="w-full resize-none rounded-xl border border-[#7F9477]/30 bg-white px-4 py-3 text-sm text-[#29262A] outline-none transition placeholder:text-[#29262A]/40 focus:border-[#7F9477] focus:ring-2 focus:ring-[#7F9477]/10"
            />

            {errors.message && (
              <p className="mt-1.5 text-xs text-red-500">
                {errors.message}
              </p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#7F9477] px-5 py-3 text-sm font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:opacity-90"
          >
            Send Message
            <Send size={16} />
          </button>

          {/* Success Message */}
          {submitted && (
            <div className="mt-4 flex items-center justify-center gap-2 text-sm text-[#7F9477]">
              <CheckCircle size={17} />
              <span>Your message is ready to send!</span>
            </div>
          )}
        </form>
     </div>
     </ScrollReveal>
    </section>
  );
}