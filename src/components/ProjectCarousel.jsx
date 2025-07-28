import React, { useState } from "react";

const ProjectCarousel = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const next = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentSlide = slides[currentIndex];

  return (
    <div className="relative w-full h-72 overflow-hidden rounded-xl shadow-lg">
      <img
        src={currentSlide.image}
        alt=""
        className="w-full h-full object-cover transition-all duration-500"
      />
      <div className="absolute bottom-0 bg-black bg-opacity-50 text-white w-full p-2 text-center text-sm">
        {currentSlide.caption}
      </div>
      <button
        onClick={prev}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-70 px-3 py-1 rounded-full text-xl"
      >
        ‹
      </button>
      <button
        onClick={next}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-70 px-3 py-1 rounded-full text-xl"
      >
        ›
      </button>
    </div>
  );
};

export default ProjectCarousel;
