import React, { useEffect } from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

// Import partner logos
import ngamije from "../assets/partners/ngamije.png";
import naysuf from "../assets/partners/naysuf.png";
import bk from "../assets/partners/bk.png";
import ubuntu from "../assets/partners/ubuntu.png";
import cabinet from "../assets/partners/cabinet.png";

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <footer className="bg-[#1c1c1c] text-white py-12 mt-20 border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-5 gap-8 text-sm">
        {/* Branding */}
        <div className="md:col-span-1 space-y-2">
          <h3 className="text-xl font-bold text-white">Araunah Investment</h3>
          <p className="text-white">Castle of Chári 70</p>
          <p className="text-gray-400 italic text-sm">Where Vision Finds Ground</p>
        </div>

        {/* Links */}
        <div className="space-y-2">
          <h4 className="font-semibold text-white">Company</h4>
          <ul className="space-y-1 text-gray-400">
            <li>About Us</li>
            <li>Contact</li>
            <li>Team</li>
          </ul>
        </div>

        <div className="space-y-2">
          <h4 className="font-semibold text-white">Services</h4>
          <ul className="space-y-1 text-gray-400">
            <li>Short-Term Projects</li>
            <li>Medium-Term Projects</li>
            <li>Long-Term Projects</li>
          </ul>
        </div>

        <div className="space-y-2">
          <h4 className="font-semibold text-white">Resources</h4>
          <ul className="space-y-1 text-gray-400">
            <li>FAQs</li>
            <li>Support</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="space-y-2">
          <h4 className="font-semibold text-white">Contact</h4>
          <p className="text-gray-400">castleofchari70@gmail.com</p>
          <p className="text-gray-400">+250 785 252 742</p>
          <p className="text-gray-400">+250 789 523 821</p>
          <p className="text-gray-400">+250 780 561 174</p>
          <p className="text-gray-400">+250 785 921 213</p>
        </div>
      </div>

      {/* Partners Section */}
      <div className="mt-10 px-6 text-center" data-aos="fade-up">
        <h4 className="text-lg font-semibold text-white mb-4">Our Partners</h4>
        <div className="flex flex-wrap justify-center gap-6 items-center">
          <img src={ngamije} alt="Ngamije" className="h-16 object-contain" data-aos="fade-right" />
          <img src={naysuf} alt="NAYSUF" className="h-16 object-contain" data-aos="fade-up" />
          <img src={bk} alt="Bank of Kigali" className="h-16 object-contain" data-aos="fade-down" />
          <img src={ubuntu} alt="Ubuntu" className="h-16 object-contain" data-aos="fade-up" />
          <img src={cabinet} alt="Cabinet d’Avocat" className="h-16 object-contain" data-aos="fade-left" />
        </div>
      </div>

      {/* Social Icons + Copyright */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-500">
        <div className="flex justify-center space-x-4 mb-4">
          <FaFacebookF className="hover:text-[#f9b17a] cursor-pointer" />
          <FaTwitter className="hover:text-[#f9b17a] cursor-pointer" />
          <FaLinkedinIn className="hover:text-[#f9b17a] cursor-pointer" />
          <FaInstagram className="hover:text-[#f9b17a] cursor-pointer" />
        </div>
        <p className="text-xs">
          © {new Date().getFullYear()} Araunah Investment & Castle of Chári 70. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
