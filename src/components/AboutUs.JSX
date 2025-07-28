import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="bg-[#dfd6d6] text-[#2d3250] py-20 px-6 md:px-20" id="about">
      <div className="max-w-5xl mx-auto text-center" data-aos="fade-up">
        <h2 className="text-4xl font-bold mb-8">About Us</h2>
        <p className="text-lg leading-relaxed text-gray-700">
          At <strong>Araunah Investment</strong> and <strong>Castle of Chári 70</strong>,
          we are dedicated to unlocking Rwanda’s real estate potential by providing strategic
          land investment opportunities. Our focus is on integrity, innovation, and sustainable development.
        </p>
        <p className="mt-6 text-gray-700">
          With a deep understanding of the Rwandan market and urban planning trends, we empower
          individuals and institutions to invest wisely and create generational wealth. Our projects
          are tailored to maximize returns while supporting Rwanda’s growth.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
