// 1. ContactSection.jsx
import React, { forwardRef } from "react";

const ContactSection = forwardRef((props, ref) => {
  return (
    <section
      ref={ref}
      className="bg-[#dfd6d6] text-[#2d3250] py-20 px-6 md:px-20"
      data-aos="fade-up"
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 text-[#2d3250]">Get in Touch</h2>
        <p className="text-gray-700 mb-12">
          Have a question, investment inquiry? Fill out the form and our team will respond shortly.
        </p>

        <form className="space-y-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-3 rounded bg-white text-[#2d3250] border border-gray-400 focus:outline-none"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-3 rounded bg-white text-[#2d3250] border border-gray-400 focus:outline-none"
            required
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            className="w-full px-4 py-3 rounded bg-white text-[#2d3250] border border-gray-400 focus:outline-none"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-[#f9b17a] text-black px-6 py-3 rounded-full font-semibold hover:bg-[#e0a05e] transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
});

export default ContactSection;
