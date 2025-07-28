import React from "react";
import { useNavigate } from "react-router-dom";
import shortTermImage from "../assets/images/like1.jpeg";
import mediumTermImage from "../assets/images/cyovu1.jpeg";
import longTermImage from "../assets/images/ntarutarama6.jpeg";



const categories = [
  {
    id: "short-term",
    title: "Short-Term ROI",
    description: "Quick ROI between 6–12 months",
    image: shortTermImage,
    route: "/short-term",
    delay: 0,
  },
  {
    id: "medium-term",
    title: "Medium-Term ROI",
    description: "Profitable investments within 18–36 months",
    image: mediumTermImage,
    route: "/medium-term",
    delay: 200,
  },
  {
    id: "long-term",
    title: "Long-Term ROI",
    description: "Major returns over 3 to 15 years",
    image: longTermImage,
    route: "/long-term",
    delay: 400,
  },
];

const FeaturedCategories = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 px-4 md:px-12 bg-[#dfd6d6]">
      <h2
        className="text-4xl md:text-5xl font-bold text-center text-white mb-16"
        data-aos="fade-up"
        data-aos-duration="800"
      >
        <span className="text-[#121213]">Our </span> Portfolio
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {categories.map((cat) => (
          <div
            key={cat.id}
            className="rounded-2xl overflow-hidden backdrop-blur-md bg-white/5 border border-white/10 shadow-xl hover:shadow-2xl transition transform hover:-translate-y-2"
            data-aos="fade-up"
            data-aos-delay={cat.delay}
            data-aos-duration="900"
          >
            <div className="overflow-hidden group h-48 w-full">
              <img
                src={cat.image}
                alt={cat.title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
              />
            </div>
            <div className="p-6 text-black
            ">
              <h3 className="text-2xl font-bold text-[#1f2121]">{cat.title}</h3>
              <p className="text-sm mt-2 opacity-80">{cat.description}</p>
              <button
                onClick={() => navigate(cat.route)}
                className="mt-5 px-5 py-2 rounded-full bg-[#5e707d8a] text-[#2d3250] font-semibold hover:bg-yellow-400 transition duration-300"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedCategories;
