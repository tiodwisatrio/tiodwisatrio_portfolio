"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaPaperPlane,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaBriefcase,
  FaComment,
} from "react-icons/fa6";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({
          type: "success",
          message:
            "Thank you! Your message has been sent successfully. I'll get back to you soon!",
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
      } else {
        setStatus({
          type: "error",
          message: data.error || "Failed to send message. Please try again.",
        });
      }
    } catch (error) {
      setStatus({
        type: "error",
        message: "Network error. Please check your connection and try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-5 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple/10 rounded-full blur-[120px]" /> */}
      </div>

      <div className="relative z-10">
        <div className="flex flex-col items-center">
          <motion.h1
            className="heading lg:max-w-[45vw]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Ready to take <span className="text-purple">your</span> digital
            presence to the next level?
          </motion.h1>
          <motion.p
            className="text-white-200 md:mt-10 my-5 text-center max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Reach out to me today and let&apos;s discuss how I can help you
            achieve your goals.
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto mt-10 px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative rounded-3xl border border-white/[0.1] bg-black-100 backdrop-blur-xl overflow-hidden"
          >
            {/* Card gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple/5 via-transparent to-blue-500/5 pointer-events-none" />

            <div className="relative p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name and Email Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Name Field */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.3 }}
                  >
                    <label
                      htmlFor="name"
                      className="text-white mb-2 text-sm font-medium flex items-center gap-2"
                    >
                      {/* <FaUser className="text-purple" /> */}
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3.5 bg-black-200 border border-white/[0.1] rounded-xl text-white placeholder:text-white-200/50 focus:outline-none focus:border-purple focus:ring-2 focus:ring-purple/20 transition-all duration-300 hover:border-white/[0.2]"
                      placeholder="John Doe"
                    />
                  </motion.div>

                  {/* Email Field */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.3 }}
                  >
                    <label
                      htmlFor="email"
                      className="text-white mb-2 text-sm font-medium flex items-center gap-2"
                    >
                      {/* <FaEnvelope className="text-purple" /> */}
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3.5 bg-black-200 border border-white/[0.1] rounded-xl text-white placeholder:text-white-200/50 focus:outline-none focus:border-purple focus:ring-2 focus:ring-purple/20 transition-all duration-300 hover:border-white/[0.2]"
                      placeholder="john@example.com"
                    />
                  </motion.div>
                </div>

                {/* Phone and Service Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Phone Field */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.4 }}
                  >
                    <label
                      htmlFor="phone"
                      className="text-white mb-2 text-sm font-medium flex items-center gap-2"
                    >
                      {/* <FaPhone className="text-purple" /> */}
                      Phone/WhatsApp
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 bg-black-200 border border-white/[0.1] rounded-xl text-white placeholder:text-white-200/50 focus:outline-none focus:border-purple focus:ring-2 focus:ring-purple/20 transition-all duration-300 hover:border-white/[0.2]"
                      placeholder="+62 888 9720 6174"
                    />
                  </motion.div>

                  {/* Service Field */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.4 }}
                  >
                    <label
                      htmlFor="service"
                      className="text-white mb-2 text-sm font-medium flex items-center gap-2"
                    >
                      Service Interested
                    </label>
                    <div className="relative">
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 pr-12 bg-black-200 border border-white/[0.1] rounded-xl text-white focus:outline-none focus:border-purple focus:ring-2 focus:ring-purple/20 transition-all duration-300 hover:border-white/[0.2] [&>option]:bg-black-200 appearance-none cursor-pointer"
                      >
                        <option value="">Select a service</option>
                        <option value="Landing Page">Landing Page</option>
                        <option value="E-commerce Website">
                          E-commerce Website
                        </option>
                        <option value="Booking System">Booking System</option>
                        <option value="Custom Web Application">
                          Custom Web Application
                        </option>
                        <option value="UI/UX Design">UI/UX Design</option>
                        <option value="Website Consultation">
                          Website Consultation
                        </option>
                        <option value="Other">Other</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4">
                        <svg
                          className="h-5 w-5 text-white-200"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Message Field */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.5 }}
                >
                  <label
                    htmlFor="message"
                    className="text-white mb-2 text-sm font-medium flex items-center gap-2"
                  >
                    {/* <FaComment className="text-purple" /> */}
                    Your Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3.5 bg-black-200 border border-white/[0.1] rounded-xl text-white placeholder:text-white-200/50 focus:outline-none focus:border-purple focus:ring-2 focus:ring-purple/20 transition-all duration-300 resize-none hover:border-white/[0.2]"
                    placeholder="Tell me about your project, goals, and timeline..."
                  />
                </motion.div>

                {/* Status Message */}
                {status.type && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className={`p-4 rounded-xl backdrop-blur-sm ${
                      status.type === "success"
                        ? "bg-green-500/10 border border-green-500/30 text-green-400"
                        : "bg-red-500/10 border border-red-500/30 text-red-400"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      {status.type === "success" ? "✓" : "✕"}
                      <span>{status.message}</span>
                    </div>
                  </motion.div>
                )}

                {/* Submit Button */}
                <motion.div
                  className="flex justify-center pt-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.6 }}
                >
                  <button
                    type="submit"
                    disabled={loading}
                    className="relative inline-flex h-14 overflow-hidden rounded-xl p-[2px] focus:outline-none md:w-80 disabled:opacity-50 disabled:cursor-not-allowed group"
                  >
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)] group-hover:animate-[spin_1.5s_linear_infinite]" />
                    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-xl bg-slate-950 px-8 text-base font-medium text-white backdrop-blur-3xl gap-3 transition-all group-hover:bg-slate-900">
                      {loading ? (
                        <>
                          <svg
                            className="animate-spin h-5 w-5"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                              fill="none"
                            />
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            />
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </>
                      )}
                    </span>
                  </button>
                </motion.div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
