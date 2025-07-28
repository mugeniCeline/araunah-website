import React from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';

const MottoMissionVision = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="bg-[#dfd6d6] text-black py-16 px-6 md:px-20">
      {/* Motto */}
     <div className="mb-12 text-center" data-aos="fade-up">
  <p className="text-3xl md:text-5xl font-light bold text-[#0c0e15]">
    Where Vision Finds Ground.
  </p>
</div>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Mission */}
        <div className="bg-[#42476g] rounded-lg p-8 shadow-lg" data-aos="fade-right">
          <h3 className="text-2xl font-semibold text-[#141414] mb-4">Our Mission</h3>
          <p className="text-black leading-relaxed">
            To offer reliable, strategic, and growth-focused real estate opportunities, empowering individuals and
            organizations to thrive in Rwanda’s evolving property market.
          </p>
        </div>

        {/* Vision */}
        <div className="bg-[#42476g] rounded-lg p-8 shadow-lg" data-aos="fade-left">
          <h3 className="text-2xl font-semibold text-[#151514] mb-4">Our Vision</h3>
          <p className="text-black leading-relaxed">
            To be the most trusted gateway for investment in Rwanda's real estate sector — where sustainability,
            innovation, and impact meet opportunity.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MottoMissionVision;
