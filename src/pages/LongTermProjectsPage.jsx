import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// 🖼️ Image imports – make sure these exist in src/assets/images/
import nyarutarama1 from "../assets/images/nyarutarama1.jpeg";
import nyarutarama2 from "../assets/images/nyarutarama2.jpeg";
import nyarutarama3 from "../assets/images/nyarutarama3.jpeg";
import nyarutarama4 from "../assets/images/nyarutarama4.jpeg";
import nyarutarama5 from "../assets/images/nyarutarama5.jpeg";
import nyarutarama6 from "../assets/images/nyarutarama6.jpeg";
import nyarutarama7 from "../assets/images/nyarutarama7.jpeg";
import nyarutarama8 from "../assets/images/nyarutarama8.jpeg";
import nyarutarama9 from "../assets/images/nyarutarama9.jpeg";

AOS.init();

const projects = [
  {
    id: 1,
    name: "Nyarutarama Golf (Opulent)",
    image: nyarutarama1,
    caption: "Right at the Golf - Opulent Villa (2 Bedrooms)",
    landmark: "Right at the Golf",
    zoning: "Villa (2 Bedrooms)",
    size: "141 Sqm",
    cost: "$X",
    roi: "10 to 15 years",
  },
  {
    id: 2,
    name: "Nyarutarama (Happy Soul)",
    image: nyarutarama2,
    caption: "Bordering the Golf - Apartment or Penthouse",
    landmark: "Bordering the Golf",
    zoning: "Penthouse (5 Bedrooms)",
    size: "338–426 Sqm",
    cost: "$550k to $650k",
    roi: "10 to 15 years",
  },
  {
    id: 3,
    name: "Nyarutarama (Royal Golf)",
    image: nyarutarama3,
    caption: "Exclusive luxury property near the Golf",
    landmark: "Bordering the Golf",
    zoning: "Penthouse (5 Bedrooms)",
    size: "400 Sqm",
    cost: "$750k",
    roi: "10 to 15 years",
  },
  {
    id: 4,
    name: "Kinyinya Ridge (Green Heights)",
    image: nyarutarama4,
    caption: "Hilltop project with lush surroundings",
    landmark: "Kinyinya Hilltop",
    zoning: "Residential",
    size: "1200 Sqm",
    cost: "$270k",
    roi: "8 to 12 years",
  },
  {
    id: 5,
    name: "Kinyinya Golf View",
    image: nyarutarama5,
    caption: "View of new Kigali golf development",
    landmark: "Near new Golf Course",
    zoning: "R1",
    size: "800 Sqm",
    cost: "$160k",
    roi: "7 to 10 years",
  },
  {
    id: 6,
    name: "Kibagabaga Corner",
    image: nyarutarama6,
    caption: "Overlooking the city skyline",
    landmark: "Kibagabaga Heights",
    zoning: "Mixed Use",
    size: "1050 Sqm",
    cost: "$230k",
    roi: "10 years",
  },
  {
    id: 7,
    name: "Rebero Hillside",
    image: nyarutarama7,
    caption: "Hillside plots facing the city",
    landmark: "Rebero Slopes",
    zoning: "R1",
    size: "750 Sqm",
    cost: "$140k",
    roi: "9 years",
  },
  {
    id: 8,
    name: "Vision City (Upper Blocks)",
    image: nyarutarama8,
    caption: "Modern villas and townhouses",
    landmark: "Vision City Zone B",
    zoning: "Townhouse",
    size: "1100 Sqm",
    cost: "$350k",
    roi: "12 years",
  },
  {
    id: 9,
    name: "Gacuriro Luxury Zone",
    image: nyarutarama9,
    caption: "Premium land in developed zone",
    landmark: "Gacuriro",
    zoning: "Luxury Residential",
    size: "1300 Sqm",
    cost: "$390k",
    roi: "10–15 years",
  },
];

const LongTermProjectsPage = () => {
  return (
    <div className="pt-24 pb-16 px-4 md:px-20 bg-white text-[#2d3250]">
      <h1 className="text-4xl text-center font-bold mb-16" data-aos="fade-up">
        Long-Term ROI
      </h1>

      <div className="space-y-20">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="rounded-xl overflow-hidden shadow-xl bg-[#f4f4f4]"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            {/* Image Block */}
            <div className="relative">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 bg-black/50 text-white text-sm p-4 w-full">
                {project.caption}
              </div>
            </div>

            {/* Info Block */}
            <div className="p-6 md:p-8 space-y-2 text-sm md:text-base">
              <h2 className="text-2xl font-semibold">{project.name}</h2>
              <p><strong>Landmark:</strong> {project.landmark}</p>
              <p><strong>Zoning:</strong> {project.zoning}</p>
              <p><strong>Size:</strong> {project.size}</p>
              <p><strong>Cost:</strong> {project.cost}</p>
              <p className="font-bold text-green-700">
                <strong>ROI:</strong> {project.roi}
              </p>

              <div className="mt-4 flex gap-4 flex-wrap">
                <a href="#contact">
                  <button className="bg-[#f9b17a] text-black px-6 py-2 rounded-full hover:bg-[#e0a05e] transition">
                    Get in Touch
                  </button>
                </a>
                <a
                  href="/"
                  className="px-6 py-2 border border-[#2d3250] text-[#2d3250] rounded-full hover:bg-[#f9b17a] hover:text-white transition"
                >
                  Back to Home
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LongTermProjectsPage;
