import React from "react";
import like1 from "../assets/images/like1.jpeg";
import like2 from "../assets/images/like2.jpeg";
import like3 from "../assets/images/like3.jpeg";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const projectSlides = [
  { image: like1, caption: "Main access road and surroundings." },
  { image: like2, caption: "Nearby development zone and plots." },
  { image: like3, caption: "View of Kigali expansion near site." },
];

const projects = [
  {
    id: 1,
    name: "Masaka 1",
    landmark: "4 Km from Rwanda new health hub",
    zoning: "R1",
    size: "0.5ha (12 plots)",
    cost: "$80k",
    roi: "$97k to $125k / 6–12 months",
  },
  {
    id: 2,
    name: "Masaka 2",
    landmark: "4 Km from Rwanda new health hub",
    zoning: "R1",
    size: "1ha (24 plots)",
    cost: "$156k",
    roi: "$188k to $202k / 6–12 months",
  },
  {
    id: 3,
    name: "Masaka 3",
    landmark: "3 Km from Carnegie Mellon",
    zoning: "R1",
    size: "300 Sqm",
    cost: "$9k",
    roi: "$10.5k / 6 months",
  },
];

const ShortTermProjectsPage = () => {
  return (
    <div className="pt-24 pb-16 px-4 md:px-20 bg-[#dfd6d6] text-[#2d3250]">
      <h1
        className="text-4xl text-center font-bold mb-16"
        data-aos="fade-up"
      >
        Short-Term ROI
      </h1>

      <div className="space-y-20">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="bg-white text-black py-16 px-6 md:px-20 rounded-2xl shadow-lg"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <h2 className="text-2xl font-bold mb-4">{project.name}</h2>

            {/* Clean image display with fixed aspect ratio */}
            <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-md mb-6">
              <img
                src={projectSlides[index % projectSlides.length].image}
                alt="Project visual"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute bottom-0 w-full bg-black/50 text-white text-sm p-2">
                {projectSlides[index % projectSlides.length].caption}
              </div>
            </div>

            {/* Project Details */}
            <div className="space-y-2 text-base">
              <p><strong>Landmark:</strong> {project.landmark}</p>
              <p><strong>Zoning:</strong> {project.zoning}</p>
              <p><strong>Size:</strong> {project.size}</p>
              <p><strong>Cost:</strong> {project.cost}</p>
              <p className="font-bold text-green-600">
                <strong>Return on Investment:</strong> {project.roi}
              </p>
            </div>

            {/* Buttons */}
            <div className="mt-6 flex flex-wrap gap-4">
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
        ))}
      </div>
    </div>
  );
};

export default ShortTermProjectsPage;
