import React from "react";
import bugesera1 from "../assets/images/bugesera1.jpeg";
import cyovu1 from "../assets/images/cyovu1.jpeg";
import kimironko from "../assets/images/kimironko.jpeg";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const projects = [
  {
    id: 1,
    name: "Bugesera",
    image: bugesera1,
    caption: "2Km from Bugesera Airport in construction.",
    landmark: "2Km from Bugesera airport",
    zoning: "R2",
    size: "1ha",
    cost: "$72k",
    roi: "$120k to $180k / 18–36 months",
  },
  {
    id: 2,
    name: "Kiyovu",
    image: cyovu1,
    caption: "CDB (Center Business District)",
    landmark: "2 Km from City of Kigali",
    zoning: "CM1",
    size: "961M² (3 plots)",
    cost: "$118k",
    roi: "$195k to $233k / 18–24 months",
  },
  {
    id: 3,
    name: "Kimironko - Bibare",
    image: kimironko,
    caption: "200m from Kimironko market.",
    landmark: "200m from Kimironko market",
    zoning: "R1",
    size: "1085M² (3 plots)",
    cost: "$153k",
    roi: "$215k to $250k / 18–24 months",
  },
];

const MediumTermProjectsPage = () => {
  return (
    <div className="pt-24 pb-16 px-4 md:px-20 bg-[#dfd6d6] text-[#2d3250]">
      <h1 className="text-4xl text-center font-bold mb-16" data-aos="fade-up">
        Medium-Term ROI
      </h1>

      <div className="space-y-20">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="bg-white rounded-2xl shadow-lg p-6 md:p-10 border border-gray-100"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <h2 className="text-2xl font-bold mb-4">{project.name}</h2>

            <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-md mb-6">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute bottom-0 w-full bg-black/50 text-white text-sm p-2">
                {project.caption}
              </div>
            </div>

            <div className="space-y-2 text-base">
              <p><strong>Landmark:</strong> {project.landmark}</p>
              <p><strong>Zoning:</strong> {project.zoning}</p>
              <p><strong>Size:</strong> {project.size}</p>
              <p><strong>Cost:</strong> {project.cost}</p>
              <p className="font-bold text-green-600">
                <strong>Return on Investment:</strong> {project.roi}
              </p>
            </div>

            <div className="mt-6 flex gap-4 flex-wrap">
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

export default MediumTermProjectsPage;
