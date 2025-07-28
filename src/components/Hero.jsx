import React, { useState, useEffect } from "react";


import hero1 from "../assets/images/hero1.jpeg";
import hero2 from "../assets/images/hero2.jpeg";
import hero3 from "../assets/images/hero3.jpeg";
import hero4 from "../assets/images/hero4.jpeg";  

// Store image paths in array
const images = [hero1, hero2, hero3, hero4];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  // Cycle images every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-[#2d3250] text-white">
      {/* 🔁 Background Slideshow */}
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Hero background ${index}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* 🔳 Overlay + Content */}
      <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col">
        {/* 🔝 Navbar */}
       

        {/* ✍️ Centered Hero Text */}
        <div className="flex-grow flex items-center justify-center px-4 text-center">
          <div className="space-y-6 animate-fade">
            <h1 className="text-3xl md:text-5xl font-serif font-semibold text-white">
              Araunah Investment & Castle of Chári 70
            </h1>
            <p className="text-md md:text-xl font-serif text-[#f9b17a]">
              Exceptional Real Estate Opportunities Awaiting<br />
              in Rwanda’s Rising Market
            </p>

            {/* 🚀 CTA Button */}
            <a href="#contact">
              <button className="bg-[#f9b17a] text-black px-6 py-3 rounded-full hover:bg-[#e0a05e] transition font-semibold">
                Explore Our Projects
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
